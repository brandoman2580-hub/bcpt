import { z } from 'zod';

export const CONTACT_FIELDS = ['name', 'email', 'phone', 'childAge', 'message'] as const;

export type ContactField = (typeof CONTACT_FIELDS)[number];

const SINGLE_LINE_CONTROL = /[\u0000-\u001F\u007F\u2028\u2029]/;
const MESSAGE_CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u2028\u2029]/;
const EMAIL_PATTERN =
  /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const ALLOWED_KEYS = new Set<string>([...CONTACT_FIELDS, 'contact_trap']);
const BLOCKED_KEYS = new Set(['__proto__', 'constructor', 'prototype']);

const GENERIC_FORM_ERROR = 'The form could not be submitted.';

const contactFormSchema = z
  .object({
    name: z
      .string({
        required_error: 'Please enter your name.',
        invalid_type_error: 'Please enter a valid name.',
      })
      .trim()
      .min(1, 'Please enter your name.')
      .max(100, 'Please use 100 characters or fewer.')
      .refine((value) => !SINGLE_LINE_CONTROL.test(value) && !/[<>]/.test(value), 'Please enter a valid name.')
      .refine((value) => /\p{L}|\p{N}/u.test(value), 'Please enter a valid name.'),
    email: z
      .string({
        required_error: 'Please enter your email address.',
        invalid_type_error: 'Please enter a valid email address.',
      })
      .trim()
      .max(254, 'Please enter a valid email address.')
      .refine((value) => EMAIL_PATTERN.test(value), 'Please enter a valid email address.'),
    phone: z
      .string({ invalid_type_error: 'Please enter a valid phone number.' })
      .trim()
      .max(30, 'Please enter a valid phone number.')
      .refine(
        (value) => value === '' || /^[0-9+().\-\s]{7,30}$/.test(value),
        'Please enter a valid phone number.',
      )
      .optional()
      .default(''),
    childAge: z
      .string({ invalid_type_error: 'Please enter a valid age.' })
      .trim()
      .max(40, 'Please use 40 characters or fewer.')
      .refine(
        (value) => value === '' || (!SINGLE_LINE_CONTROL.test(value) && !/[<>]/.test(value)),
        'Please enter a valid age.',
      )
      .optional()
      .default(''),
    message: z
      .string({
        required_error: 'Please enter a message.',
        invalid_type_error: 'Please enter a message.',
      })
      .trim()
      .min(10, 'Please enter at least 10 characters.')
      .max(2000, 'Please keep your message under 2000 characters.')
      .refine((value) => !MESSAGE_CONTROL.test(value), 'The message contains characters that cannot be sent.'),
    contact_trap: z.string().trim().max(200).optional().default(''),
  })
  .strict();

export type ContactMessage = Omit<z.infer<typeof contactFormSchema>, 'contact_trap'>;

export type ContactActionResult =
  | { ok: true }
  | {
      ok: false;
      error?: string;
      fieldErrors?: Partial<Record<ContactField, string>>;
    };

export type ParsedContactForm =
  | { status: 'bot' }
  | { status: 'invalid'; formError?: string; fieldErrors?: Partial<Record<ContactField, string>> }
  | { status: 'valid'; message: ContactMessage };

function isContactField(value: string): value is ContactField {
  return (CONTACT_FIELDS as readonly string[]).includes(value);
}

/**
 * Accepts only the public contact fields. Duplicate keys, files, and unknown
 * fields are rejected so a crafted request cannot add headers or recipients.
 */
export function parseContactForm(formData: FormData): ParsedContactForm {
  const raw: Record<string, string> = Object.create(null);

  for (const [key, value] of formData.entries()) {
    // Next.js adds these fields so it can route the server action.
    if (key.startsWith('$ACTION_')) continue;
    if (typeof value !== 'string' || BLOCKED_KEYS.has(key) || !ALLOWED_KEYS.has(key) || Object.hasOwn(raw, key)) {
      return { status: 'invalid', formError: GENERIC_FORM_ERROR };
    }
    raw[key] = value;
  }

  if ((raw.contact_trap ?? '').trim() !== '') {
    return { status: 'bot' };
  }

  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    if (parsed.error.issues.some((issue) => issue.code === 'unrecognized_keys')) {
      return { status: 'invalid', formError: GENERIC_FORM_ERROR };
    }

    const fieldErrors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field !== 'string' || !isContactField(field) || fieldErrors[field]) continue;
      fieldErrors[field] = issue.message;
    }

    return {
      status: 'invalid',
      formError: Object.keys(fieldErrors).length === 0 ? GENERIC_FORM_ERROR : undefined,
      fieldErrors,
    };
  }

  const { contact_trap: _trap, ...message } = parsed.data;
  return { status: 'valid', message };
}

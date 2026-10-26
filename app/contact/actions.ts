'use server';

import { headers } from 'next/headers';
import { MailNotConfiguredError } from '@/lib/contact/message';
import { deliveryLimiter, submissionLimiter } from '@/lib/contact/rate-limit';
import { parseContactForm, type ContactActionResult } from '@/lib/contact/schema';
import { deliverContactMessage } from '@/lib/contact/send-mail';

const DELIVERY_ERROR =
  'We could not send your message right now. Please email bcptspeechservices@outlook.com or call (509) 499-6047.';
const RATE_LIMIT_ERROR =
  'Too many messages were sent from this network. Please wait a few minutes and try again.';
const FORM_ERROR = 'The form could not be submitted.';

function clientAddress(headerStore: Headers): string {
  const realIp = headerStore.get('x-real-ip');
  const forwarded = headerStore.get('x-forwarded-for');
  const candidate = (realIp || forwarded?.split(',')[0] || 'unknown').trim();
  const safe = candidate.replace(/[^a-zA-Z0-9:.\-]/g, '').slice(0, 64);
  return safe || 'unknown';
}

function deliveryErrorCode(error: unknown): string {
  if (error instanceof MailNotConfiguredError) return 'not_configured';
  if (typeof error === 'object' && error && 'responseCode' in error) {
    const code = error.responseCode;
    if (typeof code === 'number') return String(code);
  }
  return 'unavailable';
}

export async function sendContactMessage(
  _previous: ContactActionResult | null,
  formData: FormData,
): Promise<ContactActionResult> {
  const headerStore = await headers();
  const address = clientAddress(headerStore);

  if (!submissionLimiter.allow(address)) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  const parsed = parseContactForm(formData);
  if (parsed.status === 'bot') {
    return { ok: false, error: FORM_ERROR };
  }
  if (parsed.status === 'invalid') {
    return { ok: false, error: parsed.formError, fieldErrors: parsed.fieldErrors };
  }

  if (!deliveryLimiter.allow(address)) {
    return { ok: false, error: RATE_LIMIT_ERROR };
  }

  try {
    await deliverContactMessage(parsed.message);
    return { ok: true };
  } catch (error) {
    console.error(`Contact form delivery failed (${deliveryErrorCode(error)}).`);
    return { ok: false, error: DELIVERY_ERROR };
  }
}

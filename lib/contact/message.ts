import type { ContactMessage } from './schema';

/** The only address this form is allowed to deliver to. */
export const CONTACT_RECIPIENT = 'bcptspeechservices@outlook.com';

const HEADER_CONTROL = /[\u0000-\u001F\u007F\u2028\u2029]/g;
const MIME_HEADER_LINE =
  /^(--|content-|mime-version:|subject:|from:|to:|cc:|bcc:|reply-to:|return-path:|sender:)/i;

export class MailNotConfiguredError extends Error {
  constructor() {
    super('Mail transport is not configured.');
    this.name = 'MailNotConfiguredError';
  }
}

/**
 * The authenticated mailbox must be the clinic address. A different SMTP user
 * cannot become the sender or the recipient.
 */
export function assertSmtpConfig(env: Record<string, string | undefined>): { user: string; password: string } {
  const user = env.SMTP_USER?.trim().toLowerCase() ?? '';
  const password = env.SMTP_PASSWORD?.trim() ?? '';

  if (user !== CONTACT_RECIPIENT || password.length < 8) {
    throw new MailNotConfiguredError();
  }

  return { user: CONTACT_RECIPIENT, password };
}

function shieldBody(value: string): string {
  return value
    .split(/\r?\n/)
    .map((line) => (MIME_HEADER_LINE.test(line.trimStart()) ? ` ${line}` : line))
    .join('\n');
}

/**
 * Builds a plain-text message. The recipient is constant; visitor text is
 * never copied into SMTP headers except the validated reply-to address.
 */
export function buildContactEmail(message: ContactMessage) {
  const subjectName = message.name.replace(HEADER_CONTROL, ' ').slice(0, 80);

  return {
    to: CONTACT_RECIPIENT,
    replyTo: message.email,
    subject: `Website message from ${subjectName}`,
    text: [
      'A visitor submitted the contact form on the Blossoming Connections website.',
      'The From address is the clinic mailbox. Use the visitor email below to reply.',
      '',
      `Name: ${shieldBody(message.name)}`,
      `Email: ${message.email}`,
      `Phone: ${message.phone ? shieldBody(message.phone) : 'Not provided'}`,
      `Child's age: ${message.childAge ? shieldBody(message.childAge) : 'Not provided'}`,
      '',
      'Message:',
      shieldBody(message.message),
    ].join('\n'),
  };
}

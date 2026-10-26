import 'server-only';
import nodemailer from 'nodemailer';
import { assertSmtpConfig, buildContactEmail, CONTACT_RECIPIENT } from './message';
import type { ContactMessage } from './schema';

const SMTP_HOST = 'smtp-mail.outlook.com';
const SMTP_PORT = 587;

/**
 * Delivers one contact message to the clinic mailbox.
 * Port 587 starts in cleartext and upgrades with STARTTLS before login.
 * requireTLS makes a downgrade fail closed, and the server certificate is
 * verified so a forged SMTP host cannot collect the password or message.
 */
export async function deliverContactMessage(message: ContactMessage): Promise<void> {
  const { user, password } = assertSmtpConfig(process.env);
  const email = buildContactEmail(message);

  if (email.to !== CONTACT_RECIPIENT) {
    throw new Error('Refusing to deliver to an unexpected recipient.');
  }

  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    requireTLS: true,
    servername: SMTP_HOST,
    name: 'blossoming-connections',
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
    auth: { user, pass: password },
    logger: false,
    debug: false,
    transactionLog: false,
    disableFileAccess: true,
    disableUrlAccess: true,
    maxRecipients: 1,
    tls: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
      servername: SMTP_HOST,
    },
  });

  try {
    await transport.sendMail({
      from: `Blossoming Connections <${user}>`,
      to: email.to,
      replyTo: email.replyTo,
      envelope: { from: user, to: email.to },
      subject: email.subject,
      text: email.text,
      disableFileAccess: true,
      disableUrlAccess: true,
    });
  } finally {
    transport.close();
  }
}

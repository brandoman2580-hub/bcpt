import assert from 'node:assert/strict';
import test from 'node:test';
import { assertSmtpConfig, buildContactEmail, CONTACT_RECIPIENT, MailNotConfiguredError } from './message';
import { createRateLimiter } from './rate-limit';
import { parseContactForm, type ContactMessage } from './schema';

function validForm(overrides: Record<string, string> = {}): FormData {
  const formData = new FormData();
  const values = {
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    phone: '(509) 499-6047',
    childAge: '2 years old',
    message: 'I would like to ask about an evaluation.',
    ...overrides,
  };

  for (const [key, value] of Object.entries(values)) {
    formData.set(key, value);
  }

  return formData;
}

function validMessage(overrides: Partial<ContactMessage> = {}): ContactMessage {
  return {
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    phone: '(509) 499-6047',
    childAge: '2 years old',
    message: 'I would like to ask about an evaluation.',
    ...overrides,
  };
}

test('accepts a complete contact form', () => {
  const parsed = parseContactForm(validForm());
  assert.equal(parsed.status, 'valid');
  if (parsed.status !== 'valid') return;
  assert.equal(parsed.message.email, 'ada@example.com');
  assert.equal('contact_trap' in parsed.message, false);
});

test('rejects header injection in the name and email', () => {
  const name = parseContactForm(validForm({ name: 'Ada\r\nBcc: attacker@example.com' }));
  assert.equal(name.status, 'invalid');

  const email = parseContactForm(validForm({ email: 'ada@example.com\r\nBcc: attacker@example.com' }));
  assert.equal(email.status, 'invalid');
});

test('rejects duplicate fields, files, and unknown fields', () => {
  const duplicate = validForm();
  duplicate.append('email', 'other@example.com');
  assert.equal(parseContactForm(duplicate).status, 'invalid');

  const file = validForm();
  file.append('resume', new Blob(['not allowed']), 'resume.txt');
  assert.equal(parseContactForm(file).status, 'invalid');

  const extra = validForm();
  extra.set('to', 'attacker@example.com');
  const extraResult = parseContactForm(extra);
  assert.equal(extraResult.status, 'invalid');
  if (extraResult.status === 'invalid') {
    assert.equal(extraResult.formError, 'The form could not be submitted.');
    assert.equal(JSON.stringify(extraResult).includes('attacker@example.com'), false);
  }
});

test('ignores Next.js server action fields', () => {
  const formData = validForm();
  formData.set('$ACTION_REF_1', '');
  formData.set('$ACTION_1:0', '{"id":"abc"}');
  formData.set('$ACTION_1:1', 'null');
  const parsed = parseContactForm(formData);
  assert.equal(parsed.status, 'valid');
});

test('rejects a filled honeypot without treating it as a valid message', () => {
  const parsed = parseContactForm(validForm({ contact_trap: 'https://spam.example' }));
  assert.equal(parsed.status, 'bot');
});

test('rejects a short message and an invalid phone number', () => {
  const message = parseContactForm(validForm({ message: 'Hi' }));
  assert.equal(message.status, 'invalid');
  if (message.status === 'invalid') assert.equal(message.fieldErrors?.message, 'Please enter at least 10 characters.');

  const phone = parseContactForm(validForm({ phone: 'call me' }));
  assert.equal(phone.status, 'invalid');
  if (phone.status === 'invalid') assert.match(phone.fieldErrors?.phone ?? '', /phone number/);
});

test('allows an empty phone and child age', () => {
  const formData = validForm();
  formData.delete('phone');
  formData.delete('childAge');
  const parsed = parseContactForm(formData);
  assert.equal(parsed.status, 'valid');
  if (parsed.status !== 'valid') return;
  assert.equal(parsed.message.phone, '');
  assert.equal(parsed.message.childAge, '');
});

test('builds mail only to the clinic mailbox', () => {
  const email = buildContactEmail(
    validMessage({
      name: 'Ada\r\nBcc: attacker@example.com',
      message: 'Hello\r\nBcc: attacker@example.com\r\n--boundary\r\nContent-Type: text/html',
    }),
  );

  assert.equal(email.to, CONTACT_RECIPIENT);
  assert.equal(email.replyTo, 'ada@example.com');
  assert.equal(/[\r\n]/.test(email.subject), false);
  assert.match(email.text, /^ /m);
  assert.equal(email.text.includes('\nBcc:'), false);
  assert.equal(email.text.includes('\nContent-Type:'), false);
});

test('refuses an SMTP login that is not the clinic mailbox', () => {
  assert.throws(
    () => assertSmtpConfig({ SMTP_USER: 'attacker@example.com', SMTP_PASSWORD: 'long-enough-password' }),
    MailNotConfiguredError,
  );
  assert.throws(() => assertSmtpConfig({ SMTP_USER: CONTACT_RECIPIENT, SMTP_PASSWORD: '' }), MailNotConfiguredError);

  const config = assertSmtpConfig({
    SMTP_USER: 'BCPTSpeechServices@outlook.com',
    SMTP_PASSWORD: 'app-password-value',
  });
  assert.equal(config.user, CONTACT_RECIPIENT);
  assert.equal(config.password, 'app-password-value');
});

test('rate limit closes after the configured number of attempts', () => {
  let time = 0;
  const limiter = createRateLimiter({ limit: 2, windowMs: 1_000, now: () => time });

  assert.equal(limiter.allow('203.0.113.5'), true);
  assert.equal(limiter.allow('203.0.113.5'), true);
  assert.equal(limiter.allow('203.0.113.5'), false);
  assert.equal(limiter.allow('203.0.113.6'), true);

  time = 1_000;
  assert.equal(limiter.allow('203.0.113.5'), true);
});

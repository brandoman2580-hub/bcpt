'use client';

import { useActionState, useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import type { ContactActionResult, ContactField } from '@/lib/contact/schema';
import { sendContactMessage } from './actions';

const inputClassName =
  'w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-colors';

const emptyFields = {
  name: '',
  email: '',
  phone: '',
  childAge: '',
  message: '',
};

function fieldErrorId(field: ContactField): string {
  return `${field}-error`;
}

export function ContactForm() {
  const [fields, setFields] = useState(emptyFields);
  const [state, formAction, isPending] = useActionState<ContactActionResult | null, FormData>(
    sendContactMessage,
    null,
  );
  const fieldErrors = state && !state.ok ? state.fieldErrors : undefined;

  useEffect(() => {
    if (state?.ok) setFields(emptyFields);
  }, [state]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFields((current) => ({ ...current, [name]: value }));
  };

  return (
    <form action={formAction} className="space-y-6" aria-busy={isPending}>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact_trap">Leave this field empty</label>
        <input id="contact_trap" name="contact_trap" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>

      <div>
        <Label htmlFor="name" className="text-gray-700 mb-2 block">
          Your Name *
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={fields.name}
          onChange={handleChange}
          minLength={1}
          maxLength={100}
          autoComplete="name"
          aria-invalid={Boolean(fieldErrors?.name)}
          aria-describedby={fieldErrors?.name ? fieldErrorId('name') : undefined}
          className={inputClassName}
          placeholder="Enter your name"
        />
        {fieldErrors?.name ? (
          <p id={fieldErrorId('name')} className="mt-1 text-sm text-red-600">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-700 mb-2 block">
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={fields.email}
          onChange={handleChange}
          maxLength={254}
          autoComplete="email"
          aria-invalid={Boolean(fieldErrors?.email)}
          aria-describedby={fieldErrors?.email ? fieldErrorId('email') : undefined}
          className={inputClassName}
          placeholder="your.email@example.com"
        />
        {fieldErrors?.email ? (
          <p id={fieldErrorId('email')} className="mt-1 text-sm text-red-600">
            {fieldErrors.email}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="phone" className="text-gray-700 mb-2 block">
          Phone Number
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          value={fields.phone}
          onChange={handleChange}
          maxLength={30}
          autoComplete="tel"
          aria-invalid={Boolean(fieldErrors?.phone)}
          aria-describedby={fieldErrors?.phone ? fieldErrorId('phone') : undefined}
          className={inputClassName}
          placeholder="(555) 123-4567"
        />
        {fieldErrors?.phone ? (
          <p id={fieldErrorId('phone')} className="mt-1 text-sm text-red-600">
            {fieldErrors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="childAge" className="text-gray-700 mb-2 block">
          Child&apos;s Age
        </Label>
        <Input
          id="childAge"
          name="childAge"
          type="text"
          value={fields.childAge}
          onChange={handleChange}
          maxLength={40}
          autoComplete="off"
          aria-invalid={Boolean(fieldErrors?.childAge)}
          aria-describedby={fieldErrors?.childAge ? fieldErrorId('childAge') : undefined}
          className={inputClassName}
          placeholder="e.g., 2 years old"
        />
        {fieldErrors?.childAge ? (
          <p id={fieldErrorId('childAge')} className="mt-1 text-sm text-red-600">
            {fieldErrors.childAge}
          </p>
        ) : null}
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-700 mb-2 block">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          value={fields.message}
          onChange={handleChange}
          minLength={10}
          maxLength={2000}
          rows={5}
          aria-invalid={Boolean(fieldErrors?.message)}
          aria-describedby={fieldErrors?.message ? fieldErrorId('message') : undefined}
          className={`${inputClassName} resize-none`}
          placeholder="Tell me about your concerns or what you'd like to discuss..."
        />
        {fieldErrors?.message ? (
          <p id={fieldErrorId('message')} className="mt-1 text-sm text-red-600">
            {fieldErrors.message}
          </p>
        ) : null}
      </div>

      {state?.ok ? (
        <p role="status" className="text-sm text-teal-700">
          Thank you. Your message was sent, and I will get back to you soon.
        </p>
      ) : null}

      {state && !state.ok && state.error ? (
        <p role="alert" className="text-sm text-red-600">
          {state.error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full text-lg transition-colors flex items-center justify-center gap-2"
      >
        {isPending ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </Button>
    </form>
  );
}

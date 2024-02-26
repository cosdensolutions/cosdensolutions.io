'use server';

import { resend } from '@/utils/resend';

import ContactFormTemplate from './ContactFormTemplate';

type ContactData = {
  email: string;
  message: string;
};

export const sendContactEmail = async ({ email, message }: ContactData) => {
  const { error } = await resend.emails.send({
    from: 'Cosden Solutions <contact@cosdensolutions.io>',
    to: 'contact@cosdensolutions.io',
    subject: 'New Message | Cosden Solutions',
    reply_to: email,
    react: ContactFormTemplate({ message }),
  });

  if (error) {
    throw new Error();
  }
};

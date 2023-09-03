'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateInput, getErrorMessage } from '@/lib/helper';
import ContactFormEmail from '@/email/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const email = formData.get('email');
  const message = formData.get('message');

  // Server-side validation
  if (!validateInput(email, 500)) {
    return {
      error: 'Invalid sender email address',
    };
  }
  if (!validateInput(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'halter_curds.0r@icloud.com',
      subject: 'Message from Portfolio',
      reply_to: email as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

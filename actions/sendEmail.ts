'use server';

import { Resend } from 'resend';
import { validateInput } from '@/lib/helper';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email');
  const message = formData.get('message');

  // Server-side validation
  if (!validateInput(senderEmail, 500)) {
    return {
      error: 'Invalid sender email address',
    };
  }
  if (!validateInput(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'halter_curds.0r@icloud.com',
      subject: 'Message from Portfolio',
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error) {
    return {
      error: 'Failed to send email',
    };
  }
};

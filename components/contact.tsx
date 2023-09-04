'use client';

import React from 'react';
import Heading from './heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      ref={ref}
      id='contact'
      className='text-center mb-20 sm:mb-28 w-[min(100% ,38rem)]'
    >
      <Heading>Contact Me</Heading>

      <p className='text-gray-700 -mt-4 dark:text-white/80'>
        Please email directly at{' '}
        <a
          className='underline'
          href='mailto:jacob.benson.dev@gmail.com'
        >
          jacob.benson.dev@gmail.com
        </a>{' '}
        or use this form.
      </p>

      <form
        className='mt-7 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email Sent!');
        }}
      >
        <input
          type='email'
          name='email'
          required
          maxLength={500}
          placeholder='Your email'
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all'
        />
        <textarea
          name='message'
          required
          maxLength={5000}
          placeholder='Your message'
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none  transition-all'
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

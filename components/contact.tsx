import React from 'react';
import Heading from './heading';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id='contact'
      className='text-center mb-20 sm:mb-28 w-[min(100% ,38rem)]'
    >
      <Heading>Contact Me</Heading>

      <p className='text-gray-700 -mt-6'>
        Please email directly at{' '}
        <a
          className='underline'
          href='mailto:jacob.benson.dev@gmail.com'
        >
          jacob.benson.dev@gmail.com
        </a>{' '}
        or use this form.
      </p>

      <form className='mt-10 flex flex-col'>
        <input
          type='email'
          placeholder='Your email'
          className='h-14 px-4 rounded-lg borderBlack'
        />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4' />
        <button
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
          type='submit'
          placeholder='Your message'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
        </button>
      </form>
    </section>
  );
}

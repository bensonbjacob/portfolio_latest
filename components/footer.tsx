import React from 'react';

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='block mb-2 text-xs'>
        &copy; 2023 Jacob Benson
      </small>
      <p className='text-xs'>
        <span className='font-semibold'>About this website:</span>{' '}
        built with React & Next.js, TypeScript, Tailwind CSS, Framer
        Motion, React Email, Resend, Vercel hosting.
      </p>
    </footer>
  );
}

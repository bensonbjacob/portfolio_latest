'use client';

import Heading from './heading';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <Heading>About Me</Heading>
      <p className='mb-3 '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Veniam ab provident numquam nihil officiis quis labore.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Praesentium ipsa cupiditate perferendis.
      </p>
    </motion.section>
  );
}

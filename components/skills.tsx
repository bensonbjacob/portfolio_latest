'use client';

import React from 'react';
import Heading from './heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <Heading>Skills</Heading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
        {skillsData.map((skill, index) => (
          <motion.li
            className='bg-white borderBlack rounded-xl px-5 py-3 dark:bg-transparent dark:border-2 dark:border-[rgb(71,87,105)] dark:text-white/80'
            key={index}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

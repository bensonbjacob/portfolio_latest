'use client';

import Heading from './heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 dark:font-semibold'
      id='about'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.25 }}
    >
      <Heading>About Me</Heading>
      <p className='mb-3'>
        From hammering nails to crafting code, my journey has been an
        exploration of two worlds: carpentry and web development. As a
        seasoned carpenter and construction manager, I&#39;ve built
        structures that stand the test of time, where precision and
        attention to detail are paramount.
      </p>
      <p>
        Yet, my early fascination with technology never waned. As a
        teenager, I dabbled in web development and QBASIC, creating
        digital spaces and programs just as meticulously as I
        completed construction projects. Today, I&#39;ve transitioned
        into a full-stack web developer, combining my craftsmanship
        mindset with digital innovation.
      </p>
    </motion.section>
  );
}

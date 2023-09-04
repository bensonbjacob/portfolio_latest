'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div
      className='bg-gray-200 my-24 h-1 w-16 rounded-full hidden sm:block dark:bg-mountain-meadow-700 dark:bg-opacity-70'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    ></motion.div>
  );
}

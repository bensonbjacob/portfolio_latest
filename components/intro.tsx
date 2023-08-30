'use client';

import Image from 'next/image';
import JacobImg from '../public/jacob.jpg';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <Image
              src={JacobImg}
              alt='Jacob Benson image'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='object-cover h-36 w-36 rounded-full border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
        </div>
      </div>

      <p>
        Hi, I&apos;m Jacob. I&apos;m a software engineer and web
        developer. I specialize in front-end development, but I have
        experience with back-end development as well.
      </p>
    </section>
  );
}

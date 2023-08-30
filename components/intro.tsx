'use client';

import Image from 'next/image';
import JacobImg from '../public/jacob.jpg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { BsCloudDownloadFill } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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

      <motion.p
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m Jacob. I&apos;m a software engineer and web
        developer. I specialize in front-end development, but I have
        experience with back-end development as well.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <Link
          href='/#contact'
          className='bg-gray-900 text-white px-7 py-3 flex items-center rounded-full gap-2'
        >
          Contact Me <AiTwotoneMail />
        </Link>
        <a
          href=''
          className='bg-white px-7 py-3 flex items-center rounded-full gap-2'
        >
          Download Resume <BsCloudDownloadFill />
        </a>
        <a
          href='https://www.linkedin.com/in/jacob-benson-885004240/'
          className='bg-white p-4 text-gray-700 flex items-center rounded-full gap-2'
        >
          <AiFillLinkedin />
        </a>
        <a
          href='https://github.com/bensonbjacob'
          className='bg-white p-4 text-gray-700 flex items-center rounded-full gap-2'
        >
          <AiFillGithub />
        </a>
      </div>
    </section>
  );
}

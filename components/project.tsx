'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(
    scrollYProgress,
    [0, 1],
    [0.25, 1.0]
  );

  return (
    <motion.div
      className='mb-3 sm:mb-8 last:mb-0 group'
      ref={ref}
      style={{ scale: scaleProgess, opacity: scrollYProgress }}
    >
      <article className='bg-gray-100 hover:bg-gray-200 transition max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 dark:bg-transparent dark:border-2 dark:border-[rgb(71,87,105)]'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full flex flex-col sm:group-even:ml-[18rem]'>
          <div className='flex flex-row items-center'>
            <h3 className='text-2xl font-semibold dark:text-[rgb(97,244,241)]'>
              {title}
            </h3>
            <a
              href={github}
              target='_blank'
              className='bg-black/[0.7] borderBlack ml-2 p-2 text-white text-[1.5rem] flex items-center rounded-full outline-none focus:scale-[1.25] hover:scale-[1.25] active:scale-105 transition hover:text-gray-400 dark:text-white dark:border dark:border-[rgb(71,87,105)] dark:bg-[rgb(51,68,89)] dark:hover:bg-[rgb(63,85,104)]'
            >
              <AiFillGithub />
            </a>
            <a
              href={demo}
              target='_blank'
              className='bg-black/[0.7] borderBlack ml-2 p-3 font-semibold text-sm text-white text-[1.5rem] flex items-center rounded-full outline-none focus:scale-[1.25] hover:scale-[1.25] active:scale-105 transition hover:text-gray-400 dark:text-white dark:border dark:border-[rgb(71,87,105)] dark:bg-[rgb(51,68,89)] dark:hover:bg-[rgb(63,85,104)]'
            >
              Demo
            </a>
          </div>
          <p className='mt-2 leading-relaxed text-gray-700 dark:text-[rgb(130,175,174)]'>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:bg-[rgb(66,153,174)]'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05] transition
        group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2'
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </article>
    </motion.div>
  );
}

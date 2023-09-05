import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import promptsImg from '@/public/assets/prompts.png';
import gutterImg from '@/public/assets/gutter.png';
import booleImg from '@/public/assets/boole.png';
import leeCountyImg from '@/public/assets/leecounty.png';
import propertyImg from '@/public/assets/property.png';
import restaurantImg from '@/public/assets/restaurant.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'AI Prompts',
    github: 'https://github.com/bensonbjacob/ai_prompts',
    demo: 'https://share-prompts-gamma.vercel.app/',
    description:
      'Prompts allows users to create, discover, and share AI prompts, fostering a collaborative environment for creative writing and ideation. With Prompts, you can unleash your imagination and explore a diverse range of prompts contributed by others.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: promptsImg,
  },
  {
    title: 'Gutter Calculator',
    github: 'https://github.com/bensonbjacob/gutter-nextjs',
    demo: 'https://gutter-nextjs.vercel.app/',
    description:
      'Years ago, I helped my friend with his gutter installation business for a few weeks while he was expanding. I was surprised at how much time he spent composing simple estimates based on the measurements he took on each potential job. I had the idea to create a basic calculator and I filed it away under my list of future projects. When I finally found myself with time to work on projects of my own, the gutter calculator was one of the first I completed.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: gutterImg,
  },
  {
    title: 'Restaurant Website',
    github: 'https://github.com/bensonbjacob/restaurant-page',
    demo: 'https://restaurant-page-rosy.vercel.app/',
    description:
      'This is a React app that serves as the web page for an imaginary restaurant. The site uses custom CSS styles without relying on any frameworks.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: restaurantImg,
  },
  {
    title: 'Boole Bots',
    github: 'https://github.com/chingu-voyages/v44-tier2-team-21',
    demo: 'https://boolebots21.netlify.app/',
    description:
      'Boolebots is an automated boolean logic game that allows users to test their skills in logic and problem solving. The game is built with React and Node.js, and it features a user-friendly interface and challenging levels.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: booleImg,
  },
  {
    title: 'Lee County Deck and Fence',
    github: 'https://github.com/bensonbjacob/lee-county-deck',
    demo: 'https://lee-county-deck.vercel.app/',
    description:
      'A marketing/landing page for an imaginary deck and fence company.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: leeCountyImg,
  },
  {
    title: 'Property Finder',
    github: 'https://github.com/bensonbjacob/lcliving',
    demo: 'https://lcliving.vercel.app/',
    description:
      'This is a NextJS app that allows you to filter available properties in the UAE using the free Bayut API. This was my first NextJS project. It allowed me to become familiar with the framework while also allowing me to practice using a new API.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: propertyImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;

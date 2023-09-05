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
      'Prompts allows users to create, discover, and share AI prompts, fostering a collaborative environment for creative writing and ideation.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: promptsImg,
  },
  {
    title: 'Gutter Calculator',
    github: 'https://github.com/bensonbjacob/gutter-nextjs',
    demo: 'https://gutter-nextjs.vercel.app/',
    description:
      'This is a simple calculator that allows you to esimate the cost of gutter fabrication jobs.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: gutterImg,
  },
  {
    title: 'Restaurant Website',
    github: 'https://github.com/bensonbjacob/restaurant-page',
    demo: 'https://restaurant-page-rosy.vercel.app/',
    description:
      'An app that serves as the web page for an imaginary restaurant. The site uses custom CSS styles without relying on any frameworks',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: restaurantImg,
  },
  {
    title: 'Boole Bots',
    github: 'https://github.com/chingu-voyages/v44-tier2-team-21',
    demo: 'https://boolebots21.netlify.app/',
    description:
      'Boole Bots is a game that is not only fun, but also an aid in helping to understand basic Boolean logic.',
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
      'This is a NextJS app that allows you to filter available properties in the UAE using the free Bayut API.',
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
  'Framer Motion',
  'Prisma',
  'MongoDB',
  'GraphQL',
  'Apollo',
  'Express',
  'Firebase',
  'SQL',
  'R',
  'Python',
] as const;

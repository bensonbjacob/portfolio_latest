import React from "react";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { HiDesktopComputer } from "react-icons/hi";
import { BsWrenchAdjustable } from "react-icons/bs";
import { GiHammerNails } from "react-icons/gi";
import promptsImg from "@/public/assets/prompts.png";
import gutterImg from "@/public/assets/gutter.png";
import booleImg from "@/public/assets/boole.png";
import leeCountyImg from "@/public/assets/leecounty.png";
import propertyImg from "@/public/assets/property.png";
import restaurantImg from "@/public/assets/restaurant.png";
import filePythonImg from "@/public/assets/filePython.png";
import remoteDevImg from "@/public/assets/remoteDev.png";
import yellowhammerImg from "@/public/assets/yellowhammer.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Lead Developer - GameLab ",
    location: "Auburn, AL",
    description:
      "Spearhead the development and continuous maintenance of a dynamic application catering to diverse user bases, from military service members to college students across the globe. Utilize a comprehensive tech stack including HTML, CSS, JavaScript, Python, PHP, and bash scripting to create a robust and multifunctional application. Manage a complex ecosystem where the application interacts with and controls various hardware components, demonstrating adeptness in hardware-software integration.",
    icon: React.createElement(CgWebsite),
    date: "Oct 2022 - Present",
  },
  {
    title: "Freelance Web Developer",
    location: "Auburn, AL",
    description:
      "Independently managed a successful freelance web development business, delivering high-quality solutions to diverse clients. Worked with designers and clients to develop responsive and visually appealing websites tailored to clients' specific needs, utilizing HTML, CSS, JavaScript, and other relevant technologies. Managed multiple projects simultaneously, maintaining accurate timelines, and delivering projects within agreed-upon deadlines.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
  {
    title: "Service and Parts Manager - Eagle Imports",
    location: "Auburn, AL",
    description:
      "Played a pivotal role in driving business growth and operational excellence by providing effective leadership and implementing strategic initiatives.",
    icon: React.createElement(BsWrenchAdjustable),
    date: "2020 - 2022",
  },
  {
    title: "Remodeling and Repair Contractor",
    location: "Auburn, AL",
    description:
      "Collaborated with homeowners and property management firms to manage diverse repair and addition projects across multiple properties in Lee County, AL.",
    icon: React.createElement(GiHammerNails),
    date: "2012 - 2020",
  },
  {
    title: "IT Manager - Fleet Management",
    location: "Opelika, AL",
    description:
      "Offered comprehensive IT support, proactively resolving technical challenges and ensuring uninterrupted workflow. Managed website upkeep to optimize performance and provide an engaging user experience.",
    icon: React.createElement(HiDesktopComputer),
    date: "2014 - 2016",
  },
] as const;

export const projectsData = [
  {
    title: "Yellowhammer Tech Jobs",
    github: "https://github.com/bensonbjacob/job-board",
    demo: "https://job-board-three-gamma.vercel.app/",
    description:
      "A job board with full CRUD functionalities.  It allows users to create job listings for tech jobs located within the state of Alabama.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript"],
    imageUrl: yellowhammerImg,
  },
  {
    title: "Rmt Dev",
    github: "https://github.com/bensonbjacob/rmt-dev-react",
    demo: "https://rmt-dev-react.vercel.app/",
    description:
      "A remote job search project crafted with Vanilla JS. Includes state management, pagination, local storage for bookmarking, and a dynamic router for easy job sharing.",
    tags: ["React", "Tailwind", "TypeScript"],
    imageUrl: remoteDevImg,
  },
  {
    title: "AI Prompts",
    github: "https://github.com/bensonbjacob/ai_prompts",
    demo: "https://share-prompts-gamma.vercel.app/",
    description:
      "Prompts allows users to create, discover, and share AI prompts, fostering a collaborative environment for creative writing and ideation.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NextAuth"],
    imageUrl: promptsImg,
  },
  {
    title: "Gutter Calculator",
    github: "https://github.com/bensonbjacob/gutter-nextjs",
    demo: "https://gutter-nextjs.vercel.app/",
    description:
      "This is a simple calculator that allows you to esimate the cost of gutter fabrication jobs.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: gutterImg,
  },
  {
    title: "Restaurant Website",
    github: "https://github.com/bensonbjacob/restaurant-page",
    demo: "https://restaurant-page-rosy.vercel.app/",
    description:
      "An app that serves as the web page for an imaginary restaurant. The site uses custom CSS styles without relying on any frameworks.",
    tags: ["React", "CSS"],
    imageUrl: restaurantImg,
  },
  {
    title: "File Organizer",
    github: "https://github.com/bensonbjacob/File-Organizer",
    demo: "https://github.com/bensonbjacob/File-Organizer",
    description:
      "This is a Python script that helps you organize your files in the Desktop and Downloads folder automatically.",
    tags: ["Python"],
    imageUrl: filePythonImg,
  },
  {
    title: "Boole Bots",
    github: "https://github.com/chingu-voyages/v44-tier2-team-21",
    demo: "https://boolebots21.netlify.app/",
    description:
      "Boole Bots is a game that is not only fun, but also an aid in helping to understand basic Boolean logic.",
    tags: ["React", "Tailwind"],
    imageUrl: booleImg,
  },
  {
    title: "Lee County Deck and Fence",
    github: "https://github.com/bensonbjacob/lee-county-deck",
    demo: "https://lee-county-deck.vercel.app/",
    description:
      "A marketing/landing page for an imaginary deck and fence company.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: leeCountyImg,
  },
  {
    title: "Property Finder",
    github: "https://github.com/bensonbjacob/lcliving",
    demo: "https://lcliving.vercel.app/",
    description:
      "This is a NextJS app that allows you to filter available properties in the UAE using the free Bayut API.",
    tags: ["React", "Next.js", "Chakra-UI", "Framer Motion"],
    imageUrl: propertyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Jest",
  "Docker",
  "React",
  "Next.js",
  "Zod",
  "Zustand",
  "NextAuth",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Prisma",
  "Vue",
  "PHP",
  "Laravel",
  "BootStrap",
  "MongoDB",
  "GraphQL",
  "Apollo",
  "Bash",
  "Webpack",
  "Express",
  "Vite",
  "Firebase",
  "SQL",
  "R",
  "Python",
  "Flask",
  "Sentry",
  "Posthog",
  "ShadCn/UI",
] as const;

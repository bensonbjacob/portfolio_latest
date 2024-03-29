"use client";

import React from "react";
import Image from "next/image";
import JacobImg from "@/public/assets/jacob.png";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsCloudDownloadFill } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-36 dark:text-[rgb(97,244,241)]">
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.3 }}>
            <Image
              src={JacobImg}
              alt="Jacob Benson image"
              quality="95"
              priority={true}
              className="object-cover h-36 w-36 rounded-full border-[0.35rem] border-white dark:border-[rgb(130,175,174)]"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        Hi, I&#39;m Jacob. I&#39;m a software developer based in
        Auburn, AL.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <Link
          href="/#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="bg-gray-900 group text-white px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-transparent dark:hover:bg-[rgb(63,85,104)] dark:border dark:border-[rgb(61,83,101)] dark:hover:border-[rgb(130,175,174)]">
          Contact Me{" "}
          <AiTwotoneMail className="opacity-90 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="/assets/Jacob_Benson_Resume.pdf"
          download
          className="bg-white group borderBlack px-7 py-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-[rgb(51,68,89)] dark:hover:bg-[rgb(63,85,104)] cursor-pointer dark:text-white dark:border dark:border-[rgb(71,87,105)]">
          Download Resume{" "}
          <BsCloudDownloadFill className="opacity-90 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/jacob-benson-885004240/"
          target="_blank"
          className="bg-white borderBlack p-4 text-gray-700 text-[1.5rem] flex items-center rounded-full gap-2 outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950 cursor-pointer dark:text-white dark:border dark:border-[rgb(71,87,105)] dark:bg-[rgb(51,68,89)] dark:hover:bg-[rgb(63,85,104)]">
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/bensonbjacob"
          target="_blank"
          className="bg-white borderBlack p-4 text-gray-700 text-[1.5rem] flex items-center rounded-full gap-2 outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition hover:text-gray-950 cursor-pointer dark:text-white dark:border dark:border-[rgb(71,87,105)] dark:bg-[rgb(51,68,89)] dark:hover:bg-[rgb(63,85,104)]">
          <AiFillGithub />
        </a>
      </motion.div>
    </section>
  );
}

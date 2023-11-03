"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaCodepen, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { AvatarCanvas } from "./avatar-canvas";

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            id="home"
            className="h-screen mb-28 max-w-[100rem] mx-auto text-left sm:mb-0 scroll-mt-[100rem] flex flex-col sm:flex-row sm:items-start sm:justify-center p-4 backdrop-blur border dark:border-gray-600 rounded-sm"
        >
            {/* Text and Buttons */}
            <div className="xl:pt-48 xl:pl-24 w-3/4 xl:text-left">
                <motion.h1
                    className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-bold">Hello, I'm Ismail.</span> <br />
                    I'm a{" "}
                    <span className="font-bold">
                        full-stack developer
                    </span> with <span className="font-bold">6 years</span> of
                    experience. I enjoy building{" "}
                    <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">Angular and Java</span>.
                </motion.h1>

                <motion.div
                    className="flex flex-col sm:flex-row items-start justify-start gap-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {
                            setActiveSection("Contact");
                            setTimeOfLastClick(Date.now());
                        }}
                    >
                        Contact me here{" "}
                        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>
                    <a
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                        href="/CV.pdf"
                        download
                    >
                        Download CV{" "}
                        <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                    </a>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-start justify-start gap-2 pt-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <a
                        className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://www.linkedin.com/in/iikhan/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://github.com/ismailkhan-dev"
                        target="_blank"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://twitter.com/viz1er"
                        target="_blank"
                    >
                        <FaTwitterSquare />
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://codepen.io/ismailkn"
                        target="_blank"
                    >
                        <FaCodepen />
                    </a>
                    <a
                        className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                        href="https://leetcode.com/ismailkhan9/"
                        target="_blank"
                    >
                        <SiLeetcode />
                    </a>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-start justify-start gap-2 pt-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                ></motion.div>
            </div>

            {/* Avatar */}
            <div className="h-full w-11/12">
                <div className="relative h-full">
                    {/* Avatar Animation */}
                    <AvatarCanvas />
                </div>
            </div>
        </section>
    );
}

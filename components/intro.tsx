"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
    const [isXlScreen, setIsXlScreen] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsXlScreen(window.innerWidth >= 1280);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section
            ref={ref}
            id="home"
            className="h-screen mb-28 w-full max-w-[75rem] sm:mb-0 scroll-mt-[100rem] flex flex-col sm:items-center sm:justify-center p-4 backdrop-blur border dark:border-gray-600 rounded-sm"
        >
            {/* Avatar Image */}
            {!isXlScreen && (
                <div
                    className={`w-full h-64 xl:hidden ${
                        isXlScreen
                            ? "hidden"
                            : "flex items-center justify-center"
                    }`}
                >
                    <div className="relative inline-block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "tween",
                                duration: 0.2,
                            }}
                        >
                            <Image
                                src="/ismail-avatar.png"
                                alt="Ismail Avatar"
                                width="192"
                                height="192"
                                quality="95"
                                priority={true}
                                className="h-42 w-36 object-cover border-2 dark:border-gray-600 rounded-sm shadow-xl"
                            />
                        </motion.div>
                        <motion.span
                            className="absolute bottom-0 -right-3 text-[3rem]"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 125,
                                delay: 0.1,
                                duration: 0.7,
                            }}
                        >
                            👋🏾
                        </motion.span>
                    </div>
                </div>
            )}

            {/* Text and Buttons */}
            <div
                className={`flex flex-col h-full xl:text-left text-center xl:items-start xl:justify-center justify-start items-center ${
                    isXlScreen
                        ? "w-full sm:w-auto sm:px-28 sm:mt-[-22rem]"
                        : "w-full p-4"
                }`}
            >
                <motion.div
                    className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-[0.85rem] uppercase font-extrabold">
                        Hello world, I am
                    </span>
                    <h1 className="font-black text-6xl mb-2 gradient-text">
                        Ismail Khan
                    </h1>
                    <p className="xl:w-2/3 w-full">
                        A{" "}
                        <span className="font-bold gradient-text">
                            full-stack web developer
                        </span>{" "}
                        with <span className="font-bold">6 years</span> of
                        experience.
                    </p>

                    <p className="text-xl mt-2">
                        I build enterprise-level{" "}
                        <span className="italic">sites & apps</span>. I focus on{" "}
                        is <span className="underline">Angular and Java</span>.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-wrap sm:flex-row items-center justify-center gap-4 text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <Link
                        href="#contact"
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer hover:bg-gray-950 borderBlack dark:bg-white/10"
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
                    className="flex flex-wrap sm:flex-row items-center justify-center gap-2 pt-4 text-lg font-medium"
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
                        href="https://leetcode.com/ismailkhan9/"
                        target="_blank"
                    >
                        <SiLeetcode />
                    </a>
                </motion.div>
            </div>

            {/* Avatar */}
            {isXlScreen && (
                <div className="hidden xl:block absolute inset-y-0 right-0 w-full h-full xl:w-[45%]">
                    <div className="relative h-full">
                        <AvatarCanvas />
                    </div>
                </div>
            )}
        </section>
    );
}

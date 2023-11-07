"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    liveDemoUrl,
    githubRepoUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2">
                        {tags.map((tag, index) => (
                            <li
                                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                                key={index}
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <div className="flex xl:flex-row flex-col gap-4 mt-4">
                        {liveDemoUrl && (
                            <a
                                href={liveDemoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white px-4 py-3 flex items-center gap-2 rounded-sm outline-none focus:scale-110 hover:scale-110 dark:hover:bg-tertiary/[0.7] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            >
                                <div className="flex flex-wrap gap-1 items-center">
                                    <MdOutlineOpenInNew />
                                    <span>Live Demo</span>
                                </div>
                            </a>
                        )}
                        {/* Button for Github Repo */}
                        {githubRepoUrl && (
                            <a
                                href={githubRepoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white px-4 py-3 flex items-center gap-2 rounded-sm outline-none focus:scale-110 hover:scale-110 dark:hover:bg-tertiary/[0.7] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                            >
                                <div className="flex flex-wrap gap-1 items-center">
                                    <FaGithubSquare />
                                    <span>GitHub</span>
                                </div>
                            </a>
                        )}
                    </div>
                </div>

                <Image
                    src={imageUrl}
                    alt="Project I worked on"
                    quality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                />
            </section>
        </motion.div>
    );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { workSkillsData, prevSkillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[75rem] scroll-mt-28 text-center sm:mb-40 backdrop-blur border dark:border-gray-600 rounded-sm p-8"
        >
            <SectionHeading>My skills</SectionHeading>

            <div className="my-12 flex flex-col sm:flex-row">
                <h3 className="text-2xl font-semibold mb-4 sm:mb-0 sm:flex-grow sm:basis-1/3">
                    Current Work Tech Stack
                </h3>
                <ul className="flex flex-wrap justify-center sm:justify-start sm:flex-grow sm:basis-2/3 gap-2 text-lg text-gray-800">
                    {workSkillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 m-1"
                            key={`work-${skill}`}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="my-12 flex flex-col sm:flex-row">
                <h3 className="text-2xl font-semibold mb-4 sm:mb-0 sm:flex-grow sm:basis-1/3">
                    Past Tech Stack
                </h3>
                <ul className="flex flex-wrap justify-center sm:justify-start sm:flex-grow sm:basis-2/3 gap-2 text-lg text-gray-800">
                    {prevSkillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 m-1"
                            key={`prev-${skill}`}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

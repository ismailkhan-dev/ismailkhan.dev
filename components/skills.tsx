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
            className="mb-28 max-w-[100rem] scroll-mt-28 text-center sm:mb-40 backdrop-blur border dark:border-gray-600 rounded-sm p-8"
        >
            <SectionHeading>My skills</SectionHeading>

            <div className="flex flex-row my-12">
                <h3 className="flex-grow basis-1/3 text-2xl font-semibold">
                    Tech I use at work
                </h3>

                <ul className="flex flex-wrap flex-grow basis-2/3 justify-start gap-2 text-lg text-gray-800">
                    {workSkillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-row my-12">
                <h3 className="flex-grow basis-1/3 text-2xl font-semibold">
                    Tech I worked with before
                </h3>
                <ul className="flex flex-wrap flex-grow basis-2/3 justify-start gap-2 text-lg text-gray-800">
                    {prevSkillsData.map((skill, index) => (
                        <motion.li
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
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

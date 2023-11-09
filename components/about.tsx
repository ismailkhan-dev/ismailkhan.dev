"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ServiceCard from "./service-card";
import { servicesData } from "@/lib/data";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="h-full mb-28 max-w-[75rem] leading-normal lg:text-justify sm:mb-40 scroll-mt-28 backdrop-blur border dark:border-gray-600 rounded-sm p-8 sm:text-lg xl:text-xl"
            id="about"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3 text-center lg:text-justify">
                After graduating with a degree in{" "}
                <span className="font-medium">business management</span>, I
                worked for a tech startup where I found my way into programming.
                A new passion was born and I haven't looked back since. After a
                few gigs in JS web development, I completed a coding bootcamp
                that solidified my skills, plus I learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is being technically creative. I{" "}
                <span className="underline">enjoy</span> the accomplishment of
                finally figuring out a solution to a problem. My current working
                stack is the MEAN stack:{" "}
                <span className="font-medium">
                    Angular, Express.js, Node.js, and MongoDB
                </span>
                . I also use TypeScript and Java daily. I am always exploring
                and learning new technologies. I am not currently looking for
                any new opportunities, but{" "}
                <span className="font-medium">feel free to connect</span> in
                case you think you have something interesting!
            </p>

            <p className="mb-12 text-center lg:text-justify">
                <span className="italic">When I'm not coding</span>, I enjoy
                reading, watching movies, playing board games, and being a dad
                and husband.
            </p>

            {/* Service Cards */}
            <SectionHeading>What I Do</SectionHeading>

            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                }}
                viewport={{
                    once: true,
                }}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
            >
                {servicesData.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </motion.div>
        </motion.section>
    );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ServiceCard from "./service-card";
import { services } from "@/constants/index";

export default function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="h-full mb-28 max-w-[100rem] text-center leading-15 sm:mb-40 scroll-mt-28 backdrop-blur border dark:border-gray-600 rounded-sm p-8 text-2xl"
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
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">
                    Accounting/Business Management
                </span>
                , I decided to pursue my passion for programming. I enrolled in
                a coding bootcamp at Juno College and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is the MEAN
                stack{" "}
                <span className="font-medium">
                    Angular, Express.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript, Java, and Postgres. I am
                always looking to learn new technologies. I am currently looking
                for a <span className="font-medium">full-time position</span> as
                a software developer.
            </p>

            <p className="mb-12">
                <span className="italic">When I'm not coding</span>, I enjoy
                reading, watching movies, and taking care of my family. I also
                enjoy <span className="font-medium">learning new things</span>.
                I am currently learning about{" "}
                <span className="font-medium">Islamic history</span>.
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
                {services.map((service, index) => (
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

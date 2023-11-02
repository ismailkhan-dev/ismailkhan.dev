"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section
            ref={ref}
            id="projects"
            className="scroll-mt-28 mb-28 backdrop-blur border dark:border-gray-600 rounded-sm max-w-[100rem] w-full flex flex-col items-center justify-center p-8"
        >
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>

            {/* Github contrbituions api */}
            <div className="mt-24">Github contributions</div>
        </section>
    );
}

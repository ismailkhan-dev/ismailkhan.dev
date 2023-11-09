import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LiaAngular } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import chatgptImg from "@/public/chatgpt.jpg";
import trellodashImg from "@/public/trellodash.png";
import portfolioImg from "@/public/portfolio.png";

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
        title: "Programmer Analyst",
        company: "Arqam House",
        location: "Toronto, CA",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(CgWorkAlt),
        date: "Sept 2015 - Sept 2017",
    },
    {
        title: "Bachelor of Commerce Graduation",
        company: "Toronto Metropolitian University",
        location: "Toronto, CA",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "Mar 2017",
    },
    {
        title: "Web Developer (contract)",
        company: "Wilson-Niblett Motors",
        location: "Toronto, CA",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(RiJavascriptLine),
        date: "Sept 2017 - Feb 2018",
    },
    {
        title: "Web Developer",
        company: "4GL Solutions",
        location: "Toronto, CA",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(RiJavascriptLine),
        date: "Sept 2017 - Feb 2018",
    },
    {
        title: "Web Developer",
        company: "Venus Concept",
        location: "Toronto, CA",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(RiJavascriptLine),
        date: "Feb 2018 - Aug 2020",
    },
    {
        title: "web development bootcamp graduation",
        company: "Juno College of Technology",
        location: "Toronto, CA",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(LuGraduationCap),
        date: "Sept - Oct 2020",
    },
    {
        title: "Freelance full-stack developer",
        company: "Badr Consulting Group Inc.",
        location: "Toronto, CA",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "Jan 2021 - Present",
    },
    {
        title: "Angular Web Developer",
        company: "The Home Depot Canada",
        location: "Toronto, CA",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(LiaAngular),
        date: "Feb 2021 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "ChatGPT Bot",
        description:
            "Fully functional recreation of OpenAI's ChatGPT website. All LLM models and features are available.",
        tags: ["React", "Next.js", "OpenAI API", "Tailwind", "Firebase"],
        imageUrl: chatgptImg,
        liveDemoUrl: "https://chat.openai.com/",
        githubRepoUrl: "https://github.com/ismailkhan-dev/chatgptmessenger",
    },
    {
        title: "Trello Kanban App",
        description:
            "Full-stack Kanban app utilizing the MEAN stack. Architecture based on MVC model.",
        tags: [
            "Angular",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "GCP",
        ],
        imageUrl: trellodashImg,
        liveDemoUrl: "https://trello.com/",
        githubRepoUrl: "https://github.com/ismailkhan-dev/trelloboard-app",
    },
    {
        title: "Personal Portfolio",
        description:
            "Personal website that houses my digital tech portfolio and persona.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: portfolioImg,
        liveDemoUrl: "https://ismailkhan.dev/",
        githubRepoUrl: "https://github.com/ismailkhan-dev/ismailkhan.dev",
    },
] as const;

export const workSkillsData = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Angular",
    "RxJS",
    "NgRx",
    "Git",
    "HTML5",
    "SCSS",
    "PostgreSQL",
    "Node.js",
    "Express",
    "GCP",
    "Docker",
    "Jasmine",
    "SQL",
    "SAP Hybris",
    "WebdriverIO",
    "Swagger",
    "Maven",
    "Jenkins",
    "Bamboo",
    "Bitbucket",
] as const;

export const prevSkillsData = [
    "React",
    "Next.js",
    "Tailwind",
    "Python",
    "Flask",
    "Framer Motion",
    "Selenium",
    "Karate",
    "Postman",
    "Playwright",
    "Bash",
    "Figma",
    "MongoDB",
    "GitHub",
    "Wordpress",
    "jQuery",
] as const;

export const servicesData = [
    {
        title: "Web Developer",
        icon: "/assets/web.png",
    },
    {
        title: "Backend Developer",
        icon: "/assets/backend.png",
    },
    {
        title: "Test Automation",
        icon: "/assets/automation.png",
    },
    {
        title: "Tech Writer",
        icon: "/assets/writer.png",
    },
] as const;

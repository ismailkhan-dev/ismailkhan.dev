import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LiaAngular } from 'react-icons/lia';
import { RiJavascriptLine } from 'react-icons/ri';
import { LuGraduationCap } from 'react-icons/lu';
import chatgptImg from '@/public/chatgpt.jpg';
import trellodashImg from '@/public/trellodash.png';
import portfolioImg from '@/public/portfolio.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Blog',
		hash: '#blog',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Programmer Analyst',
		company: 'Arqam House',
		location: 'Toronto, CA',
		description:
			'Designed, developed, tested, and analyzed ticketing software application for a tech start-up in Toronto. Focus on client-side and JavaScript.',
		icon: React.createElement(CgWorkAlt),
		date: 'Sept 2015 - Sept 2017',
	},
	{
		title: 'Bachelor Degree Graduate',
		company: 'Toronto Metropolitian University',
		location: 'Toronto, CA',
		description:
			'Graduated with a business degree. Focus on business technology and self-studying web development.',
		icon: React.createElement(LuGraduationCap),
		date: 'Mar 2017',
	},
	{
		title: 'Web Developer',
		company: 'Wilson-Niblett Motors',
		location: 'Toronto, CA',
		description:
			'Focus on refactoring front-end of website with JavaScript, SCSS, and other web development tech.',
		icon: React.createElement(RiJavascriptLine),
		date: 'Sept 2017 - Feb 2018',
	},
	{
		title: 'Web Developer',
		company: '4GL Solutions',
		location: 'Toronto, CA',
		description:
			'Previously engineered cutting-edge, interactive web applications by leveraging the power of JS frameworks, streamlining complex front-end development to optimize user engagement.',
		icon: React.createElement(RiJavascriptLine),
		date: 'Sept 2017 - Feb 2018',
	},
	{
		title: 'Web Developer',
		company: 'Venus Concept',
		location: 'Toronto, CA',
		description:
			'Specialized in building responsive and intuitive web interfaces using modern JavaScript frameworks, ensuring high performance and maintainability across diverse web projects.',
		icon: React.createElement(RiJavascriptLine),
		date: 'Feb 2018 - Aug 2020',
	},
	{
		title: 'Web Dev Bootcamp Graduate',
		company: 'Juno College of Technology',
		location: 'Toronto, CA',
		description:
			'Completed all-round web development and full-stack bootcamp solidifying my tech skills.',
		icon: React.createElement(LuGraduationCap),
		date: 'Sept - Oct 2020',
	},
	{
		title: 'Freelance full-stack developer',
		company: 'Badr Consulting Group Inc.',
		location: 'Toronto, CA',
		description:
			'Versatile Full-Stack Developer with expertise in the MEAN stack, integrating MongoDB, Express.js, Angular, and Node.js to build complete, end-to-end solutions for web applications.',
		icon: React.createElement(FaReact),
		date: 'Jan 2021 - Present',
	},
	{
		title: 'Angular Web Developer',
		company: 'The Home Depot Canada',
		location: 'Toronto, CA',
		description:
			'Developing enterprise-level solutions by synergizing Angular for front-end finesse with robust Java back-end services, all seamlessly orchestrated on the Google Cloud Platform.',
		icon: React.createElement(LiaAngular),
		date: 'Feb 2021 - Present',
	},
] as const;

export const projectsData = [
	{
		title: 'ChatGPT Bot',
		description:
			"Fully functional recreation of OpenAI's ChatGPT website. All LLM models and features are available.",
		tags: ['React', 'Next.js', 'OpenAI API', 'Tailwind', 'Firebase'],
		imageUrl: chatgptImg,
		liveDemoUrl:
			'https://chatgpt-messenger-c9rshl137-ismails-projects-7db7cc80.vercel.app/',
		githubRepoUrl: 'https://github.com/ismailkhan-dev/chatgptmessenger',
	},
	{
		title: 'Trello Kanban App',
		description:
			'Full-stack Kanban app utilizing the MEAN stack. Architecture based on MVC model.',
		tags: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'GCP'],
		imageUrl: trellodashImg,
		liveDemoUrl: 'https://trello.com/',
		githubRepoUrl: 'https://github.com/ismailkhan-dev/trelloboard-app',
	},
	{
		title: 'Personal Portfolio',
		description:
			'Personal website that houses my digital tech portfolio and persona.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: portfolioImg,
		liveDemoUrl: 'https://ismailkhan.dev/',
		githubRepoUrl: 'https://github.com/ismailkhan-dev/ismailkhan.dev',
	},
] as const;

export const workSkillsData = [
	'JavaScript',
	'TypeScript',
	'Java',
	'Angular',
	'RxJS',
	'NgRx',
	'Git',
	'HTML5',
	'SCSS',
	'PostgreSQL',
	'Node.js',
	'Express',
	'GCP',
	'Docker',
	'Jasmine',
	'SQL',
	'SAP Hybris',
	'WebdriverIO',
	'Swagger',
	'Maven',
	'Jenkins',
	'Bamboo',
	'Bitbucket',
] as const;

export const prevSkillsData = [
	'React',
	'Next.js',
	'Tailwind',
	'Python',
	'Flask',
	'Framer Motion',
	'Selenium',
	'Karate',
	'Postman',
	'Playwright',
	'Bash',
	'Figma',
	'MongoDB',
	'GitHub',
	'Wordpress',
	'jQuery',
] as const;

export const servicesData = [
	{
		title: 'Web Developer',
		icon: '/assets/web.png',
	},
	{
		title: 'Backend Developer',
		icon: '/assets/backend.png',
	},
	{
		title: 'Test Automation',
		icon: '/assets/automation.png',
	},
	{
		title: 'Tech Writer',
		icon: '/assets/writer.png',
	},
] as const;

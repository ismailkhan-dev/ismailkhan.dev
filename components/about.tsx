'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import ServiceCard from './service-card';
import { servicesData } from '@/lib/data';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className='h-full mb-28 max-w-[75rem] leading-normal lg:text-justify sm:mb-40 scroll-mt-28 backdrop-blur border dark:border-gray-600 rounded-sm p-8 sm:text-lg xl:text-xl'
			id='about'
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
			<p className='mb-3 text-center lg:text-justify'>
				With years of industry experience under my belt, I have honed my skills
				in the tech sector, beginning my journey at a dynamic tech startup. This
				experience ignited a deep-rooted passion for programming, which has only
				grown stronger with time. My career has seen a range of exciting roles
				in JavaScript web development, culminating in a comprehensive skill set
				in full-stack development.
			</p>
			<p className='mb-3 text-center lg:text-justify'>
				Technical creativity is what drives me in this field. There's a unique
				satisfaction in unraveling complex problems and crafting effective
				solutions. My expertise is centered around the MEAN stack: Angular,
				Express.js, Node.js, and MongoDB. In addition to these, I work
				extensively with TypeScript and Java, ensuring a robust and versatile
				skill set. Constant learning and exploration are key facets of my
				professional ethos. I'm always on the lookout for new technologies and
				methodologies to enhance my capabilities.
			</p>
			<p className='mb-3 text-center lg:text-justify'>
				Outside of my professional life, I enjoy my time reading, watching
				movies, engaging in board games, and embracing the joys of being a dad
				and husband.
			</p>
			<p className='mb-3 text-center lg:text-justify'>
				I am open to making connections. Feel free to reach out!
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
				className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'
			>
				{servicesData.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</motion.div>
		</motion.section>
	);
}

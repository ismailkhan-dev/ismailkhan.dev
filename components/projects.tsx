'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import GithubCalendar from './github-calendar';
import { FaGithubSquare } from 'react-icons/fa';

export default function Projects() {
	const { ref } = useSectionInView('Projects');

	return (
		<section
			ref={ref}
			id='projects'
			className='scroll-mt-28 mb-28 backdrop-blur border dark:border-gray-600 rounded-sm max-w-[75rem] w-full flex flex-col items-center justify-center p-8'
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
			<div className='mt-24 w-full'>
				<SectionHeading>My Github contributions</SectionHeading>

				<h3 className='text-center mb-1'>
					Check out my GitHub Profile below for more work I've done.
				</h3>

				<div className='flex flex-row gap-2 items-center justify-center my-6'>
					<a
						className='bg-white p-3 text-gray-700 dark:text-gray-300 flex items-center gap-2 text-[1.9rem] rounded-lg focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 dark:hover:text-white active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
						href='https://github.com/ismailkhan-dev'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithubSquare />
						<p className='text-[1.2rem] font-bold'>Visit Github Profile</p>
					</a>
				</div>

				<div className='overflow-x-auto'>
					<GithubCalendar />
				</div>
			</div>
		</section>
	);
}

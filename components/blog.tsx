"use client";
import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { parse } from "rss-to-json";

interface BlogPost {
    title: string;
    link: string;
    published: string;
    description: string;
}

const Blog = () => {
    const { ref } = useSectionInView("Blog");
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const rssUrl = "https://blog.ismailkhan.dev/rss.xml";

    useEffect(() => {
        parse(rssUrl, {})
            .then((data) => {
                setBlogPosts(data.items);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error parsing RSS feed:", error);
                setIsLoading(false);
            });
    }, []);

    const formatDate = (dateString: any) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <motion.section
            ref={ref}
            className="h-full mb-28 max-w-[75rem] w-full leading-normal lg:text-justify sm:mb-40 scroll-mt-28 backdrop-blur border dark:border-gray-600 rounded-sm p-8 sm:text-lg xl:text-xl"
            id="blog"
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
            <SectionHeading>My Latest Posts</SectionHeading>
            {isLoading ? (
                <div>Loading latest blog posts...</div>
            ) : (
                <div className="space-y-6">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="flex flex-col border-b border-gray-200 dark:border-gray-700 pb-2"
                        >
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                <a
                                    href={post.link}
                                    rel="noopener noreferrer"
                                    className="decoration-dashed hover:underline hover:underline-offset-4"
                                >
                                    {post.title}
                                </a>
                            </h2>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 scale-90 inline-block mr-1 text-gray-500 dark:fill-gray-400"
                                >
                                    <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                                    <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
                                </svg>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">
                                    {formatDate(post.published)}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                {post.description}
                            </p>
                        </article>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default Blog;

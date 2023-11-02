import React from "react";

export default function Footer() {
    return (
        <footer className="w-[45rem] flex flex-col mx-auto p-4 mb-5 text-center text-gray-500 backdrop-blur border dark:border-gray-600 rounded-sm ">
            <small className="mb-2 block text-xs">
                &copy; 2023 Ismail. All rights reserved.
            </small>
            <p className="text-xs">
                <span className="font-semibold">About this website:</span> built
                with ☕, React, Next.js, TypeScript, Tailwind CSS, and Framer
                Motion. Hosted with Vercel.
            </p>
        </footer>
    );
}

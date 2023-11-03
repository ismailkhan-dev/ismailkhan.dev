import React from "react";
import { JetBrains_Mono } from "next/font/google";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export default function Footer() {
    return (
        <footer
            className={`${jetBrains.className} flex flex-col mx-auto p-4 mb-2 text-center text-gray-500`}
        >
            <small className="mb-2 block text-xs">
                &copy; 2023 Ismail Khan. All rights reserved.
            </small>
            <p className="text-xs">
                Built with ☕ and React, Next.js, TypeScript, Tailwind, and
                Framer Motion.
            </p>
        </footer>
    );
}

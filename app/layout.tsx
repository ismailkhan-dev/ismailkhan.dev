import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import StarsCanvas from "@/components/stars-canvas";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ismail Khan | Full-stack Dev",
    description: "Ismail is a full-stack developer with 6 years of experience.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#030014] dark:text-gray-50 dark:text-opacity-90`}
            >
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        <StarsCanvas />
                        {children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}

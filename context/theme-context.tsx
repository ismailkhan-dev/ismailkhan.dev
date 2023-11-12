"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

// Utility functions for cookies and persistent themes
const setCookie = (name: string, value: string, days: number) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }

    let cookieString =
        name + "=" + (value || "") + expires + "; path=/; samesite=lax; Secure";

    // Add domain only if not localhost
    if (window.location.hostname !== "localhost") {
        cookieString += "; domain=.ismailkhan.dev";
    }

    document.cookie = cookieString;
};

const getCookie = (name: string) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children,
}: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        const cookieTheme = getCookie("theme");

        const effectiveTheme = (cookieTheme || localTheme || "light") as Theme;

        setTheme(effectiveTheme);
        if (effectiveTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        setCookie("theme", effectiveTheme, 365);
        window.localStorage.setItem("theme", effectiveTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
        setCookie("theme", newTheme, 365);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}

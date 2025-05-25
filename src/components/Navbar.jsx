import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { scrollToSection } from "../utils/helper";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const progress = (currentScroll / totalScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience & Education", href: "#experience" },
        { name: "Contact", href: "#contact" },
        { name: "Resume", href: "/My_main_Resume-1.pdf", download: true },
    ];

    // const scrollToSection = (e, href) => {
    //     if (href.startsWith('#')) {
    //         e.preventDefault();
    //         const element = document.querySelector(href);
    //         if (element) {
    //             window.scrollTo({
    //                 top: element.offsetTop - 64,
    //                 behavior: 'smooth'
    //             });
    //         }
    //         if (isOpen) setIsOpen(false);
    //     }
    // };

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-[#111827] dark:text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-[#111827] dark:text-white">Kishalay Lahiri</div>
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            download={link.download}
                            className={`font-medium transition-colors ${link.name === "Resume"
                                ? "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                : "text-[#111827] dark:text-white hover:text-blue-500"
                                }`}
                            onClick={(e) => link.download ? null : scrollToSection(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="p-2 rounded-md text-[#111827] dark:text-white hover:text-blue-500"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 text-[#111827] dark:text-white overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 py-4 px-4">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    download={link.download}
                                    className={`font-medium transition-colors ${link.name === "Resume"
                                        ? "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                                        : "text-[#111827] dark:text-white hover:text-blue-500"
                                        }`}
                                    onClick={(e) => link.download ? null : scrollToSection(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className="h-1 bg-blue-500"
                style={{ width: `${scrollProgress}%` }}
            ></div>
        </nav>
    );
}

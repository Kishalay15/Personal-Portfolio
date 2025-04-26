import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience & Education", href: "#experience" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                <div className="text-2xl font-bold text-[#111827]">Kishalay Lahiri</div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Links */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="md:hidden bg-white overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 py-4 px-4">
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

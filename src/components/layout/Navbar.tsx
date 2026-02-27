"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, companyDetails } from "@/data/company";
import { Phone } from "lucide-react";
import AnimatedHamburger from "./AnimatedHamburger";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="w-full max-w-full relative mx-auto">
                {/* Main Navbar Container */}
                <div
                    className="bg-brand-red text-white py-1.5 px-6 md:px-10 flex justify-between items-center shadow-2xl relative z-20"
                >
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center shrink-0">
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src="/Images/Navlogo.png"
                                alt="Echo Hearing Aid Centre Logo"
                                fill
                                sizes="(max-width: 768px) 48px, 64px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className="font-semibold text-xs uppercase tracking-widest hover:text-white/80 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Phone Button */}
                    <div className="flex items-center space-x-4">
                        <a
                            href={`tel:${companyDetails.whatsapp}`}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-4 py-1.5 md:px-5 md:py-2 rounded-2xl flex items-center space-x-2.5 transition-all border border-white/10"
                        >
                            <div className="bg-white rounded-full p-1.5 text-brand-red">
                                <Phone size={14} fill="currentColor" />
                            </div>
                            <span className="font-bold text-sm md:text-base tracking-wide hidden sm:inline">{companyDetails.whatsapp}</span>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <AnimatedHamburger isOpen={isOpen} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-2 z-10 lg:hidden px-4"
                        >
                            <nav className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-gray-900 font-bold text-lg px-4 py-3 hover:bg-gray-50 rounded-2xl transition-all"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <a
                                    href={`tel:${companyDetails.whatsapp}`}
                                    className="bg-brand-red text-white px-4 py-4 rounded-2xl font-bold text-center flex items-center justify-center space-x-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Phone size={20} fill="white" />
                                    <span>Call {companyDetails.whatsapp}</span>
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, companyDetails } from "@/data/company";
import { Phone } from "lucide-react";
import AnimatedHamburger from "./AnimatedHamburger";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50">
            <div className="w-full max-w-full relative mx-auto">
                {/* Main Navbar Container */}
                <div
                    className="bg-brand-red text-white py-0 px-6 md:px-10 flex items-center shadow-2xl relative z-20"
                >
                    {/* Header Contents Group (Logo + Nav) */}
                    <div className="flex items-center gap-10 lg:gap-16 flex-1">
                        {/* Logo Section */}
                        <Link href="/" className="flex items-center shrink-0">
                            <Image
                                src="/Images/Navbar.png"
                                alt="Echo Hearing Aid Centre Logo"
                                width={80}
                                height={80}
                                className="object-contain w-16 h-16 md:w-20 md:h-20"
                                priority
                            />
                        </Link>

                        {/* Desktop Nav Links */}
                        <ul className="hidden lg:flex items-center space-x-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.name} className="relative">
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "relative px-6 py-2.5 font-black text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 flex items-center justify-center",
                                                isActive ? "text-brand-red" : "text-white/70 hover:text-white"
                                            )}
                                        >
                                            <span className="relative z-10">{link.name}</span>
                                            {isActive && (
                                                <motion.div
                                                    layoutId="nav-pill"
                                                    className="absolute inset-0 bg-secondary/100 rounded-full shadow-lg z-0"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Phone Button & Mobile Toggle */}
                    <div className="flex items-center space-x-4 ml-auto">
                        <a
                            href={`tel:${companyDetails.whatsapp}`}
                            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-6 py-2.5 rounded-full flex items-center space-x-2.5 transition-all border border-white/10"
                        >
                            <div className="bg-white rounded-full p-1 text-brand-red flex-shrink-0 flex items-center justify-center">
                                <Phone size={12} fill="currentColor" />
                            </div>
                            <span className="font-black text-[11px] uppercase tracking-[0.2em] hidden sm:inline">{companyDetails.whatsapp}</span>
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
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={cn(
                                                "font-black text-lg px-6 py-4 rounded-2xl transition-all border-2",
                                                isActive
                                                    ? "bg-brand-red/5 border-brand-red text-brand-red"
                                                    : "bg-gray-50/50 border-transparent text-gray-900"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
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

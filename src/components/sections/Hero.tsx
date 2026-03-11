"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import BookingModal from "../ui/BookingModal";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary pt-24 pb-72 lg:pt-0 lg:pb-32">

            {/* Soundwaves Background - Top */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] flex items-end justify-around px-10 opacity-[0.05] pointer-events-none z-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                        transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 bg-brand-dark rounded-t-full"
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8 text-center lg:text-left z-20 order-2 lg:order-1"
                    >
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[5rem] font-black text-white leading-[1.1] tracking-tighter">
                                Rediscover <br />
                                <span className="text-brand-dark">the Joy of Hearing</span>
                            </h1>
                            <p className="text-lg lg:text-xl xl:text-2xl text-brand-dark/90 font-bold max-w-xl mx-auto lg:mx-0 leading-tight">
                                Expert Hearing Solutions Tailored to You
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 xl:gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-block bg-brand-dark hover:bg-brand-red text-white px-10 py-5 rounded-[2rem] font-black text-md md:text-lg xl:text-xl shadow-[0_20px_50px_rgba(173,6,0,0.4)] hover:shadow-brand-red/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Book Hearing Test
                            </button>
                        </div>
                    </motion.div>

                    {/* Right side - Abstract Matching Design */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="relative flex items-center justify-center h-full order-1 lg:order-2"
                    >
                        <div className="relative w-[160px] h-[160px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
                            {/* Abstract Floating Circles (Sound/Hearing Metaphor) */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Concentric Decorative Rings - More Integrated */}
                                <div className="absolute w-[90%] h-[90%] border-[3px] border-brand-dark/20 rounded-full blur-[1px]"></div>
                                <div className="absolute w-[75%] h-[75%] border-[2px] border-brand-dark/15 rounded-full"></div>
                                <div className="absolute w-[60%] h-[60%] border-[4px] border-brand-dark/30 rounded-full shadow-[0_0_60px_rgba(173,6,0,0.1)]"></div>

                                {/* Soft Glow Blobs */}
                                <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-white/30 rounded-full blur-[100px]"></div>
                                <div className="absolute bottom-[20%] right-[5%] w-[50%] h-[50%] bg-brand-dark/15 rounded-full blur-[120px]"></div>
                            </motion.div>

                            {/* Dynamic "Pulse" Circles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.6, opacity: 0 }}
                                    animate={{
                                        scale: [0.6, 1.8],
                                        opacity: [0, 0.3, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: i * 2,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 m-auto w-full h-full border-[2px] border-white/30 rounded-full blur-[1px]"
                                />
                            ))}

                            {/* Central Abstract Element (Ear icon) - Larger & Non-floating */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] bg-brand-dark rounded-full flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative z-10 p-4 sm:p-6 lg:p-8"
                                >
                                    <Image
                                        src="/Images/ear-icon.webp"
                                        alt="Hearing Icon"
                                        width={300}
                                        height={300}
                                        priority
                                        className="relative z-30 w-full h-full object-contain"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* In Partnership With Section - Refined Curved Design */}
            <div className="absolute bottom-0 w-full z-30">
                {/* Curve SVG */}
                <div className="absolute bottom-full left-0 w-full h-12 overflow-hidden translate-y-[1px]">
                    <svg viewBox="0 0 1440 100" className="w-full h-full text-brand-muted fill-current" preserveAspectRatio="none">
                        <path d="M0,100 C480,0 960,0 1440,100 Z" />
                    </svg>

                    {/* Integrated Waves behind the curve */}
                    <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-4 opacity-10 pointer-events-none -z-10 pb-2">
                        {[...Array(60)].map((_, i) => (
                            <motion.div
                                key={`wave-${i}`}
                                animate={{ height: i % 2 === 0 ? [5, 25, 5] : [10, 40, 10] }}
                                transition={{ duration: 1 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                                className="w-[1px] md:w-[2px] bg-brand-red rounded-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="bg-brand-muted pb-6 md:pb-10 pt-2">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4">
                            {/* "In Partnership With" title with decorative lines */}
                            <div className="flex items-center justify-center w-full gap-4 md:gap-8 opacity-40 mb-2 px-4">
                                <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-end">
                                    <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                                    <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-r from-transparent to-brand-dark"></div>
                                </div>
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-dark whitespace-nowrap">In Partnership With</span>
                                <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-start">
                                    <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-l from-transparent to-brand-dark"></div>
                                    <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                                </div>
                            </div>

                            {/* Brands with vertical separators */}
                            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-x-12">
                                {[
                                    { src: "/Images/Siemens-logo.png", alt: "Siemens" },
                                    { src: "/Images/Phonak_Logo.png", alt: "Phonak" },
                                    { src: "/Images/oticon_logo.webp", alt: "Oticon" },
                                    { src: "/Images/Starkey.png", alt: "Starkey" },
                                    { src: "/Images/Widex_logo.png", alt: "Widex" },
                                    { src: "/Images/ReSound-Logo.wine.png", alt: "ReSound" }
                                ].map((brand, index, array) => (
                                    <div key={brand.alt} className="flex items-center">
                                        <div className="relative h-6 md:h-10 w-24 md:w-32 flex items-center justify-center">
                                            <Image
                                                src={brand.src}
                                                alt={brand.alt}
                                                width={120}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

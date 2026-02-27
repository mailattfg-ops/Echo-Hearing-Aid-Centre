"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-secondary py-20 lg:py-0">

            <div className="absolute bottom-0 left-0 w-full h-[120px] flex items-end justify-around px-10 opacity-[0.12] pointer-events-none z-10">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ height: [20, Math.random() * 80 + 20, 20] }}
                        transition={{ duration: 1.5 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 bg-brand-dark rounded-t-full"
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center lg:text-left z-20 order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-brand-dark leading-[1.1] tracking-tight">
                                Hear Better,<br />
                                <span className="text-white">Live Better</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-brand-dark font-bold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Expert Hearing Solutions Tailored to You
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link
                                href="/#contact"
                                className="inline-block bg-brand-dark hover:bg-brand-red text-white px-10 py-5 rounded-[2rem] font-bold text-xl shadow-2xl hover:shadow-brand-dark/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Book Hearing Test
                            </Link>


                        </div>
                    </motion.div>

                    {/* Right side - Abstract Matching Design */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="relative flex items-center justify-center h-full order-1 lg:order-2"
                    >
                        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-full lg:max-w-[600px] lg:h-[600px]">
                            {/* Abstract Floating Circles (Sound/Hearing Metaphor) */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                {/* Concentric Decorative Rings */}
                                <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[500px] lg:h-[500px] border-2 border-brand-dark/10 rounded-full"></div>
                                <div className="absolute w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] border border-brand-dark/5 rounded-full"></div>
                                <div className="absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] border-2 border-brand-dark/20 rounded-full"></div>

                                {/* Soft Glow Blobs */}
                                <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                                <div className="absolute bottom-[30%] right-[10%] w-48 h-48 bg-brand-dark/10 rounded-full blur-[80px]"></div>
                            </motion.div>

                            {/* Dynamic "Pulse" Circles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: [0.8, 1.5],
                                        opacity: [0.3, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        delay: i * 1.3,
                                        ease: "easeOut"
                                    }}
                                    className="absolute inset-0 m-auto w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 border-2 border-white/30 rounded-full"
                                />
                            ))}

                            {/* Central Abstract Element (Ear icon) */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-brand-dark rounded-full flex items-center justify-center shadow-2xl relative z-10 p-4"
                                >
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-white/20 rounded-full animate-ping absolute"></div>
                                    <Image
                                        src="/Images/ear-icon.webp"
                                        alt="Hearing Icon"
                                        width={128}
                                        height={128}
                                        className="relative z-30 w-full h-full object-contain"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

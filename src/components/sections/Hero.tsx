"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BookingModal from "../ui/BookingModal";

export default function Hero() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    return (
        <section className="relative h-[100dvh] min-h-[600px] flex items-end xl:items-center overflow-hidden bg-white">

            {/* Background Image Container - Premium Hero */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-brand-dark">
                <Image
                    src="/Images/bg-image.webp"
                    alt="Echo Hearing Aid Centre - Rediscover Sound"
                    fill
                    priority
                    className="object-cover object-[center_90%] lg:object-[center_30%] scale-105"
                />
                
                {/* Multi-layered Premium Overlays */}
                {/* Global Vignette */}
                <div className="absolute inset-0 bg-brand-dark/20 z-10" />
                
                {/* Desktop Side Gradient (Left to Right) */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 via-brand-dark/20 to-transparent z-10 hidden lg:block" />
                
                {/* Mobile Bottom-up Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-brand-dark/20 to-transparent z-10 lg:hidden" />
            </div>

            {/* Soundwaves Background - Animated Full Width */}
            <div className="absolute bottom-0 left-0 w-full h-[40px] md:h-[60px] flex items-end justify-between px-0 md:px-0 opacity-[0.15] pointer-events-none z-20">
                {[...Array(80)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 10 }}
                        animate={{ height: [10, Math.random() * 30 + 10, 10] }}
                        transition={{ 
                            duration: 2 + Math.random() * 2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.05
                        }}
                        className="flex-1 max-w-[4px] mx-[1px] bg-gradient-to-t from-brand-red/40 to-brand-dark rounded-t-full"
                    />
                ))}
            </div>


            <div className="container mx-auto px-4 md:px-6 relative z-30 pb-20 md:pb-32 lg:pb-40 xl:pb-0">
                <div className="flex flex-col xl:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="xl:w-1/2 space-y-6 md:space-y-8 text-center xl:text-left z-20"
                    >
                        <div className="space-y-4 md:space-y-5 max-w-4xl mx-auto xl:mx-0">
                            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black text-white leading-[1.05] tracking-tighter">
                                Rediscover <br />
                                <span className="text-white opacity-95 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl block mt-1">
                                    The Joy Of Hearing
                                </span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-bold max-w-md md:max-w-xl mx-auto xl:mx-0 leading-tight">
                                Expert Hearing Solutions Tailored To You
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 justify-center xl:justify-start">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-block bg-brand-red hover:bg-brand-dark text-white px-7 py-4 sm:px-10 sm:py-5 rounded-[2rem] font-black text-sm sm:text-md md:text-lg xl:text-xl shadow-xl shadow-brand-red/20 hover:shadow-brand-dark/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Book Hearing Test
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}

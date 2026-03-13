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
        <section className="relative h-[100dvh] min-h-[600px] flex items-end lg:items-center overflow-hidden bg-secondary">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 bg-secondary">
                <Image
                    src="/Images/hero_imageOg.webp"
                    alt="Echo Hearing Aid Centre Background"
                    fill
                    priority
                    className="object-cover object-right lg:object-[center_35%] transition-all duration-700"
                />
                
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>


            <div className="container mx-auto px-4 md:px-6 relative z-30 pb-20 md:pb-32 lg:pb-0">
                <div className="flex flex-col lg:flex-row items-center h-full">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 md:space-y-8 text-center lg:text-left z-20 max-w-3xl"
                    >
                        <div className="space-y-3 md:space-y-4">
                            <h1 className="text-4xl lg:text-6xl xl:text-[5rem] font-black text-white md:text-brand-red leading-[1.1] tracking-tighter">
                                Rediscover <br />
                                <span className="text-white drop-shadow-xl">The Joy Of Hearing</span>
                            </h1>
                            <p className="text-lg lg:text-xl xl:text-2xl text-white font-bold max-w-xl mx-auto lg:mx-0 leading-tight drop-shadow-md">
                                Expert Hearing Solutions Tailored To You
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 xl:gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-block bg-brand-dark hover:bg-brand-red text-white px-10 py-5 rounded-[2rem] font-black text-md md:text-lg xl:text-xl hover:shadow-brand-red/30 transition-all duration-300 transform hover:-translate-y-1"
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

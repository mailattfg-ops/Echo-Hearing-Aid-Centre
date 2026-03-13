"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    subtitle: string;
    backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative min-h-[30vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary pt-20 pb-10 md:pt-32 md:pb-20">
            <div className="absolute inset-0 z-0 bg-secondary">
                <Image
                    src={backgroundImage || "/Images/ear-banner.jpg"}
                    alt={title}
                    fill
                    priority
                    className="object-cover opacity-60"
                />
                {/* Darkening Overlay for maximum visibility */}
                <div className="absolute inset-0 bg-black/40 z-10" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
                    {/* Back Link - Glassmorphism Style */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 text-brand-dark font-bold group transition-all duration-300 bg-white/90 hover:bg-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full shadow-lg backdrop-blur-md"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform md:w-[18px] md:h-[18px]" />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-3 md:space-y-4"
                    >
                        <h1 className="text-3xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1.1] tracking-tight drop-shadow-2xl">
                            {title}
                        </h1>
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                            <div className="w-8 h-0.5 md:w-12 md:h-1 bg-brand-red rounded-full"></div>
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                            <div className="w-8 h-0.5 md:w-12 md:h-1 bg-brand-red rounded-full"></div>
                        </div>
                        <p className="text-sm md:text-xl lg:text-2xl text-white/90 font-bold max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

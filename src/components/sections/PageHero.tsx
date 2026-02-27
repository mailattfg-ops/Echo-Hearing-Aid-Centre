"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface PageHeroProps {
    title: string;
    subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-secondary pt-32 pb-20">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/ear-banner.jpg"
                    alt="Background Pattern"
                    fill
                    className="object-center opacity-[0.08] mix-blend-overlay"
                    priority
                />
            </div>

            {/* Subtle Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/20 rounded-full -ml-48 -mb-48 blur-3xl opacity-30 z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-4"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 text-white/70 hover:text-white font-bold group transition-colors"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm uppercase tracking-widest">Back to Home</span>
                        </Link>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-brand-dark leading-[1.1] tracking-tight drop-shadow-2xl">
                            {title}
                        </h1>
                        <div className="w-24 h-1.5 bg-white/30 mx-auto rounded-full"></div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

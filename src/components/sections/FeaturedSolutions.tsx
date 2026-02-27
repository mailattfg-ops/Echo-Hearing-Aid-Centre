"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";
import { Zap, Smartphone, ShieldCheck, BatteryCharging, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Invisible Tech",
        description: "Completely-in-Canal (CIC) models that are virtually undetectable.",
        icon: Zap,
        image: "/Images/invisbletech.png",

    },
    {
        title: "Smart Sync",
        description: "Direct streaming from your smartphone for calls, music, and more.",
        icon: Smartphone,
        image: "/Images/sync.webp",

    },
    {
        title: "All-Day Power",
        description: "Advanced rechargeable batteries that last from morning to night.",
        icon: BatteryCharging,
        image: "/Images/All-Day Power.webp",

    }
];

export default function FeaturedSolutions() {
    return (
        <section className="py-12 lg:py-16 bg-brand-muted relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Top Recommendations"
                    title="Featured Hearing"
                    highlightText="Solutions"
                    subtitle="Explore our most advanced technology selected for exceptional performance and comfort."
                    centered
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Section */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent opacity-60"></div>

                                {/* Tags */}

                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex-1 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red">
                                        <feature.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-brand-dark group-hover:text-brand-red transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 font-medium leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <Link
                                        href={`/#contact?service=${encodeURIComponent(feature.title)}`}
                                        className="inline-flex items-center text-brand-red font-bold text-sm tracking-wide group/link"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight size={16} className="ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/services#technology"
                        className="inline-flex items-center px-8 py-4 bg-brand-dark text-white font-bold rounded-full hover:bg-brand-red transition-all shadow-xl hover:shadow-brand-dark/20 transform hover:-translate-y-1"
                    >
                        Explore All Technology
                    </Link>
                </motion.div>
            </div>

            {/* Background Accents */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ConsultationCTA() {
    return (
        <section className="py-8 lg:py-12 relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-brand-dark"></div>

            {/* Decorative Patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Branded Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red rounded-full -mr-32 -mt-32 blur-[120px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full -ml-32 -mb-32 blur-[100px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4 md:space-y-6 lg:space-y-8"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em] border border-white/20">
                            Expert Guidance
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Ready to Experience <br />
                            <span className="text-secondary">Better Hearing?</span>
                        </h2>
                        <p className="text-base md:text-lg lg:text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Don't let hearing loss hold you back. Schedule a comprehensive consultation with our certified audiologists today.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-row items-center justify-center gap-4 lg:gap-6"
                    >
                        <Link
                            href="/#contact"
                            className="group relative lg:px-10 lg:py-5 px-3 py-1.5 md:px-6 md:py-3 bg-white text-brand-dark rounded-full font-bold text-xs md:text-base lg:text-lg xl:text-xl shadow-2xl hover:bg-secondary hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 md:space-x-3"
                        >
                            <span>Book Consultation</span>
                            <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                        </Link>

                        <Link
                            href="https://wa.me/918073059436"
                            target="_blank"
                            className="lg:px-10 lg:py-5 px-3 py-1.5 md:px-6 md:py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-xs md:text-base lg:text-lg xl:text-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 md:space-x-3"
                        >
                            <MessageSquare size={20} />
                            <span>WhatsApp Us</span>
                        </Link>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pt-4 md:pt-6 lg:pt-8 flex flex-wrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-2 text-white/40 text-[10px] md:text-sm font-bold uppercase tracking-widest"
                    >
                        <div className="flex items-center space-x-1.5 md:space-x-2">
                            <ArrowRight size={12} className="md:size-[14px]" />
                            <span>Expert Care</span>
                        </div>
                        <div className="h-1 w-1 bg-white/20 rounded-full hidden md:block"></div>
                        <div className="flex items-center space-x-1.5 md:space-x-2">
                            <ArrowRight size={12} className="md:size-[14px]" />
                            <span>Latest Tech</span>
                        </div>
                        <div className="h-1 w-1 bg-white/20 rounded-full hidden md:block"></div>
                        <div className="flex items-center space-x-1.5 md:space-x-2">
                            <ArrowRight size={12} className="md:size-[14px]" />
                            <span>Lifetime Support</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ConsultationCTA() {
    return (
        <section className="py-20 lg:py-24 relative overflow-hidden">
            {/* Background Base */}
            <div className="absolute inset-0 bg-[#5A0D0A]"></div>

            {/* Decorative Patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Branded Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AD0600] rounded-full -mr-32 -mt-32 blur-[120px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF837E] rounded-full -ml-32 -mb-32 blur-[100px] opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-black uppercase tracking-[0.2em] border border-white/20">
                            Expert Guidance
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Ready to Experience <br />
                            <span className="text-[#FF837E]">Better Hearing?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">
                            Don't let hearing loss hold you back. Schedule a comprehensive consultation with our certified audiologists today.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/#contact"
                            className="group relative px-10 py-5 bg-white text-[#5A0D0A] rounded-full font-black text-xl shadow-2xl hover:bg-[#FF837E] hover:text-white transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
                        >
                            <span>Book Consultation</span>
                            <Calendar size={24} className="group-hover:scale-110 transition-transform" />
                        </Link>

                        <Link
                            href="https://wa.me/918073059436"
                            target="_blank"
                            className="px-10 py-5 bg-transparent border-2 border-white/30 text-white rounded-full font-black text-xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
                        >
                            <MessageSquare size={24} />
                            <span>WhatsApp Us</span>
                        </Link>
                    </motion.div>

                    {/* Trust Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pt-8 flex items-center justify-center space-x-8 text-white/40 text-sm font-bold uppercase tracking-widest"
                    >
                        <div className="flex items-center space-x-2">
                            <ArrowRight size={14} />
                            <span>Expert Care</span>
                        </div>
                        <div className="h-1 w-1 bg-white/20 rounded-full"></div>
                        <div className="flex items-center space-x-2">
                            <ArrowRight size={14} />
                            <span>Latest Tech</span>
                        </div>
                        <div className="h-1 w-1 bg-white/20 rounded-full"></div>
                        <div className="flex items-center space-x-2">
                            <ArrowRight size={14} />
                            <span>Lifetime Support</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

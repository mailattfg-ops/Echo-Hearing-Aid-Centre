"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { useRef } from "react";

const steps = [
    {
        title: "Initial Hearing Test",
        description: "A comprehensive diagnostic evaluation using state-of-the-art audiology equipment to define your unique hearing profile.",
        icon: LucideIcons.Activity,
        color: "#AD0600"
    },
    {
        title: "Expert Diagnosis",
        description: "Your results are analyzed by our specialists, providing a clear and detailed explanation of your hearing health and needs.",
        icon: LucideIcons.Search,
        color: "#5A0D0A"
    },
    {
        title: "Sleek Technology Trial",
        description: "Experience the difference with a hands-on trial of our premium, high-tech hearing aids from leading global brands.",
        icon: LucideIcons.Headset,
        color: "#FF837E"
    },
    {
        title: "Precision Fitting",
        description: "Advanced programming and physical fitting to ensure maximum comfort and optimized sound performance tailored to you.",
        icon: LucideIcons.Settings,
        color: "#AD0600"
    },
    {
        title: "Lifetime Support",
        description: "Continuous follow-ups, device fine-tuning, and dedicated care to ensure your hearing journey is always exceptional.",
        icon: LucideIcons.Heart,
        color: "#5A0D0A"
    },
];

export default function Roadmap() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1]);

    return (
        <div ref={containerRef} className="relative py-20 px-4">
            {/* Desktop Connector Path */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
                <svg width="2" height="100%" className="h-full w-full">
                    <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                    />
                    <motion.line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="#AD0600"
                        strokeWidth="3"
                        style={{ pathLength }}
                    />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16 relative z-10">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="flex-1 w-full"
                            >
                                <div className="group relative">
                                    {/* Glassmorphic Background */}
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/50 shadow-xl group-hover:bg-white transition-all duration-300"></div>

                                    <div className="relative p-6 md:p-8 space-y-4">
                                        <div className="flex items-center space-x-5">
                                            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#AD0600] transform group-hover:rotate-12 transition-transform duration-300">
                                                <step.icon size={28} />
                                            </div>
                                            <div className="space-y-0.5">
                                                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#FF837E]">Step 0{index + 1}</span>
                                                <h3 className="text-2xl font-black text-[#5A0D0A] leading-tight">{step.title}</h3>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 font-medium leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Center Point */}
                            <div className="relative flex items-center justify-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    className="w-10 h-10 rounded-full bg-[#AD0600] border-4 border-white shadow-lg relative z-10"
                                >
                                    <div className="absolute inset-0 bg-[#AD0600] rounded-full animate-ping opacity-20"></div>
                                </motion.div>
                            </div>

                            {/* Right/Left Empty space for desktop layout */}
                            <div className="hidden lg:block flex-1"></div>
                        </div>
                    );
                })}
            </div>

            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#AD0600]/5 rounded-full blur-[120px] -z-10 -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF837E]/5 rounded-full blur-[120px] -z-10 translate-x-1/2"></div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    highlightText?: string;
    subtitle?: string;
    badge?: string;
    centered?: boolean;
    dark?: boolean;
}

export default function SectionHeader({
    title,
    highlightText,
    subtitle,
    badge,
    centered = true,
    dark = false,
}: SectionHeaderProps) {
    return (
        <div className={`max-w-4xl ${centered ? "mx-auto text-center" : "text-left"} mb-16 space-y-4`}>
            {badge && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase ${dark ? "bg-white/10 text-white" : "bg-[#FF837E]/10 text-[#FF837E]"
                        }`}
                >
                    {badge}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight ${dark ? "text-white" : "text-[#5A0D0A]"
                    }`}
            >
                {title}
                {highlightText && (
                    <>
                        {" "}
                        <span className="text-[#FF837E]">{highlightText}</span>
                    </>
                )}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""
                        } ${dark ? "text-white/80" : "text-gray-600"}`}
                >
                    {subtitle}
                </motion.p>
            )}

            {/* Decorative underline for centered headers */}
            {centered && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`h-1.5 w-24 mx-auto rounded-full ${dark ? "bg-white/20" : "bg-gradient-to-r from-[#5A0D0A] to-[#FF837E]"
                        } mt-8`}
                />
            )}
        </div>
    );
}

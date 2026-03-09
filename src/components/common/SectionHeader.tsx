import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    highlightText?: string;
    subtitle?: string;
    badge?: string;
    centered?: boolean;
    dark?: boolean;
    className?: string; // Standard practice for senior components
}

export default function SectionHeader({
    title,
    highlightText,
    subtitle,
    badge,
    centered = true,
    dark = false,
    className,
}: SectionHeaderProps) {
    return (
        <div className={cn(
            "max-w-4xl mb-2 md:mb-4 lg:mb-6 xl:mb-8 space-y-2",
            centered ? "mx-auto text-center" : "text-left",
            className
        )}>
            {badge && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                        "inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase",
                        dark ? "bg-white/10 text-white" : "bg-secondary/10 text-secondary"
                    )}
                >
                    {badge}
                </motion.span>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={cn(
                    "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black",
                    dark ? "text-white" : "text-brand-dark"
                )}
            >
                {title}
                {highlightText && (
                    <>
                        {" "}
                        <span className={cn(
                            dark ? "text-secondary-light" : "text-brand-red"
                        )}>{highlightText}</span>
                    </>
                )}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={cn(
                        "text-sm md:text-base lg:text-lg xl:text-xl font-medium leading-relaxed max-w-2xl",
                        centered && "mx-auto",
                        dark ? "text-white/80" : "text-gray-600"
                    )}
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
                    className={cn(
                        "h-1.5 w-24 mx-auto rounded-full mt-4",
                        dark ? "bg-white/20" : "bg-gradient-to-r from-brand-dark to-secondary"
                    )}
                />
            )}
        </div>
    );
}

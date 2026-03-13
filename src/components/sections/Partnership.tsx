"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
    { src: "/Images/Siemens-logo.png", alt: "Siemens" },
    { src: "/Images/Phonak_Logo.png", alt: "Phonak" },
    { src: "/Images/oticon_logo.webp", alt: "Oticon" },
    { src: "/Images/Starkey.png", alt: "Starkey" },
    { src: "/Images/Widex_logo.png", alt: "Widex" },
    { src: "/Images/ReSound-Logo.wine.png", alt: "ReSound" }
];

export default function Partnership() {
    return (
        <section className="bg-brand-muted py-6 lg:py-8 xl:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* "In Partnership With" title with decorative lines */}
                    <div className="flex items-center justify-center w-full gap-4 md:gap-8 opacity-40 px-4">
                        <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-end">
                            <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                            <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-r from-transparent to-brand-dark"></div>
                        </div>
                        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-brand-dark whitespace-nowrap">
                            In Partnership With
                        </span>
                        <div className="hidden sm:flex items-center gap-1.5 flex-1 justify-start">
                            <div className="h-[1px] w-full max-w-[100px] bg-gradient-to-l from-transparent to-brand-dark"></div>
                            <div className="w-1 h-1 bg-brand-red rounded-full"></div>
                        </div>
                    </div>

                    {/* Brands with vertical separators */}
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 lg:gap-x-16">
                        {brands.map((brand) => (
                            <motion.div 
                                key={brand.alt}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 0.7, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center transition-all duration-300"
                            >
                                <div className="relative h-6 md:h-10 w-24 md:w-32 flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.alt}
                                        width={120}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";

export default function ServicesPreview() {
    return (
        <section className="py-6 lg:py-8 xl:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    badge="Our Services"
                    title="Professional"
                    highlightText="Hearing Care"
                    subtitle="Comprehensive hearing solutions tailored for a life full of sound and connection."
                    centered={true}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard
                            key={index}
                            index={index}
                            title={service.title}
                            description={service.description}
                            iconName={service.icon}
                            imageUrl={
                                index === 0 ? "/Images/hero-doctor-image.webp" :
                                    index === 1 ? "/Images/service_consultation.webp" :
                                        index === 2 ? "/Images/Fitting and Programming.webp" :
                                            index === 3 ? "/Images/Invisible and Rechargeable.webp" : undefined
                            }
                        />
                    ))}
                </div>

                {/* Call to Action - Moved below the grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center lg:px-10 lg:py-5 px-5 py-2.5 md:px-6 md:py-3 bg-brand-dark text-white text-xs md:text-base lg:text-lg xl:text-xl font-black rounded-[2rem] hover:bg-brand-red transition-all shadow-xl hover:shadow-brand-red/20 transform hover:-translate-y-1 group space-x-2 md:space-x-3"
                    >
                        <span>View All Services</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

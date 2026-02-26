"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function ServicesPreview() {
    return (
        <section className="py-12 lg:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 space-y-8">
                    <SectionHeader
                        badge="Our Services"
                        title="Professional"
                        highlightText="Hearing Care"
                        subtitle="Comprehensive hearing solutions tailored for a life full of sound and connection."
                        centered={true}
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.slice(0, 4).map((service, index) => (
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
                    className="mt-16 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center px-10 py-5 bg-[#5A0D0A] text-white font-bold rounded-full hover:bg-[#AD0600] transition-all shadow-xl hover:shadow-[#AD0600]/20 transform hover:-translate-y-1 group"
                    >
                        <span>View All Services</span>
                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

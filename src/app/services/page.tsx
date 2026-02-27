"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { Search, Headset, Calendar } from "lucide-react";

import PageHero from "@/components/sections/PageHero";
import TechShowcase from "@/components/sections/TechShowcase";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-brand-muted">
            <Navbar />

            <PageHero
                title="Our Services"
                subtitle="Comprehensive hearing care solutions tailored to your lifestyle and needs."
            />

            {/* Services Grid */}
            <section className="py-12 lg:py-16 bg-[brand-muted]">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="What We Do"
                        title="Professional"
                        highlightText="Services"
                        subtitle="Comprehensive hearing assessments and advanced technology solutions."
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
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
                                                index === 3 ? "/Images/Invisible and Rechargeable.webp" :
                                                    index === 4 ? "/Images/Repair and service.webp" :
                                                        index === 5 ? "/Images/Ear Moulds and Accessories.webp" :
                                                            index === 6 ? "/Images/Home Visit.webp" :
                                                                index === 7 ? "/Images/Follow-ups.webp" : undefined
                                }
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Technology Showcase */}
            <section className="py-12 lg:py-16 bg-[brand-muted]">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="Innovation"
                        title="Latest Hearing"
                        highlightText="Technology"
                        subtitle="Explore the groundbreaking features that define modern hearing care excellence."
                        centered={true}
                    />
                    <TechShowcase />
                </div>
            </section>

            {/* CTA Section */}
            <ConsultationCTA />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

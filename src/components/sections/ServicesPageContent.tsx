"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import PageHero from "@/components/sections/PageHero";
import ConsultationCTA from "@/components/sections/ConsultationCTA";

export default function ServicesPageContent() {
    return (
        <div className="min-h-screen bg-brand-muted">
            <Navbar />

            <PageHero
                title="Our Services"
                subtitle="Comprehensive hearing care solutions tailored to your lifestyle and needs."
                backgroundImage="/Images/our service.jpg"
            />

            {/* Services Grid */}
            <section className="py-6 lg:py-8 xl:py-12 bg-brand-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="What We Do"
                        title="Professional"
                        highlightText="Services"
                        subtitle="Comprehensive hearing assessments and advanced technology solutions."
                        centered={true}
                    />
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                        {services.map((service, index) => (
                            <div 
                                key={index} 
                                id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                                className="scroll-mt-24"
                            >
                                <ServiceCard
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
                                                            index === 5 ? "/Images/custome_ear.webp" :
                                                                index === 6 ? "/Images/Home Visit.webp" :
                                                                    index === 7 ? "/Images/Follow-ups.webp" : undefined
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ConsultationCTA />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TreatmentRoadmap from "@/components/sections/TreatmentRoadmap";
import FeaturedSolutions from "@/components/sections/FeaturedSolutions";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <Hero />
            <WhyChooseUs />
            <ServicesPreview />
            <TreatmentRoadmap />
            <FeaturedSolutions />
            <ContactSection />
            <FAQ />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

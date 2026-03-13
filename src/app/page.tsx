"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Partnership from "@/components/sections/Partnership";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TreatmentRoadmap from "@/components/sections/TreatmentRoadmap";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <Hero />
            <Partnership />
            <WhyChooseUs />
            <ServicesPreview />
            <TreatmentRoadmap />
            <FAQ />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

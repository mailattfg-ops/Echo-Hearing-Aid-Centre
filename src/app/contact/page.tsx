import { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
    title: "Contact Us - Echo Hearing Aid Centre",
    description: "Get in touch with Echo Hearing Aid Centre for expert hearing tests and audiology services in Kakkanad and Aluva. Schedule your appointment today.",
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-brand-muted">
            <Navbar />

            <PageHero
                title="Contact Us"
                subtitle="Expert care is just a message away. Reach out to our specialists today."
                backgroundImage="/Images/about_11zon.webp"
            />

            <ContactSection />

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

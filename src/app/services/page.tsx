import { Metadata } from "next";
import ServicesPageContent from "@/components/sections/ServicesPageContent";

export const metadata: Metadata = {
    title: "Our Services - Professional Hearing Care",
    description: "Explore our comprehensive hearing services, including diagnostic assessments, expert fittings, and advanced hearing aid technology in Kakkanad and Aluva.",
    alternates: {
        canonical: '/services',
    },
};

export default function ServicesPage() {
    return <ServicesPageContent />;
}

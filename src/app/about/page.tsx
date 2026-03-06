import { Metadata } from "next";
import AboutPageContent from "@/components/sections/AboutPageContent";

export const metadata: Metadata = {
    title: "About Us - Our Mission & Vision",
    description: "Learn about Echo Hearing Aid Centre's journey, our commitment to clinical excellence, and our mission to reconnect people with the sounds they love.",
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    return <AboutPageContent />;
}

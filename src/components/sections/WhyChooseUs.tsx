import { motion } from "framer-motion";
import {
    Home,
    BadgeCheck,
    Headphones,
    ArrowRight,
    Phone,
    Tag,
    Sparkles
} from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";
import { companyDetails } from "@/data/company";

const features = [
    {
        icon: Home,
        title: "FREE Home Visit",
        tagline: "Standard of care",
        desc: "Professional hearing tests and device trials in the total comfort of your home — at no extra cost.",
        cta: "Book a Home Visit",
        ctaHref: "/contact#contact",
        delay: 0
    },
    {
        icon: Tag,
        title: "Affordable Pricing",
        tagline: "Honest & Transparent",
        desc: "World-class hearing technology starting from just ₹15,000 — zero compromises on quality.",
        cta: "Starting ₹15,000",
        ctaHref: `https://wa.me/91${companyDetails.whatsapp}?text=Hi%20Echo%20Hearing%20Care,%20I'm%20interested%20in%20knowing%20more%20about%20your%20hearing%20devices%20starting%20from%20%E2%82%B915,000.%20Could%20you%20share%20some%20details?`,
        delay: 0.1
    },
    {
        icon: Headphones,
        title: "Expert Audiology",
        tagline: "Precision Medical Care",
        desc: "Certified specialists using advanced diagnostic equipment for perfectly tailoed solutions.",
        cta: "Call Specialist",
        ctaHref: `tel:+91${companyDetails.whatsapp}`,
        delay: 0.2
    },
    {
        icon: BadgeCheck,
        title: "Trusted Service",
        tagline: "Lifetime Support",
        desc: "Decades of professional excellence backed by a commitment to your long-term hearing health.",
        cta: "Explore Our Story",
        ctaHref: "/about",
        delay: 0.3
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-6 lg:py-8 xl:py-12 relative overflow-hidden bg-brand-muted">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Excellence in Care"
                    title="Why Patients"
                    highlightText="Choose Echo?"
                    subtitle="Experience world-class audiology with our dedicated specialists and premium hearing solutions."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 mt-8 md:mt-10 lg:mt-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: feature.delay }}
                            viewport={{ once: true }}
                            className="group relative h-full"
                        >
                            {/* The Card Body - Semi-solid Premium "Neo-Glass" */}
                            <div className="relative h-full bg-white rounded-[2.5rem] md:rounded-[3rem] border border-black shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col p-6 xl:p-7 2xl:p-8 overflow-hidden">

                                {/* Background Soundwave-inspired Rings (Hero DNA) */}
                                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none opacity-20 transition-opacity duration-700">
                                    <div className="w-80 h-80 border-2 border-brand-dark/20 rounded-full"></div>
                                    <div className="absolute inset-12 border-2 border-brand-dark/15 rounded-full"></div>
                                    <div className="absolute inset-24 border-2 border-brand-dark/10 rounded-full"></div>
                                </div>

                                {/* Premium Icon Section */}
                                <div className="mb-6 md:mb-8 relative inline-block">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center relative z-20 transition-all duration-700 bg-brand-red text-white shadow-xl shadow-brand-red/20 group-hover:scale-110 group-hover:rotate-6">
                                        <feature.icon size={28} strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Typography Section */}
                                <div className="flex-1 space-y-4 relative z-10">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red/60">
                                                {feature.tagline}
                                            </p>
                                            <div className="h-[1px] flex-1 bg-brand-red/10"></div>
                                            <Sparkles size={10} className="text-brand-muted" />
                                        </div>
                                        <h3 className="text-xl xl:text-[22px] 2xl:text-2xl font-black text-brand-dark leading-[1.1] tracking-tight group-hover:text-brand-red transition-colors duration-500">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 font-medium text-sm xl:text-[15px] leading-relaxed pr-2 group-hover:text-gray-600 transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Pill CTA Section */}
                                <div className="mt-4 pt-4 lg:mt-2 lg:pt-2 xl:mt-4 xl:pt-4 border-t border-gray-100 relative z-10">
                                    <a
                                        href={feature.ctaHref}
                                        target={feature.ctaHref.startsWith("http") ? "_blank" : undefined}
                                        rel={feature.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="group/btn inline-flex items-center gap-2 px-6 py-3 lg:px-4 xl:px-5 xl:py-2.5 2xl:px-8 2xl:py-4 rounded-full font-black text-[11px] lg:text-[8px] xl:text-[10px] 2xl:text-[12px] uppercase tracking-widest transition-all duration-500 relative overflow-hidden bg-brand-dark text-white hover:bg-brand-red shadow-xl hover:shadow-brand-red/30 transform hover:-translate-y-1"
                                    >
                                        <span className="relative z-10">{feature.cta}</span>
                                        {feature.cta.toLowerCase().includes("call")
                                            ? <Phone size={14} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
                                            : <ArrowRight size={14} className="relative z-10 transition-transform group-hover/btn:translate-x-1" />
                                        }
                                    </a>
                                </div>

                                {/* Subtle Excellence Rating */}
                                <div className="absolute bottom-6 right-8 flex gap-1 opacity-20 pointer-events-none">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-1 h-3 bg-brand-red rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

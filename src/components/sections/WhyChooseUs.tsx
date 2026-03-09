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

const features = [
    {
        icon: Home,
        title: "FREE Home Visit",
        tagline: "Standard of care",
        desc: "Professional hearing tests and device trials in the total comfort of your home — at no extra cost.",
        cta: "Book a Home Visit",
        ctaHref: "#contact",
        delay: 0
    },
    {
        icon: Tag,
        title: "Affordable Pricing",
        tagline: "Honest & Transparent",
        desc: "World-class hearing technology starting from just ₹15,000 — zero compromises on quality.",
        cta: "Starting ₹15,000",
        ctaHref: "/services#pricing",
        delay: 0.1
    },
    {
        icon: Headphones,
        title: "Expert Audiology",
        tagline: "Precision Medical Care",
        desc: "Certified specialists using advanced diagnostic equipment for perfectly tailoed solutions.",
        cta: "Call Specialist",
        ctaHref: "tel:+919744474441",
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
        <section className="py-6 lg:py-12 relative overflow-hidden bg-brand-muted">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Excellence in Care"
                    title="Why Patients"
                    highlightText="Choose Echo?"
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8 mt-8 md:mt-10 lg:mt-12 xl:mt-16">
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
                            <div className="relative h-full bg-white rounded-[3rem] border border-black shadow-[0_15px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col p-8 overflow-hidden">

                                {/* Background Soundwave-inspired Rings (Hero DNA) */}
                                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 pointer-events-none opacity-20 transition-opacity duration-700">
                                    <div className="w-80 h-80 border-2 border-brand-dark/20 rounded-full"></div>
                                    <div className="absolute inset-12 border-2 border-brand-dark/15 rounded-full"></div>
                                    <div className="absolute inset-24 border-2 border-brand-dark/10 rounded-full"></div>
                                </div>

                                {/* Premium Icon Section */}
                                <div className="mb-6 md:mb-8 xl:mb-10 relative inline-block">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-20 transition-all duration-700 bg-brand-red text-white shadow-xl shadow-brand-red/20 group-hover:scale-110 group-hover:rotate-6">
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
                                        <h3 className="text-2xl font-black text-brand-dark leading-[1.1] tracking-tight group-hover:text-brand-red transition-colors duration-500">
                                            {feature.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-500 font-medium text-[15px] leading-relaxed pr-2 group-hover:text-gray-600 transition-colors">
                                        {feature.desc}
                                    </p>
                                </div>

                                {/* Pill CTA Section */}
                                <div className="mt-4 pt-4 border-t border-gray-100 relative z-10">
                                    <a
                                        href={feature.ctaHref}
                                        className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-[12px] uppercase tracking-widest transition-all duration-500 relative overflow-hidden bg-brand-dark text-white hover:bg-brand-red shadow-xl hover:shadow-brand-red/30 transform hover:-translate-y-1"
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

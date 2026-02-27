import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: LucideIcons.CalendarDays,
        title: "Expertise",
        desc: "Decades of experience in professional audiology with certified experts.",
        color: "text-brand-red",
        lightColor: "bg-secondary/10"
    },
    {
        icon: LucideIcons.Zap,
        title: "Advanced Tech",
        desc: "State-of-the-art diagnostic and hearing equipment from global leaders.",
        color: "text-brand-red",
        lightColor: "bg-secondary/10"
    },
    {
        icon: LucideIcons.Heart,
        title: "Personalized Care",
        desc: "Solutions tailored to your unique lifestyle and hearing preferences.",
        color: "text-brand-red",
        lightColor: "bg-secondary/10"
    },
    {
        icon: LucideIcons.Award,
        title: "Trusted Service",
        desc: "Reliable follow-ups, maintenance, and lifetime support for your devices.",
        color: "text-brand-red",
        lightColor: "bg-secondary/10"
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-12 lg:py-16 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-30"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Our Excellence"
                    title="Why Choose"
                    highlightText="Echo Hearing?"
                    subtitle="We combine cutting-edge global technology with empathetic local care to deliver an unparalleled hearing experience."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500 overflow-hidden relative"
                        >
                            {/* Card Background Glow */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full group-hover:scale-[3] transition-transform duration-700 blur-2xl"></div>

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <feature.icon size={38} className="text-brand-red" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors relative z-10">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium relative z-10">
                                {feature.desc}
                            </p>

                            <div className="mt-8 overflow-hidden h-1.5 w-0 group-hover:w-full bg-secondary transition-all duration-500 relative z-10 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

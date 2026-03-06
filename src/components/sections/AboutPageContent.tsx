"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { companyDetails } from "@/data/company";
import { motion } from "framer-motion";
import { Target, Eye, Users, Heart, Award } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/common/SectionHeader";

export default function AboutPageContent() {
    return (
        <div className="min-h-screen bg-brand-muted">
            <Navbar />

            <PageHero
                title="About Us"
                subtitle="Committed to improving lives through better hearing since day one."
            />

            {/* Mission & Vision */}
            <section className="py-8 lg:py-16 bg-brand-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="Our Purpose"
                        title="Mission &"
                        highlightText="Vision"
                        subtitle="Defining our commitment to excellence in hearing healthcare."
                    />
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-white space-y-6 shadow-sm border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-brand-dark">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                {companyDetails.mission}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-[3rem] bg-white border border-gray-100 space-y-6 shadow-sm"
                        >
                            <div className="w-14 h-14 bg-brand-red text-white rounded-2xl flex items-center justify-center shadow-lg mb-4">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-brand-dark">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                {companyDetails.vision}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Company Story */}
            <section className="pb-16 lg:pb-16 shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="Our History"
                        title="The Echo"
                        highlightText="Journey"
                        subtitle="How we became a trusted leader in professional audiology."
                    />
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="hidden">The Echo Journey</h2>
                            <div className="hidden h-1.5 w-24 bg-brand-dark mx-auto rounded-full"></div>
                        </div>
                        <div className="space-y-6 text-lg text-gray-700 font-medium leading-relaxed">
                            <p>
                                {companyDetails.about}
                            </p>
                            <p>
                                We believe that hearing is more than just perceiving sound — it's about the emotional connection to our loved ones, the confidence in our professional lives, and the overall quality of our experience in the world.
                            </p>
                            <p>
                                Our team of certified audiologists is dedicated to providing the highest standard of care, ensuring that every patient receives a personalized solution that fits their unique hearing profile and lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="pb-12 lg:pb-16 bg-brand-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="What We Stand For"
                        title="Our Core"
                        highlightText="Values"
                        subtitle="The principles that guide every patient interaction and clinical decision."
                    />
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: Target, title: "Precision", desc: "We use laboratory-grade equipment for unmatched accuracy." },
                            { icon: Award, title: "Excellence", desc: "We strive for the highest quality in every assessment." },
                            { icon: Users, title: "Connection", desc: "We help people reconnect with their world." },
                        ].map((value, idx) => (
                            <div key={idx} className="space-y-4 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                                <div className="w-16 h-16 bg-brand-muted rounded-full flex items-center justify-center text-brand-red shadow-inner mx-auto mb-4">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark">{value.title}</h3>
                                <p className="text-gray-700 font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

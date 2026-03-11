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
            <section className="py-6 lg:py-8 xl:py-12 bg-brand-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="Our Purpose"
                        title="Mission &"
                        highlightText="Vision"
                        subtitle="Defining our commitment to excellence in hearing healthcare."
                        centered={true}
                    />
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8 md:mt-10 lg:mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 md:p-8 lg:p-10 rounded-[2.5rem] bg-white space-y-4 md:space-y-6 shadow-sm border border-gray-100"
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
                            className="p-6 md:p-8 lg:p-10 rounded-[2.5rem] bg-white border border-gray-100 space-y-4 md:space-y-6 shadow-sm"
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
            <section className="py-6 lg:py-8 xl:py-12 shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="Our History"
                        title="The Echo"
                        highlightText="Journey"
                        subtitle="How we became a trusted leader in professional audiology."
                        centered={true}
                    />
                    <div className="max-w-4xl mx-auto mt-8 md:mt-10 lg:mt-12">
                        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 font-medium leading-relaxed">
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
            <section className="py-6 lg:py-8 xl:py-12 bg-brand-muted">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionHeader
                        badge="What We Stand For"
                        title="Our Core"
                        highlightText="Values"
                        subtitle="The principles that guide every patient interaction and clinical decision."
                        centered={true}
                    />
                    <div className="grid md:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 2xl:gap-8 text-center mt-8 md:mt-10 lg:mt-12">
                        {[
                            { icon: Target, title: "Precision", desc: "We use laboratory-grade equipment for unmatched accuracy." },
                            { icon: Award, title: "Excellence", desc: "We strive for the highest quality in every assessment." },
                            { icon: Users, title: "Connection", desc: "We help people reconnect with their world." },
                        ].map((value, idx) => (
                            <div key={idx} className="space-y-4 p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-brand-red/20 group">
                                <div className="w-16 h-16 bg-brand-muted rounded-2xl flex items-center justify-center text-brand-red shadow-inner mx-auto mb-4 transform group-hover:rotate-6 transition-transform duration-300">
                                    <value.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-red transition-colors">{value.title}</h3>
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

"use client";

import { MapPin, Phone, Mail, Clock, CalendarDays, ExternalLink } from "lucide-react";
import ContactForm from "@/components/common/ContactForm";
import { companyDetails } from "@/data/company";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ContactSection() {
    return (
        <section className="py-6 lg:py-12 relative overflow-hidden bg-brand-muted" id="contact">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Get In Touch"
                    title="Let's Start Your"
                    highlightText="Hearing Journey"
                    subtitle="Expert care is just a message away. Reach out to our specialists today."
                    centered={true}
                />

                <div className="grid lg:grid-cols-12 gap-4 md:gap-8 lg:gap-12 items-stretch mt-8 md:mt-10 lg:mt-12">

                    {/* Left Side: Contact Info & Map */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Find Us",
                                    details: companyDetails.locations.join(" & "),
                                },
                                {
                                    icon: Phone,
                                    title: "Call/WhatsApp",
                                    details: `+91 ${companyDetails.whatsapp}`,
                                },
                                {
                                    icon: Mail,
                                    title: "Email Us",
                                    details: companyDetails.email,
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    details: "Mon - Sat: 9:30 AM - 7:00 PM",
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-4 p-5 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden"
                                >
                                    {/* Card Background Glow */}
                                    <div className="absolute -right-2 -top-2 w-16 h-16 bg-secondary/5 rounded-full group-hover:scale-[4] transition-transform duration-700 blur-2xl"></div>

                                    <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0 group-hover:scale-110 transition-transform relative z-10">
                                        <item.icon size={24} />
                                    </div>
                                    <div className="overflow-hidden relative z-10">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.title}</h4>
                                        <p className="font-bold text-brand-dark text-sm truncate group-hover:text-brand-red transition-colors">{item.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Live Google Map */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex-grow min-h-[400px] lg:min-h-0 rounded-[3.5rem] bg-white border border-gray-100 shadow-sm relative overflow-hidden group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.001943517989!2d76.34241817450872!3d10.016697272748242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080db871fe3933%3A0xa4da7fff7953c060!2sHEAR%20ONE%20Hearing%20Aid%20Centre!5e0!3m2!1sen!2sin!4v1773048642276!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>

                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-xl flex items-center justify-between pointer-events-none sm:pointer-events-auto">
                                <div className="pr-4">
                                    <h5 className="font-black text-brand-dark uppercase tracking-widest text-[10px] mb-1">Clinic Locations</h5>
                                    <p className="text-gray-900 font-bold text-xs sm:text-sm leading-tight italic">Hear One Hearing Aid Centre</p>
                                </div>
                                <a
                                    href="https://maps.app.goo.gl/M4F1M7mF7q7zJ1p79"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-brand-red text-white rounded-xl flex items-center justify-center hover:bg-brand-dark transition-colors shadow-lg shrink-0"
                                >
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Form Container */}
                    <div className="lg:col-span-7 flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 relative h-full flex flex-col"
                        >
                            <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                                <CalendarDays size={120} className="text-brand-red" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-black text-brand-dark mb-2 leading-none">Send an Enquiry</h3>
                                    <p className="text-gray-500 font-medium">Connect with our specialists on WhatsApp.</p>
                                </div>
                                <div className="flex-grow">
                                    <ContactForm />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

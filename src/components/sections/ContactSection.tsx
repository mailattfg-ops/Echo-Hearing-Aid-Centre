"use client";

import { MapPin, Phone, Mail, Clock, CalendarDays, ExternalLink } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { companyDetails } from "@/data/company";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section className="py-12 lg:py-16 relative overflow-hidden" id="contact">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    badge="Get In Touch"
                    title="Let's Start Your"
                    highlightText="Hearing Journey"
                    subtitle="Expert care is just a message away. Reach out to our specialists today."
                    centered={true}
                />

                <div className="grid lg:grid-cols-12 gap-12 items-stretch mt-12">

                    {/* Left Side: Contact Info & Map */}
                    <div className="lg:col-span-5 flex flex-col space-y-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Find Us",
                                    details: companyDetails.locations.join(" & "),
                                    color: "bg-blue-600"
                                },
                                {
                                    icon: Phone,
                                    title: "Call/WhatsApp",
                                    details: `+91 ${companyDetails.whatsapp}`,
                                    color: "bg-green-600"
                                },
                                {
                                    icon: Mail,
                                    title: "Email Us",
                                    details: companyDetails.email,
                                    color: "bg-[#AD0600]"
                                },
                                {
                                    icon: Clock,
                                    title: "Working Hours",
                                    details: "Mon - Sat: 9:30 AM - 7:00 PM",
                                    color: "bg-[#5A0D0A]"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center space-x-4 p-4 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                                        <item.icon size={18} />
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.title}</h4>
                                        <p className="font-bold text-gray-900 text-sm truncate group-hover:text-[#AD0600] transition-colors">{item.details}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Map Placeholder / Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="flex-grow min-h-[300px] rounded-[3.5rem] bg-white border border-gray-100 shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-[#AD0600]/5 flex items-center justify-center">
                                <MapPin size={48} className="text-[#AD0600]/20 animate-bounce" />
                            </div>

                            {/* Decorative Grid Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#AD0600 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-white shadow-xl flex items-center justify-between">
                                <div className="pr-4">
                                    <h5 className="font-black text-[#5A0D0A] uppercase tracking-widest text-[10px] mb-1">Clinic Locations</h5>
                                    <p className="text-gray-900 font-bold text-sm leading-tight">Visit us at Kakkanad or Aluva centres</p>
                                </div>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=Echo+Hearing+Aid+Centre+Kakkanad`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-[#AD0600] text-white rounded-2xl flex items-center justify-center hover:bg-[#5A0D0A] transition-colors shadow-lg shrink-0"
                                >
                                    <ExternalLink size={20} />
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
                            className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-[0_32px_80px_rgba(0,0,0,0.08)] border border-gray-100 relative h-full flex flex-col"
                        >
                            <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
                                <CalendarDays size={120} className="text-[#AD0600]" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-10">
                                    <h3 className="text-3xl font-black text-[#5A0D0A] mb-2 leading-none">Send an Enquiry</h3>
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

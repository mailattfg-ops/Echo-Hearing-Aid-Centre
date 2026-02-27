"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactForm from "@/components/common/ContactForm";
import { companyDetails } from "@/data/company";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-32 pb-16 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto">
                        We're here to answer your questions and help you on your journey to better hearing.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
                                <p className="text-lg text-gray-600">
                                    Fill out the form or use any of our contact methods to reach our specialists.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">Our Locations</h4>
                                    <ul className="text-gray-600 space-y-1">
                                        {companyDetails.locations.map(loc => (
                                            <li key={loc}>{loc}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">WhatsApp</h4>
                                    <p className="text-gray-600">+91 {companyDetails.whatsapp}</p>
                                </div>

                                <div className="space-y-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                                    <p className="text-gray-600">{companyDetails.email}</p>
                                </div>

                                <div className="space-y-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-lg">Working Hours</h4>
                                    <p className="text-gray-600">Mon - Sat: 9 AM - 7 PM</p>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="aspect-video bg-gray-100 rounded-[2rem] border border-gray-100 flex items-center justify-center text-gray-400">
                                <div className="text-center space-y-2">
                                    <MapPin size={48} className="mx-auto" />
                                    <p className="font-medium">Interactive Map Coming Soon</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

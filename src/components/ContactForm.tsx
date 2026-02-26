"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { companyDetails, services } from "@/data/company";
import { Send, CheckCircle2 } from "lucide-react";

function ContactFormInner() {
    const searchParams = useSearchParams();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        location: "",
        service: "",
        requirement: "",
    });

    useEffect(() => {
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            setFormData(prev => ({ ...prev, service: decodeURIComponent(serviceParam) }));
        }
    }, [searchParams]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Hello ${companyDetails.name},
I would like to enquire about your services.

Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Service interested: ${formData.service || "General Inquiry"}
Requirement: ${formData.requirement}`;

        const whatsappUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5A0D0A]/60 ml-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#AD0600]/20 focus:bg-white focus:ring-4 focus:ring-[#AD0600]/5 outline-none transition-all font-medium text-gray-900"
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5A0D0A]/60 ml-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#AD0600]/20 focus:bg-white focus:ring-4 focus:ring-[#AD0600]/5 outline-none transition-all font-medium text-gray-900"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5A0D0A]/60 ml-1">Location</label>
                    <select
                        name="location"
                        required
                        value={formData.location}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#AD0600]/20 focus:bg-white focus:ring-4 focus:ring-[#AD0600]/5 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                        onChange={handleChange}
                    >
                        <option value="">Select Location</option>
                        {companyDetails.locations.map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#5A0D0A]/60 ml-1">Service Required</label>
                    <select
                        name="service"
                        required
                        value={formData.service}
                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#AD0600]/20 focus:bg-white focus:ring-4 focus:ring-[#AD0600]/5 outline-none transition-all font-medium text-gray-900 appearance-none cursor-pointer"
                        onChange={handleChange}
                    >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                            <option key={service.title} value={service.title}>{service.title}</option>
                        ))}
                        <option value="Other Technology">Other Technology</option>
                        <option value="General Inquiry">General Inquiry</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-[#5A0D0A]/60 ml-1">Message</label>
                <textarea
                    name="requirement"
                    rows={4}
                    required
                    placeholder="Tell us about your hearing needs..."
                    value={formData.requirement}
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-transparent focus:border-[#AD0600]/20 focus:bg-white focus:ring-4 focus:ring-[#AD0600]/5 outline-none transition-all font-medium text-gray-900 resize-none"
                    onChange={handleChange}
                ></textarea>
            </div>

            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitted}
                className={`w-full font-black py-5 rounded-2xl shadow-2xl transition-all flex items-center justify-center space-x-3 text-lg ${isSubmitted ? 'bg-green-600 text-white' : 'bg-[#AD0600] hover:bg-[#5A0D0A] text-white'}`}
            >
                {isSubmitted ? (
                    <>
                        <CheckCircle2 size={22} />
                        <span>Inquiry Sent!</span>
                    </>
                ) : (
                    <>
                        <span>Send WhatsApp Inquiry</span>
                        <Send size={20} />
                    </>
                )}
            </motion.button>
            <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Our experts usually respond within 24 hours
            </p>
        </form>
    );
}

export default function ContactForm() {
    return (
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center text-gray-400">Loading Form...</div>}>
            <ContactFormInner />
        </Suspense>
    );
}

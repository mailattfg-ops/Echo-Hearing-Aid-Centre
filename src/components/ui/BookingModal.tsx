"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, User, Hash, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Lock background scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        date: "",
        time: "",
        phone: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `✨ *Hearing Test Appointment* ✨
----------------------------
👤 *Name:* ${formData.name}
🔢 *Age:* ${formData.age}
📞 *Phone:* ${formData.phone}
📅 *Date:* ${formData.date}
⏰ *Time:* ${formData.time}
----------------------------`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp URL (using the number from ConsultationCTA)
        const whatsappUrl = `https://wa.me/918073059436?text=${encodedMessage}`;

        // Redirect to WhatsApp
        window.open(whatsappUrl, "_blank");

        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-brand-red/10"
                    >
                        {/* Header */}
                        <div className="bg-brand-red p-8 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-3xl font-black mb-2">Book Hearing Test</h2>
                            <p className="text-white/80 font-medium italic">Your journey to better hearing starts here.</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-5">
                            <div className="space-y-4">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Patient Name</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors">
                                            <User size={20} />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter patient's full name"
                                            className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-brand-dark"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Age */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Age</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors">
                                                <Hash size={20} />
                                            </div>
                                            <input
                                                required
                                                type="number"
                                                placeholder="Age"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-brand-dark"
                                                value={formData.age}
                                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Phone Number</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors">
                                                <Phone size={20} />
                                            </div>
                                            <input
                                                required
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-brand-dark"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Date */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Preferred Date</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors pointer-events-none">
                                                <Calendar size={20} />
                                            </div>
                                            <input
                                                required
                                                type="date"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-brand-dark appearance-none"
                                                value={formData.date}
                                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    {/* Time */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-brand-dark/40 ml-1">Preferred Time</label>
                                        <div className="relative group">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-red/50 group-focus-within:text-brand-red transition-colors pointer-events-none">
                                                <Clock size={20} />
                                            </div>
                                            <input
                                                required
                                                type="time"
                                                className="w-full bg-brand-muted border-2 border-transparent focus:border-brand-red/20 focus:bg-white rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold text-brand-dark"
                                                value={formData.time}
                                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-dark hover:bg-brand-red text-white py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-brand-red/20 mt-2"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

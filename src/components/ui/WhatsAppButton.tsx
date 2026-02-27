"use client";

import { motion } from "framer-motion";
import { companyDetails } from "@/data/company";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
    const whatsappUrl = `https://wa.me/91${companyDetails.whatsapp}?text=${encodeURIComponent(
        "Hello Echo Hearing Aid Centre,\nI would like to enquire about hearing services."
    )}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={cn(
                "fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-whatsapp-dark transition-colors"
            )}
            aria-label="Contact on WhatsApp"
        >
            <MessageCircle size={32} />
        </motion.a>
    );
}

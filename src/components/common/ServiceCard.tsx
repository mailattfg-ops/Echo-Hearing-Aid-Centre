"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: string;
    imageUrl?: string;
    index: number;
}

export default function ServiceCard({ title, description, iconName, imageUrl, index }: ServiceCardProps) {
    const router = useRouter();
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.Activity;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center text-secondary">
                            <Icon size={40} />
                        </div>
                    </div>
                )}
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                        {title}
                    </h3>
                    {!imageUrl && (
                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary transform group-hover:rotate-12 transition-transform">
                            <Icon size={20} />
                        </div>
                    )}
                </div>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                    {description}
                </p>
                <a
                    href={`/#contact?service=${encodeURIComponent(title)}`}
                    className="mt-auto flex items-center text-brand-red font-black group/link uppercase tracking-wider text-xs"
                    onClick={(e) => {
                        e.preventDefault();
                        const url = `/#contact?service=${encodeURIComponent(title)}`;

                        if (window.location.pathname === '/') {
                            // On home page: Update URL without refresh and scroll
                            window.history.pushState({}, '', url);
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth' });

                            // Dispatch custom event to notify ContactForm
                            window.dispatchEvent(new Event('popstate'));
                        } else {
                            // On other pages: Navigate back to home with params
                            router.push(url);
                        }
                    }}
                >
                    <span className="mr-2">Learn More</span>
                    <LucideIcons.ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </a>
            </div>

            {/* Bottom accent bar */}
            <div className="h-2 w-0 group-hover:w-full bg-secondary transition-all duration-500"></div>
        </motion.div>
    );
}

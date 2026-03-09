import Link from "next/link";
import Image from "next/image";
import { companyDetails, navLinks } from "@/data/company";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary pt-12 pb-6 relative overflow-hidden">
            {/* Premium Decorative Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full -mr-48 -mt-48 blur-[120px] animate-pulse duration-[10s]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full -ml-24 -mb-24 blur-[100px]"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 items-stretch">
                    {/* Column 2: Navigation - Moved to first row on mobile */}
                    <div className="space-y-6 lg:order-2">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-dark/70">Explore</h4>
                            <div className="h-1 w-8 bg-brand-dark/20 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-brand-dark hover:text-brand-red transition-all duration-300 font-extrabold flex items-center group text-base"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/20 mr-3 group-hover:w-4 group-hover:bg-brand-red transition-all duration-500"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Expertise - Moved to first row on mobile */}
                    <div className="space-y-6 lg:order-3">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-dark/70">Services</h4>
                            <div className="h-1 w-8 bg-brand-dark/20 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {[
                                "Hearing Assessment",
                                "Aid Fitting",
                                "Repair & Service",
                                "Custom Moulds",
                                "Home Visit"
                            ].map((service) => (
                                <li key={service} className="text-brand-dark/80 font-bold flex items-center group cursor-default text-sm">
                                    <div className="w-1.5 h-1.5 rounded-sm bg-brand-dark/10 mr-3 rotate-45 group-hover:bg-brand-red group-hover:rotate-90 transition-all duration-500"></div>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch - Second row on mobile */}
                    <div className="space-y-6 lg:order-4 flex flex-col">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-brand-dark/70">Contact</h4>
                            <div className="h-1 w-8 bg-brand-dark/20 rounded-full"></div>
                        </div>
                        <div className="space-y-4 flex-grow flex flex-col justify-end">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-brand-dark/5 rounded-xl flex items-center justify-center shrink-0 text-brand-dark">
                                    <MapPin size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40">Find Us</p>
                                    <p className="text-xs font-black text-brand-dark leading-tight italic">{companyDetails.locations.join(" • ")}</p>
                                </div>
                            </div>
                            <a href={`tel:${companyDetails.whatsapp}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-brand-dark/5 rounded-xl flex items-center justify-center shrink-0 text-brand-dark">
                                    <Phone size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40">WhatsApp</p>
                                    <p className="text-xs font-black text-brand-dark">{companyDetails.whatsapp}</p>
                                </div>
                            </a>
                            <a href={`mailto:${companyDetails.email}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-brand-dark/5 rounded-xl flex items-center justify-center shrink-0 text-brand-dark">
                                    <Mail size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-brand-dark/40">Email</p>
                                    <p className="text-xs font-black text-brand-dark break-all">{companyDetails.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Column 1: Brand & Logo - Placed in "empty" spot in 2x2 grid on mobile */}
                    <div className="lg:order-1 lg:pr-8 flex flex-col justify-between">
                        <Link href="/" className="inline-block transition-transform duration-500">
                            <div className="inline-block overflow-hidden relative w-36 h-36 md:w-64 md:h-40">
                                <Image
                                    src="/Images/red bg.png"
                                    alt="Echo Hearing Logo"
                                    fill
                                    sizes="(max-width: 768px) 128px, 256px"
                                    className="object-contain object-left relative z-10"
                                />
                            </div>
                        </Link>
                        <div className="flex space-x-3 md:space-x-4">
                            {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-9 h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-500 border border-white/20 text-brand-dark shadow-sm hover:shadow-brand-dark/20 hover:-translate-y-1"
                                >
                                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Final Copyright */}
                <div className="mt-12 pt-8 border-t border-brand-dark/10 flex flex-col md:grid md:grid-cols-3 items-center gap-6">
                    {/* Copyright - Left on Desktop */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/40">
                            © {new Date().getFullYear()} {companyDetails.name}
                        </p>
                    </div>

                    {/* Designer Link - Center on Desktop, Last on Mobile */}
                    <div className="order-3 md:order-2 flex justify-center">
                        <a
                            href="https://thinkforgeglobal.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[9px] font-bold text-brand-dark/30 hover:text-brand-red transition-colors flex flex-col md:flex-row items-center group text-center"
                        >
                            <span className="uppercase tracking-[0.3em] mb-1 md:mb-0">Designed & Developed by</span>
                            <span className="md:ml-2 text-brand-dark/60 font-black group-hover:text-brand-red transition-colors">THINK FORGE GLOBAL</span>
                        </a>
                    </div>

                    {/* Privacy & Terms - Right on Desktop, First on Mobile */}
                    <div className="order-1 md:order-3 flex justify-center md:justify-end space-x-8">
                        {['Privacy', 'Terms'].map((text) => (
                            <span
                                key={text}
                                className="text-[10px] font-black uppercase tracking-widest text-brand-dark/50 hover:text-brand-dark transition-all duration-300 relative group"
                            >
                                {text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-dark/30 group-hover:w-full transition-all duration-500"></span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { companyDetails, navLinks } from "@/data/company";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#FF837E] pt-12 pb-6 relative overflow-hidden">
            {/* Premium Decorative Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full -mr-48 -mt-48 blur-[120px] animate-pulse duration-[10s]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#AD0600]/10 rounded-full -ml-24 -mb-24 blur-[100px]"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start">
                    {/* Column 1: Brand & Logo */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block transition-transform duration-500 hover:scale-105">
                            <div className="p-2 inline-block overflow-hidden relative">
                                <img
                                    src="/Images/red bg.png"
                                    alt="Echo Hearing Logo"
                                    className="h-32 md:h-40 w-auto object-contain relative z-10"
                                />
                            </div>
                        </Link>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-[#5A0D0A] hover:text-white transition-all duration-500 border border-white/20 text-[#5A0D0A] shadow-sm hover:shadow-[#5A0D0A]/20 hover:-translate-y-1"
                                >
                                    <Icon size={18} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A0D0A]/70">Explore</h4>
                            <div className="h-1 w-8 bg-[#5A0D0A]/20 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[#5A0D0A] hover:text-[#AD0600] transition-all duration-300 font-extrabold flex items-center group text-base"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5A0D0A]/20 mr-3 group-hover:w-4 group-hover:bg-[#AD0600] transition-all duration-500"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Expertise */}
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A0D0A]/70">Services</h4>
                            <div className="h-1 w-8 bg-[#5A0D0A]/20 rounded-full"></div>
                        </div>
                        <ul className="space-y-3.5">
                            {[
                                "Hearing Assessment",
                                "Aid Fitting",
                                "Repair & Service",
                                "Custom Moulds",
                                "Home Visit"
                            ].map((service) => (
                                <li key={service} className="text-[#5A0D0A]/80 font-bold flex items-center group cursor-default text-sm">
                                    <div className="w-1.5 h-1.5 rounded-sm bg-[#5A0D0A]/10 mr-3 rotate-45 group-hover:bg-[#AD0600] group-hover:rotate-90 transition-all duration-500"></div>
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Get in Touch */}
                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#5A0D0A]/70">Contact</h4>
                            <div className="h-1 w-8 bg-[#5A0D0A]/20 rounded-full"></div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-[#5A0D0A]/5 rounded-xl flex items-center justify-center shrink-0 text-[#5A0D0A]">
                                    <MapPin size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#5A0D0A]/40">Find Us</p>
                                    <p className="text-xs font-black text-[#5A0D0A] leading-tight italic">{companyDetails.locations.join(" • ")}</p>
                                </div>
                            </div>
                            <a href={`tel:${companyDetails.whatsapp}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-[#5A0D0A]/5 rounded-xl flex items-center justify-center shrink-0 text-[#5A0D0A]">
                                    <Phone size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#5A0D0A]/40">WhatsApp</p>
                                    <p className="text-xs font-black text-[#5A0D0A]">{companyDetails.whatsapp}</p>
                                </div>
                            </a>
                            <a href={`mailto:${companyDetails.email}`} className="flex items-center space-x-4 group hover:translate-x-1 transition-transform">
                                <div className="w-10 h-10 bg-[#5A0D0A]/5 rounded-xl flex items-center justify-center shrink-0 text-[#5A0D0A]">
                                    <Mail size={18} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-0.5">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-[#5A0D0A]/40">Email</p>
                                    <p className="text-xs font-black text-[#5A0D0A] break-all">{companyDetails.email}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Final Copyright */}
                <div className="mt-12 pt-6 border-t border-[#5A0D0A]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#5A0D0A]/40 order-2 md:order-1">
                        © {new Date().getFullYear()} {companyDetails.name} — <span className="italic">Elevating Auditory Experiences</span>
                    </p>
                    <div className="flex space-x-8 order-1 md:order-2">
                        {['Privacy', 'Terms'].map((text) => (
                            <Link
                                key={text}
                                href={`/${text.toLowerCase()}`}
                                className="text-[10px] font-black uppercase tracking-widest text-[#5A0D0A]/50 hover:text-[#5A0D0A] transition-all duration-300 relative group"
                            >
                                {text}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5A0D0A]/30 group-hover:w-full transition-all duration-500"></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

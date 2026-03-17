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
                                { name: "Hearing Assessment", href: "/services#comprehensive-hearing-assessment" },
                                { name: "Aid Fitting", href: "/services#hearing-aid-fitting-programming" },
                                { name: "Repair & Service", href: "/services#hearing-aid-repair-servicing" },
                                { name: "Custom Moulds", href: "/services#custom-ear-moulds-accessories" },
                                { name: "Home Visit", href: "/services#home-visit-hearing-care" }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link
                                        href={service.href}
                                        className="text-brand-dark/80 hover:text-brand-red font-bold flex items-center group text-sm transition-colors"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-sm bg-brand-dark/10 mr-3 rotate-45 group-hover:bg-brand-red group-hover:rotate-90 transition-all duration-500"></div>
                                        <span>{service.name}</span>
                                    </Link>
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
                        {/* <div className="flex space-x-3 md:space-x-4">
                            {[
                                { Icon: Instagram, name: "Instagram" },
                                { Icon: Facebook, name: "Facebook" },
                                { Icon: Youtube, name: "Youtube" }
                            ].map(({ Icon, name }, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    aria-label={`Visit our ${name} page`}
                                    className="w-9 h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all duration-500 border border-white/20 text-brand-dark shadow-sm hover:shadow-brand-dark/20 hover:-translate-y-1"
                                >
                                    <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                                </a>
                            ))}
                        </div> */}
                    </div>
                </div>

                {/* Final Copyright */}
                <div className="mt-4 pt-4 lg:mt-12 lg:pt-8 border-t border-brand-dark/10 flex flex-col md:flex-row items-center justify-between gap-2 lg:gap-6">
                    {/* Copyright & Terms */}
                    <div className="order-2 md:order-1 text-center md:text-left flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/40">
                            © {new Date().getFullYear()} {companyDetails.name}
                        </p>
                        <span className="hidden sm:inline-block text-brand-dark/20 text-[10px]">|</span>
                        <Link href="/privacy" className="text-[10px] font-black uppercase tracking-widest text-brand-dark/50 hover:text-brand-dark transition-all duration-300 relative group pt-2 sm:pt-0">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-dark/30 group-hover:w-full transition-all duration-500"></span>
                        </Link>
                        <span className="hidden sm:inline-block text-brand-dark/20 text-[10px]">|</span>
                        <Link href="/terms" className="text-[10px] font-black uppercase tracking-widest text-brand-dark/50 hover:text-brand-dark transition-all duration-300 relative group pt-2 sm:pt-0">
                            Terms & Conditions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-dark/30 group-hover:w-full transition-all duration-500"></span>
                        </Link>
                    </div>

                    {/* Designer Link */}
                    <div className="order-3 md:order-2 flex justify-center md:justify-end">
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
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy",
    description: "At Echo Hearing Aid Centre, we respect your privacy and are committed to protecting your personal information.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white text-brand-dark selection:bg-brand-red/10 selection:text-brand-red">
            {/* Header / Navigation */}
            <div className="border-b border-brand-dark/5 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex items-center text-sm font-bold text-brand-dark/60 hover:text-brand-red transition-colors group"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-dark/30">
                        Echo Hearing Aid Centre
                    </div>
                </div>
            </div>

            <article className="container mx-auto px-4 py-6 lg:py-8 xl:py-12 max-w-3xl">
                {/* Hero section for the page */}
                <div className="mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-brand-red/5 text-brand-red text-[10px] font-black uppercase tracking-widest mb-4">
                        Policy
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-brand-dark/60 font-medium leading-relaxed">
                        At Echo Hearing Aid Centre, we respect your privacy and are committed to protecting your personal information.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 prose prose-slate max-w-none">
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Information We Collect</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            We may collect basic details such as your name, phone number, email address, and any information you submit through our contact or appointment forms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">How We Use Your Information</h2>
                        </div>
                        <div className="text-brand-dark/70 font-medium leading-relaxed">
                            <p className="mb-4">Your information is used only to:</p>
                            <ul className="space-y-3 list-none pl-0">
                                {[
                                    "Respond to enquiries",
                                    "Schedule appointments or hearing tests",
                                    "Provide information about our services"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red/40 mt-2 mr-3 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Data Protection</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            We take reasonable measures to protect your personal information and prevent unauthorized access.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Third-Party Sharing</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            We do not sell or share your personal information with third parties unless required by law.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Consent</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            By using our website, you agree to this Privacy Policy.
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-brand-dark/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark/30">
                        Last Updated: March 2024
                    </p>
                </div>
            </article>
        </main>
    );
}

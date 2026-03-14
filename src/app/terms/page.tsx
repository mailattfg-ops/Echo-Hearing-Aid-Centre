import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata = {
    title: "Terms & Conditions",
    description: "By using the Echo Hearing Aid Centre website, you agree to the following terms and conditions.",
};

export default function TermsPage() {
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
                        Legal
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
                        Terms & Conditions
                    </h1>
                    <p className="text-xl text-brand-dark/60 font-medium leading-relaxed">
                        By using the Echo Hearing Aid Centre website, you agree to the following terms.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-12 prose prose-slate max-w-none">
                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Website Content</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            All content on this website is provided for general information purposes and should not replace professional medical advice.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Appointments</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            Submitting a form or enquiry does not confirm an appointment until it is verified by our team.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Intellectual Property</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            All website content, including text, images, and branding, belongs to Echo Hearing Aid Centre and may not be copied or reused without permission.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Limitation of Liability</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            Echo Hearing Aid Centre is not responsible for any damages arising from the use of this website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-1 bg-brand-red rounded-full"></span>
                            <h2 className="text-xl font-black uppercase tracking-wider text-brand-dark/80">Updates</h2>
                        </div>
                        <p className="text-brand-dark/70 font-medium leading-relaxed">
                            We may update these terms or policies at any time without prior notice.
                        </p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-brand-dark/5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-dark/30">
                        Last Updated: March 2026
                    </p>
                </div>
            </article>
        </main>
    );
}

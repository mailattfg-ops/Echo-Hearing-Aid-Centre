"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "How often should I have my hearing tested?",
        a: "We recommend a comprehensive hearing assessment at least once every year, especially if you are over 50 or notice any changes in your hearing. Regular checks help in early detection and better management."
    },
    {
        q: "Do you offer home visit services?",
        a: "Yes, we provide professional home visit hearing care for those who have difficulty visiting our centres in Kakkanad or Aluva. Our experts bring the necessary diagnostic equipment to your doorstep."
    },
    {
        q: "How long do hearing aids last?",
        a: "Modern hearing aids typically last between 3 to 7 years. Factors like the model, daily usage environment, and how well they are maintained through regular servicing play a significant role in their longevity."
    },
    {
        q: "Can hearing aids be repaired?",
        a: "Absolutely. We offer professional repair and servicing for most global hearing aid brands. Regular maintenance at our centres can also prevent major issues and extend the life of your devices."
    },
    {
        q: "Are the latest hearing aids compatible with smartphones?",
        a: "Yes, most of our featured technology solutions offer direct Bluetooth streaming for hands-free calls, music, and app-based adjustments for both iOS and Android devices."
    }
];

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-gray-100 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-4 md:py-6 flex items-center justify-between text-left group transition-all"
            >
                <div className="flex items-center space-x-4">
                    <div className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center transition-colors",
                        isOpen ? "bg-brand-red text-white" : "bg-brand-red/5 text-brand-red"
                    )}>
                        <HelpCircle size={18} />
                    </div>
                    <span className={cn(
                        "text-base md:text-lg font-bold transition-colors",
                        isOpen ? "text-brand-red" : "text-brand-dark group-hover:text-brand-red"
                    )}>
                        {question}
                    </span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        "text-brand-red",
                        isOpen ? "opacity-100" : "opacity-40"
                    )}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pl-10 md:pl-12 pr-4 md:pr-8">
                            <p className="text-gray-600 font-medium leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-6 lg:py-12 relative">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    badge="Clarification"
                    title="Essential"
                    highlightText="Queries"
                    subtitle="Find quick answers to the most common questions about professional hearing care and our services."
                    centered
                />

                <div className="max-w-3xl mx-auto mt-6 lg:mt-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden p-4 md:p-8">
                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                question={faq.q}
                                answer={faq.a}
                                isOpen={openIndex === idx}
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-6 lg:mt-8 xl:mt-10 text-center">
                    <p className="text-gray-500 font-medium text-xs lg:text-sm">
                        Didn't find what you're looking for?
                        <a href="#contact" className="ml-2 text-brand-red font-black hover:underline tracking-tight">
                            Consult our experts directly
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

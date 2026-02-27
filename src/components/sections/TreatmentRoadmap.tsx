"use client";

import Roadmap from "@/components/common/Roadmap";
import SectionHeader from "@/components/common/SectionHeader";

export default function TreatmentRoadmap() {
    return (
        <section className="py-12 lg:py-16 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeader
                    badge="The Process"
                    title="Your Road to"
                    highlightText="Better Hearing"
                    subtitle="A simple, four-step journey to rediscovering the sounds you love."
                />
                <Roadmap />
            </div>
        </section>
    );
}

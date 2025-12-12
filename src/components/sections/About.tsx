"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";

export default function About() {
    return (
        <Section id="about" className="text-white">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="rounded-2xl bg-white/5 backdrop-blur-md shadow-lg shadow-black/10 p-6 md:p-8">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                        About
                    </h2>
                    <div className="space-y-6">
                        {resumeData.about.map((paragraph, index) => (
                            <p key={index} className="text-base md:text-xl leading-relaxed font-light text-white">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

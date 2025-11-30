"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";

export default function About() {
    return (
        <Section id="about" className="bg-white text-black">
            <div className="max-w-4xl px-4 md:px-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    About
                </h2>
                <p className="text-xl md:text-3xl leading-relaxed font-light text-neutral-800">
                    {resumeData.about}
                </p>
            </div>
        </Section>
    );
}

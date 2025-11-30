"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";

export default function Experience() {
    return (
        <Section id="experience" className="bg-neutral-50 text-black">
            <div className="max-w-4xl w-full px-4 md:px-8">
                <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">
                    Experience
                </h2>
                <div className="space-y-16">
                    {resumeData.experience.map((job, index) => (
                        <div key={index} className="grid md:grid-cols-[1fr_2fr] gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold">{job.company}</h3>
                                <p className="text-neutral-500 mt-2">{job.period}</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-medium mb-4">{job.role}</h4>
                                <p className="text-lg text-neutral-700 leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
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

                    {/* Tech Stacks Section */}
                    <div className="mt-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                            Tech Stacks
                        </h3>
                        <div className="space-y-6">
                            {Object.entries(resumeData.categorizedSkills).map(([category, skills]) => (
                                <div key={category}>
                                    <h4 className="text-lg md:text-xl font-semibold mb-3 text-white/80">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill, index) => (
                                            <div
                                                key={index}
                                                className="group relative flex items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300"
                                            >
                                                <Image
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    width={80}
                                                    height={80}
                                                    className="object-contain"
                                                    unoptimized
                                                />
                                                <span className="absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

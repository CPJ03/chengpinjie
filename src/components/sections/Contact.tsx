"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";
import Link from "next/link";

export default function Contact() {
    return (
        <Section id="contact" className="text-white min-h-[50vh]">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                    Contact
                </h2>
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-xl">
                    <Link
                        href={`mailto:${resumeData.contact.email}`}
                        className="hover:text-neutral-500 transition-colors underline decoration-1 underline-offset-4"
                    >
                        Email
                    </Link>
                    <Link
                        href={resumeData.contact.github}
                        target="_blank"
                        className="hover:text-neutral-500 transition-colors underline decoration-1 underline-offset-4"
                    >
                        GitHub
                    </Link>
                    <Link
                        href={resumeData.contact.linkedin}
                        target="_blank"
                        className="hover:text-neutral-500 transition-colors underline decoration-1 underline-offset-4"
                    >
                        LinkedIn
                    </Link>
                    <Link
                        href={resumeData.contact.CV}
                        target="_blank"
                        className="hover:text-neutral-500 transition-colors underline decoration-1 underline-offset-4"
                    >
                        CV
                    </Link>
                </div>
                <div className="mt-20 text-sm text-neutral-400">
                    © {new Date().getFullYear()} {resumeData.name}.
                </div>
            </div>
        </Section>
    );
}

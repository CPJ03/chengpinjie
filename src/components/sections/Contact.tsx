"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";
import Link from "next/link";

export default function Contact() {
    return (
        <Section id="contact" className="bg-white text-black min-h-[50vh]">
            <div className="max-w-4xl w-full">
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
                </div>
                <div className="mt-20 text-sm text-neutral-400">
                    © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </div>
            </div>
        </Section>
    );
}

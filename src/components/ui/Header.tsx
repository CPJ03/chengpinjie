"use client";

import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start text-black pointer-events-none">
            {/* Name Section with Glassmorphism */}
            <div className="flex flex-col pointer-events-auto px-6 py-4 rounded-2xl relative overflow-hidden shadow-lg shadow-black/10">
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-50" style={{ padding: '1px' }} />

                {/* Content */}
                <div className="relative z-10">
                    <span className="font-bold text-lg tracking-tight block">{resumeData.name}</span>
                    <span className="text-sm text-neutral-700 block mt-1">{resumeData.title}</span>
                </div>
            </div>

            {/* Navigation with Glassmorphism */}
            <nav className="flex gap-6 text-sm font-medium pointer-events-auto px-6 py-4 rounded-2xl relative overflow-hidden shadow-lg shadow-black/10">
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-50" style={{ padding: '1px' }} />

                {/* Navigation Links */}
                <div className="relative z-10 flex gap-6">
                    <Link href="#projects" className="hover:text-neutral-600 transition-colors">
                        Projects
                    </Link>
                    <Link href="#about" className="hover:text-neutral-600 transition-colors">
                        About
                    </Link>
                    <Link href="#experience" className="hover:text-neutral-600 transition-colors">
                        Experience
                    </Link>
                    <Link href="#contact" className="hover:text-neutral-600 transition-colors">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

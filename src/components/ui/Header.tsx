"use client";

import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
            <div className="flex flex-col pointer-events-auto">
                <span className="font-bold text-lg tracking-tight">{resumeData.name}</span>
                <span className="text-sm text-neutral-400">{resumeData.title}</span>
            </div>

            <nav className="flex gap-6 text-sm font-medium pointer-events-auto">
                <Link href="#projects" className="hover:text-neutral-400 transition-colors">
                    Works
                </Link>
                <Link href="#about" className="hover:text-neutral-400 transition-colors">
                    About
                </Link>
                <Link href="#contact" className="hover:text-neutral-400 transition-colors">
                    Contact
                </Link>
            </nav>
        </header>
    );
}

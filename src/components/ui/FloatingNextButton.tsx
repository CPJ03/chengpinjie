"use client";

import { useState, useEffect } from "react";

const sections = [
    { id: "hero", label: "Hero" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function FloatingNextButton() {
    const [currentSection, setCurrentSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            let activeIndex = 0;
            for (let i = 0; i < sections.length; i++) {
                const element = document.getElementById(sections[i].id);
                if (element && element.offsetTop <= scrollPosition) {
                    activeIndex = i;
                }
            }
            setCurrentSection(activeIndex);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToPreviousSection = () => {
        if (currentSection > 0) {
            const previousId = sections[currentSection - 1].id;
            const element = document.getElementById(previousId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const scrollToNextSection = () => {
        if (currentSection < sections.length - 1) {
            const nextId = sections[currentSection + 1].id;
            const element = document.getElementById(nextId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
            {/* Up Arrow Button - appears when not on first section */}
            {currentSection > 0 && (
                <button
                    onClick={scrollToPreviousSection}
                    className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-2xl shadow-lg shadow-black/20 group"
                    aria-label="Previous section"
                >
                    <div className="flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-black group-hover:-translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </div>
                </button>
            )}

            {/* Down Arrow Button - appears when not on last section */}
            {currentSection < sections.length - 1 && (
                <button
                    onClick={scrollToNextSection}
                    className="p-4 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 rounded-2xl shadow-lg shadow-black/20 group"
                    aria-label="Next section"
                >
                    <div className="flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-black group-hover:translate-y-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </button>
            )}
        </div>
    );
}

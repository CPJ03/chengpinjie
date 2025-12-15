"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { resumeData } from "@/data/resume";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderHovered, setIsHeaderHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#contact", label: "Contact" },
        { href: resumeData.contact.CV, label: "CV", target: "_blank" },
    ];

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start text-black pointer-events-none">
                {/* Name Section with Glassmorphism - Collapses on scroll */}
                <div
                    className={`hidden md:flex flex-col pointer-events-auto rounded-2xl relative overflow-hidden shadow-lg shadow-black/10 transition-all duration-500 ${
                        isScrolled && !isHeaderHovered
                            ? "w-16 h-16 items-center justify-center"
                            : "px-6 py-4"
                    }`}
                    onMouseEnter={() => setIsHeaderHovered(true)}
                    onMouseLeave={() => setIsHeaderHovered(false)}
                >
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-50" style={{ padding: '1px' }} />

                    {/* Content */}
                    <div className={`relative z-10 transition-all duration-500 ${
                        isScrolled && !isHeaderHovered ? "opacity-0 hidden" : "opacity-100"
                    }`}>
                        <span className="font-bold text-lg tracking-tight block">{resumeData.name}</span>
                        <span className="text-sm text-neutral-700 block mt-1">{resumeData.title}</span>
                    </div>

                    {/* Collapsed Icon */}
                    {isScrolled && !isHeaderHovered && (
                        <div className="relative z-10 flex flex-col gap-1.5 transition-opacity duration-500">
                            <span className="w-4 h-0.5 bg-black" />
                            <span className="w-4 h-0.5 bg-black" />
                            <span className="w-4 h-0.5 bg-black" />
                        </div>
                    )}
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 text-sm font-medium pointer-events-auto px-6 py-4 rounded-2xl relative overflow-hidden shadow-lg shadow-black/10">
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-50" style={{ padding: '1px' }} />

                    {/* Navigation Links */}
                    <div className="relative z-10 flex gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target={link.target}
                                className="hover:text-neutral-600 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Mobile Hamburger Menu */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden pointer-events-auto p-3 rounded-2xl relative overflow-hidden shadow-lg shadow-black/10"
                    aria-label="Toggle menu"
                >
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl" />

                    {/* Gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-50" style={{ padding: '1px' }} />

                    {/* Hamburger Icon */}
                    <div className="relative z-10 flex flex-col gap-1.5">
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </header>

            {/* Mobile Navigation Modal */}
            {isMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={closeMenu}
                    />

                    {/* Navigation Modal */}
                    <nav className="fixed top-0 right-0 h-screen w-64 bg-white z-40 md:hidden rounded-bl-2xl shadow-lg animate-in slide-in-from-right-full">
                        {/* Glass background for consistency */}
                        <div className="absolute inset-0 bg-white/95 backdrop-blur-md rounded-bl-2xl" />

                        {/* Close Button */}
                        <button
                            onClick={closeMenu}
                            className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-lg transition-colors z-10"
                            aria-label="Close menu"
                        >
                            <span className="text-2xl">✕</span>
                        </button>

                        {/* Navigation Links */}
                        <div className="relative z-10 flex flex-col gap-0 pt-20 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target={link.target}
                                    onClick={closeMenu}
                                    className="py-4 px-4 text-lg font-medium text-black border-b border-black/10 hover:bg-black/5 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </>
            )}
        </>
    );
}

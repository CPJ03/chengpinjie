"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "@/components/ui/ImageModal";

export default function Projects() {
    return (
        <Section id="projects" className="text-white">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Projects Experience
                    </h2>
                    <span className="text-neutral-500 text-sm hidden md:block">
                        {resumeData.projects.length} PROJECTS
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hasImages = project.images && project.images.length > 0;
    const hasMultipleImages = project.images && project.images.length > 1;

    const nextImage = () => {
        if (hasMultipleImages) {
            setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
        }
    };

    const prevImage = () => {
        if (hasMultipleImages) {
            setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
        }
    };

    // Extract links and create button data
    const getProjectLinks = () => {
        const links: { url: string; label: string }[] = [];
        
        if (project.github_link) links.push({ url: project.github_link, label: "GitHub" });
        if (project.paper_link) links.push({ url: project.paper_link, label: "Paper" });
        if (project.figma_link) links.push({ url: project.figma_link, label: "Demo" });
        if (project.technical_paper_link) links.push({ url: project.technical_paper_link, label: "Technical Paper" });
        if (project.business_link) links.push({ url: project.business_link, label: "Business Plan" });
        if (project.linkedin_link) links.push({ url: project.linkedin_link, label: "LinkedIn" });
        
        return links;
    };

    const projectLinks = getProjectLinks();

    return (
        <div
            className="group relative bg-white/5 backdrop-blur-md overflow-hidden p-4 border border-white/10"
            style={{ borderRadius: '1.5rem 0 1.5rem 0' }}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">
                {hasImages ? (
                    <>
                        <div 
                            className="cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                        >
                            <Image
                                src={project.images[currentImageIndex]}
                                alt={project.title}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                        {/* Carousel Controls */}
                        {hasMultipleImages && (
                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={(e) => { e.preventDefault(); prevImage(); }}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); nextImage(); }}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                >
                                    →
                                </button>
                            </div>
                        )}
                        {/* Carousel Dots */}
                        {hasMultipleImages && (
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                {project.images.map((_: any, i: number) => (
                                    <button
                                        key={i}
                                        onClick={(e) => { e.preventDefault(); setCurrentImageIndex(i); }}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
                )}
            </div>

            {/* Project Links Buttons */}
            {projectLinks.length > 0 && (
                <div className="flex gap-3 mb-4">
                    {projectLinks.map((link, i) => (
                        <Link
                            key={i}
                            href={link.url}
                            target="_blank"
                            className="group/btn flex-1 flex items-center justify-between gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span className="text-center flex-1">{link.label}</span>
                            <svg 
                                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </Link>
                    ))}
                </div>
            )}

            {/* Text Content Container */}
            <div className="p-4">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-mono text-neutral-400">0{index + 1}</span>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-white text-sm max-w-md text-justify">
                        {project.description}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {project.technologies.map((tech: string, i: number) => (
                            <span key={i} className="text-xs border border-neutral-600 px-2 py-1 rounded-full text-white">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <ImageModal
                src={project.images[currentImageIndex]}
                alt={project.title}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}

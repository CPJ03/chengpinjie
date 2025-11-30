"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    return (
        <Section id="projects" className="text-white">
            <div className="w-full max-w-[1800px] mx-auto">
                <div className="flex justify-between items-end mb-12 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        Selected Works
                    </h2>
                    <span className="text-neutral-500 text-sm hidden md:block">
                        {resumeData.projects.length} PROJECTS
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
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

    return (
        <Link
            href={project.link}
            target="_blank"
            className="group relative aspect-[4/3] bg-neutral-900 overflow-hidden block"
        >
            {/* Project Image or Placeholder */}
            {hasImages ? (
                <div className="absolute inset-0">
                    <Image
                        src={project.images[currentImageIndex]}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105 brightness-50 group-hover:brightness-100"
                        unoptimized
                    />
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
                </div>
            ) : (
                <div className="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-105" />
            )}

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="flex justify-between items-start">
                    <span className="text-sm font-mono text-neutral-400">0{index + 1}</span>
                    <span className="text-sm font-mono text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW CASE
                    </span>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-neutral-300 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm max-w-md line-clamp-2">
                        {project.description}
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {project.technologies.slice(0, 3).map((tech: string, i: number) => (
                            <span key={i} className="text-xs border border-neutral-700 px-2 py-1 rounded-full text-neutral-500">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

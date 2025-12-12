"use client";

import Section from "@/components/ui/Section";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useState } from "react";

function ExperienceCard({ job, index }: { job: any; index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const hasImages = job.images && job.images.length > 0;
    const hasMultipleImages = job.images && job.images.length > 1;

    const nextImage = () => {
        if (hasMultipleImages) {
            setCurrentImageIndex((prev) => (prev + 1) % job.images.length);
        }
    };

    const prevImage = () => {
        if (hasMultipleImages) {
            setCurrentImageIndex((prev) => (prev - 1 + job.images.length) % job.images.length);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
    };

    return (
        <div className="grid md:grid-cols-[1fr_2fr] gap-8">
            <div>
                <h3 className="text-2xl font-semibold">{job.company}</h3>
                <p className="text-white mt-2">{job.period}</p>
                
                {/* Image Carousel */}
                {hasImages && (
                    <div 
                        className="relative aspect-square rounded-lg overflow-hidden border border-white/20 mt-6 group transition-transform duration-200 ease-out"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: isHovering 
                                ? `translate3d(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px, 0) rotateX(${-mousePosition.y * 10}deg) rotateY(${-mousePosition.x * 10}deg)` 
                                : 'translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src={job.images[currentImageIndex]}
                            alt={`${job.company} photo ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                        
                        {/* Carousel Controls */}
                        {hasMultipleImages && (
                            <>
                                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={prevImage}
                                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                    >
                                        &lt;
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                                    >
                                        &gt;
                                    </button>
                                </div>
                                
                                {/* Carousel Dots */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                                    {job.images.map((_: any, i: number) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                i === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div className="pr-6 md:pr-12 lg:pr-24">
                <h4 className="text-xl font-medium mb-4">{job.role}</h4>
                {Array.isArray(job.description)
                    ? (
                        <ul className="list-disc pl-6 space-y-2 text-lg text-white text-justify">
                            {job.description.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <ul className="list-disc pl-6 space-y-2 text-lg text-white text-justify">
                            {String(job.description)
                                .split(/\n+/)
                                .map((line) => line.trim())
                                .filter((line) => line.length > 0)
                                .map((line, i) => (
                                    <li key={i}>{line.replace(/^•\s*/, "")}</li>
                                ))}
                        </ul>
                    )}
                
                {/* Reference Link */}
                {job.reference && (
                    <div className="mt-6">
                        <a 
                            href={job.reference} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-white/80 transition-colors underline text-lg"
                        >
                            Reference
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Experience() {
    return (
        <Section id="experience" className="text-white">
            <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-16">
                <div className="rounded-2xl bg-white/5 backdrop-blur-md shadow-lg shadow-black/10 p-6 md:p-8 lg:p-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter">
                        Work Experience
                    </h2>
                    <div className="space-y-16">
                        {resumeData.experience.map((job, index) => (
                            <ExperienceCard key={index} job={job} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

"use client";

import Image from "next/image";
import { resumeData } from "@/data/resume";

export default function TechStacks() {
    const stacks = resumeData.techStacks["SOFTWARE DEVELOPER"];

    return (
        <div className="flex flex-col items-center justify-center gap-6 mt-12">
            <div className="flex flex-wrap justify-center gap-5 max-w-4xl">
                {stacks.map((tech, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center justify-center"
                        title={tech.name}
                    >
                        <Image
                            src={tech.logo}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="object-contain hover:opacity-80 transition-opacity duration-300"
                            unoptimized
                        />
                        <span className="absolute bottom-full mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

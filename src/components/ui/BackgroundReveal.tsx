"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundReveal() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const lastMousePos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const checkHover = (clientX: number, clientY: number) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const x = clientX - rect.left;
                const y = clientY - rect.top;

                // Check if cursor is within the container bounds
                const isInside =
                    clientX >= rect.left &&
                    clientX <= rect.right &&
                    clientY >= rect.top &&
                    clientY <= rect.bottom;

                if (isInside) {
                    setMousePosition({ x, y });
                    setIsHovering(true);
                } else {
                    setIsHovering(false);
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            lastMousePos.current = { x: e.clientX, y: e.clientY };
            checkHover(e.clientX, e.clientY);
        };

        const handleScroll = () => {
            checkHover(lastMousePos.current.x, lastMousePos.current.y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
                background: "black",
            }}
        >
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-300"
                style={{
                    backgroundImage: "url('/assets/projects/background.webp')",
                    opacity: isHovering ? 1 : 0,
                    maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%)`,
                }}
            />
        </div>
    );
}

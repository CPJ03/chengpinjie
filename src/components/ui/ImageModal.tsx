"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ImageModalProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modal = (
        <div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light transition-colors z-10"
                aria-label="Close modal"
            >
                ×
            </button>
            
            <div
                className="relative w-[90vw] h-[90vh] max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    unoptimized
                />
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}

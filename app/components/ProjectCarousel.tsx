'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectCarouselProps {
    images: string[];
    title: string;
    dict: Record<string, string>;
}

export default function ProjectCarousel({ images, title, dict }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isPaused = isHovered || isModalOpen;

    useEffect(() => {
        if (images.length <= 1 || isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    useEffect(() => {
        if (!isModalOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsModalOpen(false);
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    if (!images || images.length === 0) return null;

    return (
        <>
            <div
                className="relative group border-3 border-main p-1 shadow-neo-xl bg-white overflow-hidden max-h-[600px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative aspect-square overflow-hidden">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
                                }`}
                            style={{
                                zIndex: index === currentIndex ? 10 : 0,
                            }}
                        >
                            <Image
                                width={800}
                                height={400}
                                src={image}
                                alt={`${title} - image ${index + 1}`}
                                className="w-full"
                                priority={index === 0}
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="absolute inset-0 z-[15] cursor-pointer bg-transparent"
                        aria-label={dict.viewEnlarged}
                    />
                </div>

                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 border-2 border-main transition-all ${index === currentIndex ? 'bg-accent-pink scale-125' : 'bg-white'
                                    }`}
                                aria-label={`${dict.goToImage} ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                    onClick={() => setIsModalOpen(false)}
                    role="presentation"
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-label={dict.viewEnlarged}
                        className="relative max-w-4xl w-full border-2 border-main bg-white shadow-neo-xl p-2"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(false)}
                            className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center border-2 border-main bg-white font-bold shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                            aria-label={dict.close}
                        >
                            X
                        </button>
                        <Image
                            width={1200}
                            height={1200}
                            src={images[currentIndex]}
                            alt={`${title} - image ${currentIndex + 1}`}
                            className="max-h-[85vh] w-full object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}

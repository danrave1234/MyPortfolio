"use client";

import { Section } from "@/components/ui/Section";
import { projects } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const nextProject = () => {
        setActiveIndex((prev) => {
            if (prev < projects.length - 1) {
                return prev + 1;
            }
            return prev; // Don't go beyond last project
        });
        setIsExpanded(false);
    };

    const prevProject = () => {
        setActiveIndex((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev; // Don't go before first project
        });
        setIsExpanded(false);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const section = document.getElementById("projects");
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (!isVisible) return;
            }

            if (e.key === "ArrowRight" && activeIndex < projects.length - 1) {
                e.preventDefault();
                nextProject();
            }
            if (e.key === "ArrowLeft" && activeIndex > 0) {
                e.preventDefault();
                prevProject();
            }
            if (e.key === "Escape") setIsExpanded(false);
            if (e.key === "Enter" && !isExpanded) setIsExpanded(true);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, isExpanded]);

    // Disable background scroll when modal is open
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isExpanded]);

    const activeProject = projects[activeIndex];

    return (
        <Section id="projects" className="overflow-hidden !py-0 !px-0 min-h-screen flex flex-col justify-center">
            <div className="relative z-10 w-full h-full flex flex-col justify-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-4 sm:mb-6 md:mb-8 pt-6 sm:pt-8 md:pt-10 px-3 sm:px-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12B7C9] mb-1 sm:mb-2 leading-tight">Selected Projects</h2>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base">Use <kbd className="bg-gray-800 px-1 rounded">←</kbd> <kbd className="bg-gray-800 px-1 rounded">→</kbd> to navigate</p>
                </motion.div>

                {/* Deck View - Full Width */}
                <div className="relative w-full h-[68vh] sm:h-[60vh] flex items-center justify-center perspective-1000 px-3 sm:px-4 md:px-8 lg:px-16 overflow-visible">
                    {projects.map((project, index) => {
                        // Calculate relative position (no wrap-around)
                        const prevIndex = activeIndex > 0 ? activeIndex - 1 : null;
                        const nextIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : null;
                        
                        // Only show active, previous, and next projects
                        if (index !== activeIndex && index !== prevIndex && index !== nextIndex) {
                            return null;
                        }

                        const isActive = index === activeIndex;
                        const isPrev = index === prevIndex;
                        const isNext = index === nextIndex;
                        
                        // Calculate offset from center for smoother transitions
                        const offsetFromActive = index - activeIndex;
                        
                        // Calculate x position based on offset - this creates the left->center->right flow
                        let xPosition = 0;
                        if (offsetFromActive === -1) {
                            // Previous project - on the left
                            xPosition = -35;
                        } else if (offsetFromActive === 0) {
                            // Active project - centered
                            xPosition = 0;
                        } else if (offsetFromActive === 1) {
                            // Next project - on the right
                            xPosition = 35;
                        }

                            return (
                                <motion.div
                                    key={`project-${index}`}
                                    initial={{ 
                                        x: offsetFromActive === -1 ? "-50%" : offsetFromActive === 1 ? "50%" : "0%",
                                        opacity: 0,
                                        scale: 0.85
                                    }}
                                    animate={{ 
                                        scale: isActive ? 1 : 0.9, 
                                        opacity: isActive ? 1 : 0.5,
                                        x: `${xPosition}%`,
                                        z: isActive ? 0 : -40,
                                        rotateY: isActive ? 0 : offsetFromActive < 0 ? 2 : -2,
                                        zIndex: isActive ? 20 : 10
                                    }}
                                    transition={{ 
                                        duration: 0.7, 
                                        ease: [0.4, 0, 0.2, 1],
                                        x: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                                        scale: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                                        opacity: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
                                    }}
                                    className={cn(
                                        "absolute w-[94%] sm:w-[90%] md:w-[80%] max-w-5xl bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group",
                                        isActive ? "shadow-[#12B7C9]/20" : "grayscale-[30%]",
                                        "aspect-video"
                                    )}
                                    onClick={() => {
                                        if (isActive) setIsExpanded(true);
                                        else setActiveIndex(index);
                                    }}
                                >
                                    {/* Full Card Image Background */}
                                    <div className="absolute inset-0 bg-black">
                                        {project.images[0] && (
                                            <Image 
                                                src={project.images[0]} 
                                                alt={project.title} 
                                                fill 
                                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1280px"
                                                priority={isActive && index === 0}
                                                loading={isActive && index === 0 ? "eager" : "lazy"}
                                            />
                                        )}
                                        {/* Gradient Overlay for Text Readability */}
                                        <div className={cn(
                                            "absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent transition-opacity duration-300",
                                            isActive ? "opacity-90" : "opacity-70"
                                        )} />
                                    </div>

                                    {/* Content Overlay - Bottom Aligned */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10 transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                         <div className="mb-2 sm:mb-3 hidden sm:flex flex-wrap gap-2">
                                            <span className="px-3 py-1 bg-[#12B7C9]/20 text-[#12B7C9] text-[11px] sm:text-xs font-bold rounded-full border border-[#12B7C9]/20 backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight line-clamp-1">{project.title}</h3>
                                        <p className="text-[#12B7C9] text-sm sm:text-lg md:text-xl mb-3 sm:mb-4 font-medium leading-snug line-clamp-1">{project.subtitle}</p>
                                        
                                        <p className="text-slate-300 text-xs sm:text-sm md:text-base line-clamp-1 mb-4 sm:mb-5 max-w-2xl">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                                            {/* Mobile: show fewer tech tags */}
                                            <div className="flex sm:hidden items-center gap-1.5 overflow-x-auto whitespace-nowrap pr-1">
                                                {project.tech.slice(0, 3).map(t => (
                                                    <span key={t} className="text-[9px] text-slate-300 bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            {/* Desktop/Tablet */}
                                            <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pr-2">
                                                {project.tech.slice(0, 4).map(t => (
                                                    <span key={t} className="text-[10px] text-slate-300 bg-black/50 px-1.5 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <button 
                                                className="flex items-center justify-center gap-2 text-white bg-[#12B7C9] px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-[#12B7C9]/90 transition-colors text-xs sm:text-sm font-bold shadow-lg shadow-[#12B7C9]/20 w-full sm:w-auto"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsExpanded(true);
                                                }}
                                            >
                                                View Details <Expand className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevProject}
                        disabled={activeIndex === 0}
                        className={cn(
                            "absolute left-0 md:left-4 lg:left-8 xl:left-12 p-3 md:p-4 rounded-full bg-black/70 text-white transition-all z-50 backdrop-blur-md border border-white/20 shadow-lg",
                            activeIndex === 0 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-[#12B7C9]/20 hover:scale-110 active:scale-95 cursor-pointer"
                        )}
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button 
                        onClick={nextProject}
                        disabled={activeIndex === projects.length - 1}
                        className={cn(
                            "absolute right-0 md:right-4 lg:right-8 xl:right-12 p-3 md:p-4 rounded-full bg-black/70 text-white transition-all z-50 backdrop-blur-md border border-white/20 shadow-lg",
                            activeIndex === projects.length - 1 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-[#12B7C9]/20 hover:scale-110 active:scale-95 cursor-pointer"
                        )}
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-5 sm:mt-6 md:mt-8 pb-10">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                setIsExpanded(false);
                            }}
                            className={cn(
                                "transition-all duration-300 rounded-full",
                                index === activeIndex
                                    ? "w-3 h-3 bg-[#12B7C9] scale-125"
                                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                            )}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Expanded Modal */}
            <AnimatePresence>
                {isExpanded && activeProject && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 bg-black/50 backdrop-blur-md"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-gray-900 w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-y-auto border border-white/10 shadow-2xl relative pb-10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="flex flex-col">
                                {/* Top: Single Image Preview */}
                                <div className="bg-black relative p-4 sm:p-6 lg:p-8 border-b border-white/10">
                                    {activeProject.images.slice(0, 1).map((img) => (
                                        <div
                                            key={img}
                                            className="relative w-full max-w-4xl mx-auto aspect-[16/10] sm:aspect-video lg:max-h-[420px] rounded-xl overflow-hidden border border-white/5"
                                        >
                                            <Image
                                                src={img}
                                                alt={activeProject.title}
                                                fill
                                                className="object-contain bg-black"
                                                sizes="100vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom: Details */}
                                <div className="p-6 sm:p-7 lg:p-8 space-y-6">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                                        <div>
                                            <h2 className="text-2xl sm:text-3xl font-bold text-white">{activeProject.title}</h2>
                                            <p className="text-[#12B7C9] text-lg sm:text-xl">{activeProject.subtitle}</p>
                                        </div>
                                        {activeProject.link && (
                                            <a
                                                href={activeProject.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#12B7C9] text-white rounded-lg font-semibold hover:bg-[#12B7C9]/80 transition-colors whitespace-nowrap"
                                            >
                                                View Live Website <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>

                                    {activeProject.problemSolved && (
                                        <div className="space-y-2.5">
                                            <h3 className="font-semibold text-white">Problem Solved</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{activeProject.problemSolved}</p>
                                        </div>
                                    )}

                                    <div className="space-y-2.5">
                                        <h3 className="font-semibold text-white">Key Features</h3>
                                        <ul className="grid grid-cols-1 gap-1.5">
                                            {activeProject.keyFeatures.map((f, i) => (
                                                <li key={i} className="flex items-start text-slate-300 text-sm">
                                                    <span className="text-[#12B7C9] mr-2">•</span> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-2.5">
                                        <h3 className="font-semibold text-white">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2.5 py-1 bg-gray-800 rounded text-xs text-slate-300 border border-white/5"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {activeProject.architecture && (
                                        <div className="p-3.5 bg-black/30 rounded-xl border border-white/5">
                                            <h3 className="text-[#12B7C9] font-bold mb-2 text-base">System Architecture</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{activeProject.architecture.flow}</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
}

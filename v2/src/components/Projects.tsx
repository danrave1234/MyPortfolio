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
                    className="text-center mb-6 md:mb-8 pt-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#12B7C9] mb-2">Selected Projects</h2>
                    <p className="text-slate-500 text-sm md:text-base">Use <kbd className="bg-gray-800 px-1 rounded">←</kbd> <kbd className="bg-gray-800 px-1 rounded">→</kbd> to navigate</p>
                </motion.div>

                {/* Deck View - Full Width */}
                <div className="relative w-full h-[60vh] flex items-center justify-center perspective-1000 px-4 md:px-8 lg:px-16 overflow-visible">
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
                                        "absolute w-[90%] md:w-[80%] max-w-5xl bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group",
                                        isActive ? "shadow-[#12B7C9]/20" : "grayscale-[30%]",
                                        // Adjust aspect ratio here. Using generic aspect-video for standard monitor look
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
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                         <div className="mb-3">
                                            <span className="px-3 py-1 bg-[#12B7C9]/20 text-[#12B7C9] text-xs font-bold rounded-full border border-[#12B7C9]/20 backdrop-blur-sm">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h3>
                                        <p className="text-[#12B7C9] text-lg md:text-xl mb-4 font-medium">{project.subtitle}</p>
                                        
                                        <p className="text-slate-300 text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-6 max-w-2xl">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.slice(0, 4).map(t => (
                                                    <span key={t} className="text-xs text-slate-300 bg-black/50 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <button 
                                                className="flex items-center gap-2 text-white bg-[#12B7C9] px-4 py-2 rounded-lg hover:bg-[#12B7C9]/90 transition-colors text-sm font-bold shadow-lg shadow-[#12B7C9]/20"
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

                    {/* Navigation Buttons - Disabled at start/end */}
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
                <div className="flex justify-center gap-2 mt-6 md:mt-8 pb-10">
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
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/50 backdrop-blur-md"
                        onClick={() => setIsExpanded(false)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            className="bg-gray-900 w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-y-auto border border-white/10 shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-red-500/80 transition-colors z-50"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Left: Images */}
                                <div className="bg-black relative p-4 flex flex-col gap-4 lg:border-r border-white/10">
                                     {activeProject.images.map((img, idx) => (
                                         <div key={idx} className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/5">
                                             <Image 
                                                src={img} 
                                                alt="" 
                                                fill 
                                                className="object-contain bg-black" 
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                             />
                                         </div>
                                     ))}
                                </div>

                                {/* Right: Details */}
                                <div className="p-8 lg:p-10 space-y-8">
                                    <div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{activeProject.title}</h2>
                                        <p className="text-[#12B7C9] text-xl">{activeProject.subtitle}</p>
                                    </div>

                                    {activeProject.problemSolved && (
                                        <div className="space-y-4">
                                            <h3 className="font-semibold text-white">Problem Solved</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{activeProject.problemSolved}</p>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-white">Key Features</h3>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {activeProject.keyFeatures.map((f, i) => (
                                                <li key={i} className="flex items-start text-slate-300 text-sm">
                                                    <span className="text-[#12B7C9] mr-2">•</span> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-white">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 bg-gray-800 rounded text-xs text-slate-300 border border-white/5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {activeProject.architecture && (
                                        <div className="p-4 bg-black/30 rounded-xl border border-white/5">
                                            <h3 className="text-[#12B7C9] font-bold mb-2 text-base">System Architecture</h3>
                                            <p className="text-slate-300 text-sm leading-relaxed">{activeProject.architecture.flow}</p>
                                        </div>
                                    )}

                                    {activeProject.link && (
                                        <a 
                                            href={activeProject.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#12B7C9] text-white rounded-lg font-bold hover:bg-[#12B7C9]/80 transition-colors"
                                        >
                                            View Live Website <ExternalLink className="w-5 h-5" />
                                        </a>
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

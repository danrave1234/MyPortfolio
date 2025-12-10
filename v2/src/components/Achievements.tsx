"use client";

import { Section } from "@/components/ui/Section";
import { achievements } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Achievements() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextAchievement = () => {
        setActiveIndex((prev) => {
            if (prev < achievements.length - 1) {
                return prev + 1;
            }
            return prev;
        });
    };

    const prevAchievement = () => {
        setActiveIndex((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const section = document.getElementById("achievements");
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (!isVisible) return;
            }

            if (e.key === "ArrowRight" && activeIndex < achievements.length - 1) {
                e.preventDefault();
                nextAchievement();
            }
            if (e.key === "ArrowLeft" && activeIndex > 0) {
                e.preventDefault();
                prevAchievement();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex]);

    const activeAchievement = achievements[activeIndex];

    return (
        <Section id="achievements" className="bg-gray-900/20 overflow-hidden !py-0 !px-0 min-h-screen flex flex-col justify-center">
            <div className="relative z-10 w-full h-full flex flex-col justify-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-5 md:mb-8 pt-8 md:pt-10 px-4"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#12B7C9] mb-2 leading-tight">Achievements</h2>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-base">Use <kbd className="bg-gray-800 px-1 rounded">←</kbd> <kbd className="bg-gray-800 px-1 rounded">→</kbd> to navigate</p>
                </motion.div>

                {/* Deck View */}
                <div className="relative w-full h-[60vh] flex items-center justify-center perspective-1000 px-4 md:px-8 lg:px-16 overflow-visible">
                    {achievements.map((achievement, index) => {
                        const prevIndex = activeIndex > 0 ? activeIndex - 1 : null;
                        const nextIndex = activeIndex < achievements.length - 1 ? activeIndex + 1 : null;
                        
                        if (index !== activeIndex && index !== prevIndex && index !== nextIndex) {
                            return null;
                        }

                        const isActive = index === activeIndex;
                        const isPrev = index === prevIndex;
                        const isNext = index === nextIndex;
                        const offsetFromActive = index - activeIndex;
                        
                        let xPosition = 0;
                        if (offsetFromActive === -1) {
                            xPosition = -35;
                        } else if (offsetFromActive === 0) {
                            xPosition = 0;
                        } else if (offsetFromActive === 1) {
                            xPosition = 35;
                        }

                        const isChampion = achievement.isChampion;

                        return (
                            <motion.div
                                key={`achievement-${index}`}
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
                                    "absolute w-[92%] sm:w-[88%] md:w-[80%] max-w-5xl bg-gray-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer group",
                                    isActive ? "shadow-[#12B7C9]/20" : "grayscale-[30%]",
                                    isChampion ? "border-[#12B7C9]" : "",
                                    "aspect-video"
                                )}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Image Background */}
                                <div className="absolute inset-0 bg-black">
                                    {achievement.images[0] && (
                                        <Image 
                                            src={achievement.images[0]} 
                                            alt={achievement.title} 
                                            fill 
                                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1280px"
                                            priority={isActive && index === 0}
                                            loading={isActive && index === 0 ? "eager" : "lazy"}
                                        />
                                    )}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent transition-opacity duration-300",
                                        isActive ? "opacity-90" : "opacity-70"
                                    )} />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                        {achievement.icon && (
                                            <achievement.icon className="text-xl sm:text-2xl text-[#12B7C9]" />
                                        )}
                                        <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#12B7C9] font-bold border border-[#12B7C9]/30 px-2 py-1 rounded bg-[#12B7C9]/20 backdrop-blur-sm">
                                            {achievement.badge}
                                        </span>
                                        {isChampion && (
                                            <span className="flex items-center gap-1 px-2 py-1 bg-[#12B7C9] text-white text-[11px] sm:text-xs font-bold rounded">
                                                <Trophy className="w-3 h-3" /> Champion
                                            </span>
                                        )}
                                    </div>

                                    <h3 className={cn("font-bold text-white mb-2 group-hover:text-[#12B7C9] transition-colors", isChampion ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg md:text-xl")}>
                                        {achievement.title}
                                    </h3>
                                    
                                    <p className="text-slate-300 text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3 mb-3 sm:mb-4 max-w-2xl">
                                        {achievement.description}
                                    </p>

                                    {achievement.link && (
                                        <a 
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-[#12B7C9] hover:underline underline-offset-4"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Read More <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevAchievement}
                        disabled={activeIndex === 0}
                        className={cn(
                            "absolute left-0 md:left-4 lg:left-8 xl:left-12 p-3 md:p-4 rounded-full bg-black/70 text-white transition-all z-50 backdrop-blur-md border border-white/20 shadow-lg",
                            activeIndex === 0 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-[#12B7C9]/20 hover:scale-110 active:scale-95 cursor-pointer"
                        )}
                        aria-label="Previous achievement"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button 
                        onClick={nextAchievement}
                        disabled={activeIndex === achievements.length - 1}
                        className={cn(
                            "absolute right-0 md:right-4 lg:right-8 xl:right-12 p-3 md:p-4 rounded-full bg-black/70 text-white transition-all z-50 backdrop-blur-md border border-white/20 shadow-lg",
                            activeIndex === achievements.length - 1 
                                ? "opacity-30 cursor-not-allowed" 
                                : "hover:bg-[#12B7C9]/20 hover:scale-110 active:scale-95 cursor-pointer"
                        )}
                        aria-label="Next achievement"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6 md:mt-8 pb-10">
                    {achievements.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "transition-all duration-300 rounded-full",
                                index === activeIndex
                                    ? "w-3 h-3 bg-[#12B7C9] scale-125"
                                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                            )}
                            aria-label={`Go to achievement ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}

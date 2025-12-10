"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Full Stack & Cloud Developer";
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const handleScrollDown = () => {
        const nextSection = document.getElementById("about");
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" && window.scrollY < 100) {
                e.preventDefault();
                handleScrollDown();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <Section id="home" className="justify-center pt-0">
            <div className="z-10 flex flex-col items-center text-center space-y-6 md:space-y-8 max-w-4xl px-4">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl shadow-[#12B7C9]/20"
                >
                    <Image 
                        src="/assets/Me.png" 
                        alt="Danrave C. Keh" 
                        fill 
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 192px, 224px"
                    />
                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 md:mb-4 leading-tight">
                            Danrave C. Keh
                        </h1>
                    </motion.div>

                    <div className="h-10 sm:h-12 md:h-16">
                        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#12B7C9] font-mono font-medium leading-tight">
                            {typedText}
                            <span className="animate-pulse">_</span>
                        </p>
                    </div>
                </div>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2"
                >
                    Building real production systems with scalable architecture and modern engineering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="pt-12"
                >
                    <button 
                        onClick={handleScrollDown}
                        className="group flex flex-col items-center gap-2 text-sm text-slate-500 hover:text-[#12B7C9] transition-colors"
                    >
                        <span>Press Space to Explore</span>
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                    </button>
                </motion.div>
            </div>
        </Section>
    );
}

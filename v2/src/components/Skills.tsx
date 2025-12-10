"use client";

import { Section } from "@/components/ui/Section";
import { capabilities } from "@/data/portfolio";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Map capabilities to their relevant technology icons
const capabilityIcons: { [key: string]: string[] } = {
    'Frontend Engineering': [
        '/assets/react.svg',
        '/assets/vite.svg',
        '/assets/javascript.svg',
        '/assets/typescript.svg',
        '/assets/html.svg',
        '/assets/css.svg',
        '/assets/Next.js.png',
    ],
    'Backend & API Development': [
        '/assets/java.svg',
        '/assets/python.svg',
        '/assets/mysql.svg',
        '/assets/typescript.svg',
        '/assets/NestJS.png',
        '/assets/Spring_Boot.png',
        '/assets/FastAPI.png',
        '/assets/Postgresql_elephant.svg.png',
    ],
    'Cloud & Infrastructure': [
        '/assets/aws.svg',
        '/assets/gcloudconsole.svg',
        '/assets/github.svg',
        '/assets/firebase.png',
    ],
    'DevOps & Automation': [
        '/assets/github.svg',
        '/assets/python.svg',
    ],
};

export function Skills() {
    return (
        <Section id="capabilities">
            <div className="w-full max-w-7xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#12B7C9] mb-4">Capabilities</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Technical skills and expertise across the full development stack
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => {
                         return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={cn(
                                    "group relative p-6 rounded-2xl bg-gray-900/50 border border-white/5 hover:border-[#12B7C9]/30 transition-all duration-300",
                                    "hover:bg-gray-900/80 hover:shadow-lg hover:shadow-[#12B7C9]/10",
                                    index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-2"
                                )}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#12B7C9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                
                                <div className="mb-4 relative z-10">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#12B7C9] transition-colors mb-2">
                                        {cap.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        {cap.description}
                                    </p>
                                    
                                    {/* Technology Icons */}
                                    {capabilityIcons[cap.title] && (
                                        <div className="flex flex-wrap gap-3 mb-4">
                                            {capabilityIcons[cap.title].map((iconPath, iconIdx) => (
                                                <div 
                                                    key={iconIdx}
                                                    className="w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-[#12B7C9]/20 transition-colors flex items-center justify-center p-2 border border-white/5 group-hover:border-[#12B7C9]/30"
                                                >
                                                    <Image 
                                                        src={iconPath} 
                                                        alt="" 
                                                        width={24} 
                                                        height={24} 
                                                        className="object-contain"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <ul className="space-y-2 relative z-10">
                                    {cap.items.map((item, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#12B7C9]/50 mr-2 group-hover:bg-[#12B7C9] transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

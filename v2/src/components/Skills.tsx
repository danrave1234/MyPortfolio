"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { capabilities } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

/** Tech logos shown per capability. Labels double as the image alt text. */
const capabilityIcons: Record<string, { src: string; label: string }[]> = {
    "Frontend Engineering": [
        { src: "/assets/react.svg", label: "React" },
        { src: "/assets/Next.js.png", label: "Next.js" },
        { src: "/assets/typescript.svg", label: "TypeScript" },
        { src: "/assets/javascript.svg", label: "JavaScript" },
        { src: "/assets/vite.svg", label: "Vite" },
        { src: "/assets/html.svg", label: "HTML" },
        { src: "/assets/css.svg", label: "CSS" },
    ],
    "Backend & API Development": [
        { src: "/assets/java.svg", label: "Java" },
        { src: "/assets/Spring_Boot.png", label: "Spring Boot" },
        { src: "/assets/NestJS.png", label: "NestJS" },
        { src: "/assets/python.svg", label: "Python" },
        { src: "/assets/FastAPI.png", label: "FastAPI" },
        { src: "/assets/Postgresql_elephant.svg.png", label: "PostgreSQL" },
        { src: "/assets/mysql.svg", label: "MySQL" },
    ],
    "Cloud & Infrastructure": [
        { src: "/assets/aws.svg", label: "AWS" },
        { src: "/assets/gcloudconsole.svg", label: "Google Cloud" },
        { src: "/assets/firebase.png", label: "Firebase" },
        { src: "/assets/github.svg", label: "GitHub" },
    ],
    "DevOps & Automation": [
        { src: "/assets/github.svg", label: "GitHub Actions" },
        { src: "/assets/python.svg", label: "Python" },
    ],
};

export function Skills() {
    return (
        <Section id="capabilities">
            <SectionHeader
                title="Capabilities"
                lead="Technical skills and expertise across the full development stack."
            />

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {capabilities.map((cap, index) => (
                    <motion.article
                        key={cap.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: Math.min(index, 3) * 0.06, duration: 0.4 }}
                        className="group flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/25 sm:p-6"
                    >
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                            {cap.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{cap.description}</p>

                        {capabilityIcons[cap.title] && (
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {capabilityIcons[cap.title].map((icon) => (
                                    <li
                                        key={icon.label}
                                        title={icon.label}
                                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.03] p-1.5"
                                    >
                                        <Image
                                            src={icon.src}
                                            alt={icon.label}
                                            width={20}
                                            height={20}
                                            className="h-full w-full object-contain"
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}

                        <ul className="mt-5 space-y-2 border-t border-line pt-5">
                            {cap.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                                >
                                    <span
                                        aria-hidden
                                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                    />
                                    <span className="min-w-0">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </Section>
    );
}

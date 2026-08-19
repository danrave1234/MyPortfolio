"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";
import { Gallery } from "@/components/ui/Gallery";
import { achievements, certifications } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Achievements() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const active = openIndex === null ? null : achievements[openIndex];

    return (
        <Section id="achievements">
            <SectionHeader
                title="Achievements"
                lead="Competitions, recognition, and certifications."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                    <motion.article
                        key={achievement.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: Math.min(index, 3) * 0.06, duration: 0.4 }}
                        className={cn(
                            "group flex flex-col overflow-hidden rounded-2xl border bg-surface/60 transition-colors",
                            achievement.isChampion
                                ? "border-accent/40"
                                : "border-line hover:border-accent/25"
                        )}
                    >
                        <button
                            onClick={() => setOpenIndex(index)}
                            className="flex flex-1 flex-col text-left"
                        >
                            <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black">
                                {achievement.images[0] && (
                                    <Image
                                        src={achievement.images[0]}
                                        alt={`${achievement.title} photo`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 100vw, 380px"
                                    />
                                )}
                                {achievement.isChampion && (
                                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-[#04191c]">
                                        <Trophy className="h-3 w-3" />
                                        Champion
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <div className="flex items-center gap-2">
                                    {achievement.icon && (
                                        <achievement.icon
                                            className="h-4 w-4 shrink-0 text-accent"
                                            aria-hidden
                                        />
                                    )}
                                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                                        {achievement.badge}
                                    </span>
                                </div>

                                <h3 className="mt-2.5 text-base font-semibold leading-snug text-foreground">
                                    {achievement.title}
                                </h3>
                                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                                    {achievement.description}
                                </p>
                            </div>
                        </button>
                    </motion.article>
                ))}
            </div>

            {/* Certifications: a dense list rather than more cards — they are
                credentials, not stories, and this keeps the section short on a
                phone. */}
            <div className="mt-12 sm:mt-16">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    Certifications
                </h3>
                <ul className="mt-4 divide-y divide-[var(--line)] rounded-2xl border border-line bg-surface/40">
                    {certifications.map((cert) => (
                        <li
                            key={cert.name}
                            className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                        >
                            <div className="min-w-0">
                                <span className="block text-sm font-medium text-foreground">
                                    {cert.name}
                                </span>
                                {cert.issuer && (
                                    <span className="mt-0.5 block text-xs text-dim">
                                        {cert.issuer}
                                    </span>
                                )}
                            </div>
                            <span className="shrink-0 font-mono text-xs text-muted">
                                {cert.date}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <Modal
                open={active !== null}
                onClose={() => setOpenIndex(null)}
                label={active?.title ?? "Achievement details"}
            >
                {active && (
                    <div className="space-y-6 p-5 pt-6 sm:p-6 lg:p-8">
                        <header className="pr-12">
                            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                                {active.badge}
                            </span>
                            <h2 className="mt-2 text-xl font-bold leading-snug text-foreground sm:text-2xl">
                                {active.title}
                            </h2>
                        </header>

                        <Gallery images={active.images} alt={active.title} />

                        <p className="text-sm leading-relaxed text-muted">
                            {active.description}
                        </p>

                        {active.link && (
                            <a
                                href={active.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-white/[0.03] px-6 font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:w-auto"
                            >
                                Read the article
                                <ExternalLink className="h-4 w-4" />
                            </a>
                        )}
                    </div>
                )}
            </Modal>
        </Section>
    );
}

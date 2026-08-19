"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";
import { Gallery } from "@/components/ui/Gallery";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Projects() {
    // `null` = closed. Storing the index rather than a boolean means the modal
    // always shows the card the user actually tapped.
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const active = openIndex === null ? null : projects[openIndex];

    return (
        <Section id="projects">
            <SectionHeader
                title="Selected Projects"
                lead="Production systems I designed, built, and deployed. Open any card for the architecture and full write-up."
            />

            {/* A plain responsive grid replaces the old 3D card deck, which
                                assumed a wide viewport and a keyboard. This reflows from one
                                column to two and needs neither. */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {projects.map((project, index) => {
                    const isLead = index === 0;
                    return (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ delay: Math.min(index, 4) * 0.05, duration: 0.4 }}
                            className={cn(
                                "group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-accent/30",
                                // The lead project spans the full width on md+ so the
                                // grid does not read as a flat wall of equal cards.
                                // Keyed off position alone: `featured` is data about
                                // the work, not a layout switch.
                                isLead && "md:col-span-2",
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(index)}
                                className={cn(
                                    "flex flex-1 flex-col text-left",
                                    isLead && "md:flex-row md:items-stretch",
                                )}
                            >
                                <div
                                    className={cn(
                                        "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-black",
                                        isLead && "md:aspect-auto md:w-1/2",
                                    )}
                                >
                                    {project.images[0] && (
                                        <Image
                                            src={project.images[0]}
                                            alt={`${project.title} screenshot`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 620px"
                                            priority={index === 0}
                                        />
                                    )}
                                    <span className="absolute left-3 top-3 rounded-full border border-accent/25 bg-black/70 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
                                        {project.category}
                                    </span>
                                    {project.period && (
                                        <span className="absolute right-3 top-3 rounded-full border border-line bg-black/70 px-2.5 py-1 font-mono text-xs text-foreground/70 backdrop-blur">
                                            {project.period}
                                        </span>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col p-5 sm:p-6">
                                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                                        {project.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-accent">{project.subtitle}</p>
                                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                                        {project.description}
                                    </p>

                                    {project.impact && (
                                        <p className="mt-4 flex items-start gap-2 text-sm font-medium text-accent-ink">
                                            <TrendingUp
                                                aria-hidden
                                                className="mt-0.5 h-4 w-4 shrink-0"
                                            />
                                            <span className="min-w-0">{project.impact}</span>
                                        </p>
                                    )}

                                    <ul className="mt-4 flex flex-wrap gap-1.5">
                                        {project.tech.slice(0, 4).map((t) => (
                                            <li
                                                key={t}
                                                className="rounded-md border border-line bg-white/[0.03] px-2 py-1 text-xs text-muted"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                        {project.tech.length > 4 && (
                                            <li className="rounded-md px-2 py-1 text-xs text-dim">
                                                +{project.tech.length - 4} more
                                            </li>
                                        )}
                                    </ul>

                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                                        View details
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </button>
                        </motion.article>
                    );
                })}
            </div>

            <Modal
                open={active !== null}
                onClose={() => setOpenIndex(null)}
                label={active?.title ?? "Project details"}
            >
                {active && (
                    <div className="grid grid-cols-1 gap-6 p-5 pt-6 sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-8">
                        <div className="lg:sticky lg:top-0 lg:self-start">
                            <Gallery images={active.images} alt={active.title} />
                        </div>

                        <div className="space-y-7">
                            <header className="pr-12">
                                <span className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
                                    {active.category}
                                    {active.period && (
                                        <span className="font-mono normal-case text-dim">
                                            · {active.period}
                                        </span>
                                    )}
                                </span>
                                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                                    {active.title}
                                </h2>
                                <p className="mt-1 text-base text-muted sm:text-lg">
                                    {active.subtitle}
                                </p>
                            </header>

                            {active.problemSolved && (
                                <Block title="Problem solved">
                                    <p className="text-sm leading-relaxed text-muted">
                                        {active.problemSolved}
                                    </p>
                                </Block>
                            )}

                            <Block title="Key features">
                                <ul className="space-y-2">
                                    {active.keyFeatures.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-start gap-2.5 text-sm text-foreground/80"
                                        >
                                            <span
                                                aria-hidden
                                                className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                            />
                                            <span className="min-w-0">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Block>

                            <Block title="Tech stack">
                                <ul className="flex flex-wrap gap-1.5">
                                    {active.tech.map((t) => (
                                        <li
                                            key={t}
                                            className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-muted"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </Block>

                            {active.architecture && (
                                <Block title="System architecture">
                                    <p className="text-sm leading-relaxed text-muted">
                                        {active.architecture.flow}
                                    </p>
                                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {active.architecture.components.map((c) => (
                                            <li
                                                key={c.name}
                                                className="rounded-lg border border-line bg-white/[0.02] p-3"
                                            >
                                                <span className="block text-xs uppercase tracking-wide text-dim">
                                                    {c.name}
                                                </span>
                                                <span className="mt-1 block text-sm font-medium text-foreground">
                                                    {c.type}
                                                </span>
                                                <span className="mt-0.5 block text-xs text-muted">
                                                    {c.details}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Block>
                            )}

                            {active.link && (
                                <a
                                    href={active.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 font-semibold text-[#04191c] transition-colors hover:bg-accent-ink sm:w-auto"
                                >
                                    Visit live site
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </Section>
    );
}

function Block({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                {title}
            </h3>
            {children}
        </section>
    );
}

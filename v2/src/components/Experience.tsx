"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <Section id="experience">
            <SectionHeader
                title="Experience"
                lead="Where I have shipped, and what I owned."
            />

            <ol className="relative space-y-8 sm:space-y-10">
                {experience.map((role, index) => (
                    <motion.li
                        key={`${role.company}-${role.title}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ delay: Math.min(index, 3) * 0.06, duration: 0.4 }}
                        // The timeline rail is drawn with a left border rather than
                        // absolutely positioned dots, so it can never drift out of
                        // alignment as the text reflows on narrow screens.
                        className="relative border-l border-line pl-6 sm:pl-8"
                    >
                        <span
                            aria-hidden
                            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
                        />

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                            <h3 className="text-lg font-semibold text-foreground">
                                {role.title}
                            </h3>
                            <span className="shrink-0 font-mono text-xs text-dim">
                                {role.period}
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-accent">
                            {role.company}
                            {role.mode && (
                                <span className="text-dim"> · {role.mode}</span>
                            )}
                        </p>

                        <ul className="mt-4 space-y-2">
                            {role.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                                >
                                    <span
                                        aria-hidden
                                        className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                    />
                                    <span className="min-w-0">{h}</span>
                                </li>
                            ))}
                        </ul>

                        {role.tech && (
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {role.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded-md border border-line bg-white/[0.03] px-2 py-1 text-xs text-muted"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.li>
                ))}
            </ol>
        </Section>
    );
}

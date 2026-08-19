"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about">
            <SectionHeader title="About" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
                <div className="text-body space-y-5 text-muted">
                    <p>
                        I&apos;m an Information Technology graduate from Cebu Institute of
                        Technology University, now a software developer consultant at
                        Oltek Solutions Corp. I build real production systems, not demo
                        apps — frontend, backend, cloud infrastructure, deployment
                        pipelines, and the performance work in between.
                    </p>
                    <p>
                        I&apos;ve shipped deployed systems used by real people — including my
                        own SaaS platform,{" "}
                        <a
                            href="https://estabweb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                        >
                            EstabWeb
                        </a>
                        , which lets small businesses launch a managed website in a day or
                        two. The approach is the same every time: build fast, build
                        reliably, and deploy so it doesn&apos;t break in the real world.
                    </p>
                </div>

                <dl className="grid grid-cols-2 gap-3 self-start sm:gap-4">
                    {[
                        { k: "Shipped to production", v: "8+ systems" },
                        { k: "PromptQuest 2025", v: "Champion" },
                        { k: "Capstone", v: "Top 12 of 60+" },
                        { k: "Currently", v: "Oltek Solutions" },
                    ].map((stat) => (
                        <div
                            key={stat.k}
                            className="rounded-xl border border-line bg-white/[0.02] p-4"
                        >
                            <dt className="text-xs uppercase tracking-wide text-dim">
                                {stat.k}
                            </dt>
                            <dd className="mt-1.5 font-semibold text-foreground">{stat.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="mt-16 sm:mt-20">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Testimonials
                </h3>
                <p className="mt-2 text-sm text-muted sm:text-base">
                    What partners and stakeholders say about working together.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.06, duration: 0.4 }}
                            className="flex h-full flex-col rounded-2xl border border-line bg-surface/60 p-5 transition-colors hover:border-accent/25 sm:p-6"
                        >
                            <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
                                {t.quote}
                            </blockquote>

                            <figcaption className="mt-5 flex items-start gap-3 border-t border-line pt-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-sm font-semibold text-accent">
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-foreground">
                                        {t.name}
                                    </span>
                                    <span className="block text-xs text-dim">
                                        {t.role}
                                        {t.company ? ` · ${t.company}` : ""}
                                    </span>
                                </span>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </Section>
    );
}

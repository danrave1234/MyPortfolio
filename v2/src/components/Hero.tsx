"use client";

import { ArrowDown, Mail } from "lucide-react";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";

const facts = [
    "BS Information Technology, CIT-U",
    "SaaS Founder — EstabWeb",
    "Cebu City, Philippines",
];

export function Hero() {
    return (
        <Section id="home" full reveal={false} className="pt-24 pb-28 sm:pt-28">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                <div
                    className="relative h-28 w-28 overflow-hidden rounded-full border border-line sm:h-32 sm:w-32 md:h-40 md:w-40"
                >
                    <Image
                        src="/assets/Me.webp"
                        alt="Danrave C. Keh"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
                    />
                </div>

                <h1
                    className="text-display mt-7 font-bold text-foreground"
                >
                    Danrave C. Keh
                </h1>

                <p
                    className="mt-3 font-mono text-base text-accent sm:text-lg md:text-xl"
                >
                    Full Stack &amp; Cloud Developer
                </p>

                <p
                    className="text-body mt-6 max-w-xl text-balance text-muted"
                >
                    I build and ship production systems end to end — frontend, backend,
                    cloud infrastructure, and the deployment pipelines that keep them
                    running.
                </p>

                {/* Facts strip. Wraps naturally instead of overflowing on narrow
                    screens. */}
                <ul
                    className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-dim"
                >
                    {facts.map((fact, i) => (
                        <li key={fact} className="flex items-center gap-3">
                            {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-dim/60" />}
                            <span>{fact}</span>
                        </li>
                    ))}
                </ul>

                <div
                    className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center"
                >
                    <Link
                        href="#projects"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 font-semibold text-[#04191c] transition-colors hover:bg-accent-ink"
                    >
                        View my work
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-white/[0.03] px-6 font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                    >
                        <Mail className="h-4 w-4" />
                        Get in touch
                    </Link>
                </div>
            </div>

            {/* Scroll cue. Hidden on short viewports where it would collide with
                the buttons, and on touch where the dock already sits there. */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-24 hidden justify-center text-dim [@media(min-height:760px)]:flex"
            >
                <ArrowDown className="h-5 w-5 animate-bounce" />
            </div>
        </Section>
    );
}

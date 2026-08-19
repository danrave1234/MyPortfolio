"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: ReactNode;
    id?: string;
    className?: string;
    /** Reserve a full viewport. Only the hero needs this. */
    full?: boolean;
    /**
     * Skip the scroll reveal. Use for above-the-fold content: an entrance
     * animation there delays LCP, and if the animation never runs (throttled
     * rAF, a JS error) the content stays at `opacity: 0`.
     */
    reveal?: boolean;
}

export function Section({
    children,
    id,
    className,
    full = false,
    reveal = true,
    ...props
}: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={reveal ? { opacity: 0, y: 16 } : false}
            whileInView={reveal ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "relative w-full scroll-mt-8",
                // svh, not vh: on mobile browsers vh includes the collapsing
                // address bar, which makes "full height" sections overflow.
                full && "min-h-[100svh] flex flex-col justify-center",
                "px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28",
                className
            )}
            {...props}
        >
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </motion.section>
    );
}

/** Section heading + optional lead paragraph, consistent across all sections. */
export function SectionHeader({
    title,
    lead,
    align = "left",
    className,
}: {
    title: string;
    lead?: string;
    align?: "left" | "center";
    className?: string;
}) {
    return (
        <div
            className={cn(
                "mb-10 sm:mb-14",
                align === "center" && "text-center mx-auto max-w-2xl",
                className
            )}
        >
            <h2 className="text-heading font-bold text-foreground">{title}</h2>
            <div
                className={cn(
                    "mt-4 h-px w-12 bg-accent/60",
                    align === "center" && "mx-auto"
                )}
            />
            {lead && <p className="mt-5 text-body text-muted">{lead}</p>}
        </div>
    );
}

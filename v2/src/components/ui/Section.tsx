import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function Section({
    children,
    className,
    ...props
}: ComponentPropsWithoutRef<"section">) {
    return (
        <section className={cn("content-section", className)} {...props}>
            <div className="mx-auto w-full max-w-6xl">{children}</div>
        </section>
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
                "mb-7 sm:mb-9",
                align === "center" && "text-center mx-auto max-w-2xl",
                className
            )}
        >
            <h2 className="text-heading text-foreground">{title}</h2>
            {lead && <p className="mt-3 max-w-2xl text-body text-muted">{lead}</p>}
        </div>
    );
}

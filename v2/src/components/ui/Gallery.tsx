"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Image viewer used inside the detail modals.
 *
 * One image at a time with a thumbnail rail, rather than a tall stack of every
 * screenshot — on a phone the stack meant scrolling past five full-width images
 * before reaching any text.
 */
export function Gallery({ images, captions, alt, prioritizeCover = false }: {
    images: string[];
    captions?: string[];
    alt: string;
    prioritizeCover?: boolean;
}) {
    // No reset-on-change effect needed: the modal unmounts its children when
    // it closes, so each open starts a fresh Gallery at index 0.
    const [index, setIndex] = useState(0);
    const railRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rail = railRef.current;
        const thumbnail = rail?.children[index];
        if (!rail || !thumbnail) return;
        const revealThumbnail = () => {
            const bounds = rail.getBoundingClientRect();
            const active = thumbnail.getBoundingClientRect();
            if (active.left < bounds.left) rail.scrollLeft += active.left - bounds.left;
            else if (active.right > bounds.right) rail.scrollLeft += active.right - bounds.right;
        };
        revealThumbnail();
        if (typeof ResizeObserver === "undefined") return;
        const observer = new ResizeObserver(revealThumbnail);
        observer.observe(rail);
        return () => observer.disconnect();
    }, [index]);

    if (images.length === 0) return null;

    const go = (delta: number) =>
        setIndex((i) => (i + delta + images.length) % images.length);

    return (
        <div className="space-y-3">
            <div className="gallery-frame">
                <Image
                    src={images[index]}
                    alt={`${alt} — screenshot ${index + 1} of ${images.length}${captions?.[index] ? ". " + captions[index] : ""}`}
                    fill
                    loading={prioritizeCover && index === 0 ? "eager" : undefined}
                    fetchPriority={prioritizeCover && index === 0 ? "high" : undefined}
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 640px"
                />

            </div>

            {captions?.[index] && <p className="text-sm text-muted">{captions[index]}</p>}
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                {images.length > 1 && (
                    <div className="flex items-center gap-1">
                        <GalleryButton side="left" onClick={() => go(-1)} />
                        <span aria-live="polite" aria-atomic="true" className="px-1 font-mono text-xs text-muted">
                            {index + 1} / {images.length}
                        </span>
                        <GalleryButton side="right" onClick={() => go(1)} />
                    </div>
                )}
                <a href={images[index]} target="_blank" rel="noopener noreferrer" className="editorial-link">
                    Open full-size image
                </a>
            </div>
            {images.length > 1 && (
                <div ref={railRef} className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1">
                    {images.map((img, i) => (
                        <button
                            key={img}
                            onClick={() => setIndex(i)}
                            aria-label={`Show screenshot ${i + 1}`}
                            aria-current={i === index}
                            className={cn(
                                "relative aspect-[16/10] h-14 shrink-0 overflow-hidden rounded-lg border transition-colors sm:h-16",
                                i === index
                                    ? "border-accent"
                                    : "border-line opacity-60 hover:opacity-100"
                            )}
                        >
                            <Image
                                src={img}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="120px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

function GalleryButton({
    side,
    onClick,
}: {
    side: "left" | "right";
    onClick: () => void;
}) {
    const Icon = side === "left" ? ChevronLeft : ChevronRight;
    return (
        <button
            onClick={onClick}
            aria-label={side === "left" ? "Previous image" : "Next image"}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent"
        >
            <Icon className="h-5 w-5" />
        </button>
    );
}

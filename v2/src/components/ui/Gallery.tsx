"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/**
 * Image viewer used inside the detail modals.
 *
 * One image at a time with a thumbnail rail, rather than a tall stack of every
 * screenshot — on a phone the stack meant scrolling past five full-width images
 * before reaching any text.
 */
export function Gallery({ images, alt }: { images: string[]; alt: string }) {
    // No reset-on-change effect needed: the modal unmounts its children when
    // it closes, so each open starts a fresh Gallery at index 0.
    const [index, setIndex] = useState(0);

    if (images.length === 0) return null;

    const go = (delta: number) =>
        setIndex((i) => (i + delta + images.length) % images.length);

    return (
        <div className="space-y-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-black">
                <Image
                    src={images[index]}
                    alt={`${alt} — screenshot ${index + 1} of ${images.length}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 640px"
                />

                {images.length > 1 && (
                    <>
                        <GalleryButton side="left" onClick={() => go(-1)} />
                        <GalleryButton side="right" onClick={() => go(1)} />
                        <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 font-mono text-xs text-foreground/80">
                            {index + 1}/{images.length}
                        </span>
                    </>
                )}
            </div>

            {images.length > 1 && (
                <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1">
                    {images.map((img, i) => (
                        <button
                            key={img}
                            onClick={() => setIndex(i)}
                            aria-label={`Show screenshot ${i + 1}`}
                            aria-current={i === index}
                            className={cn(
                                "relative aspect-[16/10] h-14 shrink-0 snap-start overflow-hidden rounded-lg border transition-colors sm:h-16",
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
            className={cn(
                "absolute top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-black/70 text-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-accent",
                side === "left" ? "left-2" : "right-2"
            )}
        >
            <Icon className="h-5 w-5" />
        </button>
    );
}

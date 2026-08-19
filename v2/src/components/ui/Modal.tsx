"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode, useEffect, useRef, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

/**
 * Full-screen dialog used by the Projects and Achievements sections.
 *
 * Rendered through a portal to `document.body`. This is not optional: every
 * section is a `motion.section`, and an ancestor with a transform becomes the
 * containing block for `position: fixed` — inline, the overlay anchored to its
 * section and landed thousands of pixels down the page.
 *
 * Mobile behaviour is the rest of the point: `100dvh` so the collapsing
 * address bar can't clip the close button, padding for the notch and home
 * indicator, and a background scroll lock that doesn't shift the page when the
 * scrollbar disappears.
 */
export function Modal({
    open,
    onClose,
    label,
    children,
}: {
    open: boolean;
    onClose: () => void;
    label: string;
    children: ReactNode;
}) {
    const closeRef = useRef<HTMLButtonElement>(null);
    // `false` during SSR, `true` once hydrated — there is no document to
    // portal into on the server.
    const mounted = useSyncExternalStore(
        subscribeNoop,
        () => true,
        () => false
    );

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);

        // Compensate for the vanishing scrollbar so the page behind doesn't
        // shift sideways when the modal opens.
        const gap = window.innerWidth - document.documentElement.clientWidth;
        const { overflow, paddingRight } = document.body.style;
        document.body.style.overflow = "hidden";
        if (gap > 0) document.body.style.paddingRight = `${gap}px`;

        closeRef.current?.focus();

        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
        };
    }, [open, onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={label}
                    onClick={onClose}
                    className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 24, scale: 0.99 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-line bg-[#0c0e12] sm:max-h-[88dvh] sm:rounded-2xl"
                    >
                        {/* Drag affordance on mobile, where the sheet slides up. */}
                        <div
                            aria-hidden
                            className="mx-auto mt-2.5 h-1 w-10 shrink-0 rounded-full bg-white/20 sm:hidden"
                        />

                        <button
                            ref={closeRef}
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-black/70 text-foreground backdrop-blur transition-colors hover:border-accent/40 hover:text-accent sm:right-4 sm:top-4"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <div className="overflow-y-auto overscroll-contain pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}

/** The mounted flag never changes after hydration, so there is nothing to subscribe to. */
function subscribeNoop() {
    return () => {};
}

"use client";

import { X } from "lucide-react";
import { type ReactNode, useEffect, useRef } from "react";

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
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const pointerStartedOnBackdrop = useRef(false);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!open || !dialog) return;

        const trigger = document.activeElement;
        const scrollY = window.scrollY;
        const body = document.body;
        const { position, top, width, overflow, paddingRight } = body.style;
        const scrollbar = window.innerWidth - document.documentElement.clientWidth;

        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";
        body.style.overflow = "hidden";
        if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

        dialog.showModal();
        closeRef.current?.focus({ preventScroll: true });

        return () => {
            dialog.close();
            Object.assign(body.style, { position, top, width, overflow, paddingRight });
            window.scrollTo({ top: scrollY, behavior: "instant" });
            if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
        };
    }, [open]);

    return (
        <dialog
            ref={dialogRef}
            aria-label={label}
            className="portfolio-dialog"
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onPointerDown={(event) => {
                pointerStartedOnBackdrop.current = event.target === event.currentTarget;
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget && pointerStartedOnBackdrop.current) onClose();
                pointerStartedOnBackdrop.current = false;
            }}
        >
            <div className="dialog-panel">
                <div className="flex justify-end border-b border-line px-3 py-2 sm:px-4">
                    <button
                        type="button"
                        ref={closeRef}
                        onClick={onClose}
                        aria-label="Close"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    >
                        <X aria-hidden className="h-5 w-5" />
                    </button>
                </div>
                <div className="dialog-content">{children}</div>
            </div>
        </dialog>
    );
}
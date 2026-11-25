"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";

export function AdaptiveDetails({ label, children, heading = false, initiallyOpen = false, anchorId }: {
    label: string;
    children: ReactNode;
    heading?: boolean;
    initiallyOpen?: boolean;
    anchorId?: string;
}) {
    const ref = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const wide = window.matchMedia("(min-width: 48rem) and (min-height: 32rem)");
        const targeted = () => Boolean(anchorId && location.hash === "#" + anchorId);
        const setDefault = () => { el.open = wide.matches || initiallyOpen || targeted(); };
        const reveal = () => { if (targeted()) el.open = true; };
        setDefault();
        wide.addEventListener("change", setDefault);
        window.addEventListener("hashchange", reveal);
        return () => {
            wide.removeEventListener("change", setDefault);
            window.removeEventListener("hashchange", reveal);
        };
    }, [anchorId, initiallyOpen]);

    const Label = heading ? "h3" : "span";
    return (
        <details ref={ref} open={initiallyOpen} className="adaptive-details">
            <summary>
                <Label className="disclosure-label">
                    {label}<ChevronDown aria-hidden className="disclosure-chevron" />
                </Label>
            </summary>
            <div className="disclosure-body">{children}</div>
        </details>
    );
}

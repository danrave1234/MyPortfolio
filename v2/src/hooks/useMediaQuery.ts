"use client";

import { useEffect, useState } from "react";

/**
 * Subscribe to a CSS media query from JS.
 *
 * Always returns `false` on the server and on the first client render so the
 * two agree — the real value lands in the effect, after hydration.
 */
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(query);
        const update = () => setMatches(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, [query]);

    return matches;
}

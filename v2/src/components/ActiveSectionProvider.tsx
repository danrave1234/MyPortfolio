"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";

export function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            rootMargin: "-40% 0px -40% 0px", // focus on middle band of viewport
        };

        const sectionVisibility = new Map<string, number>();

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    sectionVisibility.set(entry.target.id, entry.intersectionRatio);
                } else {
                    sectionVisibility.delete(entry.target.id);
                }
            });

            if (sectionVisibility.size > 0) {
                const mostVisible = Array.from(sectionVisibility.entries()).reduce((a, b) =>
                    a[1] > b[1] ? a : b
                );
                setActiveSection(mostVisible[0]);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {children}
            <Navbar activeSection={activeSection} />
        </>
    );
}


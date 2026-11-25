"use client";

import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { resumePath } from "@/lib/site";

const sections = [
    { id: "projects", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "capabilities", label: "Skills" },
    { id: "achievements", label: "Awards" },
    { id: "contact", label: "Contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        if (pathname !== "/" || typeof IntersectionObserver === "undefined") return;

        const targets = document.querySelectorAll("main section[id]");
        const visible = new Map<string, number>();
        let observer: IntersectionObserver;

        function observe() {
            observer?.disconnect();
            visible.clear();
            const center = Math.round(window.innerHeight * 0.4);
            const bottom = Math.max(0, window.innerHeight - center - 64);
            observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
                    else visible.delete(entry.target.id);
                }
                const current = [...visible].sort((a, b) => b[1] - a[1])[0];
                setActiveSection(current?.[0] ?? "");
            }, { rootMargin: `-${center}px 0px -${bottom}px 0px` });

            targets.forEach((target) => observer.observe(target));
        }

        observe();
        window.addEventListener("resize", observe);
        return () => {
            observer.disconnect();
            window.removeEventListener("resize", observe);
        };
    }, [pathname]);

    return (
        <header id="top" className="site-header">
            <div className="site-header-inner mx-auto max-w-6xl">
                <BrandLogo />
                <nav aria-label="Section navigation" className="site-nav">
                    {sections.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`/#${id}`}
                            aria-current={(pathname.startsWith("/work/") ? id === "projects" : pathname === "/" && activeSection === id) ? "location" : undefined}
                            className="site-nav-link"
                        >
                            <span>{label}</span>
                        </a>
                    ))}
                </nav>
                <a href={resumePath} target="_blank" rel="noopener noreferrer" className="editorial-link col-start-2 row-start-1 justify-self-end">
                    Résumé <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
            </div>
        </header>
    );
}

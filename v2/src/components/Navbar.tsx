"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
    const menuRef = useRef<HTMLDetailsElement>(null);

    useEffect(() => {
        const menu = menuRef.current;
        if (!menu) return;
        const close = () => { menu.open = false; };
        const outside = (event: PointerEvent) => {
            if (event.target instanceof Node && !menu.contains(event.target)) close();
        };
        const escape = (event: KeyboardEvent) => {
            if (menu.open && event.key === "Escape") {
                close();
                menu.querySelector("summary")?.focus({ preventScroll: true });
            }
        };
        const desktop = window.matchMedia("(min-width: 64rem)");
        desktop.addEventListener("change", close);
        document.addEventListener("pointerdown", outside);
        document.addEventListener("keydown", escape);
        window.addEventListener("pageshow", close);
        return () => {
            desktop.removeEventListener("change", close);
            document.removeEventListener("pointerdown", outside);
            document.removeEventListener("keydown", escape);
            window.removeEventListener("pageshow", close);
        };
    }, []);

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

    const sectionLinks = sections.map(({ id, label }) => (
        <a key={id} href={`/#${id}`} className="site-nav-link"
            aria-current={(pathname.startsWith("/work/") ? id === "projects" : pathname === "/" && activeSection === id) ? "location" : undefined}
        >
            {label}
        </a>
    ));
    const resumeLink = <a href={resumePath} target="_blank" rel="noopener noreferrer" className="editorial-link">
        Résumé <ArrowUpRight aria-hidden className="h-4 w-4" />
    </a>;

    return (
        <header className="site-header">
            <div className="site-header-inner mx-auto max-w-6xl">
                <BrandLogo />
                <nav aria-label="Section navigation" className="site-nav">{sectionLinks}</nav>
                <div className="desktop-resume">{resumeLink}</div>
                <details className="mobile-menu" ref={menuRef}
                    onBlur={(event) => {
                        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
                    }}
                >
                    <summary aria-controls="mobile-navigation">
                        <span className="menu-closed">Menu</span><Menu className="menu-closed" aria-hidden />
                        <span className="menu-open">Close</span><X className="menu-open" aria-hidden />
                    </summary>
                    <nav id="mobile-navigation" aria-label="Section navigation" className="mobile-navigation"
                        onClick={(event) => {
                            const link = event.target instanceof Element ? event.target.closest("a") : null;
                            if (!link || !menuRef.current || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                            menuRef.current.open = false;
                            if (link.target === "_blank") menuRef.current.querySelector("summary")?.focus({ preventScroll: true });
                        }}
                    >
                        {sectionLinks}
                        {resumeLink}
                    </nav>
                </details>
            </div>
            <noscript><style>{'@media (max-width: 63.999rem) { .site-header { position: relative; } }'}</style></noscript>
        </header>
    );
}

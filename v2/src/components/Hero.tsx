import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { hayahai } from "@/lib/site";

export function Hero() {
    return (
        <Section id="home" className="hero-section">
            <div className="hero-byline">
                <span>Full-stack &amp; cloud developer</span>
                <span>Cebu City, Philippines</span>
            </div>
            <div className="hero-intro">
                <h1 className="text-display">Danrave C. Keh</h1>
                <div className="hero-summary">
                    <p className="hero-copy">
                        I’m part of the Moodle platform team. I work on ferry booking systems
                        at {hayahai.name} and build tools for small businesses.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="editorial-link">
                            View my work <ArrowDownRight aria-hidden className="h-4 w-4" />
                        </a>
                        <a href="#contact" className="editorial-link">
                            Get in touch <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </a>
                    </div>
                </div>
                <figure className="hero-profile">
                    <Image
                        src="/assets/danrave-headshot.webp"
                        alt="Danrave C. Keh"
                        width={112}
                        height={140}
                        preload
                        className="hero-portrait"
                    />
                    <figcaption>
                        <span className="block font-semibold text-foreground">Software Developer Consultant</span>
                        <a href="#experience" className="editorial-link">
                            Experience <ArrowDownRight aria-hidden className="h-4 w-4" />
                        </a>
                    </figcaption>
                </figure>
            </div>
        </Section>
    );
}

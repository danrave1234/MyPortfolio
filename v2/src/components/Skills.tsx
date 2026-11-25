import { Section, SectionHeader } from "@/components/ui/Section";
import { capabilities } from "@/data/portfolio";
import Image from "next/image";

/** Tech logos shown per capability. Labels double as the image alt text. */
const capabilityIcons: Record<string, { src: string; label: string }[]> = {
    "Frontend Engineering": [
        { src: "/assets/react.svg", label: "React" },
        { src: "/assets/Next.js.png", label: "Next.js" },
        { src: "/assets/typescript.svg", label: "TypeScript" },
        { src: "/assets/javascript.svg", label: "JavaScript" },
        { src: "/assets/vite.svg", label: "Vite" },
        { src: "/assets/html.svg", label: "HTML" },
        { src: "/assets/css.svg", label: "CSS" },
    ],
    "Backend & API Development": [
        { src: "/assets/java.svg", label: "Java" },
        { src: "/assets/Spring_Boot.png", label: "Spring Boot" },
        { src: "/assets/NestJS.png", label: "NestJS" },
        { src: "/assets/python.svg", label: "Python" },
        { src: "/assets/FastAPI.png", label: "FastAPI" },
    ],
    "Databases & Backend Services": [
        { src: "/assets/Postgresql_elephant.svg.png", label: "PostgreSQL" },
        { src: "/assets/mysql.svg", label: "MySQL" },
        { src: "/assets/firebase.png", label: "Firebase" },
    ],
    "Cloud & DevOps": [
        { src: "/assets/aws.svg", label: "AWS" },
        { src: "/assets/gcloudconsole.svg", label: "Google Cloud" },
        { src: "/assets/oraclecloud.svg", label: "Oracle Cloud" },
        { src: "/assets/github.svg", label: "GitHub" },
    ],
    "AI & Automation": [
        { src: "/assets/python.svg", label: "Python" },
    ],
};

export function Skills() {
    return (
        <Section id="capabilities">
            <SectionHeader title="Technical skills" />

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
                {capabilities.map((cap) => (
                    <article
                        key={cap.title}
                        className="group flex h-full flex-col border-t border-line-strong py-4 sm:pr-4"
                    >
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                            {cap.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{cap.description}</p>

                        {capabilityIcons[cap.title] && (
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {capabilityIcons[cap.title].map((icon) => (
                                    <li
                                        key={icon.label}
                                        title={icon.label}
                                        className="flex h-9 w-9 items-center justify-center border border-line bg-surface p-1.5"
                                    >
                                        <Image
                                            src={icon.src}
                                            alt={icon.label}
                                            width={20}
                                            height={20}
                                            className="h-full w-full object-contain"
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}

                        <ul className="mt-5 space-y-2 border-t border-line pt-5">
                            {cap.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-2.5 text-sm text-foreground/80"
                                >
                                    <span
                                        aria-hidden
                                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                    />
                                    <span className="min-w-0">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}

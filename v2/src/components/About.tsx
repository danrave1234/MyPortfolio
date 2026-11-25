import { Section, SectionHeader } from "@/components/ui/Section";
import { testimonials } from "@/data/portfolio";
import { hayahai } from "@/lib/site";

export function About() {
    return (
        <Section id="about">
            <SectionHeader title="About" />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
                <div className="text-body space-y-5 text-muted">
                    <p>
                        I&apos;m an Information Technology graduate from Cebu Institute of
                        Technology University and a software developer consultant at{" "}
                        <a href={hayahai.url} className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
                            {hayahai.name}
                        </a>
                        . I work on the booking pages passengers use to reserve ferry trips
                        and the tools port staff use to issue tickets.
                    </p>
                    <p>
                        I also founded{" "}
                        <a
                            href="https://estabweb.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                        >
                            EstabWeb
                        </a>
                        , where small businesses edit and publish a managed website on their own domain.
                    </p>
                </div>

                <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,max(8rem,35%)),1fr))] gap-3 self-start sm:gap-4">
                    {[
                        { k: "Education", v: "BS Information Technology" },
                        { k: "PromptQuest 2025", v: "Champion" },
                        { k: "Capstone", v: "Top 12 of 60+" },
                        { k: "Consulting at", v: hayahai.name },
                    ].map((stat) => (
                        <div
                            key={stat.k}
                            className="border-t border-line py-3"
                        >
                            <dt className="text-xs uppercase tracking-wide text-dim">
                                {stat.k}
                            </dt>
                            <dd className="mt-1.5 font-semibold text-foreground">{stat.v}</dd>
                        </div>
                    ))}
                </dl>
            </div>

            <div className="mt-16 sm:mt-20">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Testimonials
                </h3>
                <p className="mt-2 text-sm text-muted sm:text-base">
                    What partners and stakeholders say about working together.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((t) => (
                        <figure
                            key={t.name}
                            className="flex h-full flex-col border-t border-line-strong py-4 sm:pr-4"
                        >
                            <blockquote className="flex-1 text-sm leading-relaxed text-foreground/85 sm:text-[0.95rem]">
                                {t.quote}
                            </blockquote>

                            <figcaption className="mt-5 flex items-start gap-3 border-t border-line pt-4">
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-surface text-sm font-semibold text-accent">
                                    {t.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")
                                        .slice(0, 2)}
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-foreground">
                                        {t.name}
                                    </span>
                                    <span className="block text-xs text-dim">
                                        {t.role}
                                        {t.company ? ` · ${t.company}` : ""}
                                    </span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </Section>
    );
}

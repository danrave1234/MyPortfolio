import { Section, SectionHeader } from "@/components/ui/Section";
import { experience } from "@/data/portfolio";
import { AdaptiveDetails } from "@/components/ui/AdaptiveDetails";

export function Experience() {
    return (
        <Section id="experience">
            <SectionHeader
                title="Experience"
            />

            <aside aria-labelledby="current-work" className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-l-2 border-accent bg-surface px-4 py-3 sm:mb-10">
                <p className="text-sm font-semibold text-accent">Current work</p>
                <h3 id="current-work" className="text-xl font-bold text-foreground">Moodle platform team</h3>
            </aside>

            <ol className="relative space-y-8 sm:space-y-10">
                {experience.map((role) => (
                    <li
                        key={`${role.company}-${role.title}`}
                        // The timeline rail is drawn with a left border rather than
                        // absolutely positioned dots, so it can never drift out of
                        // alignment as the text reflows on narrow screens.
                        className="relative border-l border-line pl-6 sm:pl-8"
                    >
                        <span
                            aria-hidden
                            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-accent"
                        />

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                            <h3 className="text-lg font-semibold text-foreground">
                                {role.title}
                            </h3>
                            <span className="shrink-0 font-mono text-xs text-dim">
                                {role.period}
                            </span>
                        </div>

                        <p className="mt-1 text-sm text-accent">
                            {role.company}
                            {role.mode && (
                                <span className="text-dim"> · {role.mode}</span>
                            )}
                        </p>

                        <AdaptiveDetails label="Responsibilities and tools">
                            <ul className="space-y-2">
                                {role.highlights.map((h) => (
                                    <li
                                        key={h}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                                    >
                                        <span
                                            aria-hidden
                                            className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                        />
                                        <span className="min-w-0">{h}</span>
                                    </li>
                                ))}
                            </ul>

                            {role.tech && (
                                <ul className="mt-4 flex flex-wrap gap-1.5">
                                    {role.tech.map((t) => (
                                        <li
                                            key={t}
                                            className="border border-line px-2 py-1 font-mono text-xs text-muted"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </AdaptiveDetails>
                    </li>
                ))}
            </ol>
        </Section>
    );
}

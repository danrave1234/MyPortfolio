import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Gallery } from "@/components/ui/Gallery";
import { ProjectName } from "@/components/ProjectName";
import { contactEmail, projectSlug } from "@/lib/site";
import type { Project } from "@/types";

export function ProjectDetails({ project, standalone = false }: { project: Project; standalone?: boolean }) {
    const Title = standalone ? "h1" : "h2";
    const blockHeading = standalone ? "h2" : "h3";
    return (
        <div className={`grid grid-cols-1 gap-6 wrap-anywhere lg:grid-cols-2 lg:gap-8 ${standalone ? "py-5 sm:py-6 lg:py-8" : "p-5 pt-6 sm:p-6 lg:p-8"}`}>
            <header className="lg:col-span-2">
                <span className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent">
                    {project.category}
                    {project.period && (
                        <span className="font-mono normal-case text-dim">
                            · {project.period}
                        </span>
                    )}
                </span>
                <Title className={standalone ? "work-title text-foreground" : "mt-2 text-2xl font-bold text-foreground sm:text-3xl"}>
                    <ProjectName project={project} />
                </Title>
                <p className="mt-1 text-base text-muted sm:text-lg">
                    {project.subtitle}
                </p>
                <p className="text-body mt-3 max-w-3xl text-muted">{project.description}</p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-2 text-sm text-muted">
                    Have a similar project in mind?
                    <a className="editorial-link" href={`mailto:${contactEmail}?subject=${encodeURIComponent("Project inquiry about " + project.title)}`}>
                        {contactEmail} <ArrowUpRight aria-hidden className="h-4 w-4 shrink-0" />
                    </a>
                </p>
            </header>
            <div className={standalone ? "lg:sticky lg:top-20 lg:self-start" : "lg:sticky lg:top-0 lg:self-start"}>
                <Gallery images={project.images} captions={project.imageCaptions} alt={project.title} prioritizeCover={standalone} />
            </div>

            <div className="space-y-7">
                {project.impact && <p className="font-medium text-accent">{project.impact}</p>}

                {project.responsibilities?.length ? (
                    <Block heading={blockHeading} title="My role">
                        <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted">
                            {project.responsibilities.map((task) => <li key={task}>{task}</li>)}
                        </ul>
                    </Block>
                ) : null}

                {project.problemSolved && (
                    <Block heading={blockHeading} title="Problem solved">
                        <p className="text-sm leading-relaxed text-muted">
                            {project.problemSolved}
                        </p>
                    </Block>
                )}

                <Block heading={blockHeading} title="Key features">
                    <ul className="space-y-2">
                        {project.keyFeatures.map((f) => (
                            <li
                                key={f}
                                className="flex items-start gap-2.5 text-sm text-foreground/80"
                            >
                                <span
                                    aria-hidden
                                    className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/70"
                                />
                                <span className="min-w-0">{f}</span>
                            </li>
                        ))}
                    </ul>
                </Block>

                <Block heading={blockHeading} title="Tech stack">
                    <ul className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                            <li
                                key={t}
                                className="rounded-md border border-line bg-surface-hi px-2.5 py-1 text-xs text-muted"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </Block>

                {project.architecture && (
                    <Block heading={blockHeading} title="System architecture">
                        <p className="text-sm leading-relaxed text-muted">
                            {project.architecture.flow}
                        </p>
                        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {project.architecture.components.map((c) => (
                                <li
                                    key={c.name}
                                    className="rounded-lg border border-line bg-surface p-3"
                                >
                                    <span className="block text-xs uppercase tracking-wide text-dim">
                                        {c.name}
                                    </span>
                                    <span className="mt-1 block text-sm font-medium text-foreground">
                                        {c.type}
                                    </span>
                                    <span className="mt-0.5 block text-xs text-muted">
                                        {c.details}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Block>
                )}

                <div className="flex flex-wrap gap-x-6">
                    {!standalone && (
                        <Link className="editorial-link" href={`/work/${projectSlug(project.title)}`}>
                            Project page <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </Link>
                    )}
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="editorial-link">
                            Visit live site <ExternalLink aria-hidden className="h-4 w-4" />
                        </a>
                    )}
                    {project.repository && (
                        <a href={project.repository} target="_blank" rel="noopener noreferrer" className="editorial-link">
                            View repository <ExternalLink aria-hidden className="h-4 w-4" />
                        </a>
                    )}
                    {project.listing && (
                        <a href={project.listing} target="_blank" rel="noopener noreferrer" className="editorial-link">
                            App Builders PH <ExternalLink aria-hidden className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function Block({
    heading: Heading,
    title,
    children,
}: {
    heading: "h2" | "h3";
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <Heading className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
                {title}
            </Heading>
            {children}
        </section>
    );
}

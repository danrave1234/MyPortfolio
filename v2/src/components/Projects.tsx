"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Modal } from "@/components/ui/Modal";
import { ProjectDetails } from "@/components/ProjectDetails";
import { ProjectName } from "@/components/ProjectName";
import { projectSlug } from "@/lib/site";
import { featuredProjects, moreProjects } from "@/data/portfolio";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/types";

function ProjectCard({ project, lead = false, onOpen }: {
    project: Project;
    lead?: boolean;
    onOpen: (project: Project) => void;
}) {
    return (
        <article className={lead ? "work-entry work-entry-lead" : "work-entry"}>
            <div className="work-cover">
                <Image
                    src={project.images[0]}
                    alt={project.imageCaptions?.[0] ?? `${project.title} project preview`}
                    fill
                    loading={lead ? "eager" : "lazy"}
                    fetchPriority={lead ? "high" : undefined}
                    sizes={lead
                        ? "(min-width: 768px) 60vw, 100vw"
                        : "(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw"}
                    className="object-contain"
                />
            </div>
            <div className="work-caption">
                <p className="editorial-meta">
                    {project.category}{project.period && ` · ${project.period}`}
                </p>
                <h3 className="work-title"><ProjectName project={project} /></h3>
                <p className="mt-1 font-medium text-foreground">{project.subtitle}</p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{project.description}</p>
                <a
                    href={`/work/${projectSlug(project.title)}`}
                    aria-haspopup="dialog"
                    aria-label={`View project details for ${project.title}`}
                    onClick={(event) => {
                        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
                        event.preventDefault();
                        event.currentTarget.focus({ preventScroll: true });
                        onOpen(project);
                    }}
                    className="editorial-link work-details"
                >
                    <span>View project details<span className="sr-only"> for {project.title}</span></span>
                    <ArrowUpRight aria-hidden className="h-4 w-4" />
                </a>
            </div>
        </article>
    );
}

export function Projects() {
    const [active, setActive] = useState<Project | null>(null);

    return (
        <Section id="projects">
            <SectionHeader title="Selected work" />

            <div className="work-grid">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} lead={index === 0} onOpen={setActive} />
                ))}
            </div>

            <details className="work-more">
                <summary>
                    <span className="work-more-closed">Read more</span>
                    <span className="work-more-open">Show fewer</span>
                    <span className="editorial-meta">{moreProjects.length} projects</span>
                    <ChevronDown aria-hidden className="h-5 w-5" />
                </summary>
                <div className="work-grid">
                    {moreProjects.map((project) => (
                        <ProjectCard key={project.title} project={project} onOpen={setActive} />
                    ))}
                </div>
            </details>

            <Modal
                open={active !== null}
                onClose={() => setActive(null)}
                label={active?.title ?? "Project details"}
            >
                {active && (
                    <ProjectDetails project={active} />
                )}
            </Modal>
        </Section>
    );
}

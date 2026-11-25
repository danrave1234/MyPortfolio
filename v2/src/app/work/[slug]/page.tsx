import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectDetails } from "@/components/ProjectDetails";
import { projects } from "@/data/portfolio";
import { projectSlug, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return projects.map(({ title }) => ({ slug: projectSlug(title) }));
}

function getProject(slug: string) {
    return projects.find(({ title }) => projectSlug(title) === slug) ?? notFound();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);
    const title = `${project.title} — ${project.subtitle} | Danrave Keh`;
    const description = project.description;
    const url = `/work/${slug}`;
    const images = [{ url: project.images[0], alt: project.imageCaptions?.[0] ?? project.subtitle }];
    return {
        title, description, alternates: { canonical: url },
        openGraph: { type: "article", url, title, description, images },
        twitter: { card: "summary_large_image", title, description, images },
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getProject(slug);
    const url = `${siteUrl}/work/${slug}`;
    const caseStudy = {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: url,
        headline: `${project.title} — ${project.subtitle}`,
        description: project.description,
        image: project.images.map((image) => siteUrl + image),
        author: { "@type": "Person", "@id": siteUrl + "/#person", name: "Danrave C. Keh", url: siteUrl + "/" },
    };
    const related = projects.find(({ title }) => title === project.relatedProject);
    return (
        <article className="content-section mx-auto max-w-6xl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudy).replaceAll("<", "\\u003c") }} />
            <Link href="/#projects" className="editorial-link mb-2">
                <ArrowLeft aria-hidden className="h-4 w-4" /> Selected work
            </Link>
            <ProjectDetails project={project} standalone />
            {related && (
                <aside className="mt-4 border-t border-line pt-4" aria-label="Related project">
                    <p className="editorial-meta">Related project</p>
                    <Link href={`/work/${projectSlug(related.title)}`} className="editorial-link">
                        {related.title} · {related.subtitle}
                    </Link>
                </aside>
            )}
        </article>
    );
}

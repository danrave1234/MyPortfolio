import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { capabilities } from "@/data/portfolio";
import { AdaptiveDetails } from "@/components/ui/AdaptiveDetails";

export function Skills() {
    return (
        <Section id="capabilities">
            <SectionHeader title="Technical skills" />
            <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 md:gap-y-5">
                {capabilities.map(({ id, title, description, tools }, index) => (
                    <article key={title} id={id} className="min-w-0 border-t border-line-strong md:py-2 md:last:odd:col-span-2">
                        <AdaptiveDetails label={title} heading initiallyOpen={index === 0} anchorId={id}>
                            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                            <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(min(100%,8.25rem),1fr))] gap-x-3 gap-y-3">
                                {tools.map(({ name, image }) => (
                                    <li key={name} className="flex min-w-0 items-center gap-2 text-sm font-medium leading-tight">
                                        <Image
                                            src={image}
                                            alt=""
                                            width={28}
                                            height={28}
                                            unoptimized={image.startsWith("/assets/skills/")}
                                            className="h-7 w-7 shrink-0 object-contain"
                                        />
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </AdaptiveDetails>
                    </article>
                ))}
            </div>
        </Section>
    );
}

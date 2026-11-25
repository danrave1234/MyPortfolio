import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { capabilities } from "@/data/portfolio";

export function Skills() {
    return (
        <Section id="capabilities">
            <SectionHeader title="Technical skills" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2">
                {capabilities.map(({ id, title, description, tools }) => (
                    <article key={title} id={id} className="min-w-0 border-t border-line-strong py-4 md:last:odd:col-span-2">
                        <h3 className="text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
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
                    </article>
                ))}
            </div>
        </Section>
    );
}

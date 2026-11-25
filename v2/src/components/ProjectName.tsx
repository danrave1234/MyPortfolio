import Image from "next/image";
import type { Project } from "@/types";

export function ProjectName({ project }: { project: Project }) {
    return (
        <span className="project-name">
            {project.logo && (
                <Image src={project.logo} alt="" width={144} height={144} className="project-logo" unoptimized />
            )}
            <span>{project.title}</span>
        </span>
    );
}

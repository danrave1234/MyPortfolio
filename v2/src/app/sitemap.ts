import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { projectSlug, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: siteUrl + "/" },
        ...projects.map(({ title, images }) => ({
            url: `${siteUrl}/work/${projectSlug(title)}`,
            images: images.map((image) => siteUrl + image),
        })),
    ];
}

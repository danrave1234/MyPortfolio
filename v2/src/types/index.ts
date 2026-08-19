export interface Project {
    title: string;
    subtitle: string;
    /** Active period, e.g. "2026 — Present". Shown on the card. */
    period?: string;
    /** One verifiable outcome. Leave unset rather than inventing a metric. */
    impact?: string;
    description: string;
    featured: boolean;
    category: string;
    keyFeatures: string[];
    tech: string[];
    responsibilities?: string[];
    link: string | null;
    images: string[];
    problemSolved?: string;
    architecture?: {
        title: string;
        description: string;
        components: {
            name: string;
            type: string;
            details: string;
        }[];
        flow: string;
    };
}

import { IconType } from "react-icons";

export interface Achievement {
    title: string;
    description: string;
    link?: string;
    images: string[];
    type: "hackathon" | "media" | "academic" | "other";
    icon: IconType;
    badge: string;
    isChampion?: boolean;
}

export interface Capability {
    title: string;
    description: string;
    items: string[];
}

export interface NavItem {
    label: string;
    href: string;
    shortcut?: string;
}

export interface Testimonial {
    name: string;
    role: string;
    company?: string;
    quote: string;
    relationship?: string;
}

export interface ExperienceRole {
    title: string;
    company: string;
    period: string;
    mode?: string;
    highlights: string[];
    tech?: string[];
}

export interface Certification {
    name: string;
    issuer?: string;
    date: string;
}

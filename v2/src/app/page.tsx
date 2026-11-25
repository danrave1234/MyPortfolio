import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
    return (
        <>
            <StructuredData />
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <Achievements />
            <Contact />
        </>
    );
}

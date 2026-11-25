import { contactEmail, hayahai, siteDescription, siteUrl } from "@/lib/site";

export function StructuredData() {
    const profile = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": siteUrl + "/#profile",
        url: siteUrl + "/",
        description: siteDescription,
        mainEntity: {
            "@type": "Person",
            "@id": siteUrl + "/#person",
            name: "Danrave C. Keh",
            alternateName: "Danrave Keh",
            url: siteUrl + "/",
            image: siteUrl + "/assets/danrave-headshot.webp",
            jobTitle: "Full Stack & Cloud Developer",
            email: contactEmail,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Cebu City",
                addressCountry: "PH",
            },
            worksFor: {
                "@type": "Organization",
                name: hayahai.name,
                url: hayahai.url,
            },
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Cebu Institute of Technology University",
            },
            knowsAbout: [
                "Full Stack Development",
                "Next.js",
                "React",
                "TypeScript",
                "NestJS",
                "Spring Boot",
                "PostgreSQL",
                "Prisma",
                "AWS",
                "Azure",
                "Google Cloud",
                "CI/CD",
                "Git",
                "GitHub",
                "Jira",
                "ClickUp",
                "Windows Subsystem for Linux (WSL 2)",
                "Ubuntu",
                "SaaS Architecture",
                "Moodle LMS",
                "PHP",
                "PHPUnit",
                "Behat",
                "Supabase",
                "Firebase",
                "Cloudflare Workers",
                "Oracle Cloud",
                "Microsoft Power Automate",
            ],
            sameAs: [
                "https://github.com/danrave1234",
                "https://appbuildersph.com/makers/danrave-keh",
                "https://www.linkedin.com/in/danravekeh/",
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            // The payload is a local literal, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(profile).replaceAll("<", "\\u003c") }}
        />
    );
}

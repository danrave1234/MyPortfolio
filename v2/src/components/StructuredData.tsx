/**
 * JSON-LD Person schema.
 *
 * Lets search engines treat the site as an entity — a person with an employer,
 * a school, and profiles elsewhere — rather than an unlabelled page. Rendered
 * from the server, so it is present in the initial HTML where crawlers read it.
 */
export function StructuredData() {
    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Danrave C. Keh",
        alternateName: "Danrave Keh",
        url: "https://www.danravekeh.com",
        image: "https://www.danravekeh.com/assets/Me.png",
        jobTitle: "Full Stack & Cloud Developer",
        email: "mailto:danravekeh123@gmail.com",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Cebu City",
            addressCountry: "PH",
        },
        worksFor: {
            "@type": "Organization",
            name: "Oltek Solutions Corp",
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
            "SaaS Architecture",
        ],
        sameAs: [
            "https://github.com/danrave1234",
            "https://www.linkedin.com/in/danrave-keh-06966a254/",
            "https://estabweb.com",
            "https://billis.online",
        ],
    };

    return (
        <script
            type="application/ld+json"
            // The payload is a local literal, not user input.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
    );
}

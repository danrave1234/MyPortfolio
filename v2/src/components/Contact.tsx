import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { contactEmail, resumePath } from "@/lib/site";

const links = [
    { label: "GitHub", href: "https://github.com/danrave1234" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danravekeh/" },
    { label: "Facebook", href: "https://facebook.com/ez.danrave" },
];

export function Contact() {
    return (
        <Section id="contact" className="contact-section">
            <h2 className="text-heading">Get in touch</h2>
            <p className="text-body mt-4 max-w-lg text-muted">
                For full-time roles, freelance projects, or collaborations, email me at
            </p>
            <a href={`mailto:${contactEmail}`} className="contact-email">
                {contactEmail} <ArrowUpRight aria-hidden className="h-6 w-6 shrink-0" />
            </a>
            <ul className="mt-5 flex flex-wrap gap-x-6">
                {links.map(({ label, href }) => (
                    <li key={label}>
                        <a href={href} target="_blank" rel="noopener noreferrer" className="editorial-link">
                            {label} <ArrowUpRight aria-hidden className="h-4 w-4" />
                        </a>
                    </li>
                ))}
                <li><a href={resumePath} download className="editorial-link">Download résumé</a></li>
            </ul>
        </Section>
    );
}

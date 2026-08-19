"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, MapPin, FileText } from "lucide-react";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/danrave1234",
        Icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/danrave-keh-06966a254/",
        Icon: Linkedin,
    },
    {
        label: "Facebook",
        href: "https://facebook.com/ez.danrave",
        Icon: Facebook,
    },
];

export function Contact() {
    return (
        <Section id="contact" className="pb-32 sm:pb-36">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl text-center"
            >
                <h2 className="text-heading font-bold text-foreground">Get in touch</h2>
                <p className="text-body mt-5 text-muted">
                    Open to full-time roles, freelance builds, and collaborations. The
                    fastest way to reach me is email.
                </p>

                {/* `break-all` on the address: a long email is the single most
                    common cause of horizontal overflow at 320px. */}
                <a
                    href="mailto:danravekeh123@gmail.com"
                    className="mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-5 py-4 font-semibold text-[#04191c] transition-colors hover:bg-accent-ink sm:w-auto sm:px-7"
                >
                    <Mail className="h-5 w-5 shrink-0" />
                    <span className="break-all">danravekeh123@gmail.com</span>
                </a>

                <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                        href="/danrave-keh-resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-white/[0.03] px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent sm:w-auto"
                    >
                        <FileText className="h-4 w-4" />
                        Download résumé
                    </a>
                </div>

                <ul className="mt-9 flex items-center justify-center gap-3">
                    {socials.map(({ label, href, Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-foreground/80 transition-colors hover:border-accent/40 hover:text-accent"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        </li>
                    ))}
                </ul>

                <p className="mt-8 flex items-center justify-center gap-2 text-sm text-dim">
                    <MapPin className="h-4 w-4" />
                    Cebu City, Philippines
                </p>
            </motion.div>
        </Section>
    );
}

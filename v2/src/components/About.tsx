"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about">
            <div className="max-w-4xl space-y-8">
                <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#12B7C9]"
                >
                    About
                </motion.h2>
                
                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                    <p>
                        I build real production systems—not demo apps. My work focuses on end-to-end development: frontend, backend, cloud infrastructure, deployment pipelines, and performance optimization. I specialize in designing scalable architectures, automating workflows, and turning early-stage ideas into working products.
                    </p>
                    <p>
                        I've shipped multiple deployed systems used by real users, including AI-powered tools, SaaS platforms, and cloud-native web applications. My approach is straightforward: build fast, build reliably, and deploy with best practices so the system doesn't break in the real world.
                    </p>
                </div>
            </div>
        </Section>
    );
}


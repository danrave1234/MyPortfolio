"use client";

import { Section } from "@/components/ui/Section";
import { testimonials } from "@/data/portfolio";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about">
            <div className="w-full max-w-6xl space-y-10">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-semibold text-white">Testimonials</h3>
                            <p className="text-slate-400 text-sm md:text-base">
                                What partners and stakeholders say about working together.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.name}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="relative h-full rounded-2xl border border-white/5 bg-gray-900/50 p-5 md:p-6 shadow-lg shadow-black/20 hover:border-[#12B7C9]/30 hover:shadow-[#12B7C9]/10 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#12B7C9]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#12B7C9]/15 border border-[#12B7C9]/30 text-[#12B7C9] font-semibold">
                                        {testimonial.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")
                                            .slice(0, 2)}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-slate-200 leading-relaxed italic">
                                            “{testimonial.quote}”
                                        </p>
                                        <div className="space-y-1 text-sm">
                                            <div className="text-white font-semibold">
                                                {testimonial.name}
                                            </div>
                                            <div className="text-slate-400">
                                                {testimonial.role}{testimonial.company ? ` • ${testimonial.company}` : ""}
                                            </div>
                                            {testimonial.relationship && (
                                                <div className="inline-flex items-center gap-2 text-xs text-[#12B7C9] bg-[#12B7C9]/10 border border-[#12B7C9]/30 rounded-full px-3 py-1">
                                                    {testimonial.relationship}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}


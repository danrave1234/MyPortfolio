"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-[#12B7C9] mb-8">Let's Build Something</h2>
                <p className="text-slate-400 text-lg mb-12">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <a 
                        href="mailto:danravekeh123@gmail.com"
                        className="flex items-center gap-3 px-8 py-4 bg-[#12B7C9] text-white rounded-full font-bold hover:bg-[#12B7C9]/80 transition-all hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        danravekeh123@gmail.com
                    </a>
                    
                    <div className="flex gap-4">
                        <a href="https://github.com/danrave1234" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full text-white hover:bg-white hover:text-black transition-all">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/danrave-keh-06966a254/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full text-white hover:bg-[#0077b5] transition-all">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://facebook.com/ez.danrave" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full text-white hover:bg-[#1877f2] transition-all">
                            <Facebook className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}


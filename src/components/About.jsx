function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-20 py-20">
            <div className="max-w-4xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#12B7C9] mb-8">About</h2>
                <div className="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
                    <p>
                        I build real production systems—not demo apps. My work focuses on end-to-end development: frontend, backend, cloud infrastructure, deployment pipelines, and performance optimization. I specialize in designing scalable architectures, automating workflows, and turning early-stage ideas into working products.
                    </p>
                    <p>
                        I've shipped multiple deployed systems used by real users, including AI-powered tools, SaaS platforms, and cloud-native web applications. My approach is straightforward: build fast, build reliably, and deploy with best practices so the system doesn't break in the real world.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;


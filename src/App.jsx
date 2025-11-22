import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Infrastructure from './components/Infrastructure';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
rootMargin: '-100px 0px 0px 0px', // Adjust this value based on your header height
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const cursorGlow = document.querySelector('.cursor-glow');
            if (cursorGlow) {
                cursorGlow.style.left = `${event.clientX}px`;
                cursorGlow.style.top = `${event.clientY}px`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="text-white min-h-screen relative overflow-hidden">
            <div className="cursor-glow hidden sm:block" aria-hidden="true"></div>
            <div className="invisible sm:visible text-slate-50 text-sm fixed bottom-20 right-1 transform rotate-90 subpixel-antialiased">
                <p>danravekeh123@gmail.com</p>
            </div>
            <Header activeSection={activeSection} />
            <main className="">
                <div className="min-h-screen overflow-y-auto scroll-smooth">
                    <section id="home" className="min-h-screen flex items-center justify-center px-5 sm:px-20 lg:px-40 2xl:px-64 py-20">
                        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Name and Bio */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Danrave C. Keh</h1>
                                    <p className="text-xl sm:text-2xl md:text-3xl text-[#12B7C9] font-semibold mb-6">Full Stack & Cloud Developer</p>
                                </div>
                                <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                                    <p>
                                        I build real production systems—not demo apps. My work focuses on end-to-end development: frontend, backend, cloud infrastructure, deployment pipelines, and performance optimization. I specialize in designing scalable architectures, automating workflows, and turning early-stage ideas into working products.
                                    </p>
                                    <p>
                                        I've shipped multiple deployed systems used by real users, including AI-powered tools, SaaS platforms, and cloud-native web applications. My approach is straightforward: build fast, build reliably, and deploy with best practices so the system doesn't break in the real world.
                                    </p>
                                </div>
                            </div>
                            {/* Right: Architecture Diagram Placeholder */}
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="w-full max-w-md bg-gray-800/50 border border-gray-700 rounded-lg p-8">
                                    <h3 className="text-[#12B7C9] font-semibold mb-4 text-center">Qualitidex Architecture</h3>
                                    <div className="space-y-3 text-sm text-slate-400">
                                        <div className="bg-gray-700/50 p-3 rounded">Client → React Frontend</div>
                                        <div className="bg-gray-700/50 p-3 rounded">API → Python Cloud Functions</div>
                                        <div className="bg-gray-700/50 p-3 rounded">Database → Firestore</div>
                                        <div className="bg-gray-700/50 p-3 rounded">Storage → GCS</div>
                                        <div className="bg-gray-700/50 p-3 rounded">CDN → Cloudflare Pages</div>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-4 text-center">Architecture diagram placeholder</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="relative z-10">
                        <About />
                        <Experience />
                        <Achievements />
                        <Projects />
                        <Infrastructure />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;


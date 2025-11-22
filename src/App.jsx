import { useEffect, useState } from 'react';
import './App.css';
import me from './assets/Me.png';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
            rootMargin: '-100px 0px -30% 0px',
        };

        const sectionVisibility = new Map();

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    sectionVisibility.set(entry.target.id, entry.intersectionRatio);
                } else {
                    sectionVisibility.delete(entry.target.id);
                }
            });

            // Find the section with the highest intersection ratio
            if (sectionVisibility.size > 0) {
                const mostVisible = Array.from(sectionVisibility.entries()).reduce((a, b) => 
                    a[1] > b[1] ? a : b
                );
                setActiveSection(mostVisible[0]);
            }
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
                            {/* Right: Profile Picture */}
                            <div className="hidden lg:flex items-center justify-center">
                                <div className="w-full max-w-md">
                                    <img 
                                        src={me} 
                                        alt="Danrave C. Keh - Full Stack & Cloud Developer" 
                                        className="w-full h-auto rounded-lg border border-gray-700 shadow-lg object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="relative z-10">
                        <About />
                        <Experience />
                        <Achievements />
                        <Projects />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;


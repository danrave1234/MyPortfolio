import { useEffect, useState } from 'react';
import './App.css';
import me from './assets/me.png';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.5,
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
        <div className="bg-[#0A1741] text-white min-h-screen">
            <div className="cursor-glow" aria-hidden="true"></div>
            <div className="invisible sm:visible text-slate-50 text-sm fixed bottom-20 right-1 transform rotate-90 subpixel-antialiased">
                <p>danravekeh123@gmail.com</p>
            </div>
            <Header activeSection={activeSection} />
            <main className="mx-auto w-screen snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
                <section id="home" className="snap-start h-screen flex items-center justify-center px-5 sm:px-20 lg:px-40 2xl:px-64">
                    <div className="flex-col sm:w-1/2 mx-auto flex items-center text-wrap justify-center h-full">
                        <div className="sm:w-fit">
                            <p className="text-sm text-teal-300 pb-1 sm:pb-2 sm:text-md lg:text-lg">Hi! My name is</p>
                            <h1 className="text-2xl sm:text-3xl font-bold sm:pb-1 md:text-4xl lg:text-4xl xl:text-5xl">Danrave C. Keh</h1>
                            <p className="text-xl text-slate-300 w-fit font-semibold sm:text-xl md:text-2xl pb-3 lg:text-3xl">I'm a FullStack Developer</p>
                            <p className="text-xs max-w-xs text-slate-400 sm:pt-2 sm:text-sm md:text-md lg:text-2md xl:text-lg xl:max-w-md">
                                I'm an Information Technology Student. I specialize in developing backend for websites
                                and applications on the projects I worked on and occasionally do some frontend design.
                                Currently, I'm learning more about the backend and frontend.
                            </p>
                        </div>
                    </div>
                    <div className="hidden w-1/2 mx-auto items-center justify-center h-full sm:flex">
                        <img src={me} alt="Danrave C. Keh" className="h-fit w-screen object-contain border-teal-400 border rounded-2xl sm:scale-75 md: 2xl:scale-50" />
                    </div>
                </section>
                <About />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
            </main>
        </div>
    );
}

export default App;


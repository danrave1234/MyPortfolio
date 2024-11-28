import { useEffect, useState } from 'react';
import './App.css'; // Make sure you have the Tailwind imports in this CSS file
import dotaIcon from './assets/dotaicon.png';
import me from './assets/me.png';
import Dropdown from "./components/dropdown.jsx";

function App() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null, // Use the viewport
            threshold: 0.9, // Trigger when 50% of the section is visible
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); // Set the active section based on the ID
                }else{
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id); // Set the active section based on the ID
                    }else{
                        setActiveSection('');
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect(); // Cleanup observer on unmount
        };
    }, []);

    useEffect(() => {
        const cursorGlow = document.querySelector('.cursor-glow');

        const handleMouseMove = (event) => {
            cursorGlow.style.left = `${event.clientX}px`;
            cursorGlow.style.top = `${event.clientY}px`;
        };

        const handleTouchMove = (event) => {
            const touch = event.touches[0];
            cursorGlow.style.left = `${touch.clientX}px`;
            cursorGlow.style.top = `${touch.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-glow"></div>
            <div className="invisible sm:visible text-slate-50 text-sm fixed bottom-20 right-1 transform rotate-90 subpixel-antialiased">
                <p>danravekeh123@gmail.com</p>
            </div>
            <header className="flex h-15 p-7 items-center justify-between fixed top-0 left-0 right-0 z-50">
                <img src={dotaIcon} alt="GG" className="h-10 w-10 object-contain"/>
                <nav className="flex">
                    <ul className="hidden sm:flex space-x-10 items-center">
                        <li
                            className={`cursor-pointer underline-effect hover:text-teal-500 transition-all ease-linear duration-300 ${
                                activeSection === 'about' ? 'active' : ''
                            }`}
                        >
                            <a href="#about">About</a>
                        </li>
                        <li
                            className={`cursor-pointer underline-effect hover:text-teal-500 transition-all ease-linear duration-300 ${
                                activeSection === 'experience' ? 'active' : ''
                            }`}
                        >
                            <a href="#experience">Experience</a>
                        </li>
                        <li
                            className={`cursor-pointer underline-effect hover:text-teal-500 transition-all ease-linear duration-300 ${
                                activeSection === 'projects' ? 'active' : ''
                            }`}
                        >
                            <a href="#projects">Projects</a>
                        </li>
                        <li
                            className={`cursor-pointer underline-effect hover:text-teal-500 transition-all ease-linear duration-300 ${
                                activeSection === 'contact' ? 'active' : ''
                            }`}
                        >
                            <a href="#contact">Contact Me</a>
                        </li>
                        <li>
                            <button
                                className="border border-teal-400 font-semibold text-teal-300 bg-teal-400/10 py-1 px-2 rounded">
                                Resume
                            </button>
                        </li>
                    </ul>

                </nav>
                <nav className="sm:hidden p-0">
                    <Dropdown/>
                </nav>
            </header>

            <div className="mx-auto w-screen snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth">
                <div className="flex mx-auto gap-5 justify-center justify-items-center snap-start h-screen px-5 sm:px-20 lg:px-40 2xl:px-64"> {/* Top page */}
                    <div className="flex-col sm:w-1/2 mx-auto flex items-center text-wrap justify-center h-full"> {/* Right-aligned text */}
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
                        <img src={me} alt="me"
                             className="h-fit w-screen object-contain border-teal-400 border rounded-2xl sm:scale-75 md: 2xl:scale-50"/>
                    </div>
                </div>


                <div id="about" className="snap-start px-4"> {/* About */}
                    <section id="about" className="flex flex-col snap-start h-screen items-center justify-center">
                        <div className="block sm:max-w-screen-sm px-">
                            <h1 className="text-teal-400 text-xm underline underline-offset-4 pb-3 sm:text-lg sm:text-red-500">About Section</h1>
                            <p className="max-w-xs text-xs text-pretty truncate text-slate-400">I am a student in Cebu Institute of Technology currently studying Bachelor of Science in Information
                            Technology asbdhabsjdbahdbsahjbdjhasbdjhabsjhdbsabdjsdsadhaudhsauhduahsddss</p>
                        </div>
                    </section>
                </div>

                <section id="experience" className="snap-start h-screen flex items-center justify-center">
                <p>Experience Section</p>
                </section>

                <section id="projects" className="snap-start h-screen flex items-center justify-center">
                    <p>Projects Section</p>
                </section>

                <section id="contact" className="snap-start h-screen flex items-center justify-center">
                    <p>Contact Section</p>
                </section>

                <footer className="text-center text-slate-400 py-5 snap-start h-screen">
                    <p>&copy; 2024 Danrave C. Keh. All rights reserved.</p>
                </footer>
            </div>


        </>
    );
}

export default App;
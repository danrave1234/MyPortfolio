import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/javascript.svg';
import reactIcon from '../assets/react.svg';
import pythonIcon from '../assets/python.svg';
import javaIcon from '../assets/java.svg';
import cppIcon from '../assets/cpp3.svg';
import mysqlIcon from '../assets/mysql.svg';
import githubIcon from '../assets/github.svg';
import viteIcon from '../assets/vite.svg';

const icons = [
    { src: htmlIcon, alt: 'HTML', thought: 'HTML is the backbone of web development!' },
    { src: cssIcon, alt: 'CSS', thought: 'CSS makes everything beautiful!' },
    { src: jsIcon, alt: 'JavaScript', thought: 'JavaScript brings websites to life!' },
    { src: reactIcon, alt: 'React', thought: 'React makes building UIs a breeze!' },
    { src: pythonIcon, alt: 'Python', thought: 'Python is great for backend and data analysis!' },
    { src: javaIcon, alt: 'Java', thought: 'Java is powerful for enterprise applications!' },
    { src: cppIcon, alt: 'C++', thought: 'C++ is fast and efficient!' },
    { src: mysqlIcon, alt: 'MySQL', thought: 'MySQL helps manage data effectively!' },
    { src: githubIcon, alt: 'GitHub', thought: 'GitHub is essential for collaboration!' },
    { src: viteIcon, alt: 'Vite', thought: 'Vite makes development super fast!' },
];

function Experience() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const constraintsRef = useRef(null);

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 60 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100, damping: 15 },
        },
    };

    return (
        <section
            id="experience"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 relative overflow-hidden pt-16"
            ref={constraintsRef}
        >
            <h2 className="text-3xl font-bold text-teal-400 mb-10">Experience</h2>

            {/* Icon Grid */}
            <motion.div
                className="grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-8 relative z-20 max-w-lg sm:max-w-xl lg:max-w-2xl"
                variants={containerVariants} // Container animations
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
            >
                {icons.map((icon) => (
                    <motion.div
                        key={icon.alt}
                        className="group relative flex items-center justify-center cursor-pointer"
                        variants={iconVariants} // Icon entry animations
                        drag
                        dragConstraints={constraintsRef} // Prevents dragging out of bounds
                        dragElastic={0.1} // Slight drag elasticity
                    >
                        {/* Glowing Background */}
                        <div
                            className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg transform scale-90 group-hover:scale-110 transition-transform duration-200"
                        />

                        {/* Icon */}
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-16 h-16 z-10 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-300"
                            onMouseEnter={() => setHoveredIcon(icon.alt)} // Tooltip interaction for desktop
                            onMouseLeave={() => setHoveredIcon(null)}
                            onDragStart={(e) => e.preventDefault()} // Prevent browser drag behavior on the image
                        />

                        {/* Tooltipdasdada */}
                        <AnimatePresence>
                            {hoveredIcon === icon.alt && (
                                <motion.div
                                    className="absolute top-20 bg-gray-800/90 text-white px-3 py-2 rounded-md shadow-lg text-sm max-w-[150px] transition-all duration-200 z-20"
                                    initial={{opacity: 0, y: 10, scale: 0.95}}
                                    animate={{opacity: 1, y: 0, scale: 1}}
                                    exit={{opacity: 0, y: 10, scale: 0.95}}
                                >
                                    {icon.thought}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Experience;
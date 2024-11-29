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
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const iconVariants = {
        hidden: {
            x: -100,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    const floatingAnimation = {
        y: [-5, 5],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    };

    return (
        <section
            id="experience"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-20 relative overflow-hidden "
            ref={constraintsRef}
        >
            <h2 className="text-2xl font-bold text-teal-400 mb-16">Experience</h2>

            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-16 relative z-10 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {icons.map((icon, index) => (
                    <motion.div
                        key={icon.alt}
                        className="relative flex items-center justify-center group"
                        variants={iconVariants}
                        whileHover={{ scale: 1.2 }}
                        animate={floatingAnimation}
                        drag
                        dragConstraints={constraintsRef}
                        dragElastic={0.1}
                    >
                        <div className="absolute inset-0 bg-teal-400/20 rounded-full filter blur-xl scale-75 group-hover:scale-100 transition-transform duration-300" />
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-16 h-16 relative z-10 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-300"
                            onMouseEnter={() => setHoveredIcon(icon.alt)}
                            onMouseLeave={() => setHoveredIcon(null)}
                        />
                        <AnimatePresence>
                            {hoveredIcon === icon.alt && (
                                <motion.div
                                    className="absolute -top-24 left-1/2 transform -translate-x-1/2 bg-gray-800/90 text-white p-4 rounded-xl text-sm min-w-[200px] max-w-[250px] text-center"
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800/90 rotate-45" />
                                    {icon.thought}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className="mt-20 max-w-3xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                {/*<h3 className="text-xl font-semibold text-teal-300 mb-4">Work Experience</h3>*/}
                {/*<div className="bg-gray-800/50 p-6 rounded-lg">*/}
                {/*    <p className="text-slate-300 mb-4">*/}
                {/*        [Placeholder for Work Experience]*/}
                {/*    </p>*/}
                {/*    <p className="text-slate-400 text-sm italic">*/}
                {/*        Add your work experience details here. Include job titles, companies, dates, and key responsibilities.*/}
                {/*    </p>*/}
                {/*</div>*/}
                <p className="text-slate-300 mt-8 mb-4">
                    With a strong foundation in both frontend and backend technologies, I enjoy the challenge of building
                    full-stack applications. Im constantly learning and exploring new technologies to stay at the forefront
                    of web development.
                    My experience spans across various programming languages and frameworks, allowing me to tackle diverse
                    projects and adapt to different tech stacks efficiently.
                </p>
            </motion.div>
        </section>
    );
}

export default Experience;


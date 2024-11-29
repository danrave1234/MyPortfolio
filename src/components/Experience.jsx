import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const icons = [
    { src: 'src/assets/html.svg', alt: 'HTML', thought: 'HTML is the backbone of web development!' },
    { src: 'src/assets/css.svg', alt: 'CSS', thought: 'CSS makes everything beautiful!' },
    { src: 'src/assets/javascript.svg', alt: 'JavaScript', thought: 'JavaScript brings websites to life!' },
    { src: 'src/assets/react.svg', alt: 'React', thought: 'React makes building UIs a breeze!' },
    { src: 'src/assets/python.svg', alt: 'Python', thought: 'Python is great for backend and data analysis!' },
    { src: 'src/assets/java.svg', alt: 'Java', thought: 'Java is powerful for enterprise applications!' },
    { src: 'src/assets/cpp3.svg', alt: 'C++', thought: 'C++ is fast and efficient!' },
    { src: 'src/assets/mysql.svg', alt: 'MySQL', thought: 'MySQL helps manage data effectively!' },
    { src: 'src/assets/github.svg', alt: 'GitHub', thought: 'GitHub is essential for collaboration!' },
    { src: 'src/assets/vite.svg', alt: 'Vite', thought: 'Vite makes development super fast!' },
];

function Experience() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: (index) => ({
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section id="experience" className="snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-20 relative overflow-hidden">
            <h2 className="text-2xl font-bold text-teal-400 mb-6">Experience</h2>
            <motion.div
                ref={ref}
                className="grid grid-cols-3 sm:grid-cols-5 gap-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {icons.map((icon, index) => (
                    <motion.div
                        key={icon.alt}
                        className="relative"
                        variants={itemVariants}
                        custom={index}
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setHoveredIcon(icon.alt)}
                        onHoverEnd={() => setHoveredIcon(null)}
                    >
                        <img
                            src={icon.src}
                            alt={icon.alt}
                            className="w-16 h-16 object-contain filter drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                        />
                        {hoveredIcon === icon.alt && (
                            <motion.div
                                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-gray-800 text-white p-2 rounded-lg text-sm"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                            >
                                {icon.thought}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
            <div className="mt-12 max-w-2xl text-center">
                <p className="text-slate-300 mb-4">
                    With a strong foundation in both frontend and backend technologies, I enjoy the challenge of building
                    full-stack applications. I'm constantly learning and exploring new technologies to stay at the forefront
                    of web development.
                </p>
                <p className="text-slate-300">
                    My experience spans across various programming languages and frameworks, allowing me to tackle diverse
                    projects and adapt to different tech stacks efficiently.
                </p>
            </div>
        </section>
    );
}

export default Experience;


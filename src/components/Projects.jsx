
import { motion } from 'framer-motion';
import React from "react";

function Projects() {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB.",
            technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
            link: "https://github.com/yourusername/ecommerce-platform"
        },
        {
            title: "Task Management App",
            description: "A responsive web application for managing tasks and projects, featuring real-time updates.",
            technologies: ["React", "Firebase", "Material-UI"],
            link: "https://github.com/yourusername/task-management-app"
        },
        {
            title: "Task Management App",
            description: "A responsive web application for managing tasks and projects, featuring real-time updates.",
            technologies: ["React", "Firebase", "Material-UI"],
            link: "https://github.com/yourusername/task-management-app"
        },
        {
            title: "Task Management App",
            description: "A responsive web application for managing tasks and projects, featuring real-time updates.",
            technologies: ["React", "Firebase", "Material-UI"],
            link: "https://github.com/yourusername/task-management-app"
        }
    ];
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

return (
    <>

        <motion.section
            id="projects"
            className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
            variants={fadeInVariants}
        >
            <motion.header
                className="text-teal-400 text-3xl font-bold text-center mb-12"
            >
                Projects
            </motion.header>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)"}}
                        className="transform transition-transform bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                    >
                        <img
                            src="https://via.placeholder.com/300"
                            alt={`${project.title} Preview`}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-teal-400 text-xl font-bold">{project.title}</h3>
                            <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <li
                                        key={idx}
                                        className="text-teal-300 text-xs bg-teal-400 bg-opacity-20 px-2 py-1 rounded-lg"
                                    >
                                        {tech}
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    </>
);
}

export default Projects;


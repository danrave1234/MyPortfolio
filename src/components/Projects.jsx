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
        }
    ];

    return (
        <section id="projects" className="snap-start h-screen flex items-center justify-center px-4 sm:px-20">
            <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-teal-400 mb-6">Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
                        <p className="text-slate-300 mb-2">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-teal-400/20 text-teal-300 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-300 hover:text-teal-400 transition-colors duration-300"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;


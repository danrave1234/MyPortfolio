import Slider from "react-slick";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import bytemarketImg1 from "../assets/me.png";
import lostAndFoundImg1 from "../assets/Lost&FoundSystem1.jpg";
import lostAndFoundImg2 from "../assets/Lost&FoundSystem2.jpg";
import lostAndFoundImg3 from "../assets/Lost&FoundSystem3.jpg";
import lostAndFoundImg4 from "../assets/Lost&FoundSystem4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const projects = [
        {
            title: "E-commerce Platform: Bytemarket",
            description: "A full-stack e-commerce solution built with React.js and Spring Boot.",
            technologies: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
            images: [bytemarketImg1, bytemarketImg1],
            link: "https://github.com/danrave1234/APPDEV_Bytemarket",
        },
        {
            title: "Lost & Found System in CIT-U",
            description: "A web-based solution aimed at efficiently managing lost and found items within CIT-U, built for streamlined task handling and responsive design.",
            technologies: ["Python", "SQLite"],
            images: [lostAndFoundImg1, lostAndFoundImg2, lostAndFoundImg3, lostAndFoundImg4], // Replace with actual images
            link: "https://github.com/danrave1234/ProjectDevelopment-in-IM2",
        },
        {
            title: "Task Management App",
            description: "A responsive web application for managing tasks and projects, featuring real-time updates.",
            technologies: ["React", "Firebase", "Material-UI"],
            images: [bytemarketImg1, bytemarketImg1], // Replace with actual images
            link: "https://github.com/yourusername/task-management-app",
        },
    ];

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    const arrowStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "calc(50% - 20px)",
        zIndex: "1",
        cursor: "pointer",
        transition: "all 0.3s ease",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        fontSize: "24px",
        border: "none",
        outline: "none",
    };

    const Arrow = ({ direction, onClick }) => {
        const styles = {
            ...arrowStyles,
            ...{
                [direction === "next" ? "right" : "left"]: "10px",
            },
        };
        return (
            <button
                style={styles}
                onClick={onClick}
                aria-label={direction === "next" ? "Next image" : "Previous image"}
                className="hover:bg-teal-400 hover:text-gray-800 focus:bg-teal-400 focus:text-gray-800"
            >
                {direction === "next" ? "›" : "‹"}
            </button>
        );
    };
    Arrow.propTypes = {
        direction: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    const NextArrow = ({ onClick }) => {
        return <Arrow direction="next" onClick={onClick} />;
    };

    NextArrow.propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    const PrevArrow = ({ onClick }) => {
        return <Arrow direction="prev" onClick={onClick} />;
    };

    PrevArrow.propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dotsClass: "slick-dots custom-dot-class",
    };

    return (
        <>
            <motion.section
                id="projects"
                className="snap-start min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-14 md:px-12 lg:px-20 lg:py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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
                            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
                            className="transform transition-transform bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
                        >
                            {/* Add Carousel */}
                            <Slider
                                {...settings}
                                className="w-full h-48 object-cover"
                            >
                                {project.images.map((img, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={img}
                                        alt={`${project.title} Preview`}
                                        className="w-full h-56 object-cover"
                                    />
                                ))}
                            </Slider>

                            {/* Content */}
                            <div className="p-4 mt-11">
                                <h3 className="text-teal-400 text-xl font-bold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    {project.description}
                                </p>
                                <ul className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <li
                                            key={idx}
                                            className="text-teal-300 text-xs bg-teal-400 bg-opacity-20 px-2 py-1 rounded-lg"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.section>
            <style>
                {`
              .custom-dot-class {
                bottom: -60px;
              }
              .custom-dot-class li {
                margin: 0 4px;
              }
              .custom-dot-class li button {
                width: 12px;
                height: 12px;
              }
              .custom-dot-class li button:before {
                font-size: 12px;
                color: #888;
                opacity: 0.5;
              }
              .custom-dot-class li.slick-active button:before {
                color: #4fd1c5;
                opacity: 1;
              }
            `}
            </style>
        </>
    );
}

export default Projects;


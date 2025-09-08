import Slider from "react-slick";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import bytemarketImg1 from "../assets/ByteMarket1.jpg";
import bytemarketImg2 from "../assets/ByteMarket2.jpg";
import bytemarketImg3 from "../assets/ByteMarket3.jpg";
import bytemarketImg4 from "../assets/ByteMarket4.jpg";
import bytemarketImg5 from "../assets/ByteMarket5.jpg";
import bytemarketImg6 from "../assets/ByteMarket6.jpg";
import bytemarketImg7 from "../assets/ByteMarket7.jpg";
import bytemarketImg8 from "../assets/ByteMarket8.jpg";
import bytemarketImg9 from "../assets/ByteMarket9.jpg";
import bytemarketImg10 from "../assets/ByteMarket10.jpg";
import bytemarketImg11 from "../assets/ByteMarket11.jpg";

import lostAndFoundImg1 from "../assets/Lost&FoundSystem1.jpg";
import lostAndFoundImg2 from "../assets/Lost&FoundSystem2.jpg";
import lostAndFoundImg3 from "../assets/Lost&FoundSystem3.jpg";
import lostAndFoundImg4 from "../assets/Lost&FoundSystem4.jpg";
import RuinedLightImg1 from "../assets/RuinedLight1.jpg";
import RuinedLightImg2 from "../assets/RuinedLight2.jpg";
import RuinedLightImg3 from "../assets/RuinedLight3.jpg";
import RuinedLightImg4 from "../assets/RuinedLight4.jpg";
import RuinedLightImg5 from "../assets/RuinedLight5.jpg";
import RuinedLightImg6 from "../assets/RuinedLight6.jpg";
import RuinedLightImg7 from "../assets/RuinedLight7.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
    const projects = [
        {
            title: "Locals Local Market",
            description: "A production e-commerce marketplace for local vendors at localslocalmarket.com. Built with SEO, responsive UI, and secure checkout.",
            technologies: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
            images: [bytemarketImg1],
            link: "https://localslocalmarket.com",
        },
        {
            title: "TTS Story Videos Generator",
            description: "A tool that converts story scripts into narrated videos using TTS and stock visuals. Automates captions, scenes, and exports.",
            technologies: ["Python", "FFmpeg", "gTTS", "MoviePy"],
            images: [lostAndFoundImg1],
            link: "https://github.com/danrave1234/tts-story-videos-generator",
        },
        {
            title: "StudyBoost",
            description: "A study productivity app with spaced repetition, quizzes, and progress tracking to boost learning efficiency.",
            technologies: ["React", "Express", "MongoDB"],
            images: [RuinedLightImg1],
            link: "https://github.com/danrave1234/studyboost",
        },
        {
            title: "E-commerce Platform: Bytemarket",
            description: "A full-stack e-commerce solution built with React.js and Spring Boot.",
            technologies: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
            images: [bytemarketImg1, bytemarketImg2, bytemarketImg3, bytemarketImg4, bytemarketImg5, bytemarketImg6, bytemarketImg7, bytemarketImg8, bytemarketImg9, bytemarketImg10, bytemarketImg11],
            link: "https://github.com/danrave1234/APPDEV_Bytemarket",
        },
        {
            title: "Lost & Found System in CIT-U",
            description: "A web-based solution aimed at efficiently managing lost and found items within CIT-U, built for streamlined task handling and responsive design.",
            technologies: ["Python", "SQLite"],
            images: [lostAndFoundImg1, lostAndFoundImg2, lostAndFoundImg3, lostAndFoundImg4],
            link: "https://github.com/danrave1234/ProjectDevelopment-in-IM2",
        },
        {
            title: "Ruined Light! : A Text Turn-Based RPG Game",
            description: "A text-based RPG game built in Java, with a focus on OOP. Inspired by the gameplay of Axie Infinity.",
            technologies: ["Java"],
            images: [ RuinedLightImg1, RuinedLightImg2, RuinedLightImg3, RuinedLightImg4, RuinedLightImg5,RuinedLightImg6,RuinedLightImg7],
            link: "https://github.com/danrave1234/Ruined_Light_OOP1_PROJECT",
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
        top: "calc(50%)",
        zIndex: "1",
        cursor: "pointer",
        transition: "all 0.3s ease",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        fontSize: "32px",
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
                                        className="w-full h-56 object-cover 2xl:h-72"
                                    />
                                ))}
                            </Slider>

                            {/* Content */}
                            <div className="p-4 mt-11 2xl:mt-28">
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
              @media screen and (min-width: 1530px) {
                .custom-dot-class {
                    bottom: -125px; /* adjust this value as needed on larger screens */
                }
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


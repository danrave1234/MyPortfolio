import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LLMImg1 from "../assets/LLM1.png";
import LLMImg2 from "../assets/LLM2.png";
import LLMImg3 from "../assets/LLM3.png";
import LLMImg4 from "../assets/LLM4.png";
import LLMImg5 from "../assets/LLM5.png";
import LLMImg6 from "../assets/LLM6.png";
import LLMImg7 from "../assets/LLM7.png";
import LLMImg8 from "../assets/LLM8.png";
import LLMImg9 from "../assets/LLM9.png";
import LLMImg10 from "../assets/LLM10.png";
import LLMImg11 from "../assets/LLM11.png";

const projects = [
    {
        title: "Qualitidex",
        subtitle: "AI-powered QA Automation System",
        featured: true,
        category: "Production System",
        description: "A full-stack platform that generates, executes, and manages automated test cases using AI. Designed for teams that need rapid QA cycles without manual work.",
        keyFeatures: [
            "AI test generation (LLMs with custom flows)",
            "Test execution engine",
            "Role-based user system",
            "Admin & analytics dashboard",
            "Scripted automation and scheduled checks",
            "Cloud-hosted backend + CDN optimized frontend",
        ],
        tech: [
            "React + Vite + Tailwind",
            "Backend: Python + Cloud Functions",
            "Database: Firestore",
            "Storage: GCS",
            "CI/CD: GitHub Actions",
            "Hosting: Cloudflare Pages + GCP",
        ],
        responsibilities: [
            "Lead developer (frontend, backend, infra)",
            "System architecture & database design",
            "Deployment pipelines",
            "AI prompt and flow engineering",
        ],
        link: "https://qualitidex.com",
        images: [LLMImg1, LLMImg2, LLMImg3], // Placeholder - replace with actual Qualitidex images
        architecture: {
            title: "Qualitidex Architecture",
            description: "Cloud-native architecture with React frontend, Python backend, and Firestore database.",
            components: [
                { name: "Client", type: "React Frontend", details: "Cloudflare Pages + CDN" },
                { name: "API Gateway", type: "Python Cloud Functions", details: "REST API endpoints" },
                { name: "Database", type: "Firestore", details: "NoSQL document store" },
                { name: "Storage", type: "GCS", details: "File and asset storage" },
                { name: "CDN", type: "Cloudflare", details: "Global content delivery" },
                { name: "CI/CD", type: "GitHub Actions", details: "Automated deployment" },
            ],
            flow: "Client requests flow through Cloudflare CDN to React frontend, which communicates with Python Cloud Functions API. Data is stored in Firestore, with assets in GCS. GitHub Actions handles CI/CD.",
        },
    },
    {
        title: "AutoShorts AI",
        subtitle: "Automated Short-Form Video Generator",
        featured: true,
        category: "Production System",
        description: "Generates fully edited short videos (scripts, narration, background video, captions, music, thumbnails).",
        keyFeatures: [
            "Script generation",
            "Auto video editing pipeline",
            "Background audio/video sourcing",
            "Narration generation",
            "Captions and thumbnail generator",
            "Export pipeline",
        ],
        tech: [
            "React",
            "NodeJS + Python",
            "Cloud Functions",
            "Storage Buckets",
            "AI text + audio models",
            "Deployment on Firebase & Cloudflare",
        ],
        responsibilities: [
            "Entire pipeline architecture",
            "Automation logic",
            "Deployment + scaling",
            "UX for video editing builder",
        ],
        link: null, // Private/Personal Use - no link
        images: [LLMImg1, LLMImg2], // Placeholder - replace with actual AutoShorts images
        architecture: {
            title: "AutoShorts AI Architecture",
            description: "Serverless architecture for automated video generation pipeline.",
            components: [
                { name: "Frontend", type: "React", details: "User interface" },
                { name: "Backend", type: "NodeJS + Python", details: "API and processing" },
                { name: "Functions", type: "Cloud Functions", details: "Serverless compute" },
                { name: "Storage", type: "Storage Buckets", details: "Video and media files" },
                { name: "AI Models", type: "Text + Audio", details: "LLM integration" },
                { name: "Hosting", type: "Firebase + Cloudflare", details: "Multi-platform deployment" },
            ],
            flow: "User interactions trigger Cloud Functions for video processing. AI models generate scripts and audio, while storage buckets handle media files. React frontend provides the editing interface.",
        },
    },
    {
        title: "LocalsLocal Market (LLM)",
        subtitle: "Community Marketplace Platform",
        featured: true,
        category: "Production System",
        description: "Platform to help users discover local products and vendors.",
        keyFeatures: [
            "Secure authentication (OAuth2)",
            "Vendor product management",
            "Search and discovery system",
            "Admin dashboard",
            "Fully responsive design",
        ],
        tech: [
            "React frontend",
            "Spring Boot backend",
            "MySQL database",
            "Google Cloud deployment",
            "CI/CD with GitHub Actions",
        ],
        responsibilities: [
            "Backend + API",
            "Auth + sessions",
            "Frontend integration",
            "Cloud deployment workflow",
        ],
        link: "https://localslocalmarket.com/",
        images: [LLMImg1, LLMImg2, LLMImg3, LLMImg4, LLMImg5, LLMImg6, LLMImg7, LLMImg8, LLMImg9, LLMImg10, LLMImg11],
        architecture: {
            title: "LLM Architecture",
            description: "Traditional three-tier architecture with Spring Boot backend and MySQL database.",
            components: [
                { name: "Client", type: "React Frontend", details: "Responsive web app" },
                { name: "API", type: "Spring Boot", details: "REST API layer" },
                { name: "Database", type: "MySQL", details: "Relational database" },
                { name: "Auth", type: "OAuth2", details: "Secure authentication" },
                { name: "Hosting", type: "Google Cloud", details: "Cloud deployment" },
                { name: "CI/CD", type: "GitHub Actions", details: "Automated workflows" },
            ],
            flow: "React frontend communicates with Spring Boot REST API, which queries MySQL database. OAuth2 handles authentication. All deployed on Google Cloud with automated CI/CD.",
        },
    },
    {
        title: "Wildcats Radio",
        subtitle: "Campus Radio Streaming Platform",
        featured: true,
        category: "School Project",
        description: "A live streaming web platform for CIT-U Wildcats Radio with an integrated audio player, show schedule display, mobile-first UI, and cloud deployment.",
        keyFeatures: [
            "Live streaming integration",
            "Show schedule system",
            "Audio controls & buffering",
            "Branded UI for CIT-U",
        ],
        tech: [
            "React",
            "Tailwind",
            "Streaming Server",
            "Cloudflare",
        ],
        responsibilities: [
            "Frontend development",
            "Streaming integration",
            "UI/UX design",
            "Cloud deployment",
        ],
        link: "https://wildcat-radio.live",
        images: [LLMImg1, LLMImg2, LLMImg3], // Placeholder - replace with actual Wildcats Radio images
    },
];

function ProjectCard({ project, index, currentImageIndex, setCurrentImageIndex, cardVariants }) {
    const hasMultipleImages = project.images && project.images.length > 1;
    const isPrivate = project.link === null;
    const hasArchitecture = project.architecture !== undefined;

    const handlePrevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages && project.images.length > 0) {
            const newIndex = currentImageIndex === 0 ? project.images.length - 1 : currentImageIndex - 1;
            setCurrentImageIndex(newIndex);
        }
    };

    const handleNextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages && project.images.length > 0) {
            const newIndex = currentImageIndex === project.images.length - 1 ? 0 : currentImageIndex + 1;
            setCurrentImageIndex(newIndex);
        }
    };

    const handleBulletClick = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex(idx);
    };

    const cardContent = (
        <div className="space-y-0">
            {/* Image Section - Full Width on Top */}
            <div className="relative w-full bg-gray-900 rounded-t-lg overflow-hidden flex items-center justify-center" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
                {project.images && project.images.length > 0 ? (
                    <>
                        <AnimatePresence mode="wait">
                            {project.images[currentImageIndex] && (
                                <motion.img
                                    key={currentImageIndex}
                                    src={project.images[currentImageIndex]}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Bullets/Navigator */}
                        {hasMultipleImages && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {project.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => handleBulletClick(e, idx)}
                                        className={`h-2 rounded-full transition-all ${
                                            idx === currentImageIndex
                                                ? 'bg-[#12B7C9] w-8'
                                                : 'bg-white/60 hover:bg-white/80 w-2'
                                        }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Image Counter and Featured Badge Container */}
                        <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
                            {/* Featured Badge - Left side */}
                            {index === 0 && (
                                <span className="px-4 py-2 bg-[#12B7C9]/20 border border-[#12B7C9]/30 rounded-lg text-[#12B7C9] text-sm font-semibold backdrop-blur-sm">
                                    FEATURED
                                </span>
                            )}
                            {/* Image Counter - Right side */}
                            {hasMultipleImages && (
                                <div className="bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-sm font-medium border border-white/20">
                                    {(currentImageIndex ?? 0) + 1} / {project.images.length}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <span className="text-slate-500">Image placeholder</span>
                    </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                    <span className={`px-4 py-2 rounded-lg text-sm font-semibold backdrop-blur-sm border ${
                        project.category === "School Project" 
                            ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400"
                            : "bg-[#12B7C9]/20 border-[#12B7C9]/30 text-[#12B7C9]"
                    }`}>
                        {project.category}
                    </span>
                </div>

                {/* Featured Badge - Only show if no multiple images (fallback) */}
                {index === 0 && !hasMultipleImages && (
                    <div className="absolute top-6 right-6 z-10">
                        <span className="px-4 py-2 bg-[#12B7C9]/20 border border-[#12B7C9]/30 rounded-lg text-[#12B7C9] text-sm font-semibold backdrop-blur-sm">
                            FEATURED
                        </span>
                    </div>
                )}
            </div>

            {/* Bottom Section: Project Details | Architecture */}
            <div className={`grid grid-cols-1 ${hasArchitecture ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-0 bg-gray-800/50 rounded-b-lg`}>
                {/* Project Details Section */}
                <div className={`p-8 ${hasArchitecture ? 'border-r border-gray-700' : ''}`}>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#12B7C9] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-xl text-[#12B7C9] mb-4">{project.subtitle}</p>
                    <p className="text-slate-300 mb-8 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="text-white font-semibold mb-3 text-base">Key Features</h4>
                            <ul className="space-y-2">
                                {project.keyFeatures.map((feature, idx) => (
                                    <li key={idx} className="text-slate-300 text-sm flex items-start">
                                        <span className="text-[#12B7C9] mr-2 mt-1">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-3 text-base">Tech Stack</h4>
                            <ul className="space-y-2">
                                {project.tech.map((tech, idx) => (
                                    <li key={idx} className="text-slate-300 text-sm flex items-start">
                                        <span className="text-[#12B7C9] mr-2 mt-1">•</span>
                                        <span>{tech}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Link or Private Notice */}
                    {isPrivate ? (
                        <div className="flex items-center gap-2 text-slate-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <span className="font-medium">Private/Personal Use</span>
                        </div>
                    ) : (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#12B7C9] font-semibold hover:text-[#12B7C9]/80 transition-colors group/link"
                        >
                            <span>View Project</span>
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Architecture Section - Side by Side */}
                {hasArchitecture && (
                    <div className="p-8 bg-gray-900/30">
                        <h4 className="text-2xl font-bold text-[#12B7C9] mb-3">System Architecture</h4>
                        <p className="text-slate-400 mb-6 leading-relaxed">{project.architecture.description}</p>
                        
                        {/* Architecture Components Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {project.architecture.components.map((component, compIndex) => (
                                <div
                                    key={compIndex}
                                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-[#12B7C9]/50 transition-colors"
                                >
                                    <div className="text-[#12B7C9] font-semibold text-sm mb-1">
                                        {component.name}
                                    </div>
                                    <div className="text-slate-300 text-xs mb-1">{component.type}</div>
                                    <div className="text-slate-500 text-xs">{component.details}</div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Flow Description */}
                        <div className="pt-4 border-t border-gray-700">
                            <p className="text-slate-300 text-sm leading-relaxed">{project.architecture.flow}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

    if (isPrivate) {
        return (
            <motion.div
                variants={cardVariants}
                className="block bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-[#12B7C9]/50 transition-all duration-300 group"
            >
                {cardContent}
            </motion.div>
        );
    }

    return (
        <motion.div
            variants={cardVariants}
            className="block bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-[#12B7C9]/50 transition-all duration-300 group"
        >
            {cardContent}
        </motion.div>
    );
}

function Projects() {
    const [currentImageIndices, setCurrentImageIndices] = useState({});

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    const featuredProjects = projects.filter(p => p.featured);

    const setCurrentImageIndex = (projectIndex, imageIndex) => {
        setCurrentImageIndices((prev) => ({
            ...prev,
            [projectIndex]: imageIndex,
        }));
    };

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20 relative"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-[#12B7C9] mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                Projects & System Architecture
            </motion.h2>
            <motion.p
                className="text-slate-400 text-center mb-12 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Case studies of deployed production systems with infrastructure design
            </motion.p>

            <div className="w-full max-w-7xl">
                {featuredProjects.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-12"
                    >
                        {/* Featured Projects */}
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                                currentImageIndex={currentImageIndices[index] || 0}
                                setCurrentImageIndex={(idx) => setCurrentImageIndex(index, idx)}
                                cardVariants={cardVariants}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center text-slate-400 py-20">
                        <p>No projects found</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;

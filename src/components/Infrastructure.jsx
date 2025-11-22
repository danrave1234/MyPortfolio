import { motion } from 'framer-motion';

const architectures = [
    {
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
    },
    {
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
    },
    {
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
    },
];

function Infrastructure() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section
            id="infrastructure"
            className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20 relative"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-[#12B7C9] mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                System Architecture & Cloud Infrastructure
            </motion.h2>
            <motion.p
                className="text-slate-400 text-center mb-12 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Architecture diagrams and infrastructure design for deployed systems
            </motion.p>

            <div className="w-full max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-16"
                >
                    {architectures.map((arch, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-[#12B7C9]/50 transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">{arch.title}</h3>
                            <p className="text-slate-300 mb-6">{arch.description}</p>

                            {/* Architecture Diagram Placeholder */}
                            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 mb-6">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {arch.components.map((component, compIndex) => (
                                        <div
                                            key={compIndex}
                                            className="bg-gray-800/50 border border-gray-600 rounded p-4"
                                        >
                                            <div className="text-[#12B7C9] font-semibold text-sm mb-1">
                                                {component.name}
                                            </div>
                                            <div className="text-slate-300 text-xs mb-1">{component.type}</div>
                                            <div className="text-slate-500 text-xs">{component.details}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500 mt-4 text-center">
                                    Architecture diagram placeholder - add your diagram here
                                </p>
                            </div>

                            {/* Flow Description */}
                            <div className="text-slate-300 text-sm">
                                <p>
                                    {arch.title === "Qualitidex Architecture" &&
                                        "Client requests flow through Cloudflare CDN to React frontend, which communicates with Python Cloud Functions API. Data is stored in Firestore, with assets in GCS. GitHub Actions handles CI/CD."}
                                    {arch.title === "AutoShorts AI Architecture" &&
                                        "User interactions trigger Cloud Functions for video processing. AI models generate scripts and audio, while storage buckets handle media files. React frontend provides the editing interface."}
                                    {arch.title === "LLM Architecture" &&
                                        "React frontend communicates with Spring Boot REST API, which queries MySQL database. OAuth2 handles authentication. All deployed on Google Cloud with automated CI/CD."}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Infrastructure;


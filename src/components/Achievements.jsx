import { motion } from 'framer-motion';

const achievements = [
    {
        title: "Champion — Retro Spaceship Hackathon 2024",
        description: "Built a browser-based game under time constraints with advanced mechanics, scoring, game loop, state system, and collision engine.",
    },
    {
        title: "Featured in Cebu Daily News",
        description: "Recognized for innovation in software engineering and rapid prototyping.",
        link: "https://cebudailynews.inquirer.net/659355/reimagining-play-powering-the-future-proweavers-promptquest-showcases-cebuano-talent-in-tech?utm_source=dlvr.it&utm_medium=facebook",
    },
    {
        title: "System Deployments",
        description: "Multiple deployed platforms used by real users and teams.",
    },
    {
        title: "Client Work",
        description: "jpmorada.photography and other freelance systems",
    },
];

function Achievements() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section id="achievements" className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-20">
            <div className="w-full max-w-4xl">
                <motion.h2
                    className="text-3xl sm:text-4xl font-bold text-[#12B7C9] mb-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    Achievements
                </motion.h2>
                <motion.p
                    className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    Recognition and milestones in my development journey
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-6"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-[#12B7C9]/50 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-[#12B7C9] font-bold text-xl">{index + 1}.</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
                                    {achievement.link && (
                                        <a
                                            href={achievement.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-3 text-[#12B7C9] hover:text-[#12B7C9]/80 transition-colors text-sm"
                                        >
                                            <span>Read article</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Achievements;

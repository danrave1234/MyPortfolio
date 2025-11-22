import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hackathonImg1 from '../assets/Hackaton1.png';
import hackathonImg2 from '../assets/Hackaton2.png';
import hackathonImg3 from '../assets/Hackaton3.png';
import hackathonImg4 from '../assets/Hackaton4.png';
import achievementImg1 from '../assets/achievements1.png';
import achievementImg2 from '../assets/achievements2.png';
import achievementImg3 from '../assets/achievements3.png';
import achievementImg4 from '../assets/achievements4.png';
import achievementImg5 from '../assets/achievements5.png';

const achievements = [
    {
        title: "Champion — Retro Spaceship Hackathon 2024",
        description: "Built a browser-based game under time constraints with advanced mechanics, scoring, game loop, state system, and collision engine.",
        images: [hackathonImg1, hackathonImg2, hackathonImg3, hackathonImg4],
        type: "hackathon",
        icon: "🏆",
        badge: "Champion",
        isChampion: true,
    },
    {
        title: "Featured in Cebu Daily News",
        description: "Recognized for innovation in software engineering and rapid prototyping.",
        link: "https://cebudailynews.inquirer.net/659355/reimagining-play-powering-the-future-proweavers-promptquest-showcases-cebuano-talent-in-tech?utm_source=dlvr.it&utm_medium=facebook",
        images: [achievementImg1, achievementImg2, achievementImg3, achievementImg4, achievementImg5],
        type: "media",
        icon: "📰",
        badge: "Recognition",
    },
];

function HackathonChampionCard({ achievement, index }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const hasMultipleImages = achievement.images && achievement.images.length > 1;

    const handlePrevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages) {
            setSelectedImageIndex((prev) => (prev === 0 ? achievement.images.length - 1 : prev - 1));
        }
    };

    const handleNextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages) {
            setSelectedImageIndex((prev) => (prev === achievement.images.length - 1 ? 0 : prev + 1));
        }
    };

    const handleBulletClick = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedImageIndex(idx);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mb-12"
        >
            {/* Special Champion Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30">
                <div className="flex items-center gap-3 bg-gradient-to-r from-[#12B7C9] to-[#0ea5e9] px-6 py-2 rounded-full shadow-lg shadow-[#12B7C9]/50 border-2 border-white/20">
                    <span className="text-2xl">🏆</span>
                    <span className="text-white font-bold text-sm uppercase tracking-wider">Champion</span>
                    <span className="text-white/90 text-xs">Retro Spaceship Hackathon 2024</span>
                </div>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 border-2 border-[#12B7C9]/40 rounded-2xl overflow-hidden shadow-2xl shadow-[#12B7C9]/20">
                {/* Animated gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#12B7C9]/20 via-transparent to-[#12B7C9]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#12B7C9]/30 via-[#0ea5e9]/30 to-[#12B7C9]/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                    {/* Image Section - Full Height */}
                    <div className="relative h-80 lg:h-auto bg-gradient-to-br from-gray-900 to-black overflow-hidden order-2 lg:order-1">
                        {/* Champion overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12B7C9]/20 via-transparent to-transparent z-[1] pointer-events-none" />
                        
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedImageIndex}
                                src={achievement.images[selectedImageIndex]}
                                alt={`${achievement.title} - Image ${selectedImageIndex + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#12B7C9]/90 hover:bg-[#12B7C9] text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm border-2 border-white/20 hover:scale-110 shadow-lg"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#12B7C9]/90 hover:bg-[#12B7C9] text-white p-3 rounded-full transition-all z-20 backdrop-blur-sm border-2 border-white/20 hover:scale-110 shadow-lg"
                                    aria-label="Next image"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Bullets/Navigator */}
                        {hasMultipleImages && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {achievement.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => handleBulletClick(e, idx)}
                                        className={`rounded-full transition-all ${
                                            idx === selectedImageIndex
                                                ? 'bg-[#12B7C9] w-10 h-3 shadow-lg shadow-[#12B7C9]/60'
                                                : 'bg-white/50 hover:bg-white/70 w-3 h-3'
                                        }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Image Counter */}
                        {hasMultipleImages && (
                            <div className="absolute top-6 right-6 bg-[#12B7C9]/90 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-bold border-2 border-white/30 z-20 shadow-lg">
                                <span className="text-white">{selectedImageIndex + 1}</span>
                                <span className="text-white/70"> / </span>
                                <span>{achievement.images.length}</span>
                            </div>
                        )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm order-1 lg:order-2">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#12B7C9]/30 to-[#12B7C9]/10 border-2 border-[#12B7C9]/50 flex items-center justify-center shadow-lg">
                                    <span className="text-3xl">🏆</span>
                                </div>
                                <div>
                                    <div className="text-[#12B7C9] text-xs font-bold uppercase tracking-widest">Champion Achievement</div>
                                    <div className="text-white/60 text-xs">#1 Position</div>
                                </div>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                                Retro Spaceship Hackathon 2024
                            </h3>
                            
                            <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
                                {achievement.description}
                            </p>

                            {/* Tech highlights */}
                            <div className="pt-4 border-t border-[#12B7C9]/20">
                                <div className="text-[#12B7C9] text-xs font-semibold uppercase tracking-wider mb-2">Built With</div>
                                <div className="flex flex-wrap gap-2">
                                    {['Game Engine', 'State Management', 'Collision System', 'Real-time Rendering'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-[#12B7C9]/10 border border-[#12B7C9]/30 rounded-lg text-[#12B7C9] text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function AchievementCard({ achievement, index }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const hasMultipleImages = achievement.images && achievement.images.length > 1;

    const handlePrevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages) {
            setSelectedImageIndex((prev) => (prev === 0 ? achievement.images.length - 1 : prev - 1));
        }
    };

    const handleNextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (hasMultipleImages) {
            setSelectedImageIndex((prev) => (prev === achievement.images.length - 1 ? 0 : prev + 1));
        }
    };

    const handleBulletClick = (e, idx) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedImageIndex(idx);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 rounded-xl overflow-hidden hover:border-[#12B7C9]/50 transition-all duration-500 shadow-lg hover:shadow-[#12B7C9]/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#12B7C9]/0 to-[#12B7C9]/0 group-hover:from-[#12B7C9]/5 group-hover:to-transparent transition-all duration-500 pointer-events-none z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
                {/* Image Section */}
                {achievement.images && achievement.images.length > 0 && (
                    <div className="relative h-72 lg:h-auto bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
                        {/* Gradient overlay for better visual depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-[1] pointer-events-none" />
                        
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedImageIndex}
                                src={achievement.images[selectedImageIndex]}
                                alt={`${achievement.title} - Image ${selectedImageIndex + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </AnimatePresence>

                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#12B7C9]/30">
                                <span className="text-lg">{achievement.icon}</span>
                                <span className="text-[#12B7C9] text-xs font-semibold uppercase tracking-wider">
                                    {achievement.badge}
                                </span>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={handlePrevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#12B7C9]/90 text-white p-2.5 rounded-full transition-all z-20 backdrop-blur-sm border border-white/10 hover:border-[#12B7C9]/50 hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-[#12B7C9]/90 text-white p-2.5 rounded-full transition-all z-20 backdrop-blur-sm border border-white/10 hover:border-[#12B7C9]/50 hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Image Bullets/Navigator */}
                        {hasMultipleImages && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                {achievement.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={(e) => handleBulletClick(e, idx)}
                                        className={`rounded-full transition-all ${
                                            idx === selectedImageIndex
                                                ? 'bg-[#12B7C9] w-8 h-2 shadow-lg shadow-[#12B7C9]/50'
                                                : 'bg-white/40 hover:bg-white/60 w-2 h-2'
                                        }`}
                                        aria-label={`Go to image ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Image Counter */}
                        {hasMultipleImages && (
                            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-medium border border-white/20 z-20">
                                <span className="text-[#12B7C9]">{selectedImageIndex + 1}</span>
                                <span className="text-gray-400"> / </span>
                                <span>{achievement.images.length}</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-center bg-gray-800/30 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#12B7C9]/20 to-[#12B7C9]/5 border border-[#12B7C9]/30 flex items-center justify-center">
                                <span className="text-[#12B7C9] font-bold text-xl">{index + 1}</span>
                            </div>
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-[#12B7C9] transition-colors duration-300">
                                {achievement.title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed mb-5 text-sm lg:text-base">
                                {achievement.description}
                            </p>
                            
                            {achievement.link && (
                                <motion.a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#12B7C9] hover:text-[#12B7C9]/80 transition-all text-sm font-semibold group/link"
                                    whileHover={{ x: 4 }}
                                >
                                    <span>Read article</span>
                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Decorative line */}
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#12B7C9]/30 to-transparent" />
                </div>
            </div>
        </motion.div>
    );
}

function Achievements() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Separate champion achievement from others
    const championAchievement = achievements.find(a => a.isChampion);
    const otherAchievements = achievements.filter(a => !a.isChampion);

    return (
        <section id="achievements" className="min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #12B7C9 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="w-full max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#12B7C9] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Achievements
                    </motion.h2>
                    <motion.p
                        className="text-slate-400 text-center max-w-2xl mx-auto text-base lg:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Recognition and milestones in my development journey
                    </motion.p>
                </motion.div>

                {/* Champion Achievement - Special Design */}
                {championAchievement && (
                    <HackathonChampionCard
                        achievement={championAchievement}
                        index={0}
                    />
                )}

                {/* Other Achievements */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-6 lg:space-y-8"
                >
                    {otherAchievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            achievement={achievement}
                            index={index + 1}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Achievements;

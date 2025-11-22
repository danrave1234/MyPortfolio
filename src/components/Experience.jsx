import { motion } from 'framer-motion';

const capabilities = [
    {
        title: 'Frontend Engineering',
        description: 'Building responsive, production-ready interfaces using modern frameworks.',
        items: [
            'React, Vite, Tailwind CSS',
            'Component architecture (atomic design, reusable UI)',
            'State management patterns',
            'Client-side routing, caching, and API consumption',
            'UI/UX systems for dashboards and SaaS tools',
        ],
    },
    {
        title: 'Backend & API Development',
        description: 'Building scalable and maintainable server-side systems.',
        items: [
            'Java + Spring Boot (REST APIs, auth, validation)',
            'Python (automation, scripting, data processing)',
            'MySQL, PostgreSQL, Firestore',
            'Authentication (JWT, OAuth2, Cognito)',
            'API design, rate limiting, caching, error handling',
        ],
    },
    {
        title: 'Cloud & Infrastructure',
        description: 'Designing and deploying cloud-native applications.',
        items: [
            'AWS: EC2, S3, CloudFront, Lambda, SES, VPC, Route53',
            'CI/CD pipelines (GitHub Actions, CloudBuild)',
            'Linux server management',
            'Monitoring, logging, and performance tuning',
            'Cost-efficient deployment architectures',
        ],
    },
    {
        title: 'DevOps & Automation',
        description: 'Streamlining development workflows and deployment processes.',
        items: [
            'CI/CD pipelines',
            'API integration',
            'Message queues / background jobs',
            'Containerization (optional future addition)',
            'Tools: GitHub, Postman, VSCode, Figma, Cloudflare, Docker (learning)',
        ],
    },
];

function Experience() {
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
        <section
            id="experience"
            className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-20 relative"
        >
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-[#12B7C9] mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                Capabilities
            </motion.h2>
            <motion.p
                className="text-slate-400 text-center mb-12 max-w-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
            >
                Technical skills and expertise across the full development stack
            </motion.p>

            <motion.div
                className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {capabilities.map((capability, index) => (
                    <motion.div
                        key={capability.title}
                        variants={itemVariants}
                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-[#12B7C9]/50 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 leading-relaxed">{capability.description}</p>
                        <ul className="space-y-2">
                            {capability.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-slate-300 text-sm flex items-start">
                                    <span className="text-[#12B7C9] mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Experience;

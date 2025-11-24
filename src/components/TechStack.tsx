'use client';

import { motion } from 'framer-motion';

const skills = [
    "React", "Next.js", "TypeScript", "Figma", "Canva", "Adobe XD", "HTML", "CSS"
];

const TechStack = () => {
    return (
        <section className="py-20 container-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-text-muted">Tools and technologies I work with</p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="px-6 py-3 rounded-full border border-white/10 bg-surface/50 text-text-main hover:border-primary hover:text-primary transition-colors cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;

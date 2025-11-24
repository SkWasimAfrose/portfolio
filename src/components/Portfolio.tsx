'use client';

import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const projects = [1, 2, 3];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 container-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
                    <p className="text-text-muted">A glimpse into my recent projects</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((item, index) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="aspect-[4/3] rounded-2xl bg-surface border border-white/5 flex flex-col items-center justify-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 z-20">
                                <Lock className="w-6 h-6 text-text-muted group-hover:text-primary transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-text-muted group-hover:text-white transition-colors z-20">
                                Project Coming Soon
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

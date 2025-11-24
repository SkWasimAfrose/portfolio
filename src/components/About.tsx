'use client';

import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface container-padding">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">About Me</h2>
                    <p className="text-text-muted text-lg leading-relaxed">
                        Hi, I'm a passionate and creative <span className="text-primary">Full Stack Developer</span> with a keen eye for detail and a strong focus on user experience.
                        I specialize in building scalable web applications that look beautiful and perform perfectly.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

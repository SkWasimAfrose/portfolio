'use client';

import { motion } from 'framer-motion';
import { Palette, Layout, PenTool } from 'lucide-react';

const services = [
    {
        title: "UI/UX Design",
        description: "Creating intuitive and visually appealing user interfaces that drive engagement.",
        icon: Palette
    },
    {
        title: "Web Design",
        description: "Designing modern, responsive websites tailored to your brand identity.",
        icon: Layout
    },
    {
        title: "Graphic Design",
        description: "Crafting stunning visuals and assets to elevate your digital presence.",
        icon: PenTool
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-surface container-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
                    <p className="text-text-muted">What I can do for you</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary text-primary group-hover:text-background transition-colors">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

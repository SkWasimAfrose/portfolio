'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Phone, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-surface container-padding">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-text-muted">Let's discuss your next project</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Email</h3>
                                <a href="mailto:ww.webdev@zohomail.in" className="text-text-muted hover:text-primary transition-colors">
                                    ww.webdev@zohomail.in
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Phone</h3>
                                <a href="tel:6296627624" className="text-text-muted hover:text-primary transition-colors">
                                    6296627624
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">LinkedIn</h3>
                                <a href="https://linkedin.com/in/skwasimafrose" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    @skwasimafrose
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Instagram className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Instagram</h3>
                                <a href="https://instagram.com/skwasimafrose" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    @skwasimafrose
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-background p-8 rounded-2xl border border-white/5"
                    >
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-muted">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-muted">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-muted">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                                <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 pt-8 text-center text-text-muted text-sm">
                    <p>&copy; {new Date().getFullYear()} Sk Wasim Afrose. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

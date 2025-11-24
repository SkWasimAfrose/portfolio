'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Phone, Linkedin, Instagram, Send, MessageCircle, MapPin, Github } from 'lucide-react';

// Web3Forms Access Key
const ACCESS_KEY = "fa006042-8a4b-4f8a-a89f-ddf17b16b7a3";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setResult('success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setResult('error');
            }
        } catch (error) {
            setResult('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">WhatsApp</h3>
                                <a href="https://wa.me/918101389536" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    +91 8101389536
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
                                    +91 6296627624
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Github className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">GitHub</h3>
                                <a href="https://github.com/SkWasimAfrose" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    @SkWasimAfrose
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
                                <a href="https://instagram.com/in/skwasimafrose" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    @skwasimafrose
                                </a>
                            </div>
                        </div>

                        {/* <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Location</h3>
                                <a href="https://maps.app.goo.gl/wx4mbwpoKKAgY7yWA" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                                    WB, SURI, INDIA
                                </a>
                            </div>
                        </div> */}

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-background p-8 rounded-2xl border border-white/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-text-muted">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-text-muted">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="your@email.com"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-text-muted">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                <Send className="ml-2 w-4 h-4" />
                            </Button>

                            {/* Success/Error Messages */}
                            {result === 'success' && (
                                <div className="text-green-500 text-sm text-center font-medium">
                                    Message sent successfully! 🎉
                                </div>
                            )}
                            {result === 'error' && (
                                <div className="text-red-500 text-sm text-center font-medium">
                                    Failed to send message. Please try again.
                                </div>
                            )}
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

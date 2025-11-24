'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <nav className={clsx(
                "pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 backdrop-blur-md",
                isScrolled
                    ? "bg-background/80 border-white/10 shadow-lg shadow-black/20"
                    : "bg-background/50 border-white/5"
            )}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScrollTo(e, link.href)}
                        className={clsx(
                            "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
                            activeSection === link.href.substring(1)
                                ? "text-primary"
                                : "text-text-muted hover:text-text-main"
                        )}
                    >
                        {activeSection === link.href.substring(1) && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white/5 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{link.name}</span>
                    </a>
                ))}
            </nav>
        </motion.div>
    );
};

export default Navbar;

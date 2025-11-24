'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden container-padding py-20">
            {/* // <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden container-padding py-20" style={{ background: 'linear-gradient(to bottom, #0a162886, #1a294279)' }}> */}
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 max-w-4xl mx-auto"
            >
                <Magnetic className="inline-block">
                    <div className="relative w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/30 p-1">
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                            <Image
                                src="/assets/images/headshot.png"
                                alt="Sk Wasim Afrose"
                                width={128}
                                height={128}
                                className="w-full h-full object-cover rounded-full"
                                priority
                            />
                        </div>
                    </div>
                </Magnetic>

                <h2 className="text-primary font-medium tracking-widest text-sm uppercase">
                    Full Stack Developer | UI/UX Designer
                </h2>

                <h1 className="text-3xl md:text-7xl font-bold text-text-main leading-tight whitespace-nowrap w-full">
                    Sk Wasim Afrose
                </h1>

                <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Crafting digital experiences where <span className="text-primary">beauty</span> meets <span className="text-primary">functionality</span>.
                    Building scalable web applications with a focus on premium user interfaces.
                </p>

                <div className="pt-8">
                    <Magnetic className="inline-block">
                        <Button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View My Work
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Magnetic>
                </div>
            </motion.div>
        </section >
    );
};

export default Hero;

'use client';

import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useCursor } from './CustomCursor';

interface MagneticProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // Higher number = weaker pull (divisor)
}

const Magnetic = ({ children, className, strength = 3 }: MagneticProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { setCursorVariant } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring physics for smooth return
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const mouseX = useSpring(x, springConfig);
    const mouseY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX / strength);
        y.set(distanceY / strength);
        setCursorVariant('magnetic');
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setCursorVariant('default');
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Magnetic;

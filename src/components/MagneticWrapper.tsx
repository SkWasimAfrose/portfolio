'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useCursor } from './CustomCursor';

interface MagneticWrapperProps {
    children: React.ReactNode;
    className?: string;
    strength?: number; // How strong the magnetic pull is
}

const MagneticWrapper = ({ children, className, strength = 30 }: MagneticWrapperProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { setCursorVariant } = useCursor();

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };

        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);

        setPosition({ x: x / strength, y: y / strength });
        setCursorVariant('magnetic');
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setCursorVariant('default');
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MagneticWrapper;

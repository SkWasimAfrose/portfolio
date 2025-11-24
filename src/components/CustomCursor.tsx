'use client';

import { motion } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';

type CursorContextType = {
    setCursorVariant: (variant: 'default' | 'magnetic') => void;
};

const CursorContext = createContext<CursorContextType>({
    setCursorVariant: () => { },
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [cursorVariant, setCursorVariant] = useState<'default' | 'magnetic'>('default');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: "white",
            mixBlendMode: "difference" as const,
        },
        magnetic: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            mixBlendMode: "normal" as const,
        }
    };

    return (
        <CursorContext.Provider value={{ setCursorVariant }}>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1
                }}
            />
            {children}
        </CursorContext.Provider>
    );
};

export default CursorProvider;

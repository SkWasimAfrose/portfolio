'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    baseVx: number;
    baseVy: number;
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Initialize particles
        const initParticles = () => {
            const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
            const particles: Particle[] = [];

            for (let i = 0; i < particleCount; i++) {
                const vx = (Math.random() - 0.5) * 0.3;
                const vy = (Math.random() - 0.5) * 0.3;

                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx,
                    vy,
                    size: Math.random() * 1.5 + 0.5,
                    baseVx: vx,
                    baseVy: vy,
                });
            }

            particlesRef.current = particles;
        };
        initParticles();

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 150;

                // Apply repulsion force if within range
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    particle.vx -= Math.cos(angle) * force * 0.5;
                    particle.vy -= Math.sin(angle) * force * 0.5;
                } else {
                    // Gradually return to base velocity
                    particle.vx += (particle.baseVx - particle.vx) * 0.05;
                    particle.vy += (particle.baseVy - particle.vy) * 0.05;
                }

                // Apply velocity damping
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Wrap around screen edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Draw particle with glow effect
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Glow effect
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.fill();

                // Reset shadow for next particle
                ctx.shadowBlur = 0;
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.4 }}
        />
    );
};

export default ParticleBackground;

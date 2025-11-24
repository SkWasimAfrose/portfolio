import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Spotlight from '@/components/Spotlight';
import ParticleBackground from '@/components/ParticleBackground';

export default function Home() {
    return (
        <main className="relative">
            <ParticleBackground />
            <Spotlight />
            <Navbar />
            <Hero />
            <About />
            <TechStack />
            <Services />
            <Portfolio />
            <Contact />
        </main>
    );
}

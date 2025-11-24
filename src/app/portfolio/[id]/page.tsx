import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/projects';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-yellow-400 hover:underline">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121212] text-white selection:bg-yellow-400/30">
            {/* Header */}
            <header className="p-6 fixed top-0 left-0 z-50 w-full">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                    <ArrowLeft className="w-6 h-6" />
                    <span className="text-lg font-medium">Back to Home</span>
                </Link>
            </header>

            <main className="container mx-auto px-6 pt-24 pb-16 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Hero Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                                priority
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-serif font-bold text-yellow-400 mb-6 leading-tight">
                                {project.title}
                            </h1>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-full bg-[#1E1E1E] text-gray-300 text-sm font-medium border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                {project.details}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-yellow-400/20"
                            >
                                <ExternalLink className="w-5 h-5" />
                                View Live
                            </a>
                            <a
                                href={project.repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1E1E1E] text-white font-bold rounded-xl border border-white/10 hover:bg-[#2A2A2A] hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Github className="w-5 h-5" />
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

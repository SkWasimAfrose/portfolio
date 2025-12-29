"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "../app/data/projects";

// Swiper for carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 container-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected Works
          </h2>
          <p className="text-text-muted">A glimpse into my recent projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col h-full"
            >
              {/* Image Container */}
              <Link href={`/portfolio/${project.id}`} className="block group">
                <div className="mb-4">
                  {project.images && project.images.length > 0 ? (
                    <Swiper
                      modules={[Autoplay]}
                      autoplay={{ delay: 500, disableOnInteraction: false }}
                      loop={true}
                      slidesPerView={1}
                      className="rounded-xl overflow-hidden border border-white/10 bg-[#1E1E1E]"
                    >
                      {project.images.map((imgSrc, i) => (
                        <SwiperSlide key={imgSrc + i}>
                          <div className="relative aspect-video">
                            <Image
                              src={imgSrc}
                              alt={`${project.title} screenshot ${i + 1}`}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#1E1E1E] mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                    </div>
                  )}
                </div>
              </Link>

              {/* Details Container */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
                  {project.description}
                </p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 hover:border-yellow-400/50 transition-all duration-300 font-medium group shadow-lg hover:shadow-yellow-400/20"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

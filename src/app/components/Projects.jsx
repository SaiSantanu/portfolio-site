"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CGU Pay Slip Generator",
    description: "Automated payroll management built with Spring Boot and MySQL.",
    tech: ["Spring Boot", "MySQL", "HTML", "Tailwind"],
    image: "/Cgu_pay.png",
  },
  {
    title: "Quick Account",
    description:
      "An accounting and GST consultant management platform that helps businesses handle invoices, clients, and tax filings seamlessly.",
    tech: ["React", "Spring Boot", "MySQL"],
    image: "/ACCount.png",
  },
  {
    title: "Local AI Assistant",
    description:
      "A local AI chatbot that runs Large Language Models using Ollama with a React terminal UI. Supports voice interaction and system automation commands.",
    tech: ["React", "Node.js", "Ollama", "Express"],
    image: "/Local-Ai.png",
  },
];

const ProjectCard = ({ project, index, totalProjects }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const stackOffset = index * 20;
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [0.95, 1, 1, 0.98, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 1, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -30]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y, top: `${stackOffset}px`, zIndex: totalProjects - index }}
      className="sticky w-full"
    >
      <div
        className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/20"
      >
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
          {/* Left Side */}
          <div className="flex-1 z-10 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 font-mono"
              >
                0{index + 1}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-display font-black leading-tight tracking-tight text-white/90 group-hover:text-white transition-colors"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 leading-relaxed text-base lg:text-lg max-w-lg font-sans"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-md text-[10px] lg:text-xs font-semibold uppercase tracking-widest bg-white/5 border border-white/10 text-white/70 font-mono transition-colors group-hover:bg-white/10 group-hover:text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-6 pt-4"
            >
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs tracking-widest uppercase"
                >
                  <FaGithub className="text-sm transition-transform group-hover/link:scale-110" />
                  <span>Code</span>
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-xs tracking-widest uppercase"
                >
                  <FaExternalLinkAlt className="text-sm transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  <span>Live</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full relative group/image"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#050505]">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 transition-all duration-700 group-hover/image:scale-105 group-hover/image:opacity-100"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="work" className="relative py-12 lg:py-16  text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              Selected Work
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white">
            PROJECTS
          </h2>
          <p className="text-white/50 text-lg lg:text-xl font-sans leading-relaxed">
            A curated selection of work showcasing scalable architectures and intuitive interfaces.
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="space-y-12 lg:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

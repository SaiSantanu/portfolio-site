"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CGU Pay Slip Generator",
    description: "Automated payroll management built with Spring Boot and MySQL.",
    tech: ["Spring Boot", "MySQL", "HTML", "Tailwind"],
    github: "https://github.com/yourrepo",
    image: "/Cgu_pay.png",
    color: "from-violet-500/20 to-fuchsia-500/20",
    accentColor: "violet",
  },
  {
    title: "Quick Account",
    description:
      "An accounting and GST consultant management platform that helps businesses handle invoices, clients, and tax filings seamlessly.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/yourrepo",
    image: "/ACCount.png",
    color: "from-cyan-500/20 to-blue-500/20",
    accentColor: "cyan",
  },
  {
    title: "Firebird Line Follower Robot",
    description: "Arduino-based robot that follows a white line using IR sensors.",
    tech: ["Arduino", "C++", "Sensors"],
    image: "/Firebird.jpeg",
    link: "https://github.com/yourusername/firebird-robot",
    color: "from-pink-500/20 to-orange-500/20",
    accentColor: "pink",
  },
];

const ProjectCard = ({ project, index, totalProjects }) => {
  const cardRef = useRef(null);
  const [isStuck, setIsStuck] = useState(false);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  // Calculate position in stack
  const stackOffset = index * 20; // pixels to offset each card
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.85, 1, 1, 0.95, 0.85]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.3, 1, 1, 1, 0.3]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -50]
  );

  // Rotate slightly as it comes into view
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    [15, 5, 0]
  );

  const accentColors = {
    violet: "group-hover:border-violet-500/50 group-hover:shadow-violet-500/20",
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20",
    pink: "group-hover:border-pink-500/50 group-hover:shadow-pink-500/20",
  };

  const techColors = {
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    pink: "bg-pink-500/10 text-pink-300 border-pink-500/30",
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        y,
        rotateX,
        top: `${stackOffset}px`,
        zIndex: totalProjects - index,
      }}
      className="sticky w-full"
    >
      <motion.div
        className={`group relative bg-gradient-to-br from-[#16171D] to-[#0D0E12] rounded-3xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 ${accentColors[project.accentColor]}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
          {/* Left Side - Text Content */}
          <div className="flex-1 z-10 space-y-6">
            {/* Project Number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span 
                className="text-sm font-bold tracking-[0.3em] uppercase opacity-40"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Project {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-black leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 leading-relaxed text-lg max-w-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border ${techColors[project.accentColor]} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 pt-4"
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group/link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-2xl group-hover/link:rotate-12 transition-transform" />
                  <span className="text-sm font-medium">View Code</span>
                </motion.a>
              )}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group/link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="text-xl group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  <span className="text-sm font-medium">Live Demo</span>
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative group/image"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Image container with aspect ratio */}
              <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                />
                {/* Gradient overlay on image */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover/image:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating tech badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="text-sm font-bold text-white/90">
                {project.tech[0]}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.color} opacity-50`} />
      </motion.div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
          </motion.div>

          <h2 
            className="text-6xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            PROJECTS
          </h2>

          <p 
            className="text-gray-500 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A curated selection of work showcasing innovative solutions and creative problem-solving
          </p>
        </motion.div>
      </div>

      {/* Stack Container */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              totalProjects={projects.length}
            />
          ))}
        </div>

        {/* Bottom spacer for last card */}
        <div className="h-[40vh]" />
      </div>
    </section>
  );
}
"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const skillGroups = [
  {
    label: "Frontend",
    color: "violet",
    tags: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    label: "UI Libraries",
    color: "pink",
    tags: ["Material UI", "Bootstrap", "Chart.js", "Framer Motion", "Formik"],
  },
  {
    label: "Languages",
    color: "cyan",
    tags: ["C", "Python", "Java", "SQL"],
  },
  {
    label: "Tools",
    color: "emerald",
    tags: ["Git/GitHub", "Eclipse", "Jupyter Notebook", "VS Code"],
  },
];

const tagColorMap = {
  violet:
    "bg-violet-500/10 text-violet-300 border-violet-500/30 hover:bg-violet-500/20 hover:border-violet-400/60",
  pink:
    "bg-pink-500/10 text-pink-300 border-pink-500/30 hover:bg-pink-500/20 hover:border-pink-400/60",
  cyan:
    "bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/60",
  emerald:
    "bg-emerald-500/10 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/60",
};

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black text-white py-28 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Eye-brow label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-5"
        >
          <div className="w-6 h-[1px] bg-violet-500/60" />
          <span
            className="text-sm font-bold tracking-[0.4em] uppercase text-white/35"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            About Me
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent mb-5"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          WHO I AM
        </motion.h2>

        {/* Animated gradient underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-[2px] w-48 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 origin-left mb-14"
        />

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-gray-400 mb-16 max-w-4xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          I&apos;m{" "}
          <span className="text-violet-400 font-semibold">Sai Santanu</span>, a
          Full Stack and AI-focused Software Engineering undergraduate with
          hands-on experience building scalable web applications and intelligent
          systems. I specialize in developing robust backend architectures,
          machine learning solutions, and modern full-stack applications using
          technologies like{" "}
          <span className="text-emerald-400 font-semibold">Spring Boot</span>,{" "}
          <span className="text-yellow-400 font-semibold">Python</span>,{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-cyan-400 font-semibold">Next.js</span>, and{" "}
          <span className="text-violet-400 font-semibold">Tailwind CSS</span>.
          <br />
          <br />
          Passionate about solving real-world problems through technology, I
          focus on creating efficient, scalable, and user-centric digital
          experiences while combining strong system design principles with clean
          and accessible interfaces.
        </motion.p>

        {/* Grid: Education & Skills */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-8 hover:border-violet-500/30 transition-all duration-500"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3
              className="text-2xl font-bold mb-7 flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-2xl">🎓</span>
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Education
              </span>
            </h3>

            <div className="space-y-7 relative">
              {[
                {
                  school: "C. V Raman Global University",
                  location: "Odisha, India",
                  degree: "B.Tech in Computer Science (2023–2027)",
                  grade: "CGPA: 8.2",
                },
                {
                  school: "ITAMATI HIGHER SECONDARY SCHOOL",
                  location: "Odisha, India",
                  degree: "Intermediate Science (2019–2021)",
                  grade: "79.19%",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  viewport={{ once: true }}
                  className="relative pl-5 border-l border-violet-500/30 hover:border-violet-400/60 transition-colors duration-300"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-violet-500/70"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                    viewport={{ once: true }}
                  />
                  <p className="font-bold text-white text-sm leading-snug">
                    {edu.school}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5 mb-1">
                    {edu.location}
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {edu.degree}
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2.5 py-0.5 rounded-full">
                    {edu.grade}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-8 hover:border-cyan-500/30 transition-all duration-500"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-500/60 via-blue-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3
              className="text-2xl font-bold mb-7 flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span className="text-2xl">🛠️</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h3>

            <div className="space-y-5">
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/30 mb-2.5"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    {group.label}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {group.tags.map((tag, ti) => (
                      <motion.span
                        key={ti}
                        variants={tagVariants}
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border cursor-default transition-all duration-300 ${tagColorMap[group.color]}`}
                        style={{ fontFamily: "'Space Mono', monospace" }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const skillGroups = [
  {
    label: "Frontend",
    tags: ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind", "HTML/CSS"],
  },
  {
    label: "Backend",
    tags: ["Node.js", "Express.js", "Spring Boot", "Flask", "REST APIs"],
  },
  {
    label: "UI Libraries",
    tags: ["Material UI", "Bootstrap", "Chart.js", "Framer Motion", "Formik"],
  },
  {
    label: "Languages",
    tags: ["C", "C++", "Python", "Java", "SQL"],
  },
  {
    label: "Tools",
    tags: ["Git/GitHub", "Eclipse", "Jupyter Notebook", "VS Code"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen  text-white py-12 lg:py-16 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mb-20 lg:mb-24"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
              About Me
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white">
            WHO I AM
          </h2>
          <p className="text-white/60 text-lg lg:text-xl font-sans leading-relaxed">
            I&apos;m <span className="text-white font-semibold">Sai Santanu</span>, a Full Stack and AI-focused Software Engineering undergraduate. I specialize in developing robust backend architectures, machine learning solutions, and modern full-stack applications.
          </p>
        </motion.div>

        {/* Grid: Education & Skills */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-8 lg:p-12 hover:border-white/20 transition-all duration-500"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="font-display text-2xl lg:text-3xl font-black tracking-tight text-white/90 mb-10 flex items-center gap-3">
              <span className="text-white/40">🎓</span> Education
            </h3>

            <div className="space-y-10 relative">
              <div className="absolute left-[5px] top-2 bottom-2 w-px bg-white/10" />
              
              {[
                {
                  school: "C. V Raman Global University",
                  location: "Odisha, India",
                  degree: "B.Tech in Computer Science (2023–2027)",
                  grade: "CGPA: 8.24",
                },
                {
                  school: "ITAMATI HIGHER SECONDARY SCHOOL",
                  location: "Odisha, India",
                  degree: "Intermediate Science (2019–2021)",
                  grade: "79.19%",
                },
                {
                  school: "Saraswati Vidya Mandir, Nayagarh",
                  location: "Odisha, India",
                  degree: "High School Science (2017–2019)",
                  grade: "75%",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-[1px] top-1.5 w-2 h-2 rounded-full bg-white/20 ring-4 ring-[#0a0a0a] group-hover:bg-white/60 transition-colors duration-300"
                    whileInView={{ scale: [0, 1.3, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 * i }}
                    viewport={{ once: true }}
                  />
                  <p className="font-bold text-white/90 text-lg leading-snug mb-1">
                    {edu.school}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-2">
                    {edu.location}
                  </p>
                  <p className="text-white/60 text-sm font-sans mb-3">
                    {edu.degree}
                  </p>
                  <span className="inline-block font-mono text-[10px] font-semibold text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-md">
                    {edu.grade}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-8 lg:p-12 hover:border-white/20 transition-all duration-500"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="font-display text-2xl lg:text-3xl font-black tracking-tight text-white/90 mb-10 flex items-center gap-3">
              <span className="text-white/40">🛠️</span> Technical Skills
            </h3>

            <div className="space-y-8">
              {skillGroups.map((group, gi) => (
                <div key={gi}>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-4">
                    {group.label}
                  </p>
                  <motion.div
                    className="flex flex-wrap gap-2.5"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {group.tags.map((tag, ti) => (
                      <motion.span
                        key={ti}
                        variants={tagVariants}
                        className="px-3 py-1.5 rounded-md text-[11px] lg:text-xs font-semibold tracking-wide bg-white/5 border border-white/10 text-white/70 font-mono transition-colors hover:bg-white/10 hover:text-white cursor-default"
                        whileHover={{ y: -2 }}
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

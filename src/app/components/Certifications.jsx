"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa";

const certifications = [
  {
    title: "Web Development",
    issuer: "Teachnook",
    image: "/Teachnook.png",
    link: "/Sai _Teachnook.pdf",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Academor",
    image: "/Academor.png",
    link: "/Sai_Academor.pdf",
  },
  {
    title: "Applied Machine Learning using Python",
    issuer: "National Institute of Technology Kurukshetra",
    image: "/Nit(K).png",
    link: "/Nit(K).pdf",
  },
  {
    title: "Innovation by Design",
    issuer: "NPTEL (Indian Institute of Technology Bombay)",
    image: "/Nptel.png",
    link: "/Sai_Nptl.pdf",
  },
  {
    title: "Data Analytics Course / Intern",
    issuer: "Central Tool Room & Training Centre (CTTC), Bhubaneswar",
    image: "/Cttc.jpeg",
    link: "/CTTC_Sai.pdf",
  },
  {
    title: "Palo Alto Networks Cybersecurity",
    issuer: "Coursera",
    image: "/Coursera.png",
    link: "/Sai_Coursera.pdf",
  },
  {
    title: "Python & Data Analysis",
    issuer: "L&T EduTech",
    image: "/L&T.png",
    link: "/L&T.png",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    image: "/HackerRank.png",
    link: "/java_basic certificate.pdf",
  },
  {
    title: "Data Structures & Algorithms (Java)",
    issuer: "Seeding Minds",
    image: "/Java_DSA.png",
    link: "/Certificate_OH-31012026-00002.pdf",
  },
  {
    title: "Java Full-Stack",
    issuer: "Seeding Minds",
    image: "/Full-Stack.png",
    link: "/Certificate_OH-06042026-00001.pdf",
  },
];

// Duplicate for seamless CSS marquee loop
const scrollCerts = [...certifications, ...certifications];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative w-full overflow-hidden py-12 lg:py-16  text-white"
    >
      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-6 mb-20 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
              <FaAward className="text-white/40" />
              Achievements
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white">
            CERTIFICATIONS
          </h2>
          
          <p className="text-white/50 text-lg lg:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            Professional certifications and courses completed from leading institutions and platforms.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container — CSS marquee */}
      <div className="relative w-full">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            gap: 1.5rem;
            width: max-content;
            animation: marquee 50s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track px-4 py-8">
          {scrollCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group relative flex-none w-[280px] lg:w-[320px] bg-[#0a0a0a]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image */}
              <div className="relative h-44 lg:h-48 overflow-hidden bg-[#050505] border-b border-white/10">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <FaExternalLinkAlt className="text-white text-[10px]" />
                    <span className="text-white font-semibold text-[11px] uppercase tracking-wider font-mono">View</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10">
                  <FaCertificate className="text-white/60 text-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                <h3 className="text-white/90 font-display font-bold text-lg leading-tight line-clamp-2 mb-2 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                  <p className="text-white/50 text-sm font-sans line-clamp-2">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Pause hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-mono flex items-center justify-center gap-4">
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          Hover to pause
          <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>←</motion.span>
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto mt-24 px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: certifications.length, label: "Certifications" },
            { number: "5+", label: "Platforms" },
            { number: "100%", label: "Verified" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl lg:text-5xl font-display font-black text-white/90 mb-3">
                {stat.number}
              </div>
              <div className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

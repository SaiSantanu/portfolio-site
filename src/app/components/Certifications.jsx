"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCertificate } from "react-icons/fa";

const Certifications = () => {
  const [isPaused, setIsPaused] = useState(false);

  const certifications = [
    {
      title: "Web Development",
      issuer: "Teachnook",
      image: "/Teachnook.png",
      link: "/Sai _Teachnook.pdf",
      color: "from-violet-500/20 to-purple-500/20",
      accentColor: "violet",
    },
    {
      title: "Artificial Intelligence",
      issuer: "Academor",
      image: "/Academor.png",
      link: "/Sai_Academor.pdf",
      color: "from-cyan-500/20 to-blue-500/20",
      accentColor: "cyan",
    },
    {
      title: "Applied Machine Learning using Python",
      issuer: "National Institute of Technology Kurukshetra",
      image: "/Nit(K).png",
      link: "/Nit(K).pdf",
      color: "from-pink-500/20 to-rose-500/20",
      accentColor: "pink",
    },
    {
      title: "Innovation by Design",
      issuer: "NPTEL (Indian Institute of Technology Bombay)",
      image: "/Nptel.png",
      link: "/Sai_Nptl.pdf",
      color: "from-fuchsia-500/20 to-purple-500/20",
      accentColor: "fuchsia",
    },
    {
      title: "Data Analytics Course / Intern",
      issuer: "Central Tool Room & Training Centre (CTTC), Bhubaneswar",
      image: "/Cttc.jpeg",
      link: "/CTTC_Sai.pdf",
      color: "from-orange-500/20 to-amber-500/20",
      accentColor: "orange",
    },
    {
      title: "Palo Alto Networks Cybersecurity",
      issuer: "Coursera",
      image: "/Coursera.png",
      link: "/Sai_Coursera.pdf",
      color: "from-blue-500/20 to-indigo-500/20",
      accentColor: "blue",
    },
    {
      title: "Python & Data Analysis",
      issuer: "L&T EduTech",
      image: "/L&T.png",
      link: "/L&T.png",
      color: "from-emerald-500/20 to-teal-500/20",
      accentColor: "emerald",
    },
  ];

  // Triple for smoother infinite scroll
  const scrollCerts = [...certifications, ...certifications, ...certifications];

  const borderColors = {
    violet: "hover:border-violet-500/50 hover:shadow-violet-500/20",
    cyan: "hover:border-cyan-500/50 hover:shadow-cyan-500/20",
    pink: "hover:border-pink-500/50 hover:shadow-pink-500/20",
    fuchsia: "hover:border-fuchsia-500/50 hover:shadow-fuchsia-500/20",
    orange: "hover:border-orange-500/50 hover:shadow-orange-500/20",
    blue: "hover:border-blue-500/50 hover:shadow-blue-500/20",
    emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/20",
  };

  return (
    <section
      id="certifications"
      className="relative w-full overflow-hidden py-24 bg-black"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-6 mb-16">
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
            className="inline-flex items-center gap-2 mb-4"
          >
            <FaAward className="text-violet-400 text-2xl" />
            <span 
              className="text-sm font-bold tracking-[0.4em] uppercase text-white/40"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Achievements
            </span>
          </motion.div>

          <h2 
            className="text-6xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            CERTIFICATIONS
          </h2>

          <p 
            className="text-gray-500 max-w-2xl mx-auto text-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Professional certifications and courses completed from leading institutions and platforms
          </p>
        </motion.div>
      </div>

      {/* Scrolling Container */}
      <div className="relative w-full">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: isPaused ? 0 : [0, -33.33 * certifications.length * 16], // 16rem = w-64
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {scrollCerts.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex-none w-72 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 ${borderColors[cert.accentColor]}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                  >
                    <FaExternalLinkAlt className="text-white text-sm" />
                    <span className="text-white font-semibold text-sm">
                      View Certificate
                    </span>
                  </motion.div>
                </div>

                {/* Certification badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full p-2 border border-white/20">
                  <FaCertificate className="text-white/90 text-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-3">
                <h3 
                  className="text-white font-bold text-lg leading-tight group-hover:text-white transition-colors line-clamp-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {cert.title}
                </h3>

                <div className="flex items-start gap-2">
                  <div className="mt-1 w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                  <p 
                    className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {cert.issuer}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color.replace('/20', '/50')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Pause hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p 
          className="text-gray-600 text-sm flex items-center justify-center gap-2"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
          Hover to pause
          <motion.span
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.span>
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto mt-20 px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { number: certifications.length, label: "Certifications", icon: FaCertificate },
            { number: "5+", label: "Platforms", icon: FaAward },
            { number: "100%", label: "Verified", icon: "✓" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl lg:text-5xl font-black text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold" style={{ fontFamily: "'Space Mono', monospace" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
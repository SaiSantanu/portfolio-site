"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showNav, setShowNav] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.85]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const cur = window.scrollY;
          setShowNav(!(cur > lastScrollY && cur > 200));
          lastScrollY = cur;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }
  }, []);

  const socialLinks = [
    { icon: FaGithub, label: "GITHUB", url: "https://github.com/SaiSantanu" },
    { icon: FaLinkedin, label: "LINKEDIN", url: "https://linkedin.com/in/sai-santanu-sahoo" },
    { icon: FaInstagram, label: "INSTAGRAM", url: "https://instagram.com/sai_santanu" },
  ];

  const navItems = ["Home", "Work", "About", "Contact"];

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen px-4 sm:px-6 md:px-12 bg-black text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(147,51,234,0.4) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)" }}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[40%] h-[40%] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top left handle */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 left-6 text-sm sm:text-base text-gray-400 tracking-[0.3em] font-light uppercase z-10"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        @sai_santanu
      </motion.div>

      {/* Top right social links */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-6 right-6 flex flex-col sm:flex-row sm:space-x-8 space-y-3 sm:space-y-0 z-10"
      >
        {socialLinks.map(({ icon: Icon, label, url }, index) => (
          <motion.a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-xs sm:text-sm font-medium tracking-wider hidden sm:block">
              {label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Main centered content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center leading-none mb-8 sm:mb-12"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            SAI SANTANU
          </motion.span>
        </motion.h1>

        {/* Profile photo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
          className="relative group mb-8"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

          <div className="relative w-48 h-60 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
            <img
              src="/pic.jpg"
              alt="Sai Santanu"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-300 text-lg sm:text-xl md:text-2xl text-center max-w-2xl px-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <ReactTyped
            strings={[
              "Creative Developer 💻",
              "Java Developer ☕",
              "Tech Explorer 🔍",
              "Passionate about Web, AI & Innovation 🚀",
            ]}
            typeSpeed={40}
            backSpeed={30}
            backDelay={2000}
            loop
            showCursor
            cursorChar="|"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 sm:bottom-28 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Mono', monospace" }}>
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showNav ? 0 : 100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="relative backdrop-blur-xl bg-black/60 border-t border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-fuchsia-500/5 to-cyan-500/5" />
          <div className="relative flex flex-col sm:flex-row justify-between items-center px-6 lg:px-12 py-4 sm:py-5">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 sm:flex-1 sm:justify-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm sm:text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: "0.05em" }}
                >
                  {item}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <motion.div
              className="mt-4 sm:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/SAI SANTANU CV.pdf"
                download
                className="group relative flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-6 py-2.5 rounded-full font-medium text-sm sm:text-base overflow-hidden shadow-lg shadow-violet-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaDownload className="group-hover:animate-bounce" />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </section>
  );
};

export default Hero;

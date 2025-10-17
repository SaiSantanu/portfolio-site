"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Top Left Instagram Handle */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-6 left-6 text-lg md:text-xl text-gray-400 tracking-wider"
      >
        @sai_santanu
      </motion.div>

      {/* Top Right Social Links */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-6 right-6 flex space-x-6 text-gray-300"
      >
        <a
          href="https://github.com/SaiSantanu"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-200 flex items-center gap-2 text-lg md:text-xl"
        >
          <FaGithub className="text-2xl md:text-3xl" /> GITHUB
        </a>
        <a
          href="https://linkedin.com/in/sai-santanu-sahoo"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-200 flex items-center gap-2 text-lg md:text-xl"
        >
          <FaLinkedin className="text-2xl md:text-3xl" /> LINKEDIN
        </a>
        <a
          href="https://instagram.com/sai_santanu"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition transform duration-200 flex items-center gap-2 text-lg md:text-xl"
        >
          <FaInstagram className="text-2xl md:text-3xl" /> INSTAGRAM
        </a>
      </motion.div>

      {/* Centered Name */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-8xl md:text-9xl font-extrabold text-center leading-tight mb-6 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
      >
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          SAI
        </span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          SANTANU
        </span>
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-4 w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-gray-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] overflow-hidden hover:scale-105 transition-transform duration-300 backdrop-blur-sm"
      >
        <img
          src="/pic.jpg"
          alt="Sai Santanu"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </motion.div>

      {/* Typing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 text-gray-300 italic text-2xl md:text-3xl text-center max-w-2xl"
        style={{ fontFamily: "cursive" }}
      >
        <ReactTyped
          strings={[
            "Creative Developer 💻",
            "Java Developer ☕",
            "Tech Explorer 🔍",
            "Passionate about Web, AI & Innovation 🚀",
          ]}
          typeSpeed={20}
          backSpeed={30}
          loop
        />
      </motion.div>

      {/* Bottom Navbar (Hide on Scroll Down) */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: showNav ? 0 : 100, opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 w-full bg-black/40 backdrop-blur-md border-t border-gray-800 flex justify-center items-center px-6 py-4 text-sm font-medium z-50"
      >
        {/* Centered Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10">
          {["Home", "Work", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-pink-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CV Button */}
        <div className="absolute right-6">
          <a
            href="/Sai_Santanu_CV.pdf"
            download
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition transform hover:scale-105 duration-200"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </motion.nav>
    </section>
  );
};

export default Hero;

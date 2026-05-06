"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRocket, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative w-full bg-black text-white overflow-hidden">
        {/* Gradient top border */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-48 h-24 bg-violet-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-7">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-600 text-xs"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span>© {new Date().getFullYear()}</span>
              <span className="text-gray-700">|</span>
              <span>ERROR 404: RIGHTS NOT FOUND 🚫</span>
            </motion.div>

            {/* Crafted by */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-500 text-xs"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              <span className="uppercase tracking-wider">Crafted with</span>

              <motion.div
                animate={{ scale: [1, 1.35, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500 text-[11px]" />
              </motion.div>

              <span className="uppercase tracking-wider">and</span>

              <motion.div
                animate={{ rotate: [0, 15, -15, 0], y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaRocket className="text-cyan-400 text-[11px]" />
              </motion.div>

              <span className="font-bold text-white tracking-wider uppercase">
                by Sai Santanu
              </span>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Scroll-to-top FAB */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 flex items-center justify-center z-50"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{
          scale: 1.12,
          boxShadow: "0 0 24px rgba(139,92,246,0.55)",
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-white text-sm" />
      </motion.button>
    </>
  );
};

export default Footer;

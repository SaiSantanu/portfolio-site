"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRocket, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 py-8">

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <span>© {new Date().getFullYear()}</span>
            <span className="text-gray-600">|</span>

            <span>
              ERROR 404: RIGHTS NOT FOUND 🚫
            </span>
          </motion.div>

          {/* Crafted Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-500"
          >
            <span>CRAFTED WITH</span>

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-red-500 text-sm" />
            </motion.div>

            <span>AND</span>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket className="text-cyan-400 text-sm" />
            </motion.div>

            <span className="font-semibold text-white">
              BY SAI SANTANU
            </span>
          </motion.div>

        </div>
      </div>

      {/* Scroll To Top Button
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp className="text-white text-sm" />
      </motion.button> */}

    </footer>
  );
};

export default Footer;

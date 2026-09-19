"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="relative w-full  text-white overflow-hidden border-t border-white/10">

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 text-white/50 font-sans"
          >
            <span>© {new Date().getFullYear()}</span>
            <span className="text-white/20">|</span>
            <span className="font-mono text-[10px] uppercase tracking-widest">ERROR 404: RIGHTS NOT FOUND 🚫</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 text-white/50 font-mono text-[10px] uppercase tracking-widest"
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHeart className="text-white/80 text-xs" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaRocket className="text-white/80 text-xs" />
            </motion.div>
            <span>by</span>
            <span className="font-bold text-white tracking-widest font-display text-xs">SAI SANTANU</span>
          </motion.div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

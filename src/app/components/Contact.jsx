"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        }
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-12 lg:py-16  flex flex-col justify-center overflow-hidden"
    >
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Subtle Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div className="flex items-center gap-4 w-full justify-center lg:justify-start mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 flex items-center gap-2">
              <FaEnvelope className="text-white/40" />
              Contact
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-display font-black tracking-tighter text-white">
            LET&apos;S CONNECT
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT SIDE - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-white/60 text-xl font-sans leading-relaxed max-w-md">
              Whether you have a project idea, want to collaborate, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-8 text-white/80">
              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <FaEnvelope className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Email</p>
                  <a href="mailto:saisantanusahoo@gmail.com" className="text-lg font-display hover:text-white transition-colors">
                    saisantanusahoo@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <FaPhone className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Phone</p>
                  <a href="tel:+918895437918" className="text-lg font-display hover:text-white transition-colors">
                    +91 8895437918
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <FaMapMarkerAlt className="text-white/60 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Location</p>
                  <p className="text-lg font-display">
                    Nayagarh, Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0a0a0a]/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col gap-6 relative overflow-hidden group"
            >
              {/* Form subtle glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[80px] pointer-events-none group-hover:bg-white/[0.04] transition-colors duration-700" />
              
              <div className="space-y-2 mb-4">
                <h3 className="text-2xl font-display font-bold text-white/90">
                  Send a Message
                </h3>
                <p className="text-white/50 text-sm font-sans">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-5 relative z-10">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5 transition-all duration-300 font-sans"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5 transition-all duration-300 font-sans"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    required
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-white/30 focus:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/5 transition-all duration-300 font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 px-6 rounded-xl bg-white text-black font-semibold font-display tracking-wide hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === "sending" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              <div className="h-6 flex items-center justify-center">
                {status === "success" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/70 text-sm font-sans flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white/70 text-sm font-sans flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

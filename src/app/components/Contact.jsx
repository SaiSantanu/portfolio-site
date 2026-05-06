"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: "easeOut" },
  }),
};

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "saisantanusahoo@gmail.com",
    color: "violet",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 8895437918",
    color: "fuchsia",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Nayagarh, Odisha, India",
    color: "cyan",
  },
];

const iconBg = {
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  fuchsia: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.target);
    try {
      const response = await fetch("https://formspree.io/f/xeelqbvk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus(""), 5000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white py-28 px-6 flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[28rem] h-[28rem] bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[28rem] h-[28rem] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-fuchsia-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-[1px] bg-violet-500/60" />
            <span
              className="text-sm font-bold tracking-[0.4em] uppercase text-white/35"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Get In Touch
            </span>
            <div className="w-6 h-[1px] bg-violet-500/60" />
          </div>

          <h2
            className="text-6xl lg:text-8xl font-black tracking-tight bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            LET&apos;S CONNECT
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 h-[2px] w-28 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 origin-center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p
              className="text-gray-400 text-lg leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Whether you have a project idea, want to collaborate, or just want
              to say hi — my inbox is always open. I&apos;ll get back to you as
              soon as possible.
            </p>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  whileHover={{ x: 5 }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${iconBg[color]}`}
                  >
                    <Icon className="text-sm" />
                  </div>
                  <div>
                    <p
                      className="text-white/35 text-[11px] font-bold uppercase tracking-wider mb-0.5"
                      style={{ fontFamily: "'Space Mono', monospace" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-lg flex flex-col gap-4"
          >
            {/* Card hover glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3
              className="relative z-10 text-2xl font-bold text-white mb-1"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Send a Message
            </h3>

            {[
              { type: "text", name: "name", placeholder: "Your Name", custom: 0 },
              { type: "email", name: "email", placeholder: "Your Email", custom: 1 },
            ].map((field) => (
              <motion.input
                key={field.name}
                custom={field.custom}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                className="relative z-10 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/25 text-white placeholder-white/20 transition-all duration-300 text-sm"
                suppressHydrationWarning
              />
            ))}

            <motion.textarea
              custom={2}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="relative z-10 w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/25 text-white placeholder-white/20 transition-all duration-300 text-sm resize-none"
              suppressHydrationWarning
            />

            <motion.button
              type="submit"
              disabled={status === "sending"}
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 disabled:opacity-50 text-white py-3.5 rounded-xl font-semibold overflow-hidden shadow-lg shadow-violet-500/20 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2 text-sm">
                {status === "sending" ? (
                  <>
                    <motion.span
                      className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                    />
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </span>
              {/* Shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.55 }}
              />
            </motion.button>

            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-center text-emerald-400 text-sm font-medium bg-emerald-400/10 border border-emerald-400/20 rounded-xl py-3"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  ✅ Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="text-center text-red-400 text-sm font-medium bg-red-400/10 border border-red-400/20 rounded-xl py-3"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  ❌ Something went wrong. Please try again.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

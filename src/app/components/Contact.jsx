"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

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
        headers: {
          Accept: "application/json",
        },
      });

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
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you have a project idea, want to collaborate, or just want to
            say hi — my inbox is always open.
          </p>

          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-pink-500 text-xl" />
              saisantanusahoo@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-pink-500 text-xl" />
              +91 8895437918
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500 text-xl" />
              Nayagarh, Odisha, India
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/60 p-8 rounded-2xl shadow-lg border border-gray-800 backdrop-blur-lg flex flex-col gap-6"
        >
          <h3 className="text-3xl font-semibold text-center text-pink-400">
            Send Me a Message
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:outline-none text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:outline-none text-white"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 focus:outline-none text-white"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 py-3 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message 🚀"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;

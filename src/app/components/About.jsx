"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-12 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 border-b-4 border-gray-700"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-gray-300 mb-16"
        >
          I'm <span className="text-purple-400 font-semibold">Sai Santanu</span>, a Full Stack Developer & Designer passionate about crafting immersive web experiences. With a strong foundation in Computer Science and a flair for visual storytelling, I specialize in building responsive, accessible, and visually engaging interfaces using modern tools like <span className="text-pink-400 font-semibold">React</span>, <span className="text-blue-400 font-semibold">Next.js</span>, and <span className="text-purple-400 font-semibold">Tailwind CSS</span>.
        </motion.p>

        {/* Grid: Education & Skills */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
              🎓 Education
            </h3>
            <ul className="space-y-6 text-gray-300">
              <li className="hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200">
                <strong className="text-white">C. V Raman Global University</strong> Odisha, India<br />
                B.Tech in Computer Science (2023 - 2027) — <span className="text-blue-400 font-semibold">CGPA: 7.7</span>
              </li>
              <li className="hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200">
                <strong className="text-white">ITAMATI HIGHER SECONDARY SCHOOL OF EDUCATION & TECHNOLOGY ITAMATI</strong><br />
                Intermediate Science (2019 - 2021) — <span className="text-blue-400 font-semibold">79.19%</span>
              </li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
              🛠️ Technical Skills
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-purple-400 transition-colors duration-200">
                <strong>Frontend:</strong> JavaScript, React, Next.js, TypeScript, Redux, Tailwind, HTML/CSS
              </li>
              <li className="hover:text-pink-400 transition-colors duration-200">
                <strong>UI Libraries:</strong> Material UI, Bootstrap, Chart.js, Framer Motion, Formik
              </li>
              <li className="hover:text-blue-400 transition-colors duration-200">
                <strong>Languages:</strong> C++, Python, Java, Go, SQL
              </li>
              <li className="hover:text-green-400 transition-colors duration-200">
                <strong>Tools:</strong> Git/GitHub, Netlify, Vite, Prismic CMS
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

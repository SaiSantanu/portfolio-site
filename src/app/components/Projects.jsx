"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CGU Pay Slip Generator",
    description: "Automated payroll management built with Spring Boot and MySQL.",
    tech: ["Spring Boot", "MySQL", "HTML", "Tailwind"],
    github: "https://github.com/yourrepo",
    image: "/Cgu_pay.png",
    
  },
  {
    title: "Quick Account",
    description:
      "An accounting and GST consultant management platform that helps businesses handle invoices, clients, and tax filings seamlessly.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/yourrepo",
    image: "/ACCount.png",
  },
  {
    title: "Firebird Line Follower Robot",
    description: "Arduino-based robot that follows a white line using IR sensors.",
    tech: ["Arduino", "C++", "Sensors"],
    image: "/Firebird.jpeg",
    link: "https://github.com/yourusername/firebird-robot",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#0D0E12] text-white">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-extrabold tracking-tight">PROJECTS</h2>
        <p className="text-gray-400 mt-3 uppercase text-sm">
          Selected projects showcasing my work.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1A1B23] rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg"
          >
            {/* Left Side - Text */}
            <div className="flex-1">
              <div className="flex gap-4 mb-6">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-3xl hover:text-blue-400 transition" />
                </a>                
              </div>

              <h3 className="text-4xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium uppercase text-gray-300">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tracking-wide">{tech}</span>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl w-full shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

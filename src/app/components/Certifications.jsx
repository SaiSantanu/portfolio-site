"use client";
import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: " Web Development",
      issuer: "Teachnook",
      image: "/Teachnook.png",
      link: "/Sai _Teachnook.pdf",
    },
    {
      title: "Artificial Intelligence",
      issuer: "Academor",
      image: "/Academor.png",
      link: "/Sai_Academor.pdf",
    },
    {
      title: "Applied Machine Learning using Python",
      issuer: "National Institute of Technology Kurukshetra",
      image: "/Nit(K).png",
      link: "/Nit(K).pdf",
    },
    {
      title: "Innovation by Design",
      issuer: "NPTEL (Indian Institute of Technology Bombay)",
      image: "/Nptel.png ",
      link: "/Sai_Nptl.pdf",
    },

    {
      title: "Data Analytics course / Intern",
      issuer: "Central Tool Room & Training Centre (CTTC), Bhubaneswar",
      image: "/Cttc.jpeg",
      link: "/CTTC_Sai.pdf",
    },

    {
      title: " Palo Alto Networks Cybersecurity",
      issuer: "Coursera",
      image: "/Coursera.png",
      link: "/Sai_Coursera.pdf",
    },

    {
      title: "Python & Data Analysis",
      issuer: "L&T EduTech",
      image: "/L&T.png",
      link: "/L&T.png",
    },
  ];

  // duplicate for infinite scroll
  const scrollCerts = [...certifications, ...certifications];

  return (
    <section
      id="certifications"
      className="w-full overflow-hidden py-16 bg-gradient-to-r from-gray-900 to-gray-800"
    >
      <h2 className="text-3xl md:text-4xl text-white font-bold mb-10 text-center tracking-wide">
        Certifications
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6 whitespace-nowrap px-4">
          {scrollCerts.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="flex-none w-56 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />

                {/* overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition">
                  <span className="text-white font-semibold text-sm bg-black/60 px-3 py-1 rounded">
                    View Certificate
                  </span>
                </div>
              </div>

              <div className="p-4 text-center bg-gray-700 bg-opacity-80">
                <h3 className="text-white font-semibold text-sm">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-xs mt-1">
                  {cert.issuer}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Certifications;

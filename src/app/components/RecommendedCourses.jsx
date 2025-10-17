"use client";
import React from "react";

const RecommendedCourses = () => {
  // Refined list of real, available YouTube courses
  const courses = [
    {
      title: "React JS Crash Course",
      link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", // Traversy Media
    },
    {
      title: "Node.js Full Course",
      link: "https://www.youtube.com/watch?v=Oe421EPjeBE", // freeCodeCamp
    },
    {
      title: "JavaScript Tutorial",
      link: "https://www.youtube.com/watch?v=PkZNo7MFNFg", // Programming with Mosh
    },
    {
      title: "Tailwind CSS Crash Course",
      link: "https://www.youtube.com/watch?v=dFgzHOX84xQ", // Traversy Media
    },
    {
      title: "Python for Beginners",
      link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc", // freeCodeCamp
    },
    {
      title: "HTML & CSS Full Course",
      link: "https://www.youtube.com/watch?v=UB1O30fR-EE", // Thapa Technical
    },
    {
      title: "JavaScript Basics by CodeWithHarry",
      link: "https://www.youtube.com/watch?v=KF6VJwh_2w0",
    },
  ];

  // Helper function to get YouTube thumbnail
  const getThumbnail = (url) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  // Duplicate array for seamless infinite scroll
  const scrollCourses = [...courses, ...courses];

  return (
    <div className="w-full overflow-hidden py-8 bg-gradient-to-r from-gray-900 to-gray-800">
      <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 text-center tracking-wide">
        Recommended Courses
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-4 md:gap-6 whitespace-nowrap">
          {scrollCourses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noreferrer"
              className="flex-none w-48 md:w-56 bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              <div className="relative">
                <img
                  src={getThumbnail(course.link)}
                  alt={course.title}
                  className="w-full h-32 md:h-40 object-cover transition-filter duration-300 hover:brightness-110"
                />
                {/* Overlay play icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 12l-5.48-3.251v6.502L14.752 12z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-3 text-white text-center font-semibold bg-gray-700 bg-opacity-80">
                {course.title}
              </div>
            </a>
          ))}
        </div>
      </div>

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
          display: flex;
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default RecommendedCourses;

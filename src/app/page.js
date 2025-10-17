"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import RecommendedCourses from "./components/RecommendedCourses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Work / Projects Section */}
      <section id="work">
        <Projects />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Recommended Courses Section */}
      <section id="courses">
        <RecommendedCourses />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer/>
      </section>

    </main>
  );
}

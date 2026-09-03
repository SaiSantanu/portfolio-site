"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ClientProjects from "./components/ClientProjects";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Projects />
      <ClientProjects />
      <About />
      <Certifications />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}

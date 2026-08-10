"use client";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
      <About />
      <Certifications />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  );
}

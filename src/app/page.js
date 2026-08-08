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
      <section id="home">
        <Hero />
      </section>
      <section id="work">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <Analytics />
    </main>
  );
}

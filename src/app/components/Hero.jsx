"use client";

import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";
import { useRef, useState } from "react";
import TypingRoles from "./TypingRoles";
import HeroScrollBackground from "./HeroScrollBackground";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const isHeroInView = useInView(heroRef, { amount: 0.01 });
  
  // Smoother enter animation for the sidebar
  const navOpacity = useTransform(scrollYProgress, [0, 0.72, 0.82, 1], [0, 0, 1, 1]);
  const navX = useTransform(scrollYProgress, [0, 0.72, 0.82, 1], [-50, -50, 0, 0]);
  
  const [isNavVisible, setIsNavVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsNavVisible(progress >= 0.72);
  });

  const socialLinks = [
    { icon: FaGithub, label: "GITHUB", url: "https://github.com/SaiSantanu" },
    { icon: FaLinkedin, label: "LINKEDIN", url: "https://linkedin.com/in/sai-santanu-sahoo" },
    { icon: FaInstagram, label: "INSTAGRAM", url: "https://instagram.com/sai_santanu" },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-[400vh] w-full "
    >
      <HeroScrollBackground containerRef={heroRef} />

      <div className="sticky top-0 z-10 h-screen w-full">
        
        {/* =================================================
            TOP BAR
        ================================================= */}
        <div className="absolute left-0 right-0 top-8 z-30 mx-auto flex w-[90%] max-w-[1600px] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-mono text-xs tracking-[0.2em] text-white/70 hover:text-white transition-colors sm:text-sm md:text-base"
          >
            @SAI_SANTANU
          </motion.div>

          <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
            {socialLinks.map(({ icon: Icon, label, url }, i) => (
              <Link key={label} href={url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  className="group flex items-center gap-2 font-mono text-xs font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <Icon className="text-base sm:text-lg transition-transform group-hover:scale-110" />
                  <span className="hidden sm:block tracking-widest">{label}</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* =================================================
            LARGE NAME
        ================================================= */}
        <motion.div className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[1600px] h-full flex flex-col justify-center">
            <h1 className="sr-only">Sai Santanu - Software Engineer & Data Analyst</h1>
            
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="absolute left-[4%] top-[25%] font-display font-black leading-none text-white text-[16vw] sm:text-[14vw] md:text-[12vw] lg:text-[11vw] tracking-tighter"
            >
              SAI
            </motion.div>

            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute right-[4%] bottom-[20%] font-display font-black leading-none text-white text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[9vw] tracking-tighter"
            >
              SANTANU
            </motion.div>
          </div>
        </motion.div>

        {/* =================================================
            ROLE
        ================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="absolute bottom-[10%] left-[5%] z-30"
        >
          <TypingRoles />
        </motion.div>

        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-default"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
          </div>
        </motion.div>

        {/* =================================================
            SCROLL-REVEALED VERTICAL NAVIGATION
        ================================================= */}
        <motion.nav
          aria-label="Hero navigation"
          aria-hidden={!isNavVisible || !isHeroInView}
          style={{
            opacity: isHeroInView ? navOpacity : 0,
            x: isHeroInView ? navX : -50,
            pointerEvents: isNavVisible && isHeroInView ? "auto" : "none",
          }}
          className="fixed left-5 top-1/2 z-[60] flex w-[52px] -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-white/10 bg-black/40 p-2 shadow-2xl backdrop-blur-xl sm:left-6 sm:w-[56px] sm:p-2.5"
        >
          <a
            href="/SAI SANTANU CV.pdf"
            download
            aria-label="Download CV"
            title="Download CV"
            tabIndex={isNavVisible && isHeroInView ? 0 : -1}
            className="group flex h-10 w-full items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 sm:h-11"
          >
            <FaFilePdf aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110 group-hover:text-red-400" />
          </a>

          <div aria-hidden="true" className="mx-auto h-px w-6 bg-white/10" />

          <div className="flex w-full flex-col items-center gap-1.5 pt-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                tabIndex={isNavVisible ? 0 : -1}
                className="group flex min-h-12 w-full items-center justify-center rounded-full font-mono text-[9px] tracking-[0.2em] text-white/50 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50 sm:min-h-14 sm:text-[10px]"
              >
                <span className="[writing-mode:vertical-rl] rotate-180 uppercase">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </motion.nav>

      </div>
    </section>
  );
};

export default Hero;

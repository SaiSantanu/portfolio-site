"use client";

import Link from "next/link";

import {
  motion,
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

import {
  useRef,
  useState,
} from "react";

import TypingRoles from "./TypingRoles";
import HeroScrollBackground from "./HeroScrollBackground";


const Hero = () => {

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const navOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 0.82, 1],
    [0, 0, 1, 1]
  );
  const navX = useTransform(
    scrollYProgress,
    [0, 0.72, 0.82, 1],
    [-72, -72, 0, 0]
  );
  const [isNavVisible, setIsNavVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsNavVisible(progress >= 0.72);
  });


  const socialLinks = [
    {
      icon: FaGithub,
      label: "GITHUB",
      url: "https://github.com/SaiSantanu",
    },

    {
      icon: FaLinkedin,
      label: "LINKEDIN",
      url: "https://linkedin.com/in/sai-santanu-sahoo",
    },

    {
      icon: FaInstagram,
      label: "INSTAGRAM",
      url: "https://instagram.com/sai_santanu",
    },
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

      className="
        relative
        h-[400vh]
        w-full
        bg-black
      "
    >

      {/* =================================================
          SCROLLING PHOTO BACKGROUND
      ================================================= */}

      <HeroScrollBackground containerRef={heroRef} />


      {/* =================================================
          STICKY CONTENT
      ================================================= */}

      <div
        className="
          sticky
          top-0
          z-10
          h-screen
          w-full
        "
      >

        {/* =================================================
            TOP BAR
        ================================================= */}

        <div
          className="
            absolute
            left-0
            right-0
            top-8
            z-30
            mx-auto
            flex
            w-[90%]
            max-w-[1600px]
            items-center
            justify-between
          "
        >

          {/* Username */}

          <motion.div
            initial={false}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="
              font-mono
              text-sm
              tracking-[0.25em]
              text-white
              sm:text-base
              md:text-lg
            "
          >
            @SAI_SANTANU
          </motion.div>


          {/* Social */}

          <div
            className="
              flex
              items-center
              gap-5
              sm:gap-8
              md:gap-12
            "
          >

            {socialLinks.map(
              ({
                icon: Icon,
                label,
                url,
              }) => (

                <Link
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <motion.div
                    whileHover={{
                      y: -2,
                    }}

                    className="
                      flex
                      items-center
                      gap-2
                      font-bold
                      text-white
                    "
                  >

                    <Icon
                      className="
                        text-lg
                        sm:text-xl
                      "
                    />

                    <span
                      className="
                        hidden
                        text-sm
                        sm:block
                        md:text-base
                      "
                    >
                      {label}
                    </span>

                  </motion.div>

                </Link>

              )
            )}

          </div>

        </div>


        {/* =================================================
            LARGE NAME
        ================================================= */}

        <motion.div
          className="
            absolute
            inset-0
            z-20
            pointer-events-none
          "
        >

          {/* SAI */}

          <motion.h1
            initial={false}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.3,
            }}

            className="
              absolute
              left-[3%]
              top-[17%]

              font-black
              leading-none

              text-white

              text-[18vw]
              sm:text-[16vw]
              md:text-[14vw]
              lg:text-[12vw]

              tracking-[-0.06em]
            "
          >
            SAI
          </motion.h1>


          {/* SANTANU */}

          <motion.h1
            initial={false}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 1,
              delay: 0.5,
            }}

            className="
              absolute
              right-[2%]
              bottom-[15%]

              font-black
              leading-none

              text-white

              text-[13vw]
              sm:text-[12vw]
              md:text-[11vw]
              lg:text-[10vw]

              tracking-[-0.06em]
            "
          >
            SANTANU
          </motion.h1>

        </motion.div>


        {/* =================================================
            ROLE
        ================================================= */}

        <motion.div
          initial={false}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 1,
          }}

          className="
            absolute
            bottom-[13%]
            left-[5%]
            z-30
          "
        >

          <TypingRoles />

        </motion.div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          animate={{
            y: [0, 8, 0],
          }}

          transition={{
            duration: 2,
            repeat: Infinity,
          }}

          className="
            absolute
            bottom-8
            left-1/2
            z-30
            -translate-x-1/2
            text-white/70
          "
        >

          <div
            className="
              flex
              flex-col
              items-center
              gap-2
            "
          >

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
              "
            >
              Scroll
            </span>

            <div
              className="
                h-8
                w-px
                bg-white/50
              "
            />

          </div>

        </motion.div>


        {/* =================================================
            SCROLL-REVEALED VERTICAL NAVIGATION
        ================================================= */}

        <motion.nav
          aria-label="Hero navigation"
          aria-hidden={!isNavVisible}
          style={{
            opacity: navOpacity,
            x: navX,
            pointerEvents: isNavVisible ? "auto" : "none",
          }}
          className="
            fixed
            left-5
            top-1/2
            z-[60]
            flex
            w-[58px]
            -translate-y-1/2
            flex-col
            items-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-black/65
            p-2
            shadow-2xl
            shadow-black/40
            backdrop-blur-lg
            sm:left-6
            sm:w-[60px]
            sm:p-2.5
            md:w-16
          "
        >
          <a
            href="/SAI SANTANU CV.pdf"
            download
            aria-label="Download CV PDF"
            title="Download CV PDF"
            tabIndex={isNavVisible ? 0 : -1}
            className="
              flex
              h-9
              w-full
              items-center
              justify-center
              rounded-full
              text-white/80
              transition-colors
              hover:bg-white/10
              hover:text-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
              sm:h-10
            "
          >
            <FaFilePdf
              aria-hidden="true"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </a>

          <div
            aria-hidden="true"
            className="h-px w-full bg-white/10"
          />

          <div className="flex w-full flex-col items-center gap-1">
            {navItems.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                tabIndex={isNavVisible ? 0 : -1}
                className="
                  flex
                  min-h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  text-[10px]
                  tracking-[0.14em]
                  text-white/60
                  transition-colors
                  hover:bg-white/10
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white/60
                  sm:min-h-11
                "
              >
                <span
                  className="[writing-mode:vertical-rl] rotate-180"
                >
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
"use client";

import { ReactTyped } from "react-typed";

const TypingRoles = () => {
  return (
    <div
      className="
        text-[#e4ded7]
        text-lg
        sm:text-xl
        md:text-2xl
        lg:text-3xl
        font-mono
        tracking-wide
      "
    >
      <ReactTyped
        strings={[
          "Full-Stack Developer",
          "AI Enthusiast",
          "Software Engineer",
        ]}
        typeSpeed={50}
        backSpeed={35}
        backDelay={1800}
        loop
        showCursor
        cursorChar="|"
      />
    </div>
  );
};

export default TypingRoles;
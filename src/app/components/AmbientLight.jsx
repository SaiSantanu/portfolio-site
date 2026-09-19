"use client";

import { useEffect, useRef } from "react";

export default function AmbientLight() {
  const lightRef = useRef(null);
  
  // Use refs to store mouse position and current animated position to avoid re-renders
  const mousePos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  
  useEffect(() => {
    // Check for touch devices and reduced motion preference
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Disable effect on touch devices or if reduced motion is preferred
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      // 0.05 is a low factor for a smooth, laggy premium feel
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.05;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.05;

      if (lightRef.current) {
        // Offset by 400px (half the 800px width/height) to center the light on the cursor
        // Using translate3d for hardware acceleration
        lightRef.current.style.transform = `translate3d(${currentPos.current.x - 400}px, ${currentPos.current.y - 400}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden md:block w-[800px] h-[800px] rounded-full opacity-[0.10] blur-[100px]"
      style={{
        background: "radial-gradient(circle at center, rgba(120, 119, 198, 0.8) 0%, rgba(56, 189, 248, 0.4) 30%, rgba(232, 121, 249, 0.2) 60%, transparent 100%)",
        transform: "translate3d(-1000px, -1000px, 0)", // start offscreen
        willChange: "transform",
      }}
    />
  );
}

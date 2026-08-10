"use client";

import {
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const HeroScrollBackground = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const lastRenderedFrameRef = useRef(0);

  const [firstFrameLoaded, setFirstFrameLoaded] =
    useState(false);

  // You have 36 frames
  const frameCount = 60;

  /*
   * ============================================
   * SCROLL PROGRESS
   * ============================================
   */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /*
   * ============================================
   * RENDER FRAME
   * ============================================
   */

  const renderFrame = useCallback(
    (frameNumber) => {
      const canvas = canvasRef.current;
      const images = imagesRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      if (!ctx) return;

      /*
       * Convert frame number to array index
       *
       * Frame 1  -> index 0
       * Frame 36 -> index 35
       */

      const imageIndex = Math.max(
        0,
        Math.min(
          frameNumber - 1,
          frameCount - 1
        )
      );

      /*
       * If requested frame hasn't loaded yet,
       * use the nearest loaded frame.
       */

      let img = images[imageIndex];

      if (!img) {
        for (
          let i = imageIndex;
          i >= 0;
          i--
        ) {
          if (images[i]) {
            img = images[i];
            break;
          }
        }
      }

      if (!img) return;

      /*
       * ========================================
       * CANVAS SIZE
       * ========================================
       */

      const width = window.innerWidth;
      const height = window.innerHeight;

      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {
        canvas.width = width;
        canvas.height = height;
      }

      /*
       * Clear previous image
       */

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      /*
       * ========================================
       * COVER IMAGE
       * ========================================
       */

      const scale = Math.max(
        width / img.width,
        height / img.height
      );

      const drawWidth =
        img.width * scale;

      const drawHeight =
        img.height * scale;

      const x =
        (width - drawWidth) / 2;

      const y =
        (height - drawHeight) / 2;

      ctx.drawImage(
        img,
        x,
        y,
        drawWidth,
        drawHeight
      );

      lastRenderedFrameRef.current =
        frameNumber;
    },
    [frameCount]
  );

  /*
   * ============================================
   * LOAD IMAGES
   * ============================================
   */

  useEffect(() => {
    let mounted = true;

    const loadedImages =
      new Array(frameCount);


    /*
     * --------------------------------------------
     * LOAD SINGLE FRAME
     * --------------------------------------------
     */

    const loadFrame = (
      index,
      isFirstFrame = false
    ) => {
      return new Promise((resolve) => {
        const img = new Image();

        /*
         * Make browser prioritize first frame
         */

        if (isFirstFrame) {
          img.fetchPriority = "high";
        }

        const frameNumber = String(
          index + 1
        ).padStart(3, "0");

        img.src =
          `/hero_section_Images/ezgif-frame-${frameNumber}.jpg`;

        /*
         * SUCCESS
         */

        img.onload = () => {
          if (!mounted) {
            resolve();
            return;
          }

          loadedImages[index] = img;

          imagesRef.current =
            loadedImages;

          /*
           * ======================================
           * FIRST FRAME
           * ======================================
           *
           * As soon as frame 001 loads,
           * display it immediately.
           */

          if (isFirstFrame) {
            setFirstFrameLoaded(true);

            requestAnimationFrame(() => {
              renderFrame(1);
            });
          }

          resolve();
        };

        /*
         * ERROR
         */

        img.onerror = () => {
          console.error(
            `Failed to load frame ${frameNumber}`
          );

          resolve();
        };
      });
    };

    /*
     * ============================================
     * LOAD FIRST FRAME FIRST
     * ============================================
     */

    const loadImages = async () => {
      /*
       * IMPORTANT:
       * Load frame 001 first.
       */

      await loadFrame(0, true);

      if (!mounted) return;

      /*
       * ==========================================
       * NOW LOAD REMAINING 35 FRAMES
       * ==========================================
       */

      const remainingFrames = [];

      for (
        let i = 1;
        i < frameCount;
        i++
      ) {
        remainingFrames.push(
          loadFrame(i)
        );
      }

      await Promise.all(
        remainingFrames
      );

      if (!mounted) return;

    };

    loadImages();

    /*
     * Cleanup
     */

    return () => {
      mounted = false;
    };
  }, [
    frameCount,
    renderFrame,
  ]);

  /*
   * ============================================
   * SCROLL → FRAME
   * ============================================
   */

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (progress) => {
      /*
       * We can start scrolling as soon as
       * the first image exists.
       */

      if (!firstFrameLoaded) {
        return;
      }

      /*
       * Convert scroll progress to frame
       */

      const frame =
        Math.floor(
          progress *
            (frameCount - 1)
        ) + 1;

      /*
       * Don't redraw same frame
       */

      if (
        frame ===
        lastRenderedFrameRef.current
      ) {
        return;
      }

      /*
       * Render smoothly
       */

      requestAnimationFrame(() => {
        renderFrame(frame);
      });
    }
  );

  /*
   * ============================================
   * INITIAL FRAME
   * ============================================
   */

  useEffect(() => {
    if (!firstFrameLoaded) {
      return;
    }

    /*
     * Always render current scroll position
     */

    const progress =
      scrollYProgress.get();

    const frame =
      Math.floor(
        progress *
          (frameCount - 1)
      ) + 1;

    renderFrame(frame);
  }, [
    firstFrameLoaded,
    renderFrame,
    scrollYProgress,
    frameCount,
  ]);

  /*
   * ============================================
   * RESIZE
   * ============================================
   */

  useEffect(() => {
    const handleResize = () => {
      if (!firstFrameLoaded) {
        return;
      }

      const progress =
        scrollYProgress.get();

      const frame =
        Math.floor(
          progress *
            (frameCount - 1)
        ) + 1;

      renderFrame(frame);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [
    firstFrameLoaded,
    renderFrame,
    scrollYProgress,
    frameCount,
  ]);

  /*
   * ============================================
   * RENDER
   * ============================================
   */

  return (
    <div className="absolute inset-0 z-0">
      <div
        className="
          sticky
          top-0
          h-screen
          w-full
        "
      >
    {/* ========================================
        IMMEDIATE FALLBACK IMAGE
        This prevents the first-load blank screen
    ======================================== */}

    <img
      src="/hero_section_Images/ezgif-frame-001.jpg"
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      loading="eager"
      decoding="async"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
    />

    {/* ========================================
        SCROLL ANIMATION CANVAS
    ======================================== */}

    <canvas
      ref={canvasRef}
      className="
        absolute
        inset-0
        h-full
        w-full
      "
    />

    {/* ========================================
        DARK OVERLAY
    ======================================== */}

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-black/20
      "
    />

    {/* ========================================
        CINEMATIC GRADIENT
    ======================================== */}

    <div
      className="
        pointer-events-none
        absolute
        inset-0
        bg-gradient-to-b
        from-black/10
        via-transparent
        to-black/30
      "
    />

    {/* ========================================
        BOTTOM FADE
    ======================================== */}

    <div
      className="
        pointer-events-none
        absolute
        inset-x-0
        bottom-0
        h-[35%]
        bg-gradient-to-t
        from-black/70
        via-black/20
        to-transparent
      "
      />
      </div>
    </div>
  );
};

export default HeroScrollBackground;
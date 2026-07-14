"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small dot + a lagging glow ring.
 * Grows over interactive elements ([data-cursor] / a / button).
 * Desktop pointer only — disabled on touch.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });
  const label = useRef("");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const el = (e.target as HTMLElement)?.closest(
        "a, button, [data-cursor], input, textarea, select"
      );
      setHovering(!!el);
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Glow ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: hovering ? 64 : 34,
            height: hovering ? 64 : 34,
            backgroundColor: hovering ? "rgba(37,99,235,0.14)" : "rgba(59,130,246,0.10)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{
            translateX: "-50%",
            translateY: "-50%",
            border: "1px solid rgba(59,130,246,0.5)",
            boxShadow: "0 0 30px rgba(59,130,246,0.35)",
          }}
        />
      </motion.div>
      {/* Dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x, y, opacity: hidden ? 0 : 1 }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full bg-electric"
          style={{ transform: "translate(-50%,-50%)" }}
        />
      </motion.div>
    </>
  );
}

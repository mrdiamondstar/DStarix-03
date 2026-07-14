"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { DashboardMock } from "@/components/visuals/DashboardMock";

/**
 * Hero centerpiece — a cursor-driven 3D parallax scene built around the
 * live analytics card.
 *
 * The card tilts in perspective toward the pointer, a glass glare follows
 * the cursor across its surface, the ambient glow drifts opposite it, and
 * layered depth plates sit behind for real dimensionality. Falls back to a
 * clean, still card under reduced-motion / on touch devices.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Pointer position, normalised to [-0.5, 0.5] around the visual's center.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const spring = { stiffness: 150, damping: 20, mass: 0.4 };

  // Card tilt (degrees).
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), spring);

  // Depth-plate parallax (px).
  const plateX = useSpring(useTransform(mx, [-0.5, 0.5], [-24, 24]), spring);
  const plateY = useSpring(useTransform(my, [-0.5, 0.5], [-24, 24]), spring);

  // Ambient glow drifts opposite the pointer for depth.
  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [28, -28]), spring);
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [28, -28]), spring);

  // Glass glare tracks the cursor across the card surface.
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["0%", "100%"]);
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(200px 200px at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 60%)`
  );

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return;
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group relative mx-auto w-full max-w-lg [perspective:1400px] lg:mx-0 lg:ml-auto"
    >
      {/* Reactive ambient glow */}
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-accent-radial opacity-80 blur-2xl"
      />

      {/* 3D scene */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative [transform-style:preserve-3d]"
      >
        {/* Deep back-plate */}
        <motion.div
          aria-hidden
          style={{ x: plateX, y: plateY, z: -80 }}
          className="absolute inset-8 -z-20 rounded-[2rem] border border-white/[0.05] bg-white/[0.015]"
        />
        {/* Near back-plate */}
        <motion.div
          aria-hidden
          style={{ x: useTransform(plateX, (v) => v * 0.5), y: useTransform(plateY, (v) => v * 0.5), z: -40 }}
          className="absolute inset-4 -z-10 rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025]"
        />

        {/* Live analytics card, lifted forward */}
        <div style={{ transform: "translateZ(40px)" }} className="relative [transform-style:preserve-3d]">
          <DashboardMock />
          {/* Cursor-tracking glass glare */}
          <motion.div
            aria-hidden
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
      </motion.div>
    </div>
  );
}

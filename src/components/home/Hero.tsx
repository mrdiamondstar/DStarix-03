"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Gradient } from "@/components/ui/Primitives";
import ParticleField from "@/components/providers/ParticleField";
import { HeroVisual } from "@/components/home/HeroVisual";

const words = ["Build", "Enterprise", "AI", "Systems", "That"];

export function Hero() {
  return (
    <section className="section-dark relative min-h-[100svh] overflow-hidden pb-24 pt-28 sm:pt-32">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <ParticleField className="absolute inset-0 h-full w-full opacity-70" color="59,130,246" />
        <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] [mask-image:radial-gradient(75%_55%_at_50%_25%,#000,transparent_75%)]" />
        <div className="animate-float-slow absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-electric/25 blur-[140px]" />
        <div className="animate-float absolute right-[-8%] top-24 h-[440px] w-[440px] rounded-full bg-violet/25 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[80%] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Eyebrow icon={Sparkles} className="border-white/15 bg-white/5 text-white/70">
                Enterprise AI, delivered
              </Eyebrow>
            </motion.div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="block overflow-hidden">
                <span className="flex flex-wrap gap-x-4">
                  {words.map((w, i) => (
                    <motion.span
                      key={w}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block"
                    >
                      {w}
                    </motion.span>
                  ))}
                </span>
              </span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-1 block"
              >
                <Gradient>Actually Deliver</Gradient>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-white/90"
              >
                Business Value.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/65"
            >
              We deliver transformative enterprise AI systems, including Generative AI, autonomous
              AI agents, and intelligent automation, that help organizations innovate faster, reduce
              costs, and scale with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" size="lg" withArrow>
                Start a project
              </Button>
              <Button href="/case-studies" variant="glass" size="lg">
                See the results
              </Button>
            </motion.div>
          </div>

          {/* Visual — cursor-reactive 3D parallax scene built around the live dashboard. */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 lg:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-6 rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block h-2 w-full rounded-full bg-white/60"
          />
        </span>
      </motion.div>
    </section>
  );
}

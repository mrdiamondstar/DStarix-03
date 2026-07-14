"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";

/** Rotating testimonial spotlight. */
export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (dir: number) => setI((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <section className="section-dark relative overflow-hidden py-14 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute right-1/4 top-10 h-72 w-72 rounded-full bg-violet/20 blur-[130px]" />
        <div className="animate-float-slow absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-electric/20 blur-[130px]" />
      </div>
      <div className="container relative">
        <SectionHeading
          eyebrow="Testimonials"
          align="center"
          title={<>Teams trust us with their <span className="text-gradient">hardest AI</span></>}
          className="mx-auto [&_.font-display]:text-white"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-10 w-10 text-electric/40" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-center"
            >
              <p className="font-display text-lg font-medium leading-snug tracking-tight text-white sm:text-xl text-balance">
                “{t.quote}”
              </p>
              <footer className="mt-8">
                <div className="mx-auto h-12 w-12 rounded-full bg-accent-gradient" />
                <div className="mt-3 font-semibold text-white">{t.name}</div>
                <div className="text-sm text-white/55">
                  {t.role}, {t.company}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-electric" : "w-1.5 bg-white/25"}`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

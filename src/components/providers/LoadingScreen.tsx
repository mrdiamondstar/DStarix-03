"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Brief premium loading veil shown on first paint.
 * Fast and simple: brand mark, full company name, slim progress bar.
 * Only runs once per session.
 */
export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem("dstarix_loaded")) {
      setDone(true);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 900;
    const tick = (now: number) => {
      const p = Math.min(1, Math.max(0, (now - start) / dur));
      const eased = 1 - Math.pow(1 - p, 3);
      setPct(Math.min(100, Math.max(0, Math.round(eased * 100))));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("dstarix_loaded", "1");
        setTimeout(() => setDone(true), 150);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-ink-900 text-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-radial blur-3xl"
          />

          <div className="relative flex flex-col items-center">
            {/* Brand mark — same D badge as the site logo / favicon */}
            <span className="grid h-14 w-14 place-items-center overflow-hidden rounded-2xl shadow-glow ring-1 ring-white/10">
              <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden>
                <defs>
                  <linearGradient id="loader-d-fill" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="0.55" stopColor="#3b82f6" />
                    <stop offset="1" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="8" fill="url(#loader-d-fill)" />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  d="M9 7H17A9 9 0 0 1 17 25H9ZM13 11H16A5 5 0 0 1 16 21H13Z"
                />
              </svg>
            </span>

            <span className="mt-5 font-display text-2xl font-semibold tracking-tight">
              DStarix <span className="text-gradient">Techno</span>
            </span>

            <div className="mt-7 h-1 w-56 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent-gradient"
                style={{ width: `${pct}%`, transition: "width 0.1s linear" }}
              />
            </div>
            <span className="mt-3 font-mono text-xs tabular-nums tracking-[0.3em] text-white/45">
              {pct}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Zap, ArrowUpRight } from "lucide-react";

/**
 * Agent performance panel.
 *
 * Upgraded from flat bars to a layered analytics surface: gradient area chart +
 * smoothed trend line + gridlines + hover-less "now" marker, plus per-metric
 * delta chips and their own micro-sparklines.
 */

// Normalised series (0–1). Slight noise keeps it believable, not synthetic-looking.
const SERIES = [0.28, 0.34, 0.31, 0.46, 0.42, 0.55, 0.5, 0.63, 0.59, 0.72, 0.68, 0.81, 0.78, 0.89, 0.94];

const W = 320;
const H = 108;
const PAD_T = 10;
const PAD_B = 6;

const pts = SERIES.map((v, i) => ({
  x: (i / (SERIES.length - 1)) * W,
  y: PAD_T + (1 - v) * (H - PAD_T - PAD_B),
}));

/** Catmull-Rom → cubic Bézier: gives the smooth, expensive-looking curve. */
function smoothPath(p: { x: number; y: number }[]) {
  if (p.length < 2) return "";
  let d = `M ${p[0].x} ${p[0].y}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`;
  }
  return d;
}

const LINE = smoothPath(pts);
const AREA = `${LINE} L ${W} ${H} L 0 ${H} Z`;
const LAST = pts[pts.length - 1];

const METRICS = [
  { icon: Activity, label: "Resolution", value: "68%", delta: "+4.2" },
  { icon: Zap, label: "p95 latency", value: "740ms", delta: "-12%", good: true },
  { icon: TrendingUp, label: "CSAT", value: "+19", delta: "+2.1" },
];

export function DashboardMock({ className }: { className?: string }) {
  return (
    <div
      className={`glass-dark relative overflow-hidden rounded-3xl border border-white/10 p-5 text-white shadow-2xl ${
        className ?? ""
      }`}
    >
      {/* Ambient sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet/20 blur-3xl"
      />

      {/* ---- Header ---- */}
      <div className="relative flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="whitespace-nowrap text-[10px] uppercase tracking-wider text-white/50">
            Agent performance
          </p>
          <p className="mt-1 whitespace-nowrap font-display text-lg font-semibold leading-tight sm:text-xl">
            Live<span className="text-white/40"> · prod</span>
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Healthy
        </span>
      </div>

      {/* ---- Metric tiles ---- */}
      <div className="relative mt-5 grid grid-cols-3 gap-2">
        {METRICS.map((m, i) => {
          const positive = m.good ? true : m.delta.startsWith("+");
          return (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <m.icon className="h-4 w-4 text-electric-400" />
                <span
                  className={`inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-[9px] font-semibold ${
                    positive
                      ? "bg-emerald-400/10 text-emerald-300"
                      : "bg-rose-400/10 text-rose-300"
                  }`}
                >
                  <ArrowUpRight className={`h-2.5 w-2.5 ${m.good ? "rotate-90" : ""}`} />
                  {m.delta}
                </span>
              </div>
              <p className="mt-2 font-display text-base font-semibold tabular-nums tracking-tight">
                {m.value}
              </p>
              <p className="mt-1 text-[10px] text-white/45">{m.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* ---- Main area chart ---- */}
      <div className="relative mt-5">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
            Throughput · 24h
          </p>
          <span className="flex items-center gap-1.5 text-[10px] text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            requests/min
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-28 w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="dm-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3b82f6" stopOpacity="0.42" />
              <stop offset="0.55" stopColor="#2563eb" stopOpacity="0.16" />
              <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dm-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#60a5fa" />
              <stop offset="0.6" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
            <clipPath id="dm-clip">
              <motion.rect
                x="0"
                y="-20"
                height={H + 40}
                initial={{ width: 0 }}
                whileInView={{ width: W }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </clipPath>
          </defs>

          {/* Gridlines */}
          {[0.25, 0.5, 0.75].map((g) => (
            <line
              key={g}
              x1="0"
              x2={W}
              y1={PAD_T + g * (H - PAD_T - PAD_B)}
              y2={PAD_T + g * (H - PAD_T - PAD_B)}
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="3 5"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <g clipPath="url(#dm-clip)">
            <path d={AREA} fill="url(#dm-area)" />
            <path
              d={LINE}
              fill="none"
              stroke="url(#dm-line)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </g>

          {/* "Now" marker */}
          <motion.g
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            <line
              x1={LAST.x}
              x2={LAST.x}
              y1={LAST.y}
              y2={H}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="1"
              strokeDasharray="2 3"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx={LAST.x} cy={LAST.y} r="7" fill="#3b82f6" opacity="0.18" />
            <circle
              cx={LAST.x}
              cy={LAST.y}
              r="3.2"
              fill="#fff"
              stroke="#3b82f6"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </motion.g>
        </svg>

        <div className="mt-2 flex justify-between font-mono text-[10px] text-white/35">
          <span>00:00</span>
          <span>12:00</span>
          <span className="text-white/60">now</span>
        </div>
      </div>
    </div>
  );
}

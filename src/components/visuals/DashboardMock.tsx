"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Zap, ArrowUpRight, CheckCircle2, Search } from "lucide-react";

/**
 * Agent performance panel.
 *
 * Header + delta metric tiles, followed by a live agent activity stream —
 * a compact, meaningful read of what the agent is doing right now rather
 * than an abstract throughput line.
 */

const METRICS = [
  { icon: Activity, label: "Resolution", value: "68%", delta: "+4.2" },
  { icon: Zap, label: "p95 latency", value: "740ms", delta: "-12%", good: true },
  { icon: TrendingUp, label: "CSAT", value: "+19", delta: "+2.1" },
];

const ACTIVITY = [
  { icon: CheckCircle2, tone: "emerald", action: "Resolved", detail: "Billing inquiry", time: "0.8s" },
  { icon: Search, tone: "electric", action: "Retrieved", detail: "4 knowledge docs", time: "now" },
  { icon: ArrowUpRight, tone: "amber", action: "Escalated", detail: "Complex refund → human", time: "1.2s" },
  { icon: Zap, tone: "emerald", action: "Automated", detail: "Order status update", time: "0.6s" },
];

const TONE: Record<string, { icon: string; dot: string }> = {
  emerald: { icon: "text-emerald-300 bg-emerald-400/10", dot: "bg-emerald-400" },
  electric: { icon: "text-electric-400 bg-electric-400/10", dot: "bg-electric-400" },
  amber: { icon: "text-amber-300 bg-amber-400/10", dot: "bg-amber-400" },
};

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

      {/* ---- Live activity stream ---- */}
      <div className="relative mt-5">
        <div className="mb-1 flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">
            Live activity
          </p>
          <span className="flex items-center gap-1.5 text-[10px] text-white/40">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-400" />
            </span>
            streaming
          </span>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03]">
          {ACTIVITY.map((a, i) => {
            const tone = TONE[a.tone];
            return (
              <motion.div
                key={a.detail}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.45 }}
                className={`flex items-center gap-3 px-3 py-2.5 ${
                  i > 0 ? "border-t border-white/[0.06]" : ""
                }`}
              >
                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg ${tone.icon}`}>
                  <a.icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs leading-tight">
                    <span className="font-medium">{a.action}</span>
                    <span className="text-white/45"> · {a.detail}</span>
                  </p>
                </div>
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-white/40">
                  {a.time}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

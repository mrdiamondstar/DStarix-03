"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/** Filterable portfolio grid with a detail modal. */
export function PortfolioGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === cat
                ? "border-transparent bg-ink-900 text-white shadow-soft"
                : "border-ink-900/10 bg-white/70 text-ink-700 backdrop-blur hover:border-electric/40 hover:text-ink-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.button
              key={p.slug}
              id={p.slug}
              type="button"
              layout
              onClick={() => setSelected(p)}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex scroll-mt-28 flex-col justify-between overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/60 p-8 text-left shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
              <div className="relative flex items-start justify-between">
                <div>
                  <span className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-xs font-medium text-electric">
                    {p.category}
                  </span>
                  <h3 className="mt-4 max-w-sm font-display text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
              </div>
              <div className="relative mt-8 flex items-end justify-between border-t border-ink-900/[0.06] pt-6">
                <div>
                  <div className="font-display text-4xl font-semibold tracking-tight text-gradient">{p.metric}</div>
                  <div className="text-xs text-muted">{p.metricLabel}</div>
                </div>
                <span className="text-sm font-medium text-muted">{p.client}</span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              aria-hidden
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-ink-900/[0.08] bg-white p-8 shadow-glow"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 text-ink-500 transition-colors hover:bg-ink-900/5 hover:text-ink-900"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-xs font-medium text-electric">
                {selected.category}
              </span>
              <h3 className="mt-4 pr-8 font-display text-2xl font-semibold tracking-tight">{selected.title}</h3>
              <p className="mt-1 text-sm font-medium text-muted">{selected.client}</p>
              <p className="mt-4 leading-relaxed text-ink-700">{selected.summary}</p>
              <div className="mt-6 flex items-end gap-3 rounded-2xl bg-ink-900/[0.03] p-5">
                <div className="font-display text-5xl font-semibold tracking-tight text-gradient">{selected.metric}</div>
                <div className="pb-1 text-sm text-muted">{selected.metricLabel}</div>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {selected.tags.map((t) => (
                  <li key={t} className="rounded-full border border-ink-900/10 bg-white px-2.5 py-1 text-xs text-muted">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={`/portfolio/${selected.slug}`} variant="secondary" size="sm" withArrow>
                  Read the case study
                </Button>
                <Button href="/contact" variant="ghost" size="sm">
                  Start something similar
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

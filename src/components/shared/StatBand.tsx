import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { stats as defaultStats, type Stat } from "@/lib/data";

/** Row of animated statistics. */
export function StatBand({ items = defaultStats }: { items?: Stat[] }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-ink-900/[0.06] sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="bg-white/70 p-8 backdrop-blur">
          <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">
              <Counter
                to={s.value}
                decimals={s.decimals ?? 0}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </span>
          </div>
          <p className="mt-2 text-sm text-muted">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}

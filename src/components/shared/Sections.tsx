import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/* Reusable content sections shared by inner pages. */

/** Alternating image/visual + copy row. */
export function SplitFeature({
  eyebrow,
  title,
  body,
  points,
  visual,
  reverse = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body: string;
  points?: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-16", reverse && "lg:[direction:rtl]")}>
      <Reveal direction={reverse ? "left" : "right"} className="lg:[direction:ltr]">
        {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
        <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted">{body}</p>
        {points && (
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-gradient text-white">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-ink-700">{p}</span>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
      <Reveal direction={reverse ? "right" : "left"} className="lg:[direction:ltr]">
        {visual}
      </Reveal>
    </div>
  );
}

/** Numbered checklist of capabilities. */
export function CapabilityList({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 | 3 }) {
  const cols = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" }[columns];
  return (
    <Stagger className={cn("grid gap-4", cols)}>
      {items.map((item, i) => (
        <StaggerItem key={item}>
          <div className="flex items-start gap-4 rounded-2xl border border-ink-900/[0.07] bg-white/60 p-5 backdrop-blur transition-colors hover:border-electric/30">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-900 font-mono text-xs text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="pt-1 text-ink-700">{item}</span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

/** Related links grid (e.g. related services). */
export function RelatedGrid({
  title = "Explore more",
  items,
}: {
  title?: string;
  items: { label: string; href: string; icon?: LucideIcon; description?: string }[];
}) {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading eyebrow="Keep exploring" title={title} />
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full items-center justify-between gap-4 rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex items-center gap-4">
                  {item.icon && (
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 text-white transition-colors group-hover:bg-accent-gradient">
                      <item.icon className="h-5 w-5" />
                    </span>
                  )}
                  <div>
                    <div className="font-display font-semibold tracking-tight">{item.label}</div>
                    {item.description && <div className="text-sm text-muted">{item.description}</div>}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/** Simple two-column comparison table. */
export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: (string | boolean)[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-ink-900/[0.08] bg-white/60 backdrop-blur">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="border-b border-ink-900/[0.08]">
            <th className="p-5 font-medium text-muted" />
            {columns.map((c, i) => (
              <th
                key={c}
                className={cn(
                  "p-5 font-display text-base font-semibold tracking-tight",
                  i === 0 && "text-electric"
                )}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-ink-900/[0.06] last:border-0">
              <td className="p-5 font-medium">{row.label}</td>
              {row.values.map((v, i) => (
                <td key={i} className="p-5 text-ink-700">
                  {typeof v === "boolean" ? (
                    v ? (
                      <Check className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <span className="text-ink-400">—</span>
                    )
                  ) : (
                    v
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Content section wrapper with heading + children. */
export function ContentSection({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  children,
  id,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-20", dark && "section-dark")}>
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lead={lead}
          align={align}
          className={cn(align === "center" && "mx-auto")}
        />
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/** Selected work preview with metric-forward cards. */
export function PortfolioPreview() {
  const featured = projects.slice(0, 4);
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title={<>Proof, not <span className="text-gradient">promises</span></>}
            lead="A glimpse of systems we've shipped — and the numbers they moved."
          />
          <Button href="/portfolio" variant="secondary" withArrow>
            View portfolio
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <StaggerItem key={p.slug}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/60 p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
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
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

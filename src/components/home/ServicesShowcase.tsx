import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services, featuredServiceSlugs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";

/** Interactive tilt cards for the flagship services. */
export function ServicesShowcase() {
  const featured = featuredServiceSlugs
    .map((s) => services.find((x) => x.slug === s)!)
    .filter(Boolean);

  return (
    <section id="services" className="relative py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>AI capabilities, built for <span className="text-gradient">production</span></>}
            lead="From first prototype to a system serving millions of requests a day — every capability comes with evaluation, guardrails and observability baked in."
          />
          <Button href="/services" variant="secondary" withArrow>
            All services
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <StaggerItem key={s.slug}>
              <TiltCard className="h-full">
                <Link
                  href={`/${s.slug}`}
                  className="gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/70 p-7 shadow-card backdrop-blur transition-shadow duration-500 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg`}>
                      <s.icon className="h-5.5 w-5.5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-500 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-sm font-medium text-electric">{s.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="rounded-full border border-ink-900/10 bg-white px-2.5 py-1 text-xs text-muted">
                        {p}
                      </li>
                    ))}
                  </ul>
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

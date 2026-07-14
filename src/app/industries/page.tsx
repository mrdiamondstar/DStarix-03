import type { Metadata } from "next";
import { Building2, ArrowUpRight, Check } from "lucide-react";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatBand } from "@/components/shared/StatBand";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import type { Stat } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve | DStarix Techno",
  description:
    "Domain-specific AI for financial services, healthcare, manufacturing, retail, legal, logistics, technology and energy. DStarix builds systems that understand your regulations, data and workflows.",
};

const industryStats: Stat[] = [
  { value: 8, label: "Regulated industries served" },
  { value: 120, suffix: "+", label: "Production systems shipped" },
  { value: 40, suffix: "M+", label: "Requests / day served" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Production uptime" },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        icon={Building2}
        title="AI that speaks the language of"
        highlight="your industry."
        lead="Regulations, data models and workflows differ in every sector. We bring reference architectures and domain expertise to each — so your AI understands the context it operates in from day one."
        primaryCta={{ label: "Discuss your sector", href: "/contact" }}
        secondaryCta={{ label: "See case studies", href: "/case-studies" }}
      />

      {/* Quick index */}
      <section className="relative py-16">
        <div className="container">
          <Stagger className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <StaggerItem key={ind.slug}>
                <a
                  href={`#${ind.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-ink-700 backdrop-blur transition-colors hover:border-electric/40 hover:text-ink-900"
                >
                  <ind.icon className="h-4 w-4 text-electric" />
                  {ind.name}
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Industry sections */}
      <section className="relative py-12 sm:py-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            {industries.map((ind) => (
              <Reveal key={ind.slug}>
                <article
                  id={ind.slug}
                  className="gradient-border group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/70 p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors duration-500 group-hover:bg-accent-gradient">
                      <ind.icon className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-tight">{ind.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{ind.blurb}</p>
                    </div>
                  </div>
                  <div className="relative mt-6 border-t border-ink-900/[0.06] pt-6">
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted">Where we help</div>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {ind.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-gradient text-white">
                            <Check className="h-3 w-3" />
                          </span>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative mt-8 flex items-center justify-between">
                    <Button href="/contact" variant="secondary" size="sm" withArrow>
                      Explore {ind.name}
                    </Button>
                    <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Proof across sectors"
            title={
              <>
                Trusted where the <span className="text-gradient">stakes are highest</span>
              </>
            }
            lead="From the regulator's desk to the factory floor, our systems run in the environments least tolerant of failure."
            className="mx-auto"
          />
          <div className="mt-12">
            <StatBand items={industryStats} />
          </div>
        </div>
      </section>

      <CTASection
        title="Bring AI expertise to"
        highlight="your industry."
        lead="Every sector has its own constraints. Tell us yours, and we'll show you what production-grade AI looks like within them."
      />
    </>
  );
}

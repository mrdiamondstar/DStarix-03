import type { Metadata } from "next";
import { LineChart, Clock, Building2, Target, Wrench } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { SectionHeading, Chip } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Case Studies — AI Outcomes & ROI | DStarix Techno",
  description:
    "In-depth case studies from DStarix engagements: the challenge, the solution and the measurable results — from 68% autonomous ticket resolution to 12x faster contract review.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        icon={LineChart}
        title="The challenge, the build, the"
        highlight="numbers that followed."
        lead="No hand-waving. Each case study walks through the problem we were handed, the system we shipped and the results it delivered in production — with the timeline it took to get there."
        primaryCta={{ label: "Start your own", href: "/contact" }}
        secondaryCta={{ label: "See the portfolio", href: "/portfolio" }}
      />

      {/* Timeline of case studies */}
      <section className="relative py-14 sm:py-20">
        <div className="container">
          <div className="relative">
            {/* Vertical rail */}
            <div
              aria-hidden
              className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-electric/40 via-ink-900/10 to-transparent lg:block"
            />

            <div className="space-y-20">
              {caseStudies.map((cs, i) => (
                <Reveal key={cs.slug}>
                  <article id={cs.slug} className="relative scroll-mt-28 lg:pl-16">
                    {/* Rail marker */}
                    <div
                      aria-hidden
                      className="absolute left-0 top-1 hidden h-9 w-9 place-items-center rounded-full border border-ink-900/10 bg-white font-mono text-xs text-ink-500 shadow-soft lg:grid"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <Chip>
                        <Building2 className="h-3.5 w-3.5 text-electric" />
                        {cs.industry}
                      </Chip>
                      <Chip>
                        <Clock className="h-3.5 w-3.5 text-electric" />
                        {cs.duration}
                      </Chip>
                      <Chip>{cs.client}</Chip>
                    </div>

                    <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                      {cs.title}
                    </h2>

                    {/* Challenge + Solution */}
                    <div className="mt-8 grid gap-5 lg:grid-cols-2">
                      <div className="rounded-3xl border border-ink-900/[0.07] bg-white/60 p-7 backdrop-blur">
                        <div className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.14em] text-muted">
                          <Target className="h-4 w-4 text-electric" />
                          The challenge
                        </div>
                        <p className="mt-4 leading-relaxed text-ink-700">{cs.challenge}</p>
                      </div>
                      <div className="rounded-3xl border border-ink-900/[0.07] bg-white/60 p-7 backdrop-blur">
                        <div className="flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.14em] text-muted">
                          <Wrench className="h-4 w-4 text-electric" />
                          The solution
                        </div>
                        <p className="mt-4 leading-relaxed text-ink-700">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Results grid */}
                    <div className="mt-5">
                      <div className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-muted">The results</div>
                      <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-ink-900/[0.06] sm:grid-cols-2 lg:grid-cols-4">
                        {cs.results.map((r) => (
                          <StaggerItem key={r.label} className="bg-white/70 p-7 backdrop-blur">
                            <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                              <span className="text-gradient">{r.value}</span>
                            </div>
                            <p className="mt-2 text-sm text-muted">{r.label}</p>
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button href="/portfolio" variant="secondary" size="sm" withArrow>
                        See the project
                      </Button>
                      <Button href="/contact" variant="ghost" size="sm">
                        Start a similar engagement
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing rigor note */}
      <section className="relative py-20 sm:py-24 bg-ink-900/[0.02]">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Why the numbers hold"
            title={
              <>
                Every result ships with an <span className="text-gradient">evaluation behind it</span>
              </>
            }
            lead="We measure before we promise. Each metric above was tracked in production against a baseline, with monitoring, rollback and human review in place from day one."
            className="mx-auto"
          />
        </div>
      </section>

      <CTASection
        title="Ready to write the"
        highlight="next case study?"
        lead="Book a discovery call. We'll map the highest-value use case in your business and show you a path to production."
        primary={{ label: "Start your own", href: "/contact" }}
      />
    </>
  );
}

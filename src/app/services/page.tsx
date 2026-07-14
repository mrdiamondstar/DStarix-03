import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services, processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { StatBand } from "@/components/shared/StatBand";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "AI Services — Build, Operate & Scale | DStarix Techno",
  description:
    "The full DStarix catalog of production AI services — generative and agentic systems, RAG, custom models, automation, enterprise platforms and MLOps. Every engagement ships with evaluation, guardrails and observability.",
};

/** Slugs that have their own dedicated service page. Everything else routes to the solutions overview. */
const routableSlugs = new Set([
  "generative-ai",
  "agentic-ai",
  "rag-solutions",
  "custom-llm-development",
  "enterprise-ai",
  "workflow-automation",
  "ai-chatbots",
  "voice-ai",
  "ai-consulting",
  "ai-development",
  "ai-automation",
]);

const hrefFor = (slug: string) => (routableSlugs.has(slug) ? `/${slug}` : "/ai-solutions");

/** Group the catalog into a clear Build / Operate / Scale narrative. */
const groups: { key: string; title: string; lead: string; slugs: string[] }[] = [
  {
    key: "build",
    title: "Build",
    lead: "Design and ship net-new AI capability — from first prototype to a system your customers rely on.",
    slugs: ["generative-ai", "agentic-ai", "custom-llm-development", "rag-solutions", "ai-chatbots", "voice-ai"],
  },
  {
    key: "operate",
    title: "Operate",
    lead: "Put AI to work inside the processes and documents that run your business every day.",
    slugs: ["workflow-automation", "document-ai", "knowledge-management", "predictive-ai", "computer-vision"],
  },
  {
    key: "scale",
    title: "Scale",
    lead: "Govern, secure and industrialize AI across the organization — safely and repeatably.",
    slugs: ["enterprise-ai", "private-ai", "mlops", "cloud-ai", "ai-consulting"],
  },
];

function ServiceCard({ slug }: { slug: string }) {
  const s = services.find((x) => x.slug === slug);
  if (!s) return null;
  return (
    <StaggerItem>
      <TiltCard className="h-full">
        <Link
          href={hrefFor(s.slug)}
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
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        icon={Sparkles}
        title="Every AI capability your enterprise needs,"
        highlight="under one roof."
        lead="From generative and agentic systems to the platforms, governance and MLOps that keep them running — DStarix delivers AI that reaches production and stays there. Evaluation, guardrails and observability come standard."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      {/* Stats */}
      <section className="relative py-20 sm:py-24">
        <div className="container">
          <StatBand />
        </div>
      </section>

      {/* Grouped catalog */}
      {groups.map((g, gi) => (
        <section key={g.key} className={`relative py-20 sm:py-24 ${gi % 2 === 1 ? "bg-ink-900/[0.02]" : ""}`}>
          <div className="container">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow={`${String(gi + 1).padStart(2, "0")} · ${g.title}`}
                title={
                  <>
                    {g.title} <span className="text-gradient">phase</span>
                  </>
                }
                lead={g.lead}
              />
            </div>
            <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.slugs.map((slug) => (
                <ServiceCard key={slug} slug={slug} />
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      {/* How we work */}
      <section className="relative py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title={
              <>
                A delivery model built to <span className="text-gradient">reach production</span>
              </>
            }
            lead="Five stages, short cycles and working software every week. No science projects — just measurable outcomes."
            className="mx-auto"
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <StaggerItem key={step.n}>
                <div className="group h-full rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors duration-500 group-hover:bg-accent-gradient">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-sm text-ink-400">{step.n}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex justify-center">
            <Button href="/ai-solutions" variant="secondary" withArrow>
              Explore solutions by outcome
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Not sure where AI moves"
        highlight="the needle?"
        lead="Book a discovery call. We'll map the highest-value use case in your business and show you a concrete path to production."
      />
    </>
  );
}

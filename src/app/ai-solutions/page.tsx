import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Bot,
  Database,
  Cpu,
  Workflow,
  Building2,
  Shield,
  Gauge,
} from "lucide-react";
import { SectionHeading, Eyebrow } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { StatBand } from "@/components/shared/StatBand";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { RelatedGrid } from "@/components/shared/Sections";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";

export const metadata: Metadata = {
  title: "AI Solutions — Outcomes, Not Experiments | DStarix Techno",
  description:
    "Explore DStarix AI solutions by outcome: automate operations, ground answers in your data, deploy autonomous agents and put frontier models to work — securely, at enterprise scale.",
};

/** Bento-style solution categories. `span` drives the grid footprint. */
const solutions: {
  title: string;
  blurb: string;
  icon: typeof Sparkles;
  href: string;
  span: string;
  tags: string[];
}[] = [
  {
    title: "Autonomous agents",
    blurb:
      "Multi-agent systems that plan, call your tools and complete real workflows end-to-end — with guardrails, approvals and full audit trails.",
    icon: Bot,
    href: "/agentic-ai",
    span: "lg:col-span-2 lg:row-span-2",
    tags: ["Planning", "Tool use", "Observability"],
  },
  {
    title: "Answers from your data",
    blurb: "Retrieval-augmented generation that is accurate, cited and permission-aware.",
    icon: Database,
    href: "/rag-solutions",
    span: "lg:col-span-1",
    tags: ["Hybrid retrieval", "Citations"],
  },
  {
    title: "Generative systems",
    blurb: "Brand-safe content, code and synthetic data with human-in-the-loop review.",
    icon: Sparkles,
    href: "/generative-ai",
    span: "lg:col-span-1",
    tags: ["Multimodal", "Guardrails"],
  },
  {
    title: "Custom & private models",
    blurb:
      "Fine-tuned, distilled and aligned models that speak your domain — deployed to your VPC or on-prem with zero data egress.",
    icon: Cpu,
    href: "/custom-llm-development",
    span: "lg:col-span-2",
    tags: ["Fine-tuning", "On-prem", "Compliance"],
  },
  {
    title: "Intelligent automation",
    blurb: "Connect your tools and let AI complete multi-step, context-aware processes.",
    icon: Workflow,
    href: "/workflow-automation",
    span: "lg:col-span-1",
    tags: ["Integrations", "SLAs"],
  },
  {
    title: "Enterprise AI platform",
    blurb: "Reference architecture, governance, SSO and multi-tenant controls for AI at organizational scale.",
    icon: Building2,
    href: "/enterprise-ai",
    span: "lg:col-span-2",
    tags: ["Governance", "RBAC", "Multi-tenant"],
  },
  {
    title: "AI strategy & advisory",
    blurb: "Opportunity mapping, ROI modeling and architecture reviews from teams who ship AI in production.",
    icon: Shield,
    href: "/ai-consulting",
    span: "lg:col-span-1",
    tags: ["Roadmaps", "Enablement"],
  },
];

const capabilityLinks = [
  { label: "Generative AI", href: "/generative-ai", icon: Sparkles, description: "Content, code & synthetic data" },
  { label: "Agentic AI", href: "/agentic-ai", icon: Bot, description: "Autonomous, tool-using systems" },
  { label: "RAG Solutions", href: "/rag-solutions", icon: Database, description: "Grounded, cited answers" },
  { label: "Custom LLM Development", href: "/custom-llm-development", icon: Cpu, description: "Fine-tuning & alignment" },
  { label: "Workflow Automation", href: "/workflow-automation", icon: Workflow, description: "Remove the busywork" },
  { label: "Enterprise AI", href: "/enterprise-ai", icon: Building2, description: "AI at org scale" },
];

export default function AiSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Solutions"
        icon={Gauge}
        title="Solutions measured in outcomes,"
        highlight="not experiments."
        lead="Whatever the problem — cost, speed, accuracy or scale — we assemble the right models, retrieval and orchestration into a system that ships. Choose a starting point by capability, or by the industry you operate in."
        primaryCta={{ label: "Talk to an architect", href: "/contact" }}
        secondaryCta={{ label: "Browse all services", href: "/services" }}
      />

      {/* Bento grid */}
      <section className="relative py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="What we solve"
            title={
              <>
                One platform, many <span className="text-gradient">shapes of value</span>
              </>
            }
            lead="Each solution is a composable building block — start with one, then expand across your organization."
          />
          <Stagger className="mt-12 grid auto-rows-[minmax(200px,auto)] gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((sol) => (
              <StaggerItem key={sol.title} className={sol.span}>
                <Link
                  href={sol.href}
                  className="gradient-border group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/70 p-7 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="relative flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white transition-colors duration-500 group-hover:bg-accent-gradient">
                      <sol.icon className="h-5.5 w-5.5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
                  </div>
                  <div className="relative mt-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{sol.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{sol.blurb}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {sol.tags.map((t) => (
                        <li key={t} className="rounded-full border border-ink-900/10 bg-white px-2.5 py-1 text-xs text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Architecture visual */}
      <section className="relative py-14 sm:py-20 bg-ink-900/[0.02]">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right">
              <Eyebrow className="mb-4">Under the hood</Eyebrow>
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
                A reference architecture <span className="text-gradient">proven in production</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Every DStarix solution shares the same battle-tested backbone: intent understanding, grounded
                retrieval, an agent core that reasons and acts, and guardrails that keep it safe. It is model-agnostic,
                observable end-to-end, and deploys to your cloud or ours.
              </p>
              <ul className="mt-6 space-y-3 text-ink-700">
                {[
                  "Grounded retrieval with permission-aware access control",
                  "An agent core with planning, reflection and tool use",
                  "Guardrails, validation and human-in-the-loop by default",
                  "Evaluation, monitoring and rollback baked in",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/agentic-ai" variant="secondary" withArrow>
                  See how agents work
                </Button>
              </div>
            </Reveal>
            <Reveal direction="left">
              <WorkflowDiagram />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Track record"
            title={
              <>
                Numbers that <span className="text-gradient">hold up</span>
              </>
            }
            className="mx-auto"
          />
          <div className="mt-12">
            <StatBand />
          </div>
        </div>
      </section>

      <RelatedGrid title="Explore capabilities" items={capabilityLinks} />

      <CTASection
        title="Let's find the solution that"
        highlight="moves your numbers."
        lead="Tell us the outcome you're chasing. We'll map the fastest path from where you are to a system in production."
      />
    </>
  );
}

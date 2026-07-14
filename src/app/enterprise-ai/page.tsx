import type { Metadata } from "next";
import { Building2, Boxes, ShieldCheck, KeyRound, Gauge, Network, LineChart } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Enterprise AI at Scale",
  description:
    "Reference architectures, governance and shared platforms that let large organizations deploy AI safely, repeatably and across many teams.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Enterprise AI"
      icon={Building2}
      title="AI infrastructure built for"
      highlight="organizational scale"
      lead="We help large organizations move past scattered pilots to a governed AI platform — shared services, guardrails and observability that turn every new use case into a repeatable deployment, not a one-off project."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            From proliferating pilots to a <span className="text-gradient">governed platform</span>
          </>
        ),
        body:
          "Enterprises rarely fail at building one AI feature — they fail at building the fiftieth safely. We stand up the platform layer: shared gateways, identity, cost controls and governance, so teams ship on a paved road instead of reinventing security and infrastructure every time.",
        points: [
          "A reusable reference architecture that new use cases plug into on day one",
          "Centralized model gateway with routing, rate limits and unified cost accounting",
          "SSO, RBAC and multi-tenant isolation aligned to your identity and data policies",
          "Governance, audit and policy controls that satisfy security and compliance teams",
        ],
      }}
      features={{
        eyebrow: "Platform pillars",
        title: (
          <>
            The foundation every AI team <span className="text-gradient">builds on top of</span>
          </>
        ),
        lead:
          "Shared, hardened services so individual teams focus on use cases, not plumbing.",
        items: [
          {
            title: "Reference architecture",
            description:
              "A blueprint and paved-road platform that turns each new use case into a repeatable deployment.",
            icon: Boxes,
          },
          {
            title: "Governance & policy",
            description:
              "Centralized policy, approval and audit controls that give security and compliance real oversight.",
            icon: ShieldCheck,
          },
          {
            title: "SSO & RBAC",
            description:
              "Enterprise identity, role-based access and multi-tenant isolation wired into every AI service.",
            icon: KeyRound,
          },
          {
            title: "Model gateway",
            description:
              "A single gateway for routing, rate limiting and cost accounting across every model and team.",
            icon: Network,
          },
          {
            title: "Cost & FinOps controls",
            description:
              "Per-team budgets, chargeback and usage analytics that keep AI spend visible and accountable.",
            icon: Gauge,
          },
          {
            title: "Observability at scale",
            description:
              "Unified tracing, evaluation and monitoring across all AI workloads for reliability and compliance.",
            icon: LineChart,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Everything needed to run AI <span className="text-gradient">across the enterprise</span>
          </>
        ),
        lead: "The platform capabilities that make AI repeatable and governable at scale.",
        items: [
          "Centralized AI platform engineering",
          "Model gateway & routing",
          "Governance & policy enforcement",
          "SSO, RBAC & multi-tenancy",
          "Cost management & chargeback",
          "Security & compliance controls",
          "Reusable component libraries",
          "Center-of-excellence enablement",
          "Cross-team observability",
        ],
      }}
      visual="dashboard"
      stats={[
        { value: 120, suffix: "+", label: "AI systems shipped" },
        { value: 99.9, suffix: "%", decimals: 1, label: "Platform uptime" },
        { value: 40, suffix: "M+", label: "Requests served per day" },
        { value: 60, suffix: "%", label: "Faster time-to-deploy" },
      ]}
      faqs={[
        {
          category: "Strategy",
          q: "Why build a platform instead of individual AI apps?",
          a: "A shared platform means security, identity, cost controls and observability are solved once. Each new use case then ships on a paved road — faster, cheaper and consistently governed.",
        },
        {
          category: "Security",
          q: "How does this satisfy our security and compliance teams?",
          a: "We build to SOC 2, ISO 27001, HIPAA and GDPR expectations with centralized policy, audit trails, RBAC and support for private or on-prem deployment, plus the docs your reviewers need.",
        },
        {
          category: "Operations",
          q: "How do you control and attribute AI spend?",
          a: "The model gateway meters every request, enforces per-team budgets and provides chargeback and usage analytics so cost stays visible and accountable.",
        },
        {
          category: "Adoption",
          q: "How do you help our teams actually adopt it?",
          a: "We establish a center of excellence, reusable components and enablement so internal teams can self-serve and own their use cases over time.",
        },
      ]}
      related={[
        { label: "AI Consulting", href: "/ai-consulting", icon: LineChart, description: "Strategy that ships" },
        { label: "Custom LLM Development", href: "/custom-llm-development", icon: KeyRound, description: "Fine-tuning & alignment" },
        { label: "Agentic AI", href: "/agentic-ai", icon: Network, description: "Autonomous, tool-using systems" },
        { label: "AI Development", href: "/ai-development", icon: Boxes, description: "End-to-end delivery" },
      ]}
      cta={{
        title: "Build the platform your",
        highlight: "AI ambitions need",
        lead: "We'll design a reference architecture and governance model your teams can ship on for years.",
      }}
    />
  );
}

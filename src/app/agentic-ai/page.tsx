import type { Metadata } from "next";
import { Bot, Workflow, ShieldCheck, GitBranch, Wrench, Network, Activity } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Agentic AI Systems",
  description:
    "Multi-agent systems that plan, use tools and complete real work end-to-end — with guardrailed autonomy, full observability and safe human escalation.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Agentic AI"
      icon={Bot}
      title="Autonomous agents that"
      highlight="get work done"
      lead="We design multi-agent systems that plan, call your tools and finish multi-step tasks on their own — with the guardrails, audit trails and escalation paths a regulated enterprise actually needs."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Autonomy you can <span className="text-gradient">actually trust in production</span>
          </>
        ),
        body:
          "An agent is only useful if you can bound what it does and prove what it did. We build agents around explicit tool contracts, planning and reflection loops, and observability that captures every decision — so autonomy expands under control rather than by surprise.",
        points: [
          "Planning and reflection loops that decompose goals into verifiable steps",
          "Typed tool interfaces to your systems, with permissions enforced per action",
          "Guardrails that bound scope, spend and side effects, with human approval gates",
          "End-to-end tracing of every step, tool call and decision for audit and debugging",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            The anatomy of a <span className="text-gradient">production-grade agent</span>
          </>
        ),
        lead:
          "Every layer an autonomous system needs to act safely against your real infrastructure.",
        items: [
          {
            title: "Tool-using agents",
            description:
              "Agents wired to your APIs, databases and SaaS with typed contracts and per-action permissions.",
            icon: Wrench,
          },
          {
            title: "Planning & reflection",
            description:
              "Goal decomposition, self-critique and retry loops that recover from errors instead of failing silently.",
            icon: GitBranch,
          },
          {
            title: "Multi-agent orchestration",
            description:
              "Specialist agents that coordinate through a supervisor to tackle complex, cross-system workflows.",
            icon: Network,
          },
          {
            title: "Guardrailed autonomy",
            description:
              "Scope, spend and side-effect limits with human-approval gates on the actions that matter.",
            icon: ShieldCheck,
          },
          {
            title: "Full observability",
            description:
              "Step-level tracing and replay so every agent decision is auditable and debuggable in production.",
            icon: Activity,
          },
          {
            title: "Workflow completion",
            description:
              "Agents that carry a task from intake to resolution, escalating to humans only when they should.",
            icon: Workflow,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Agents that operate across <span className="text-gradient">your business</span>
          </>
        ),
        lead: "Where autonomous agents deliver compounding leverage.",
        items: [
          "Autonomous customer support resolution",
          "Research & data-gathering agents",
          "Back-office operations & reconciliation",
          "Sales & CRM enrichment",
          "IT & DevOps runbook automation",
          "Multi-step procurement & approvals",
          "Cross-system data migration",
          "Report generation & distribution",
          "Continuous monitoring & remediation",
        ],
      }}
      visual="workflow"
      stats={[
        { value: 68, suffix: "%", label: "Tasks resolved autonomously" },
        { value: 24, suffix: "/7", label: "Unattended operation" },
        { value: 100, suffix: "%", label: "Decisions traced & auditable" },
        { value: 9, suffix: " wks", label: "Typical time to production" },
      ]}
      faqs={[
        {
          category: "Safety",
          q: "How do you stop an agent from doing something it shouldn't?",
          a: "We bound every agent with typed tool contracts, per-action permissions, spend and scope limits, and human-approval gates on high-impact actions. Anything outside its envelope simply isn't callable.",
        },
        {
          category: "Reliability",
          q: "What happens when an agent gets stuck or makes a mistake?",
          a: "Reflection and retry loops let agents catch and correct errors, and clear escalation paths hand off to a human with full context when confidence is low.",
        },
        {
          category: "Technical",
          q: "How do agents connect to our existing systems?",
          a: "Through typed tool interfaces and connectors — REST/GraphQL APIs, databases, message queues and MCP servers — with credentials scoped to exactly what each agent needs.",
        },
        {
          category: "Governance",
          q: "Can we audit what an agent did after the fact?",
          a: "Yes. Every step, tool call and decision is traced and replayable, giving you a complete audit trail for compliance and debugging.",
        },
      ]}
      related={[
        { label: "Workflow Automation", href: "/workflow-automation", icon: Workflow, description: "Remove the busywork" },
        { label: "RAG Solutions", href: "/rag-solutions", icon: Network, description: "Grounded, cited answers" },
        { label: "AI Automation", href: "/ai-automation", icon: Bot, description: "Intelligent process automation" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: ShieldCheck, description: "AI at organizational scale" },
      ]}
      cta={{
        title: "Deploy an agent that",
        highlight: "ships real outcomes",
        lead: "Pick one end-to-end workflow and we'll have a guardrailed agent in production within weeks.",
      }}
    />
  );
}

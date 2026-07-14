import type { Metadata } from "next";
import { Workflow, Search, Plug, UserCheck, Timer, GitBranch, Repeat } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Workflow Automation",
  description:
    "Intelligent automation that connects your tools, understands context and completes multi-step processes — with human approvals and SLA monitoring built in.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Workflow Automation"
      icon={Workflow}
      title="Automation that removes"
      highlight="the busywork"
      lead="We automate the multi-step, cross-system processes that quietly consume your team's day — using AI to handle the judgment calls that rigid rule engines never could, with humans in the loop where it counts."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Beyond brittle rules to <span className="text-gradient">context-aware automation</span>
          </>
        ),
        body:
          "Traditional automation breaks the moment a document is messy or a case is unusual. We combine reliable orchestration with AI that reads context, classifies and decides — so processes complete end-to-end and escalate to a person only for genuine exceptions.",
        points: [
          "Process mapping to find the workflows where automation pays back fastest",
          "AI steps that read, classify and extract from unstructured inputs",
          "Human approval gates and exception handling for the edge cases that matter",
          "SLA monitoring and alerting so nothing silently stalls in the pipeline",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            Processes that run themselves, <span className="text-gradient">reliably</span>
          </>
        ),
        lead:
          "Durable orchestration plus AI judgment, integrated across the tools you already use.",
        items: [
          {
            title: "Process mining",
            description:
              "We map how work actually flows and quantify where automation returns the most time and money.",
            icon: Search,
          },
          {
            title: "System integrations",
            description:
              "Connectors to your CRM, ERP, ticketing and databases so work moves without copy-paste.",
            icon: Plug,
          },
          {
            title: "Human approvals",
            description:
              "Configurable approval gates that keep people in control of consequential decisions.",
            icon: UserCheck,
          },
          {
            title: "Exception handling",
            description:
              "AI triages edge cases and routes only true exceptions to the right person with full context.",
            icon: GitBranch,
          },
          {
            title: "Durable orchestration",
            description:
              "Long-running, retry-safe workflows that survive failures and resume exactly where they left off.",
            icon: Repeat,
          },
          {
            title: "SLA monitoring",
            description:
              "Real-time dashboards and alerts so bottlenecks surface before they breach a deadline.",
            icon: Timer,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Automate the work that <span className="text-gradient">shouldn't need a human</span>
          </>
        ),
        lead: "Common processes we turn into reliable, monitored automation.",
        items: [
          "Invoice & document processing",
          "Order-to-cash & procurement",
          "Employee & customer onboarding",
          "Claims & case intake",
          "Data entry & reconciliation",
          "Ticket routing & triage",
          "Compliance checks & reporting",
          "Cross-system data sync",
          "Approval & sign-off flows",
        ],
      }}
      visual="workflow"
      stats={[
        { value: 5200, suffix: "h", label: "Hours saved per quarter" },
        { value: 70, suffix: "%", label: "Manual steps eliminated" },
        { value: 90, suffix: "%", label: "Straight-through processing" },
        { value: 3, suffix: "x", label: "Faster cycle times" },
      ]}
      faqs={[
        {
          category: "Approach",
          q: "How is this different from traditional RPA?",
          a: "Classic RPA follows rigid scripts and breaks on anything unstructured or unusual. Our automations add AI that reads context, classifies and decides — so they handle messy inputs and exceptions instead of failing.",
        },
        {
          category: "Control",
          q: "Do humans stay in control of decisions?",
          a: "Yes. We place approval gates on consequential steps and route genuine exceptions to the right people with full context, so automation accelerates work without removing judgment.",
        },
        {
          category: "Integration",
          q: "Will it work with our existing systems?",
          a: "We integrate with your CRM, ERP, ticketing, email and databases through APIs and connectors, so work flows between systems without manual re-keying.",
        },
        {
          category: "Reliability",
          q: "What keeps a long-running process from silently failing?",
          a: "Workflows are durable and retry-safe, and SLA dashboards with alerting surface bottlenecks before they breach a deadline.",
        },
      ]}
      related={[
        { label: "AI Automation", href: "/ai-automation", icon: Repeat, description: "Intelligent process automation" },
        { label: "Agentic AI", href: "/agentic-ai", icon: GitBranch, description: "Autonomous, tool-using systems" },
        { label: "AI Chatbots", href: "/ai-chatbots", icon: UserCheck, description: "Conversations that convert" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: Plug, description: "AI at organizational scale" },
      ]}
      cta={{
        title: "Give your team back",
        highlight: "thousands of hours",
        lead: "Point us at your most tedious process and we'll automate it end-to-end, exceptions included.",
      }}
    />
  );
}

import type { Metadata } from "next";
import { Layers, Compass, Target, ClipboardCheck, ShieldCheck, GraduationCap, LineChart } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Consulting & Strategy",
  description:
    "AI roadmaps, opportunity mapping and architecture reviews from a team that has shipped AI in production — strategy that ends in deployed systems, not slideware.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="AI Consulting"
      icon={Layers}
      title="AI strategy that ends in"
      highlight="shipped systems"
      lead="We help leaders find the AI opportunities worth pursuing, model the ROI, choose the right architecture and de-risk the build — advice grounded in having actually delivered these systems in production."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Strategy from people who've <span className="text-gradient">shipped, not just advised</span>
          </>
        ),
        body:
          "Most AI strategy work ends in a deck no one builds. Ours is written by the engineers who deliver the systems, so recommendations are feasible, sequenced by value and risk, and ready to execute. We help you bet on the right use cases and avoid the expensive dead ends.",
        points: [
          "Opportunity mapping that ranks use cases by value, feasibility and risk",
          "ROI and business-case modeling to justify investment with real numbers",
          "Architecture and vendor reviews that pressure-test your approach early",
          "Team enablement so your people can own and extend what gets built",
        ],
      }}
      features={{
        eyebrow: "How we help",
        title: (
          <>
            From ambiguity to an <span className="text-gradient">executable roadmap</span>
          </>
        ),
        lead:
          "Advisory engagements that produce decisions and plans, not just observations.",
        items: [
          {
            title: "Opportunity mapping",
            description:
              "A ranked portfolio of AI use cases scored on business value, feasibility and risk.",
            icon: Compass,
          },
          {
            title: "ROI modeling",
            description:
              "Business cases with concrete cost, benefit and payback estimates leaders can commit to.",
            icon: Target,
          },
          {
            title: "Architecture review",
            description:
              "An expert audit of your proposed design, data and vendors to catch issues before they cost you.",
            icon: ClipboardCheck,
          },
          {
            title: "AI readiness assessment",
            description:
              "A clear-eyed look at your data, skills and infrastructure with a plan to close the gaps.",
            icon: LineChart,
          },
          {
            title: "Governance & risk",
            description:
              "Policies, guardrails and compliance framing so AI scales safely across the organization.",
            icon: ShieldCheck,
          },
          {
            title: "Team enablement",
            description:
              "Workshops and hands-on mentoring that leave your teams able to own and extend the work.",
            icon: GraduationCap,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Advisory that spans <span className="text-gradient">strategy to execution</span>
          </>
        ),
        lead: "The engagements leaders bring us in to run.",
        items: [
          "AI opportunity & portfolio strategy",
          "Use-case discovery & prioritization",
          "ROI & business-case modeling",
          "Reference architecture design",
          "Build-vs-buy & vendor selection",
          "AI governance & risk frameworks",
          "Data & platform readiness reviews",
          "Executive & board education",
          "Team upskilling & enablement",
        ],
      }}
      visual="dashboard"
      stats={[
        { value: 120, suffix: "+", label: "AI systems shipped" },
        { value: 6, suffix: " mo", label: "Typical payback period" },
        { value: 3, suffix: "x", label: "ROI on prioritized use cases" },
        { value: 40, suffix: "M+", label: "Requests served per day" },
      ]}
      faqs={faqs.slice(0, 4)}
      related={[
        { label: "Enterprise AI", href: "/enterprise-ai", icon: Compass, description: "AI at organizational scale" },
        { label: "AI Development", href: "/ai-development", icon: Target, description: "End-to-end delivery" },
        { label: "Custom LLM Development", href: "/custom-llm-development", icon: ClipboardCheck, description: "Fine-tuning & alignment" },
        { label: "Agentic AI", href: "/agentic-ai", icon: ShieldCheck, description: "Autonomous, tool-using systems" },
      ]}
      cta={{
        title: "Chart an AI roadmap",
        highlight: "you can actually build",
        lead: "Start with a discovery sprint that turns AI ambition into a prioritized, costed plan.",
      }}
    />
  );
}

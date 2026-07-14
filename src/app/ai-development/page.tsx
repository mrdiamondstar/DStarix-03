import type { Metadata } from "next";
import { Braces, Compass, Blocks, GitBranch, Server, Activity, GraduationCap } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Development",
  description:
    "End-to-end AI product development — from discovery and architecture to eval-driven builds, production deployment and ongoing operations you can rely on.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="AI Development"
      icon={Braces}
      title="AI products delivered"
      highlight="end to end"
      lead="We take AI ideas all the way to production — discovery, architecture, eval-driven engineering, deployment to your cloud and the monitoring to keep it reliable. One accountable team, working software every week."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            One team accountable from <span className="text-gradient">whiteboard to production</span>
          </>
        ),
        body:
          "AI projects stall in the gap between a promising notebook and a system your business can depend on. We own that whole path — building in short, eval-driven cycles so you see working software every week and reach production with monitoring, guardrails and a rollback plan already in place.",
        points: [
          "Discovery and architecture that de-risk the build before code is written",
          "Eval-driven engineering in weekly cycles, so quality is measured continuously",
          "Deployment to your cloud or on-prem with CI/CD, monitoring and safe rollback",
          "Ongoing operations or full handoff — your choice of who owns it long-term",
        ],
      }}
      features={{
        eyebrow: "How we deliver",
        title: (
          <>
            The full delivery lifecycle, <span className="text-gradient">done right</span>
          </>
        ),
        lead:
          "Everything it takes to move an AI idea into dependable production software.",
        items: [
          {
            title: "Discovery & architecture",
            description:
              "We map the use case, quantify ROI and design the reference architecture before building.",
            icon: Compass,
          },
          {
            title: "Full-stack build",
            description:
              "Models, data pipelines, APIs and interfaces engineered together as one production system.",
            icon: Blocks,
          },
          {
            title: "Eval-driven engineering",
            description:
              "Evaluation harnesses gate every release the way tests gate software, so quality never regresses.",
            icon: GitBranch,
          },
          {
            title: "Production deployment",
            description:
              "CI/CD to your cloud or on-prem with canary rollouts, monitoring and one-click rollback.",
            icon: Server,
          },
          {
            title: "MLOps & monitoring",
            description:
              "Drift detection, observability and SLA-backed support that treat AI as the critical system it is.",
            icon: Activity,
          },
          {
            title: "Enablement & handoff",
            description:
              "Documentation and mentoring so your team can own and extend the system with confidence.",
            icon: GraduationCap,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            End-to-end delivery across <span className="text-gradient">the AI stack</span>
          </>
        ),
        lead: "The engineering we bring to every AI product build.",
        items: [
          "AI product discovery & scoping",
          "Reference architecture design",
          "Data pipeline engineering",
          "Model & prompt development",
          "API & backend engineering",
          "Frontend & UX for AI",
          "Evaluation & QA harnesses",
          "CI/CD & production deployment",
          "MLOps, monitoring & support",
        ],
      }}
      visual="code"
      stats={[
        { value: 9, suffix: " wks", label: "Idea to production, typical" },
        { value: 99.9, suffix: "%", decimals: 1, label: "Production uptime" },
        { value: 120, suffix: "+", label: "Systems delivered" },
        { value: 1, suffix: "/wk", label: "Working software cadence" },
      ]}
      faqs={[
        {
          category: "Engagement",
          q: "How do your development engagements work?",
          a: "We start with a discovery sprint, then build in weekly eval-driven cycles so you see working software every week and reach production with monitoring and a rollback plan already in place.",
        },
        {
          category: "Ownership",
          q: "Do you build it and leave, or stay involved?",
          a: "Your choice. We offer SLA-backed ongoing operations, or we document and enable your team for a clean handoff — often a mix of both over time.",
        },
        {
          category: "Quality",
          q: "How do you make sure it actually works in production?",
          a: "Evaluation harnesses gate every release, and we ship with observability, drift detection and canary rollouts, so issues are caught before users feel them.",
        },
        {
          category: "Stack",
          q: "Are you tied to specific models or clouds?",
          a: "No. We're model- and cloud-agnostic, selecting frontier or open models and deploying to AWS, GCP, Azure or on-prem based on your accuracy, cost and residency needs.",
        },
      ]}
      related={[
        { label: "AI Consulting", href: "/ai-consulting", icon: Compass, description: "Strategy that ships" },
        { label: "Custom LLM Development", href: "/custom-llm-development", icon: GitBranch, description: "Fine-tuning & alignment" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: Server, description: "AI at organizational scale" },
        { label: "Agentic AI", href: "/agentic-ai", icon: Blocks, description: "Autonomous, tool-using systems" },
      ]}
      cta={{
        title: "Build your AI product with",
        highlight: "a team that ships",
        lead: "From first whiteboard to production monitoring, we own the whole path — starting with a discovery sprint.",
      }}
    />
  );
}

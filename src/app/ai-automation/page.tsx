import type { Metadata } from "next";
import { Cog, ScanText, Split, Bot, Plug, LineChart, ShieldCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Automation",
  description:
    "Intelligent process automation that understands unstructured inputs, makes judgment calls and completes work across your systems — with oversight built in.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="AI Automation"
      icon={Cog}
      title="Intelligent automation that"
      highlight="understands, then acts"
      lead="We automate the decisions and documents that stopped classic automation cold — reading unstructured inputs, applying judgment and completing work across your systems, with humans overseeing the exceptions."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Automation with <span className="text-gradient">comprehension built in</span>
          </>
        ),
        body:
          "The processes that resist automation are the ones full of messy documents and gray-area decisions. We add AI perception and reasoning to those steps — extracting, classifying and deciding — so entire processes run automatically and route to a person only when they genuinely should.",
        points: [
          "AI that reads emails, PDFs and forms and turns them into structured data",
          "Decision automation for classification, routing and eligibility judgments",
          "Deep integration so actions land directly in your systems of record",
          "Confidence thresholds and human review that keep quality measurably high",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            Where perception meets <span className="text-gradient">reliable execution</span>
          </>
        ),
        lead:
          "The intelligent building blocks that let automation handle real, unstructured work.",
        items: [
          {
            title: "Document understanding",
            description:
              "Extract and structure data from emails, PDFs, forms and scans with validation you can trust.",
            icon: ScanText,
          },
          {
            title: "Decision automation",
            description:
              "AI-driven classification, routing and eligibility calls that used to require a person's judgment.",
            icon: Split,
          },
          {
            title: "Agent-driven tasks",
            description:
              "Tool-using agents that carry multi-step tasks to completion across your applications.",
            icon: Bot,
          },
          {
            title: "System integration",
            description:
              "Connectors that push results straight into your CRM, ERP and databases — no manual re-keying.",
            icon: Plug,
          },
          {
            title: "Confidence & oversight",
            description:
              "Thresholds route low-confidence cases to human review, keeping accuracy high and auditable.",
            icon: ShieldCheck,
          },
          {
            title: "Impact analytics",
            description:
              "Dashboards on throughput, accuracy and hours saved that prove and tune the automation's value.",
            icon: LineChart,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Automate the judgment work, <span className="text-gradient">not just the clicks</span>
          </>
        ),
        lead: "Processes where AI perception unlocks true end-to-end automation.",
        items: [
          "Intelligent document processing",
          "Email & request triage",
          "Data extraction & enrichment",
          "Eligibility & compliance checks",
          "Classification & tagging",
          "Multi-system task completion",
          "Quality assurance review",
          "Exception detection & routing",
          "Continuous accuracy monitoring",
        ],
      }}
      visual="workflow"
      stats={[
        { value: 80, suffix: "%", label: "Of cases fully automated" },
        { value: 4, suffix: "x", label: "Higher processing throughput" },
        { value: 98, suffix: "%", label: "Extraction accuracy" },
        { value: 50, suffix: "%", label: "Lower cost per transaction" },
      ]}
      faqs={[
        {
          category: "Approach",
          q: "How is AI automation different from workflow automation?",
          a: "Workflow automation orchestrates the steps; AI automation adds perception and judgment to the steps themselves — reading unstructured inputs and making decisions that rule-based systems can't.",
        },
        {
          category: "Quality",
          q: "How do you keep accuracy high on automated decisions?",
          a: "Every AI step outputs a confidence score. High-confidence cases flow straight through, while low-confidence ones route to human review, and we monitor accuracy continuously.",
        },
        {
          category: "Inputs",
          q: "Can it handle our messy documents and emails?",
          a: "Yes. Document understanding extracts structured data from PDFs, scans, forms and free-text emails, with validation rules to catch errors before they propagate.",
        },
        {
          category: "Integration",
          q: "Where do the results end up?",
          a: "Directly in your systems of record — CRM, ERP, ticketing or databases — through connectors, so there's no manual re-keying between steps.",
        },
      ]}
      related={[
        { label: "Workflow Automation", href: "/workflow-automation", icon: Split, description: "Remove the busywork" },
        { label: "Agentic AI", href: "/agentic-ai", icon: Bot, description: "Autonomous, tool-using systems" },
        { label: "Generative AI", href: "/generative-ai", icon: ScanText, description: "Content, code & synthetic data" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: ShieldCheck, description: "AI at organizational scale" },
      ]}
      cta={{
        title: "Automate the work",
        highlight: "rules could never touch",
        lead: "Bring us a process buried in documents and decisions, and we'll make it run itself.",
      }}
    />
  );
}

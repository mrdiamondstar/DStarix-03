import type { Metadata } from "next";
import { Sparkles, Wand2, ShieldCheck, Image, Code2, GitBranch, Gauge } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Generative AI Development",
  description:
    "Production-grade generative AI for content, code, imagery and synthetic data — grounded in your brand voice, guarded for safety and tuned for cost.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Generative AI"
      icon={Sparkles}
      title="Generative systems that create"
      highlight="on brand, at scale"
      lead="We build generative AI that produces content, code, imagery and structured data your teams can actually ship — grounded in your voice, bounded by your policies and priced for production."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            From a clever demo to a <span className="text-gradient">dependable creative engine</span>
          </>
        ),
        body:
          "Most generative pilots stall because they can't guarantee tone, accuracy or cost at volume. We close that gap with retrieval grounding, prompt and model architecture, and evaluation harnesses that hold every output to a measurable bar before it reaches a customer.",
        points: [
          "Brand-grounded generation tuned to your voice, style guide and terminology",
          "Structured outputs with schemas and validation, not free-text you have to clean up",
          "Safety guardrails, PII redaction and human-in-the-loop review where stakes are high",
          "Cost controls via model routing, caching and distillation to keep unit economics sane",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            Generative capability, <span className="text-gradient">engineered end to end</span>
          </>
        ),
        lead:
          "A complete generative stack — from grounding and orchestration to guardrails and evaluation — delivered to your cloud.",
        items: [
          {
            title: "Multimodal generation",
            description:
              "Text, code, images and synthetic data from a single orchestrated pipeline with consistent quality controls.",
            icon: Image,
          },
          {
            title: "Brand-safe guardrails",
            description:
              "Policy filters, tone enforcement and forbidden-topic controls that keep every output on-message.",
            icon: ShieldCheck,
          },
          {
            title: "Grounded content engine",
            description:
              "Retrieval over your approved sources so generated copy stays accurate, current and citable.",
            icon: Wand2,
          },
          {
            title: "Code generation",
            description:
              "Assistants that scaffold, refactor and document code against your repos, conventions and CI.",
            icon: Code2,
          },
          {
            title: "Evaluation harness",
            description:
              "Automated scoring for factuality, tone and safety that gates releases the way tests gate software.",
            icon: GitBranch,
          },
          {
            title: "Cost-tuned inference",
            description:
              "Model routing, caching and distillation that cut spend without giving up on output quality.",
            icon: Gauge,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            One platform for every <span className="text-gradient">generative workload</span>
          </>
        ),
        lead: "The building blocks we assemble into your production generative system.",
        items: [
          "Marketing & product copy at scale",
          "Personalized customer communications",
          "Synthetic data for training & testing",
          "Image & creative asset generation",
          "Code scaffolding & documentation",
          "Long-form report & summary drafting",
          "Multilingual content localization",
          "Prompt libraries & template governance",
          "A/B evaluation of generated variants",
        ],
      }}
      visual="code"
      stats={[
        { value: 10, suffix: "x", label: "Faster content production" },
        { value: 96, suffix: "%", label: "On-brand acceptance rate" },
        { value: 5, suffix: "x", label: "Lower cost per asset" },
        { value: 40, suffix: "+", label: "Content workflows automated" },
      ]}
      faqs={[
        {
          category: "Quality",
          q: "How do you keep generated content on-brand and accurate?",
          a: "We ground generation in your approved sources, enforce your style guide through prompts and guardrails, and run every output through an evaluation harness that scores tone, factuality and safety before it ships.",
        },
        {
          category: "Technical",
          q: "Which models do you use for generation?",
          a: "We are model-agnostic and often combine frontier and open models — routing each request to the cheapest model that clears the quality bar for that task.",
        },
        {
          category: "Safety",
          q: "How do you prevent hallucinations and unsafe outputs?",
          a: "Retrieval grounding, structured outputs with schema validation, policy filters and human review on high-stakes flows, all backed by continuous evaluation.",
        },
        {
          category: "Commercial",
          q: "How do you control inference cost at scale?",
          a: "Through model routing, prompt caching, batching and distillation of frequent tasks into smaller models — typically cutting cost per asset several fold.",
        },
      ]}
      related={[
        { label: "Agentic AI", href: "/agentic-ai", icon: Sparkles, description: "Autonomous, tool-using systems" },
        { label: "RAG Solutions", href: "/rag-solutions", icon: Wand2, description: "Grounded, cited answers" },
        { label: "Custom LLM Development", href: "/custom-llm-development", icon: Code2, description: "Fine-tuning & alignment" },
        { label: "AI Development", href: "/ai-development", icon: GitBranch, description: "End-to-end delivery" },
      ]}
      cta={{
        title: "Put generative AI to work",
        highlight: "this quarter",
        lead: "Start with one high-value content or code workflow and see a production-ready system in weeks.",
      }}
    />
  );
}

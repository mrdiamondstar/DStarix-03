import type { Metadata } from "next";
import { Cpu, Sliders, Combine, Scale, GitBranch, ShieldCheck, Gauge } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom LLM Development",
  description:
    "Fine-tuning, distillation and alignment to build language models that speak your domain, match your quality bar and run at your economics.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Custom LLM Development"
      icon={Cpu}
      title="Language models tuned to"
      highlight="your domain"
      lead="When prompting a general model isn't enough, we fine-tune, distill and align models to your data and objectives — smaller, faster and more accurate on the tasks that matter to you."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            When off-the-shelf models <span className="text-gradient">hit their ceiling</span>
          </>
        ),
        body:
          "Prompt engineering takes you far, but domain jargon, strict formats and cost or latency targets eventually demand a model of your own. We run an eval-driven program — curating data, fine-tuning, distilling and aligning — so every training run is justified by a measurable gain.",
        points: [
          "Data curation and synthetic augmentation to build a high-signal training set",
          "Parameter-efficient fine-tuning (LoRA/QLoRA) and full fine-tunes where warranted",
          "Distillation of large-model quality into small models that are cheap to serve",
          "Preference alignment (RLHF/DPO) so behavior matches your standards and tone",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            A model program built on <span className="text-gradient">evidence, not vibes</span>
          </>
        ),
        lead:
          "Every step from data to deployment, measured against a domain-specific evaluation set.",
        items: [
          {
            title: "Domain fine-tuning",
            description:
              "Adapt open models to your terminology, formats and tasks with parameter-efficient training.",
            icon: Sliders,
          },
          {
            title: "Model distillation",
            description:
              "Compress frontier-model quality into small, fast models that slash inference cost and latency.",
            icon: Combine,
          },
          {
            title: "Preference alignment",
            description:
              "RLHF and DPO to shape tone, safety and refusal behavior to your organization's standards.",
            icon: Scale,
          },
          {
            title: "Data curation",
            description:
              "Sourcing, cleaning and synthetic augmentation that turns raw data into a high-signal training set.",
            icon: GitBranch,
          },
          {
            title: "Eval-driven iteration",
            description:
              "A domain benchmark that gates every checkpoint so improvements are proven, not assumed.",
            icon: ShieldCheck,
          },
          {
            title: "Optimized serving",
            description:
              "Quantization and efficient inference on vLLM so your tuned model runs within budget at scale.",
            icon: Gauge,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Custom models for <span className="text-gradient">specialized work</span>
          </>
        ),
        lead: "Where a purpose-built model outperforms a general one.",
        items: [
          "Domain-specific fine-tuning",
          "Instruction tuning for your tasks",
          "Small-model distillation",
          "Preference & safety alignment",
          "Synthetic data generation",
          "Quantization & efficient serving",
          "Custom tokenizers & adapters",
          "Domain evaluation benchmarks",
          "On-prem & private deployment",
        ],
      }}
      visual="code"
      stats={[
        { value: 5, suffix: "x", label: "Lower cost vs. frontier API" },
        { value: 3, suffix: "x", label: "Faster inference latency" },
        { value: 30, suffix: "%", label: "Accuracy lift on domain tasks" },
        { value: 0, suffix: "", label: "Data egress with private tuning" },
      ]}
      faqs={[
        {
          category: "Strategy",
          q: "When should we fine-tune instead of just prompting?",
          a: "When you need consistent domain formatting, lower latency or cost, or accuracy that prompting can't reach on specialized tasks. We validate the case with evals before recommending a training program.",
        },
        {
          category: "Data",
          q: "How much training data do we need?",
          a: "Less than most teams expect. With parameter-efficient tuning and synthetic augmentation, a few thousand high-quality examples often move the needle; we help curate and generate what's missing.",
        },
        {
          category: "Technical",
          q: "Which base models do you fine-tune?",
          a: "Typically open models like Llama and Mistral for full control and private deployment, selected by the accuracy, latency and licensing profile your use case needs.",
        },
        {
          category: "Operations",
          q: "How do you serve a custom model in production?",
          a: "We deploy on efficient runtimes like vLLM with quantization and autoscaling in your cloud or on-prem, with monitoring and rollback like any critical system.",
        },
      ]}
      related={[
        { label: "Generative AI", href: "/generative-ai", icon: Sliders, description: "Content, code & synthetic data" },
        { label: "RAG Solutions", href: "/rag-solutions", icon: Combine, description: "Grounded, cited answers" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: ShieldCheck, description: "AI at organizational scale" },
        { label: "AI Development", href: "/ai-development", icon: GitBranch, description: "End-to-end delivery" },
      ]}
      cta={{
        title: "Build a model that's",
        highlight: "unmistakably yours",
        lead: "We'll benchmark a custom model against your best prompt and only train when it clearly wins.",
      }}
    />
  );
}

import type { Metadata } from "next";
import {
  Building2, Target, Compass, Lightbulb, HeartHandshake, Code2,
  ShieldCheck, GraduationCap, Handshake, CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { type Feature } from "@/components/shared/FeatureGrid";
import { Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About — DStarix Techno",
  description:
    "DStarix Techno is an AI-first technology company building production-ready enterprise AI systems — Generative AI, Agentic AI, RAG, Voice AI and private deployments — that create measurable business value.",
};

const aboutParagraphs = [
  "DStarix Techno is an AI-first technology company focused on helping organizations adopt Artificial Intelligence with confidence. We design and build production-ready AI systems that automate complex workflows, improve decision-making, and create measurable business value.",
  "Our expertise spans Generative AI, Agentic AI, Enterprise AI, Retrieval-Augmented Generation (RAG), Workflow Automation, Voice AI, and Private AI deployments. We develop intelligent solutions that integrate seamlessly with existing business processes while maintaining security, scalability, and reliability.",
  "Unlike traditional software development companies, we focus on delivering AI systems that solve real business problems — not just demonstrations or prototypes. Every solution is designed with performance, governance, and long-term maintainability in mind.",
  "Whether it's building autonomous AI agents, enterprise knowledge assistants, intelligent document processing systems, or AI-powered business automation, our goal is to help organizations innovate faster and operate more efficiently.",
  "As AI continues to reshape every industry, DStarix is committed to becoming a trusted technology partner that enables businesses to embrace the future through practical, scalable, and responsible AI solutions.",
];

const coreValues: Feature[] = [
  { title: "Innovation with Purpose", description: "We pursue new techniques only when they solve a real business problem — never technology for its own sake.", icon: Lightbulb },
  { title: "Customer Success First", description: "Your outcomes define ours. We measure our success by the impact our systems create for your business.", icon: HeartHandshake },
  { title: "Engineering Excellence", description: "Every system is built to production standards — tested, observable and maintainable for the long run.", icon: Code2 },
  { title: "Responsible & Secure AI", description: "Governance, privacy and safety are designed in from day one, not bolted on afterwards.", icon: ShieldCheck },
  { title: "Continuous Learning", description: "AI moves fast. We keep our methods, models and skills current so your systems stay ahead.", icon: GraduationCap },
  { title: "Long-Term Partnerships", description: "We build lasting relationships, supporting your AI journey well beyond the initial deployment.", icon: Handshake },
];

const whyChoose = [
  "Expertise in Generative AI and Agentic AI",
  "Production-ready AI architectures",
  "Enterprise-grade security and scalability",
  "Custom AI solutions tailored to business needs",
  "End-to-end development from strategy to deployment",
  "Focus on measurable business outcomes rather than AI demonstrations",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Company"
        icon={Building2}
        title="Building enterprise AI systems that"
        highlight="transform businesses"
        lead="DStarix Techno is an AI-first technology company helping organizations adopt Artificial Intelligence with confidence — designing production-ready systems that automate complex workflows, improve decision-making and create measurable business value."
        secondaryCta={{ label: "See open roles", href: "/careers" }}
      />

      {/* About narrative */}
      <Section>
        <div className="container">
          <SectionHeading
            eyebrow="Who we are"
            title={<>Enterprise AI that <span className="text-gradient">delivers real value</span></>}
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {aboutParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-lg leading-relaxed text-muted">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission + Vision */}
      <Section className="pt-0">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="gradient-border h-full rounded-4xl border border-ink-900/[0.07] bg-white/70 p-9 shadow-card backdrop-blur">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white">
                <Target className="h-5.5 w-5.5" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To empower businesses worldwide with secure, production-grade AI solutions that improve efficiency,
                accelerate innovation, and create measurable business impact.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="gradient-border h-full rounded-4xl border border-ink-900/[0.07] bg-white/70 p-9 shadow-card backdrop-blur">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white">
                <Compass className="h-5.5 w-5.5" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                To become a globally recognized Enterprise AI company, building intelligent systems that transform
                how organizations work, make decisions, and grow through the power of Artificial Intelligence.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section className="section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our core values"
            title={<>Principles we <span className="text-gradient">build by</span></>}
            lead="The commitments that shape how we scope, build and stand behind every engagement."
          />
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="glass-dark group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent-gradient">
                    <value.icon className="h-5.5 w-5.5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Why choose DStarix */}
      <Section>
        <div className="container">
          <SectionHeading
            eyebrow="Why choose DStarix"
            title={<>A partner built for <span className="text-gradient">production AI</span></>}
            lead="What sets us apart from traditional software teams and AI experiments."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
            {whyChoose.map((point) => (
              <StaggerItem key={point}>
                <div className="flex items-start gap-4 rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </span>
                  <p className="text-lg font-medium leading-snug text-ink-800">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        title="Want to build with"
        highlight="a team that ships?"
        lead="Whether you're scoping a first pilot or scaling AI across the org, we'd love to hear what you're working on."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Explore careers", href: "/careers" }}
      />
    </>
  );
}

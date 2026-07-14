import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";
import { cn } from "@/lib/utils";

const cells = [
  {
    title: "Agentic AI that acts autonomously",
    text: "Multi-agent systems that plan, use your tools and complete work end-to-end — safely.",
    href: "/agentic-ai",
    span: "lg:col-span-2 lg:row-span-2",
    visual: true,
  },
  { title: "RAG grounded in your data", text: "Accurate, cited answers over private knowledge.", href: "/rag-solutions", span: "" },
  { title: "Private, on-prem AI", text: "Zero data egress. Full compliance.", href: "/enterprise-ai", span: "" },
  { title: "Voice AI in real time", text: "Natural, interruptible speech agents.", href: "/voice-ai", span: "" },
  { title: "Custom LLM development", text: "Fine-tuned to your domain and economics.", href: "/custom-llm-development", span: "" },
];

/** Asymmetric bento grid highlighting flagship solutions with a live diagram. */
export function SolutionsBento() {
  return (
    <section className="section-dark relative overflow-hidden py-14 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent)]" />
        <div className="animate-float-slow absolute left-1/4 top-10 h-72 w-72 rounded-full bg-electric/20 blur-[130px]" />
      </div>
      <div className="container relative">
        <SectionHeading
          eyebrow="AI Solutions"
          align="center"
          title={<>One platform. <span className="text-gradient">Every AI capability.</span></>}
          lead="Composable building blocks that snap together into the exact system your business needs."
          className="mx-auto [&_.text-muted]:text-white/60"
        />

        <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cells.map((c) => (
            <Reveal key={c.title} className={cn(c.span)}>
              <Link
                href={c.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-500 hover:border-white/20 hover:bg-white/[0.07]"
              >
                {c.visual && (
                  <div className="mb-4">
                    <WorkflowDiagram />
                  </div>
                )}
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-white">{c.title}</h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-2 text-sm text-white/55">{c.text}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

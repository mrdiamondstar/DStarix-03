import { Marquee } from "@/components/ui/Marquee";

const phrases = [
  "Generative AI", "Agentic Systems", "RAG", "Private LLMs", "Voice AI",
  "Computer Vision", "MLOps", "Enterprise Automation", "Fine-tuning", "Predictive AI",
];

/** Oversized scrolling keyword ribbon between sections. */
export function ScrollingText() {
  return (
    <div className="border-y border-[color:var(--line)] bg-ink-900/[0.025] py-10 sm:py-12">
      <Marquee speed={40}>
        {phrases.map((p) => (
          <span key={p} className="flex items-center gap-8 font-display text-2xl font-semibold tracking-tight text-ink-900/40 sm:text-4xl">
            {p}
            <span aria-hidden className="text-ink-900/20">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

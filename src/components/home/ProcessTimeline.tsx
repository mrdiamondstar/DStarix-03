import { processSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";

/** Vertical connected timeline of the delivery process. */
export function ProcessTimeline() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          align="center"
          title={<>From idea to production in <span className="text-gradient">weeks, not years</span></>}
          lead="A disciplined, evaluation-driven process that de-risks AI and gets working software in front of you fast."
          className="mx-auto"
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Connector line */}
          <div aria-hidden className="absolute left-[27px] top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-electric via-violet to-transparent sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.05}>
                <div className={`relative flex items-start gap-6 sm:w-1/2 ${i % 2 ? "sm:ml-auto sm:pl-12" : "sm:pr-12 sm:text-right sm:flex-row-reverse"}`}>
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-ink-900/10 bg-white shadow-soft">
                    <step.icon className="h-5 w-5 text-electric" />
                    <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-ink-900 font-mono text-[10px] text-white">
                      {step.n}
                    </span>
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

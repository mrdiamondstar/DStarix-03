import { techStack } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** Technology ecosystem grid. */
export function TechStack() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Technology ecosystem"
          title={<>Model-agnostic. <span className="text-gradient">Battle-tested tools.</span></>}
          lead="We choose the right model and infrastructure for the job — frontier or open, cloud or on-prem — and wire it into a stack built to last."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <StaggerItem key={group.category}>
              <div className="gradient-border h-full rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{group.category}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-sm text-ink-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

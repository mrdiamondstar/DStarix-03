import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

/** Industries we serve — compact hoverable list cards. */
export function IndustriesSection() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Industries"
          align="center"
          title={<>Deep expertise where <span className="text-gradient">it matters</span></>}
          lead="We bring domain context and compliance know-how to the sectors with the most to gain from AI."
          className="mx-auto"
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-electric/30 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-900 text-white transition-colors group-hover:bg-accent-gradient">
                    <ind.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 opacity-0 transition-all group-hover:opacity-100" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-tight">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{ind.blurb}</p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

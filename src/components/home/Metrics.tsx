import { SectionHeading } from "@/components/ui/Primitives";
import { StatBand } from "@/components/shared/StatBand";

/** Headline outcomes / success metrics. */
export function Metrics() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="By the numbers"
          align="center"
          title={<>Outcomes that reach the <span className="text-gradient">P&amp;L</span></>}
          lead="We measure success in production reliability and business value — not demos."
          className="mx-auto"
        />
        <div className="mt-14">
          <StatBand />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { Boxes } from "lucide-react";
import { SectionHeading } from "@/components/ui/Primitives";
import { StatBand } from "@/components/shared/StatBand";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio — Selected AI Work | DStarix Techno",
  description:
    "Production AI systems we've shipped across agentic support, document intelligence, voice, forecasting, private LLMs, RAG, vision and automation — and the numbers they moved.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        icon={Boxes}
        title="Proof, not"
        highlight="promises."
        lead="A selection of AI systems we've taken from whiteboard to production — filter by capability, then open any project to see the outcome it delivered."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "Read case studies", href: "/case-studies" }}
      />

      {/* Filterable grid */}
      <section className="relative py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Systems in production, <span className="text-gradient">outcomes on record</span>
              </>
            }
            lead="Every project below is live today. Click a card for the detail behind the metric."
          />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 sm:py-24 bg-ink-900/[0.02]">
        <div className="container">
          <StatBand />
        </div>
      </section>

      <CTASection
        title="Your project could be the"
        highlight="next number here."
        lead="Bring us the outcome you need. We'll show you the fastest credible path to shipping it in production."
      />
    </>
  );
}

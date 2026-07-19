import type { Metadata } from "next";
import { Boxes } from "lucide-react";
import { SectionHeading } from "@/components/ui/Primitives";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { solutionCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio — AI Solutions We Build | DStarix Techno",
  description:
    "The AI solutions DStarix designs and builds — enterprise chatbots, AI agents, RAG knowledge assistants, document intelligence, voice AI, multi-agent systems, private deployments and more.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        icon={Boxes}
        title="AI solutions we design and"
        highlight="build"
        lead="We showcase our expertise through the categories of AI systems we build — production-ready solutions engineered for real business problems, security and long-term maintainability."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "Talk to us", href: "/contact" }}
      />

      {/* Solution categories */}
      <section className="relative py-14 sm:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="What we build"
            title={
              <>
                Capabilities across the <span className="text-gradient">enterprise AI stack</span>
              </>
            }
            lead="From conversational assistants to private, on-prem deployments — each solution is built to integrate cleanly with your existing systems."
          />
          <div className="mt-12">
            <FeatureGrid features={solutionCategories} columns={3} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a use case in"
        highlight="one of these areas?"
        lead="Tell us the problem you're trying to solve. We'll map the fastest credible path to a production-ready AI solution."
      />
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { FeatureGrid, type Feature } from "@/components/shared/FeatureGrid";
import { CapabilityList, ContentSection, SplitFeature, RelatedGrid } from "@/components/shared/Sections";
import { StatBand } from "@/components/shared/StatBand";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { DashboardMock } from "@/components/visuals/DashboardMock";
import { CodeWindow } from "@/components/visuals/CodeWindow";
import { WorkflowDiagram } from "@/components/visuals/WorkflowDiagram";
import type { Stat, FaqItem } from "@/lib/data";

export interface ServicePageConfig {
  eyebrow: string;
  icon: LucideIcon;
  title: string;
  highlight: string;
  lead: string;
  overview: {
    eyebrow: string;
    title: React.ReactNode;
    body: string;
    points: string[];
  };
  features: { eyebrow: string; title: React.ReactNode; lead: string; items: Feature[] };
  capabilities?: { title: React.ReactNode; lead?: string; items: string[] };
  visual?: "dashboard" | "code" | "workflow";
  stats?: Stat[];
  faqs?: FaqItem[];
  related?: { label: string; href: string; icon?: LucideIcon; description?: string }[];
  cta?: { title?: string; highlight?: string; lead?: string };
}

const visuals = {
  dashboard: <DashboardMock />,
  code: <CodeWindow />,
  workflow: <WorkflowDiagram />,
};

/**
 * Data-driven template that renders a complete, premium capability page.
 * Every service / solution page passes a config object into this.
 */
export function ServicePageTemplate(cfg: ServicePageConfig) {
  return (
    <>
      <PageHero
        eyebrow={cfg.eyebrow}
        icon={cfg.icon}
        title={cfg.title}
        highlight={cfg.highlight}
        lead={cfg.lead}
        secondaryCta={{ label: "See our work", href: "/portfolio" }}
      />

      <div className="container">
        <LogoMarquee label="Deployed with teams like" />
      </div>

      <section className="relative py-20 sm:py-28">
        <div className="container">
          <SplitFeature
            eyebrow={cfg.overview.eyebrow}
            title={cfg.overview.title}
            body={cfg.overview.body}
            points={cfg.overview.points}
            visual={
              <div className="relative">
                <div className="animate-float">{visuals[cfg.visual ?? "dashboard"]}</div>
                <div aria-hidden className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent-radial opacity-70 blur-2xl" />
              </div>
            }
          />
        </div>
      </section>

      <ContentSection
        eyebrow={cfg.features.eyebrow}
        title={cfg.features.title}
        lead={cfg.features.lead}
        align="center"
      >
        <FeatureGrid features={cfg.features.items} columns={cfg.features.items.length >= 4 ? 4 : 3} />
      </ContentSection>

      {cfg.capabilities && (
        <ContentSection eyebrow="Capabilities" title={cfg.capabilities.title} lead={cfg.capabilities.lead} dark>
          <CapabilityList items={cfg.capabilities.items} columns={3} />
        </ContentSection>
      )}

      {cfg.stats && (
        <section className="relative py-20 sm:py-24">
          <div className="container">
            <StatBand items={cfg.stats} />
          </div>
        </section>
      )}

      {cfg.faqs && (
        <ContentSection eyebrow="FAQ" title="Common questions" align="center">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={cfg.faqs} />
          </div>
        </ContentSection>
      )}

      {cfg.related && <RelatedGrid items={cfg.related} />}

      <CTASection title={cfg.cta?.title} highlight={cfg.cta?.highlight} lead={cfg.cta?.lead} />
    </>
  );
}

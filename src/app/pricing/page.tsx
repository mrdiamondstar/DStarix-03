import type { Metadata } from "next";
import { Tag, Check, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { StatBand } from "@/components/shared/StatBand";
import { ComparisonTable } from "@/components/shared/Sections";
import { Section, SectionHeading } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { pricingTiers, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pricing — DStarix Techno",
  description:
    "Transparent engagement models for AI delivery — from a fixed-scope pilot to an enterprise partnership. Find the right way to start.",
};

const comparisonColumns = pricingTiers.map((t) => t.name);

const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Use cases", values: ["1 use case", "Multiple", "Org-wide"] },
  { label: "Discovery & ROI model", values: [true, true, true] },
  { label: "Working prototype", values: [true, true, true] },
  { label: "Evaluation harness", values: [true, true, true] },
  { label: "Full production build", values: [false, true, true] },
  { label: "MLOps & monitoring", values: [false, true, true] },
  { label: "Security review support", values: [false, true, true] },
  { label: "Private / on-prem deployment", values: [false, false, true] },
  { label: "Dedicated delivery pod", values: [false, false, true] },
  { label: "Support", values: ["Standard", "SLA-backed", "24/7"] },
  { label: "Business reviews", values: ["—", "—", "Quarterly"] },
];

const pricingFaqs = faqs.filter((f) =>
  ["Commercial", "Engagement", "Security"].includes(f.category)
);

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        icon={Tag}
        title="Engagement models built for"
        highlight="real outcomes"
        lead="Start small and prove value, or partner with us across the organization. Every model is scoped to ship production AI you can measure."
        primaryCta={{ label: "Talk to sales", href: "/contact" }}
        secondaryCta={{ label: "Compare plans", href: "#compare" }}
      />

      {/* Tiers */}
      <Section>
        <div className="container">
          <Stagger className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-4xl p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1.5",
                    tier.featured
                      ? "gradient-border border border-transparent bg-ink-900 text-white shadow-glow"
                      : "border border-ink-900/[0.07] bg-white/70 hover:shadow-glow"
                  )}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-accent-gradient px-3 py-1 text-xs font-semibold text-white shadow-glow">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold tracking-tight">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className={cn("font-display text-4xl font-semibold tracking-tight", tier.featured && "text-gradient")}>
                      {tier.price}
                    </span>
                    <span className={cn("text-sm", tier.featured ? "text-white/60" : "text-muted")}>
                      {tier.cadence}
                    </span>
                  </div>
                  <p className={cn("mt-4 text-sm leading-relaxed", tier.featured ? "text-white/70" : "text-muted")}>
                    {tier.description}
                  </p>
                  <ul className="mt-7 flex-1 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white",
                            tier.featured ? "bg-accent-gradient" : "bg-ink-900"
                          )}
                        >
                          <Check className="h-3 w-3" />
                        </span>
                        <span className={cn("text-sm", tier.featured ? "text-white/85" : "text-ink-700")}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button href="/contact" variant={tier.featured ? "secondary" : "primary"} withArrow>
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Comparison */}
      <Section id="compare" className="section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Compare plans"
            title={<>Everything, <span className="text-gradient">side by side</span></>}
            lead="A clear view of what's included at each level — so you can choose the right place to start."
          />
          <div className="mt-12">
            <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />
          </div>
        </div>
      </Section>

      {/* Trust strip */}
      <Section>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Why teams trust us"
            title={<>Priced on outcomes, <span className="text-gradient">proven in production</span></>}
          />
          <div className="mt-12">
            <StatBand />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SectionHeading
              eyebrow="Pricing FAQ"
              title={<>Questions about <span className="text-gradient">working together</span></>}
              lead="Still unsure which model fits? Reach out and we'll help you choose the lowest-risk way to start."
            />
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure where"
        highlight="to start?"
        lead="Book a discovery call. We'll map the highest-value use case in your business and recommend the right engagement — no pressure."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "About DStarix", href: "/about" }}
      />
    </>
  );
}

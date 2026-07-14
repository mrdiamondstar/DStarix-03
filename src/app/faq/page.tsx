import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { faqs, type FaqItem } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ | DStarix Techno",
  description:
    "Answers to common questions about engagements, security, technology and commercials when building production AI with DStarix Techno.",
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  // Group FAQs by category, preserving first-seen category order.
  const groups = faqs.reduce<Record<string, FaqItem[]>>((acc, item) => {
    (acc[item.category] ??= []).push(item);
    return acc;
  }, {});
  const categories = Object.entries(groups);

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Frequently asked"
        highlight="questions"
        lead="Everything you need to know about working with us — from timelines and security to models and pricing. Can't find an answer? Our team is one message away."
        icon={HelpCircle}
        align="left"
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            {/* Category jump nav */}
            <nav className="mb-14 flex flex-wrap gap-2">
              {categories.map(([category]) => (
                <a
                  key={category}
                  href={`#${slugify(category)}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/60 px-3.5 py-1.5 text-sm font-medium text-muted backdrop-blur transition-colors hover:border-electric/40 hover:text-electric"
                >
                  {category}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-16">
              {categories.map(([category, items]) => (
                <div key={category} id={slugify(category)} className="scroll-mt-28">
                  <div className="mb-6 flex items-center gap-3">
                    <h2 className="font-display text-2xl font-semibold tracking-tight">
                      {category}
                    </h2>
                    <span className="grid h-6 min-w-6 place-items-center rounded-full bg-ink-900/[0.06] px-2 text-xs font-medium text-muted">
                      {items.length}
                    </span>
                  </div>
                  <FaqAccordion items={items} />
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-16 rounded-3xl border border-ink-900/[0.08] bg-white/60 p-8 text-center backdrop-blur sm:p-10">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Still have questions?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-muted">
                Talk to an engineer, not a sales script. We'll map your use case and give
                you a straight answer on feasibility, timeline and cost.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Button href="/contact" withArrow>
                  Talk to our team
                </Button>
                <Button href="/pricing" variant="secondary">
                  See pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

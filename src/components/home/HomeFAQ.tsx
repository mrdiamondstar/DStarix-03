import Link from "next/link";
import { faqs } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { FaqAccordion } from "@/components/shared/FaqAccordion";

/** Condensed FAQ for the home page. */
export function HomeFAQ() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Questions, <span className="text-gradient">answered</span></>}
            lead="Everything enterprise buyers ask before they engage."
          />
          <p className="mt-6 text-sm text-muted">
            Still curious?{" "}
            <Link href="/faq" className="underline-grow font-medium text-electric">
              See all FAQs
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="underline-grow font-medium text-electric">
              talk to our team
            </Link>
            .
          </p>
        </div>
        <FaqAccordion items={faqs.slice(0, 6)} />
      </div>
    </section>
  );
}

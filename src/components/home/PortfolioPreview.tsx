import { solutionCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/Primitives";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { Button } from "@/components/ui/Button";

/** Preview of the AI solution categories we build, linking to the full portfolio. */
export function PortfolioPreview() {
  const featured = solutionCategories.slice(0, 4);
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we build"
            title={<>AI solutions we <span className="text-gradient">design and build</span></>}
            lead="Production-ready systems across the enterprise AI stack — engineered for real business problems, security and long-term maintainability."
          />
          <Button href="/portfolio" variant="secondary" withArrow>
            View portfolio
          </Button>
        </div>

        <div className="mt-14">
          <FeatureGrid features={featured} columns={2} />
        </div>
      </div>
    </section>
  );
}

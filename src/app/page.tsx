import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/shared/LogoMarquee";
import { ScrollingText } from "@/components/home/ScrollingText";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { SolutionsBento } from "@/components/home/SolutionsBento";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStack } from "@/components/home/TechStack";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { Metrics } from "@/components/home/Metrics";
import { Testimonials } from "@/components/home/Testimonials";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { CTASection } from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="container">
        <LogoMarquee />
      </div>
      <ServicesShowcase />
      <ScrollingText />
      <SolutionsBento />
      <ProcessTimeline />
      <TechStack />
      <IndustriesSection />
      <Metrics />
      <Testimonials />
      <PortfolioPreview />
      <BlogPreview />
      <HomeFAQ />
      <CTASection />
    </>
  );
}

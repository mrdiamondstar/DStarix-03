import type { Metadata } from "next";
import { Rocket, Globe2, GraduationCap, HeartPulse, Coins, CalendarClock, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FeatureGrid, type Feature } from "@/components/shared/FeatureGrid";
import { StatBand } from "@/components/shared/StatBand";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading, Chip } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { jobs, companyValues, type Stat } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers — DStarix Techno",
  description:
    "Join a team that ships production AI for the world's most demanding organizations. Remote-first, high-ownership and deeply technical.",
};

const perks: Feature[] = [
  {
    title: "Remote-first, globally",
    description: "Work from anywhere across our three delivery hubs. We hire for talent, not timezone.",
    icon: Globe2,
  },
  {
    title: "Ship real systems",
    description: "No perpetual R&D. Your work reaches production and real users within weeks, not years.",
    icon: Rocket,
  },
  {
    title: "Learning budget",
    description: "An annual stipend for conferences, courses and compute to keep your edge sharp.",
    icon: GraduationCap,
  },
  {
    title: "Health & wellbeing",
    description: "Comprehensive medical cover for you and your family, plus wellness support.",
    icon: HeartPulse,
  },
  {
    title: "Meaningful equity",
    description: "Every full-time teammate is an owner with a real stake in what we build together.",
    icon: Coins,
  },
  {
    title: "Flexible time off",
    description: "Take the time you need to do your best work. Rest is part of the craft.",
    icon: CalendarClock,
  },
];

const cultureStats: Stat[] = [
  { value: 3, suffix: " hubs", label: "Bengaluru · San Francisco · London" },
  { value: 40, suffix: "+", label: "Engineers, researchers & designers" },
  { value: 92, suffix: "%", label: "Offer acceptance rate" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Team satisfaction score" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        icon={Rocket}
        title="Do the best work of your career, on AI that"
        highlight="actually ships"
        lead="We are a small, senior team building production AI for enterprises that can't afford to fail. If you want ownership, rigor and real impact, you'll feel at home here."
        primaryCta={{ label: "See open roles", href: "#open-roles" }}
        secondaryCta={{ label: "Introduce yourself", href: "/contact" }}
      />

      {/* Why work here */}
      <Section>
        <div className="container">
          <SectionHeading
            eyebrow="Why DStarix"
            title={<>A place built for people who <span className="text-gradient">love the craft</span></>}
            lead="We keep the team small and the bar high, then give you everything you need to do the best work of your life."
          />
          <div className="mt-12">
            <FeatureGrid features={perks} columns={3} />
          </div>
        </div>
      </Section>

      {/* Open roles */}
      <Section id="open-roles" className="section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title={<>Come <span className="text-gradient">build with us</span></>}
            lead="Every role is full-time and remote-friendly. Don't see a perfect fit? We still want to hear from you."
          />
          <Stagger className="mt-12 space-y-4">
            {jobs.map((job) => (
              <StaggerItem key={job.slug}>
                <div className="glass-dark flex flex-col gap-5 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{job.title}</h3>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <Chip className="border-white/10 bg-white/5 text-white/70">
                        <Users className="h-3.5 w-3.5" />
                        {job.team}
                      </Chip>
                      <Chip className="border-white/10 bg-white/5 text-white/70">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </Chip>
                      <Chip className="border-white/10 bg-white/5 text-white/70">{job.type}</Chip>
                    </div>
                  </div>
                  <Button href="/contact" variant="glass" withArrow>
                    Apply
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Values strip */}
      <Section>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="How we work"
            title={<>The principles you'll <span className="text-gradient">live every day</span></>}
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((value) => (
              <StaggerItem key={value.title}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 backdrop-blur transition-colors hover:border-electric/30">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-ink-900 text-white">
                    <value.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold tracking-tight">{value.title}</h3>
                    <p className="mt-1 text-sm text-muted">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Culture stats */}
      <Section className="pt-0">
        <div className="container">
          <Reveal>
            <StatBand items={cultureStats} />
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Don't see your role?"
        highlight="Introduce yourself."
        lead="We're always looking for exceptional engineers, researchers and designers. Tell us what you'd want to build and we'll find a way to talk."
        primary={{ label: "Get in touch", href: "/contact" }}
        secondary={{ label: "About the team", href: "/about" }}
      />
    </>
  );
}

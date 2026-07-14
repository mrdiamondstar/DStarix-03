import type { Metadata } from "next";
import { Building2, Target, Compass, Cpu } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { FeatureGrid } from "@/components/shared/FeatureGrid";
import { StatBand } from "@/components/shared/StatBand";
import { Section, SectionHeading } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { companyValues, timeline, leadership, techStack } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — DStarix Techno",
  description:
    "We are an applied AI studio that ships production systems, not demos. Meet the team, our story and the principles behind our work.",
};

const avatarGradients = [
  "from-electric to-violet",
  "from-violet to-cyan",
  "from-cyan to-electric",
  "from-electric to-cyan",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        icon={Building2}
        title="We build AI that leaves the demo and"
        highlight="reaches production"
        lead="DStarix Techno is an applied AI studio. Since 2019 we have shipped 120+ systems for enterprises that need results they can measure, audit and trust."
        secondaryCta={{ label: "See open roles", href: "/careers" }}
      />

      {/* Mission + Vision */}
      <Section>
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="gradient-border h-full rounded-4xl border border-ink-900/[0.07] bg-white/70 p-9 shadow-card backdrop-blur">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white">
                <Target className="h-5.5 w-5.5" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">Our mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Put dependable AI to work inside the operations of serious organizations. We turn promising models
                into governed systems that resolve tickets, review contracts, forecast demand and answer questions —
                every day, at scale, with evidence.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="gradient-border h-full rounded-4xl border border-ink-900/[0.07] bg-white/70 p-9 shadow-card backdrop-blur">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-900 text-white">
                <Compass className="h-5.5 w-5.5" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight">Our vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                A world where every critical workflow has a safe, transparent AI collaborator — and where deploying
                one is a matter of engineering discipline, not luck. We are building the studio that makes that the
                default, not the exception.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our story"
            title={<>From research lab to <span className="text-gradient">global delivery</span></>}
            lead="Seven years of shipping AI in the hardest environments — regulated, high-stakes and unforgiving of hype."
          />
          <div className="relative mt-14">
            <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 sm:left-[9px]" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.06} className="relative pl-10 sm:pl-14">
                  <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-accent-gradient ring-4 ring-white/10 sm:h-5 sm:w-5" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-5">
                    <span className="font-display text-2xl font-semibold text-gradient">{item.year}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                      <p className="mt-1 max-w-2xl text-muted">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="container">
          <SectionHeading
            eyebrow="What we value"
            title={<>Principles we <span className="text-gradient">actually ship by</span></>}
            lead="These are not posters on a wall. They decide how we scope, build and stand behind every engagement."
          />
          <div className="mt-12">
            <FeatureGrid features={companyValues} columns={3} />
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title={<>The people <span className="text-gradient">accountable for outcomes</span></>}
            lead="Operators and researchers who have built and run AI systems where failure was not an option."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, i) => (
              <StaggerItem key={person.name}>
                <div className="glass-dark h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5">
                  <div
                    className={`grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} font-display text-xl font-semibold text-white`}
                  >
                    {initials(person.name)}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-electric">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{person.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="By the numbers"
            title={<>Seven years, measured in <span className="text-gradient">production impact</span></>}
          />
          <div className="mt-12">
            <StatBand />
          </div>
        </div>
      </Section>

      {/* Tech expertise */}
      <Section className="pt-0">
        <div className="container">
          <SectionHeading
            eyebrow="Technical depth"
            icon={Cpu}
            title={<>The stack behind <span className="text-gradient">every build</span></>}
            lead="Model-agnostic by design. We pick the right tools for accuracy, latency, cost and data residency — then wire them into a system built to last."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techStack.map((group) => (
              <StaggerItem key={group.category}>
                <div className="gradient-border h-full rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{group.category}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-sm text-ink-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      <CTASection
        title="Want to build with"
        highlight="a team that ships?"
        lead="Whether you're scoping a first pilot or scaling AI across the org, we'd love to hear what you're working on."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "Explore careers", href: "/careers" }}
      />
    </>
  );
}

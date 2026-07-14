import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Quote, Check } from "lucide-react";
import { Section } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/shared/CTASection";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case study — DStarix Techno" };
  return {
    title: `${project.title} — DStarix Techno`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pb-16 pt-36 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent_75%)]" />
          <div className="animate-float-slow absolute -left-20 top-10 h-96 w-96 rounded-full bg-electric/20 blur-[130px]" />
          <div className="animate-float absolute -right-16 top-24 h-96 w-96 rounded-full bg-violet/20 blur-[130px]" />
        </div>
        <div className="container relative">
          <div className="max-w-3xl">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to portfolio
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-medium text-white/70">
                {project.category}
              </span>
              <span>{project.client}</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{project.summary}</p>
          </div>

          {/* Outcome band */}
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {project.outcomes.map((o) => (
              <div key={o.label} className="bg-ink-900/60 p-6 backdrop-blur">
                <div className="font-display text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                  {o.value}
                </div>
                <div className="mt-1 text-sm text-white/55">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <Section>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-700">{project.overview}</p>
              </Reveal>

              <Reveal className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight">The challenge</h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-700">{project.challenge}</p>
              </Reveal>

              <Reveal className="mt-10">
                <h2 className="font-display text-2xl font-semibold tracking-tight">What we built</h2>
                <ul className="mt-5 space-y-4">
                  {project.approach.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-gradient text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-lg leading-relaxed text-ink-700">{a}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <figure className="gradient-border rounded-3xl border border-ink-900/[0.07] bg-white/70 p-8 shadow-card">
                  <Quote className="h-8 w-8 text-electric/40" />
                  <blockquote className="mt-4 font-display text-xl font-medium leading-snug tracking-tight text-ink-900 text-balance">
                    "{project.quote.text}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-medium text-muted">— {project.quote.author}</figcaption>
                </figure>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 shadow-card backdrop-blur">
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Client</h3>
                <p className="mt-1 font-display text-lg font-semibold tracking-tight">{project.client}</p>

                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Capability</h3>
                <p className="mt-1 text-ink-700">{project.category}</p>

                <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Stack</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-xs font-medium text-ink-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  <Button href="/contact" size="sm" withArrow>
                    Start something similar
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      {/* More work */}
      <Section className="pt-0">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            More <span className="text-gradient">work</span>
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/60 p-7 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div>
                  <span className="rounded-full border border-ink-900/10 bg-white px-3 py-1 text-xs font-medium text-electric">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-ink-900/[0.06] pt-5">
                  <div>
                    <div className="font-display text-3xl font-semibold tracking-tight text-gradient">{p.metric}</div>
                    <div className="text-xs text-muted">{p.metricLabel}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title="Your project could be"
        highlight="the next number here."
        lead="Bring us the outcome you need. We'll show you the fastest credible path to shipping it in production."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}

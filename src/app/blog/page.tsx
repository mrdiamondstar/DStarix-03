import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowUpRight, Mail } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { BlogList } from "@/components/blog/BlogList";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — DStarix Techno",
  description:
    "Field notes on shipping production AI: evaluation, retrieval, guardrails, inference economics and the engineering behind systems that work.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        icon={BookOpen}
        title="Field notes from the frontier of"
        highlight="applied AI"
        lead="No hype, no hand-waving. Practical writing on evaluation, retrieval, guardrails and the engineering that turns models into dependable systems."
        primaryCta={null}
      />

      {/* Featured post */}
      <Section>
        <div className="container">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              id={featured.slug}
              className="gradient-border group grid overflow-hidden rounded-4xl border border-ink-900/[0.07] bg-white/60 shadow-card backdrop-blur transition-all duration-500 hover:shadow-glow lg:grid-cols-2"
            >
              <div className="relative min-h-[240px] overflow-hidden bg-ink-900">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-ink-900/20" />
                <div className="relative flex h-full items-end p-8">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    Featured · {featured.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h2 className="font-display text-2xl font-semibold leading-tight tracking-tight text-balance sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-3 text-sm text-muted">
                  <span>{formatDate(featured.date)}</span>
                  <span aria-hidden>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-electric">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* All posts */}
      <Section className="pt-0">
        <div className="container">
          <SectionHeading eyebrow="Latest writing" title={<>All <span className="text-gradient">articles</span></>} />
          <div className="mt-10">
            <BlogList posts={rest} />
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section className="pt-0">
        <div className="container">
          <Reveal>
            <div className="gradient-border relative overflow-hidden rounded-4xl border border-ink-900/[0.07] bg-white/70 p-8 shadow-card backdrop-blur sm:p-12">
              <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <Eyebrow icon={Mail}>The DStarix dispatch</Eyebrow>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance">
                    One sharp idea on production AI, every other week.
                  </h2>
                  <p className="mt-3 text-muted">
                    No fluff. Just the evaluation, architecture and cost lessons we learn shipping systems — straight to
                    your inbox. Unsubscribe anytime.
                  </p>
                </div>
                <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row lg:w-auto">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    aria-label="Email address"
                    className="h-12 w-full rounded-full border border-ink-900/10 bg-white/80 px-5 text-ink-900 shadow-soft outline-none transition-all focus:border-electric focus:ring-4 focus:ring-electric/15 sm:w-72"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Have a problem worth"
        highlight="writing about?"
        lead="Bring us your hardest AI use case. We'll map a path to production — and maybe write the field notes together."
        primary={{ label: "Start a project", href: "/contact" }}
        secondary={{ label: "See our work", href: "/portfolio" }}
      />
    </>
  );
}

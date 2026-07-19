import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Primitives";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article — DStarix Techno" };
  return {
    title: `${post.title} — DStarix Techno`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden pb-12 pt-36 sm:pt-40">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent_75%)]" />
          <div className="animate-float-slow absolute -left-20 top-10 h-96 w-96 rounded-full bg-electric/20 blur-[130px]" />
          <div className="animate-float absolute -right-16 top-24 h-96 w-96 rounded-full bg-violet/20 blur-[130px]" />
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
            <div className="mt-6 flex items-center gap-3 text-xs text-white/55">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-medium text-white/70">
                {post.category}
              </span>
              <span>{post.readTime} read</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{post.excerpt}</p>
            <div className="mt-7 text-sm text-white/50">
              <span className="font-medium text-white/80">{post.authorRole}</span> · {formatDate(post.date)}
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div className="relative mt-10 sm:mt-12">
        <div className="container">
          <Reveal className="mx-auto max-w-4xl">
            <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-ink-900 shadow-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 56rem, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Article body */}
      <Section className="pt-14">
        <div className="container">
          <article className="mx-auto max-w-2xl">
            {post.content.map((section, i) => (
              <Reveal key={i} className={i === 0 ? "" : "mt-10"}>
                {section.heading && (
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-balance">
                    {section.heading}
                  </h2>
                )}
                {section.body?.map((p, j) => (
                  <p
                    key={j}
                    className={`text-lg leading-relaxed text-ink-700 ${section.heading || j > 0 ? "mt-4" : ""}`}
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-3">
                    {section.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-lg leading-relaxed text-ink-700">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gradient" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </article>
        </div>
      </Section>

      {/* More articles */}
      <Section className="pt-0">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Keep <span className="text-gradient">reading</span>
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/60 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink-900">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-electric">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-electric">
                    Read article
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
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

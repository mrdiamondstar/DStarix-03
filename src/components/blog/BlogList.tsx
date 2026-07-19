"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import type { BlogPost } from "@/lib/data";
import { cn } from "@/lib/utils";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Filterable grid of blog cards. */
export function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [posts]
  );
  const [active, setActive] = useState("All");
  const visible = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === c
                ? "border-transparent bg-ink-900 text-white shadow-soft"
                : "border-ink-900/10 bg-white/60 text-muted backdrop-blur hover:border-ink-900/25 hover:text-ink-900"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <StaggerItem key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              id={post.slug}
              className="gradient-border group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-white/60 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-ink-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-ink-900/0 to-ink-900/0" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink-900">
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-balance">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink-900/[0.06] pt-5 text-xs text-muted">
                  <div className="flex items-center gap-3">
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-900" />
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

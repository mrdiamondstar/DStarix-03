import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";

export interface TocEntry {
  id: string;
  label: string;
}

/**
 * Shared layout for legal documents (Privacy, Terms).
 * Renders the dark hero, a sticky table-of-contents rail and a
 * readable prose column. Prose styling is applied via Tailwind
 * arbitrary-variant selectors so page markup stays clean semantic HTML.
 */
export function LegalLayout({
  title,
  updated,
  intro,
  toc,
  children,
}: {
  title: string;
  updated: string;
  intro?: string;
  toc: TocEntry[];
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        lead={intro}
        icon={Scale}
        align="left"
        primaryCta={null}
      />

      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Last updated
              </p>
              <p className="mb-6 font-display text-sm font-medium">{updated}</p>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                On this page
              </p>
              <nav className="flex flex-col gap-2.5 border-l border-ink-900/[0.08] pl-4 text-sm">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="text-muted transition-colors hover:text-electric"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Document body */}
            <article
              className="
                max-w-3xl
                [&_section]:scroll-mt-28
                [&_h2]:mb-4 [&_h2]:mt-14 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight
                [&_section:first-child_h2]:mt-0
                [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold
                [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted
                [&_ul]:mb-4 [&_ul]:mt-1 [&_ul]:space-y-2 [&_ul]:pl-5
                [&_li]:list-disc [&_li]:leading-relaxed [&_li]:text-muted [&_li]:marker:text-electric
                [&_strong]:font-semibold [&_strong]:text-ink-900
                [&_a]:font-medium [&_a]:text-electric hover:[&_a]:text-violet
              "
            >
              {children}
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

import type { LucideIcon } from "lucide-react";
import { Eyebrow, Gradient } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * Standard inner-page hero used by every non-home page for a
 * consistent, premium entrance. Dark, with ambient orbs + grid.
 *
 * Server component (CSS entrance animations) so pages can pass Lucide
 * icon components without crossing the client boundary.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  lead,
  icon,
  primaryCta = { label: "Get started", href: "/contact" },
  secondaryCta,
  align = "center",
  children,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  lead?: string;
  icon?: LucideIcon;
  primaryCta?: { label: string; href: string } | null;
  secondaryCta?: { label: string; href: string };
  align?: "center" | "left";
  children?: React.ReactNode;
}) {
  return (
    <section className="section-dark relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      {/* Ambient */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] [mask-image:radial-gradient(80%_60%_at_50%_0%,#000,transparent_75%)]" />
        <div className="animate-float-slow absolute -left-20 top-10 h-96 w-96 rounded-full bg-electric/25 blur-[130px]" />
        <div className="animate-float absolute -right-16 top-24 h-96 w-96 rounded-full bg-violet/25 blur-[130px]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container relative">
        <div className={cn("flex max-w-3xl flex-col gap-6", align === "center" && "mx-auto items-center text-center")}>
          {eyebrow && (
            <div className="reveal-in">
              <Eyebrow icon={icon} className="border-white/15 bg-white/5 text-white/70">
                {eyebrow}
              </Eyebrow>
            </div>
          )}
          <h1
            className="reveal-in font-display text-4xl font-semibold leading-[1.03] tracking-tight text-balance sm:text-6xl"
            style={{ animationDelay: "0.06s" }}
          >
            {title} {highlight && <Gradient>{highlight}</Gradient>}
          </h1>
          {lead && (
            <p
              className="reveal-in max-w-2xl text-lg leading-relaxed text-white/65"
              style={{ animationDelay: "0.16s" }}
            >
              {lead}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div
              className="reveal-in mt-2 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "0.26s" }}
            >
              {primaryCta && (
                <Button href={primaryCta.href} withArrow>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="glass">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

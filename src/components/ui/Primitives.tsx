import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/* ---------------------------------------------------------------
   Small, dependency-light building blocks shared across pages.
   --------------------------------------------------------------- */

/** Pill eyebrow above section headings. */
export function Eyebrow({
  children,
  icon: Icon,
  className,
}: {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "site-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-ink-900/10 bg-white/60 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-muted backdrop-blur",
        className
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5 text-electric" />}
      {children}
    </span>
  );
}

/** Standard section header: eyebrow + title + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
  icon,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  icon?: LucideIcon;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow icon={icon}>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className={cn("max-w-2xl text-lg leading-relaxed text-muted", align === "center" && "mx-auto")}>
          {lead}
        </p>
      )}
    </div>
  );
}

/** Section wrapper with consistent vertical rhythm. */
export function Section({
  children,
  className,
  id,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-14 sm:py-20",
        dark && "section-dark",
        className
      )}
    >
      {children}
    </section>
  );
}

/** Glass card surface. */
export function GlassCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return (
    <Tag
      className={cn(
        "gradient-border rounded-3xl border border-ink-900/[0.07] bg-white/70 p-6 shadow-card backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-glow",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/** Gradient text span. */
export function Gradient({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("text-gradient animate-gradient-pan", className)}>{children}</span>;
}

/** Small status/label chip. */
export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white/70 px-3 py-1 text-xs font-medium text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Breadcrumb-ish back link for legal/detail pages. */
export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("underline-grow font-medium text-electric hover:text-violet transition-colors", className)}
    >
      {children}
    </Link>
  );
}

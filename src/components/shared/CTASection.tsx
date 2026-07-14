import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Gradient } from "@/components/ui/Primitives";

/** Large closing call-to-action band used across pages. */
export function CTASection({
  title = "Ready to build AI that",
  highlight = "actually delivers?",
  lead = "Book a discovery call. We'll map the highest-value use case in your business and show you a path to production.",
  primary = { label: "Start a project", href: "/contact" },
  secondary = { label: "See pricing", href: "/pricing" },
}: {
  title?: string;
  highlight?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="container">
        <Reveal>
          <div className="gradient-border relative overflow-hidden rounded-4xl bg-ink-900 px-6 py-16 text-center text-white sm:px-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="animate-float-slow absolute -left-10 top-0 h-72 w-72 rounded-full bg-electric/30 blur-[110px]" />
              <div className="animate-float absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-violet/30 blur-[110px]" />
              <div className="absolute inset-0 bg-grid-dark bg-[size:48px_48px] opacity-30 [mask-image:radial-gradient(60%_60%_at_50%_50%,#000,transparent)]" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance sm:text-5xl">
                {title} <Gradient>{highlight}</Gradient>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">{lead}</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button href={primary.href} variant="secondary" withArrow>
                  {primary.label}
                </Button>
                <Button href={secondary.href} variant="glass">
                  {secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

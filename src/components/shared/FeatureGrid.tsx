import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

/** Responsive grid of icon feature cards with hover lift + gradient border. */
export function FeatureGrid({
  features,
  columns = 3,
  className,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <Stagger className={cn("grid gap-5", cols, className)}>
      {features.map((f) => (
        <StaggerItem key={f.title}>
          <div className="gradient-border group h-full rounded-3xl border border-ink-900/[0.07] bg-white/60 p-7 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent-gradient">
              <f.icon className="h-5.5 w-5.5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/lib/data";

/**
 * Trusted-by strip: uniform monochrome wordmarks in an infinite marquee.
 * Colors are token-driven (`text-muted` / `var(--fg)` / `var(--line)`) so the
 * band reads correctly on both light and `.section-dark` surfaces.
 */
export function LogoMarquee({ label = "Trusted by teams shipping AI in production" }: { label?: string }) {
  return (
    <div className="border-y border-[color:var(--line)] py-12 sm:py-14">
      <p className="mb-9 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
        {label}
      </p>
      <Marquee speed={38}>
        {clientLogos.map((logo) => (
          <span
            key={logo}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted opacity-70 transition-[color,opacity] duration-300 hover:text-[color:var(--fg)] hover:opacity-100 sm:text-2xl"
          >
            {logo}
          </span>
        ))}
      </Marquee>
    </div>
  );
}

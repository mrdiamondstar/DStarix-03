import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * DStarix brand wordmark — a continuous blue gradient across the letters
 * with the signature star dotting the "i". No external asset; renders
 * crisply at any size and adapts to dark / light surfaces.
 */
export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  const starId = dark ? "dstarix-star-dark" : "dstarix-star-light";
  const stemGradient = dark
    ? "linear-gradient(to bottom right, #60a5fa, #2563eb)"
    : "linear-gradient(to bottom right, #2563eb, #1e3a8a)";

  return (
    <Link
      href="/"
      aria-label="DStarix Techno home"
      className={cn("group inline-flex items-center gap-2.5 leading-none", className)}
    >
      {/* Brand "D" mark — matches the site favicon */}
      <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-lg shadow-glow ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-105">
        <svg viewBox="0 0 32 32" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="dstarix-d-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#17b6d4" />
              <stop offset="0.5" stopColor="#1f6fc4" />
              <stop offset="1" stopColor="#173f86" />
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="#ffffff" />
          <path
            fill="url(#dstarix-d-grad)"
            fillRule="evenodd"
            d="M8 6H16.5A10 10 0 0 1 16.5 26H8ZM12.5 10.5H15.5A5.5 5.5 0 0 1 15.5 21.5H12.5Z"
          />
        </svg>
      </span>

      <span className="inline-flex items-baseline font-display text-2xl font-bold tracking-tight transition-transform duration-500 group-hover:scale-[1.02]">
        {/* Single gradient clipped across the letter groups for continuity */}
        <span
          className={cn(
            "bg-clip-text text-transparent",
            dark
              ? "bg-gradient-to-br from-sky-300 via-electric-400 to-violet-400"
              : "bg-gradient-to-br from-sky-400 via-electric-600 to-[#1e3a8a]"
          )}
        >
          DStar
        </span>

        {/* Custom "i": gradient stem with the signature star as its dot */}
        <span
          className="relative mx-[0.05em] inline-block align-baseline"
          style={{ width: "0.2em", height: "0.78em" }}
          aria-hidden
        >
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-[0.05em]"
            style={{ width: "0.155em", height: "0.5em", backgroundImage: stemGradient }}
          />
          <svg
            viewBox="0 0 24 24"
            className="absolute left-1/2 top-0 h-[0.32em] w-[0.32em] -translate-x-1/2 transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-110"
          >
            <defs>
              <linearGradient id={starId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor={dark ? "#60a5fa" : "#1e3a8a"} />
              </linearGradient>
            </defs>
            <path
              d="M12 1.6l2.86 6.19 6.79.72-5.05 4.57 1.38 6.71L12 17.5l-5.96 3.09 1.38-6.71L2.37 8.51l6.79-.72z"
              fill={`url(#${starId})`}
            />
          </svg>
        </span>

        <span
          className={cn(
            "bg-clip-text text-transparent",
            dark
              ? "bg-gradient-to-br from-violet-400 to-violet-500"
              : "bg-gradient-to-br from-electric-600 to-[#1e3a8a]"
          )}
        >
          x
        </span>
      </span>

      <span
        className={cn(
          "font-display text-xl font-semibold tracking-tight",
          dark ? "text-white/85" : "text-ink-900/80"
        )}
      >
        Techno
      </span>
    </Link>
  );
}

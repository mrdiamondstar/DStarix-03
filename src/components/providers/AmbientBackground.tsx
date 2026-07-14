"use client";

/**
 * Fixed ambient layer: subtle grid + drifting gradient blobs.
 * Rendered once behind all page content.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid-light bg-[size:64px_64px] [mask-image:radial-gradient(90%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      {/* Drifting blobs */}
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-electric/20 blur-[130px] animate-float-slow" />
      <div className="absolute right-[-12%] top-[18%] h-[460px] w-[460px] rounded-full bg-violet/20 blur-[130px] animate-float" />
      <div className="absolute bottom-[-10%] left-1/3 h-[420px] w-[420px] rounded-full bg-cyan/10 blur-[120px] animate-float-slow" />
    </div>
  );
}

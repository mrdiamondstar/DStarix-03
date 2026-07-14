"use client";

import Link from "next/link";
import { useRef, useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "glass";
type Size = "sm" | "md" | "lg";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
}

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-ink-900 hover:bg-ink-800 shadow-[0_10px_30px_-12px_rgba(59,130,246,0.5)]",
  secondary:
    "text-ink-900 bg-white border border-ink-900/10 hover:border-ink-900/25 shadow-soft",
  ghost: "text-ink-900 hover:bg-ink-900/5",
  glass: "text-white glass-dark hover:bg-white/10",
};

/**
 * Magnetic, ripple-on-click button. Renders as <Link> when href is set.
 */
export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    href,
    variant = "primary",
    size = "md",
    className,
    withArrow = false,
    magnetic = true,
    onClick,
    type = "button",
    ariaLabel,
    disabled = false,
  },
  _ref
) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const onMove = (e: React.MouseEvent) => {
    if (!magnetic || !wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    wrapRef.current.style.transform = `translate(${mx * 0.18}px, ${my * 0.28}px)`;
  };
  const onLeave = () => {
    if (wrapRef.current) wrapRef.current.style.transform = "translate(0,0)";
  };
  const spawnRipple = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((p) => [...p, { x: e.clientX - r.left, y: e.clientY - r.top, id }]);
    setTimeout(() => setRipples((p) => p.filter((rp) => rp.id !== id)), 650);
  };

  const inner = (
    <motion.span
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "shine relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-[background-color,border-color,transform] duration-300 ease-smooth",
        sizes[size],
        variants[variant],
        className
      )}
      whileTap={{ scale: 0.97 }}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        )}
      </span>
      {ripples.map((rp) => (
        <span
          key={rp.id}
          className="pointer-events-none absolute z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
          style={{ left: rp.x, top: rp.y, animation: "pulse-ring 0.65s ease-out forwards" }}
        />
      ))}
    </motion.span>
  );

  const shared = "group/btn inline-flex";
  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target="_blank" rel="noreferrer" className={shared} aria-label={ariaLabel} onClick={spawnRipple}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={shared} aria-label={ariaLabel} onClick={spawnRipple}>
        {inner}
      </Link>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={(e) => { if (!disabled) { spawnRipple(e); onClick?.(); } }}
      className={cn(shared, disabled && "cursor-not-allowed opacity-60")}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
});

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { primaryNav, type NavGroup } from "@/lib/data";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobile(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  // Adaptive link colors: light over the dark hero, dark once the glass bar appears.
  const idle = scrolled ? "text-ink-700 hover:text-ink-900" : "text-white/75 hover:text-white";
  const active = scrolled ? "text-ink-900" : "text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[90] transition-all duration-500 ease-smooth",
        scrolled ? "py-2.5" : "py-4"
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <div className="container relative">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "glass border border-ink-900/10 shadow-soft"
              : "border border-transparent"
          )}
        >
          <Logo dark={!scrolled} />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((group) => (
              <li key={group.label} onMouseEnter={() => setOpen(group.columns ? group.label : null)}>
                {group.href && !group.columns ? (
                  <Link
                    href={group.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      idle,
                      pathname === group.href && active
                    )}
                  >
                    {group.label}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      idle,
                      open === group.label && active
                    )}
                  >
                    {group.label}
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 transition-transform", open === group.label && "rotate-180")}
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/contact" variant={scrolled ? "ghost" : "glass"} size="sm">
              Talk to us
            </Button>
            <Button href="/contact" size="sm" withArrow>
              Get started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "grid h-10 w-10 place-items-center rounded-xl border transition-colors lg:hidden",
              scrolled ? "border-ink-900/10 text-ink-900" : "border-white/20 text-white"
            )}
            onClick={() => setMobile((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {open && (
            <MegaMenu group={primaryNav.find((g) => g.label === open)!} />
          )}
        </AnimatePresence>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>{mobile && <MobileMenu onClose={() => setMobile(false)} />}</AnimatePresence>
    </header>
  );
}

function MegaMenu({ group }: { group: NavGroup }) {
  if (!group.columns) return null;
  return (
    <motion.div
      // x:"-50%" keeps the panel centered under left-1/2 — a Tailwind -translate-x-1/2
      // class would be clobbered by Framer's inline transform, so we animate x here instead.
      initial={{ opacity: 0, y: 8, x: "-50%" }}
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      exit={{ opacity: 0, y: 8, x: "-50%" }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-full mt-2 w-[min(920px,92vw)]"
    >
      <div className="glass overflow-hidden rounded-3xl border border-ink-900/10 p-2 shadow-glow">
        <div className="grid gap-1 p-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.columns.map((col) => (
            <div key={col.title} className="p-2">
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {col.title}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-ink-900/[0.04]"
                    >
                      {link.icon && (
                        <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-gradient/10 text-electric ring-1 ring-ink-900/5">
                          <link.icon className="h-4 w-4" />
                        </span>
                      )}
                      <span>
                        <span className="flex items-center gap-1 text-sm font-medium text-ink-900">
                          {link.label}
                          <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                        </span>
                        {link.description && (
                          <span className="mt-0.5 block text-xs text-muted">{link.description}</span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 top-[68px] z-[85] overflow-y-auto bg-white/95 px-5 pb-16 pt-4 backdrop-blur-xl lg:hidden"
    >
      <div className="space-y-1">
        {primaryNav.map((group) => (
          <div key={group.label} className="border-b border-ink-900/[0.06] py-2">
            {group.href && !group.columns ? (
              <Link href={group.href} className="block py-2 text-lg font-medium" onClick={onClose}>
                {group.label}
              </Link>
            ) : (
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-lg font-medium">
                  {group.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="space-y-3 pb-3 pl-1 pt-1">
                  {group.columns?.map((col) => (
                    <div key={col.title}>
                      <p className="px-1 py-1 text-xs font-semibold uppercase tracking-wider text-muted">{col.title}</p>
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-3 rounded-xl px-1 py-2 text-sm text-ink-700"
                          onClick={onClose}
                        >
                          {link.icon && <link.icon className="h-4 w-4 text-electric" />}
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <Button href="/contact" withArrow>
          Get started
        </Button>
        <Button href="/contact" variant="secondary">
          Talk to us
        </Button>
      </div>
    </motion.div>
  );
}

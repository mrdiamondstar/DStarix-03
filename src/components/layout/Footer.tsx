"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter, Youtube, Check, Loader2, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/lib/web3forms";

const columns = [
  {
    title: "Services",
    links: [
      { label: "Generative AI", href: "/generative-ai" },
      { label: "Agentic AI", href: "/agentic-ai" },
      { label: "RAG Solutions", href: "/rag-solutions" },
      { label: "Custom LLM Development", href: "/custom-llm-development" },
      { label: "Workflow Automation", href: "/workflow-automation" },
      { label: "Voice AI", href: "/voice-ai" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AI Solutions", href: "/ai-solutions" },
      { label: "Enterprise AI", href: "/enterprise-ai" },
      { label: "AI Consulting", href: "/ai-consulting" },
      { label: "AI Development", href: "/ai-development" },
      { label: "AI Automation", href: "/ai-automation" },
      { label: "AI Chatbots", href: "/ai-chatbots" },
      { label: "Industries", href: "/industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/dstarix-techno/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New newsletter subscription — Dstarix website");
    formData.append("email", email);
    formData.append("from_name", "Dstarix newsletter");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
        setEmail("");
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="section-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-electric/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-violet/20 blur-[120px]" />
        <div className="absolute inset-0 bg-grid-dark bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(70%_60%_at_50%_0%,#000,transparent)]" />
      </div>

      <div className="container relative">
        {/* CTA / newsletter band */}
        <div className="grid gap-10 border-b border-white/10 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="max-w-md font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Build AI that ships. <span className="text-gradient">Let's talk.</span>
            </h2>
            <p className="mt-3 max-w-md text-white/60">
              Get research notes and delivery playbooks from the team. No spam — unsubscribe anytime.
            </p>
          </div>
          <form
            className="w-full"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubscribe}
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={sent}
                  placeholder="you@company.com"
                  className="peer h-14 w-full rounded-full border border-white/15 bg-white/[0.06] pl-12 pr-5 text-[15px] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] placeholder:text-white/45 outline-none transition-all focus:border-electric focus:bg-white/[0.1] focus:ring-2 focus:ring-electric/25 disabled:opacity-60"
                />
                <Mail className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40 transition-colors peer-focus:text-electric" />
              </div>
              <button
                type="submit"
                disabled={loading || sent}
                className={cn(
                  "group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full px-8 font-medium transition-all disabled:cursor-not-allowed",
                  sent ? "bg-emerald-500 text-white" : "bg-white text-ink-900 hover:bg-white/90"
                )}
              >
                {sent ? (
                  <>
                    Subscribed <Check className="h-4 w-4" />
                  </>
                ) : loading ? (
                  <>
                    Subscribing <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
          </form>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              DStarix Techno builds enterprise AI systems that deliver measurable business value — from
              generative and agentic products to private, production-grade deployments.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/70 transition-all hover:-translate-y-0.5 hover:border-electric hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} DStarix Techno. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

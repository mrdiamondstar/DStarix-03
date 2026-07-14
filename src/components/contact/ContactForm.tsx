"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const interests = [
  "Start a pilot",
  "Scope a full build",
  "Enterprise partnership",
  "Private / on-prem deployment",
  "AI strategy & consulting",
  "Something else",
];

const fieldClass =
  "peer w-full rounded-2xl border border-ink-900/10 bg-white/70 px-4 pb-2.5 pt-6 text-ink-900 shadow-soft outline-none backdrop-blur transition-all duration-300 placeholder-transparent focus:border-electric focus:ring-4 focus:ring-electric/15";
const labelClass =
  "pointer-events-none absolute left-4 top-4 text-sm text-muted transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-electric peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs";

const WEB3FORMS_ACCESS_KEY = "fb80d32c-042c-4758-b832-7d09b8b321ac";

/** Premium contact form with floating labels, wired to Web3Forms. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New inquiry from Dstarix website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setSent(true);
        form.reset();
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="gradient-border flex h-full min-h-[520px] flex-col items-center justify-center rounded-4xl border border-ink-900/[0.07] bg-white/70 p-10 text-center shadow-card backdrop-blur">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-accent-gradient text-white">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">Message received</h3>
        <p className="mt-3 max-w-sm text-muted">
          Thanks for reaching out. One of our solutions leads will reply within one business day — usually much sooner.
        </p>
        <button
          onClick={() => setSent(false)}
          className="underline-grow mt-6 text-sm font-medium text-electric transition-colors hover:text-violet"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="gradient-border flex h-full flex-col rounded-4xl border border-ink-900/[0.07] bg-white/70 p-7 shadow-card backdrop-blur sm:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="relative">
          <input id="name" name="name" type="text" required placeholder="Full name" className={fieldClass} />
          <label htmlFor="name" className={labelClass}>Full name</label>
        </div>
        <div className="relative">
          <input id="email" name="email" type="email" required placeholder="Work email" className={fieldClass} />
          <label htmlFor="email" className={labelClass}>Work email</label>
        </div>
      </div>

      <div className="relative mt-4">
        <input id="company" name="company" type="text" placeholder="Company" className={fieldClass} />
        <label htmlFor="company" className={labelClass}>Company</label>
      </div>

      <div className="relative mt-4">
        <select
          id="interest"
          name="interest"
          defaultValue=""
          required
          className="w-full appearance-none rounded-2xl border border-ink-900/10 bg-white/70 px-4 py-4 text-ink-900 shadow-soft outline-none backdrop-blur transition-all duration-300 focus:border-electric focus:ring-4 focus:ring-electric/15"
        >
          <option value="" disabled>
            What can we help with?
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mt-4 flex-1">
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your project"
          className={`${fieldClass} h-full min-h-[8.5rem] resize-none`}
        />
        <label htmlFor="message" className={labelClass}>Tell us about your project</label>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">We reply within one business day. No spam, ever.</p>
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

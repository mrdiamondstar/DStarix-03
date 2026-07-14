import type { Metadata } from "next";
import { MessagesSquare, Mail, MapPin, Clock, CalendarCheck, Navigation } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/ui/Primitives";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { offices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — DStarix Techno",
  description:
    "Tell us about your AI project. We reply within one business day and can have a discovery call scoped within the week.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        icon={MessagesSquare}
        title="Let's scope your"
        highlight="highest-value use case"
        lead="Share a few details and one of our solutions leads will get back to you within a business day — usually much sooner."
        primaryCta={null}
      />

      <Section>
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Left: form */}
            <Reveal direction="right">
              <ContactForm />
            </Reveal>

            {/* Right: info */}
            <Reveal direction="left" className="flex flex-col gap-6">
              {/* Response promise */}
              <div className="gradient-border rounded-3xl border border-ink-900/[0.07] bg-white/70 p-7 shadow-card backdrop-blur">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-white">
                    <Clock className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">One business day, guaranteed</h3>
                    <p className="mt-1 text-sm text-muted">
                      Every enquiry is answered by a real engineer, not a bot or a queue.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct email */}
              <a
                href="mailto:contact@dstarix.in"
                className="group flex items-center gap-4 rounded-3xl border border-ink-900/[0.07] bg-white/60 p-6 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink-900 text-white transition-colors group-hover:bg-accent-gradient">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">Official Mail</p>
                  <p className="mt-0.5 font-display font-semibold tracking-tight">contact@dstarix.in</p>
                </div>
              </a>

              {/* Map placeholder */}
              <div className="relative h-52 overflow-hidden rounded-3xl border border-ink-900/[0.07] bg-ink-900 shadow-card">
                <div aria-hidden className="pointer-events-none absolute inset-0">
                  <div className="absolute inset-0 bg-grid-dark bg-[size:32px_32px] opacity-40" />
                  <div className="animate-float-slow absolute -left-10 top-4 h-52 w-52 rounded-full bg-electric/25 blur-[90px]" />
                  <div className="animate-float absolute -right-8 bottom-2 h-52 w-52 rounded-full bg-violet/25 blur-[90px]" />
                </div>
                <div className="relative flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-accent-gradient text-white shadow-glow">
                    <MapPin className="h-5.5 w-5.5" />
                  </span>
                  <p className="mt-3 text-sm font-medium text-white">Delivery pods across India</p>
                  <p className="text-xs text-white/50">Bengaluru · Belagavi · Hyderabad</p>
                </div>
              </div>

              {/* Offices */}
              <Stagger className="grid gap-4 sm:grid-cols-3">
                {offices.map((office) => (
                  <StaggerItem key={office.city}>
                    <div className="h-full rounded-3xl border border-ink-900/[0.07] bg-white/60 p-5 backdrop-blur transition-colors hover:border-electric/30">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-electric">{office.label}</p>
                      <p className="mt-2 font-display font-semibold tracking-tight">{office.city}</p>
                      <p className="text-xs text-muted">{office.country}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{office.address}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>

              {/* Calendly placeholder */}
              <div className="gradient-border flex items-center justify-between gap-4 rounded-3xl border border-ink-900/[0.07] bg-white/70 p-6 shadow-card backdrop-blur">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink-900 text-white">
                    <CalendarCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold tracking-tight">Rather just book a slot?</h3>
                    <p className="mt-0.5 text-sm text-muted">Grab 30 minutes with a solutions lead.</p>
                  </div>
                </div>
                <Navigation className="h-5 w-5 shrink-0 text-electric" />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}

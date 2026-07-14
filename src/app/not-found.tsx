import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Gradient } from "@/components/ui/Primitives";

export default function NotFound() {
  return (
    <section className="section-dark relative flex min-h-[100svh] items-center overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark bg-[size:60px_60px] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)]" />
        <div className="animate-float-slow absolute left-1/4 top-1/4 h-80 w-80 rounded-full bg-electric/25 blur-[130px]" />
        <div className="animate-float absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet/25 blur-[130px]" />
      </div>
      <div className="container relative text-center">
        <p className="font-display text-[10rem] font-semibold leading-none tracking-tight sm:text-[16rem]">
          <Gradient>404</Gradient>
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          This page drifted off the graph.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-white/60">
          The route you're after doesn't exist — but our AI systems most certainly do.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" withArrow>
            Back home
          </Button>
          <Button href="/contact" variant="glass">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}

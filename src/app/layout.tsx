import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import DeferredChrome from "@/components/providers/DeferredChrome";
import AmbientBackground from "@/components/providers/AmbientBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Fonts. Inter (body), Space Grotesk (display headlines), JetBrains Mono (code).
 * Swap in Satoshi / General Sans via a self-hosted @font-face if licensed.
 */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE = "https://dstarix.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "DStarix Techno — Enterprise AI Systems That Deliver Business Value",
    template: "%s — DStarix Techno",
  },
  description:
    "DStarix Techno designs and builds enterprise AI systems — generative, agentic, RAG and private deployments — that ship to production and deliver measurable business value.",
  keywords: [
    "Enterprise AI", "Generative AI", "Agentic AI", "RAG", "LLM development",
    "AI consulting", "AI automation", "Voice AI", "AI chatbots", "MLOps",
  ],
  authors: [{ name: "DStarix Techno" }],
  creator: "DStarix Techno",
  openGraph: {
    type: "website",
    url: SITE,
    title: "DStarix Techno — Enterprise AI Systems That Deliver Business Value",
    description:
      "Enterprise AI systems that ship to production and deliver measurable business value.",
    siteName: "DStarix Techno",
  },
  twitter: {
    card: "summary_large_image",
    title: "DStarix Techno — Enterprise AI Systems",
    description: "Enterprise AI that ships to production and delivers business value.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DStarix Techno",
    url: SITE,
    description: "Enterprise AI systems that deliver business value.",
    sameAs: ["https://twitter.com", "https://linkedin.com", "https://github.com"],
  };

  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AmbientBackground />
        <div className="noise" aria-hidden />
        <DeferredChrome />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main id="main">{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
        {/* Skip link for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>

        {/* Vercel Web Analytics — auto-tracks page views on Vercel deployments */}
        <Analytics />
        {/* Vercel Speed Insights — collects Core Web Vitals / performance metrics */}
        <SpeedInsights />
        {/* Google Analytics — only rendered when a measurement ID is configured */}
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  );
}

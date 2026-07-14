import type { Metadata } from "next";
import { AudioLines, Zap, Phone, Languages, UserCog, Database, ShieldCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Voice AI",
  description:
    "Low-latency voice agents for support, scheduling and telephony — with lifelike turn-taking, barge-in, multilingual speech and SIP integration.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="Voice AI"
      icon={AudioLines}
      title="Voice agents that sound"
      highlight="genuinely human"
      lead="We build real-time voice agents that listen, understand and respond with natural turn-taking — handling calls for support, scheduling and telephony fast enough to feel like a real conversation."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            The latency budget behind a <span className="text-gradient">natural conversation</span>
          </>
        ),
        body:
          "Voice lives and dies on responsiveness. We engineer the full pipeline — streaming speech recognition, reasoning, and synthesis — to keep round-trip latency under half a second, with barge-in so callers can interrupt just like they would with a person.",
        points: [
          "Sub-500ms response latency for conversations that don't feel robotic",
          "Barge-in and natural turn-taking so callers can interrupt and be understood",
          "Telephony integration over SIP for inbound and outbound call handling",
          "Grounded answers and real actions, not just scripted phone-tree responses",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            Real-time speech, <span className="text-gradient">engineered for latency</span>
          </>
        ),
        lead:
          "Every stage of the voice pipeline tuned for the responsiveness a real conversation demands.",
        items: [
          {
            title: "Real-time STT/TTS",
            description:
              "Streaming speech recognition and lifelike synthesis tuned for sub-500ms round trips.",
            icon: Zap,
          },
          {
            title: "Barge-in & turn-taking",
            description:
              "Callers can interrupt mid-sentence and the agent adapts, just like a natural human exchange.",
            icon: AudioLines,
          },
          {
            title: "Telephony (SIP)",
            description:
              "Inbound and outbound calling over SIP so voice agents plug into your existing phone system.",
            icon: Phone,
          },
          {
            title: "Multilingual speech",
            description:
              "Natural conversation across many languages and accents, detected and handled on the fly.",
            icon: Languages,
          },
          {
            title: "Knowledge grounding",
            description:
              "Answers pulled from your systems and knowledge base, so the agent is accurate, not scripted.",
            icon: Database,
          },
          {
            title: "Human escalation",
            description:
              "Warm transfer to a live agent with full call context when a caller needs a person.",
            icon: UserCog,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Voice that handles <span className="text-gradient">the whole call</span>
          </>
        ),
        lead: "Where real-time voice agents replace phone trees and hold music.",
        items: [
          "Inbound customer support calls",
          "Appointment scheduling & reminders",
          "Outbound follow-ups & surveys",
          "Order status & account lookups",
          "After-hours & overflow coverage",
          "Multilingual call handling",
          "IVR replacement",
          "Warm transfer to live agents",
          "Call transcription & analytics",
        ],
      }}
      visual="dashboard"
      stats={[
        { value: 480, suffix: "ms", label: "Median response latency" },
        { value: 24, suffix: "/7", label: "Call coverage" },
        { value: 3, suffix: "", label: "Languages per deployment" },
        { value: 60, suffix: "%", label: "Calls handled end-to-end" },
      ]}
      faqs={[
        {
          category: "Experience",
          q: "Will callers be able to tell it's AI?",
          a: "The agent responds in under half a second with natural turn-taking and barge-in, so conversations feel fluid. We're always transparent that it's an assistant, and it hands off to a person on request.",
        },
        {
          category: "Technical",
          q: "Does it work with our phone system?",
          a: "Yes. We integrate over SIP for both inbound and outbound calls, so the voice agent connects to your existing telephony and contact-center stack.",
        },
        {
          category: "Accuracy",
          q: "How does it answer questions correctly over the phone?",
          a: "The agent is grounded in your knowledge base and connected to your systems, so it looks up real information and can take actions rather than reading a fixed script.",
        },
        {
          category: "Languages",
          q: "Can it handle multiple languages?",
          a: "It detects and converses in many languages and accents automatically, making it suitable for multilingual customer bases.",
        },
      ]}
      related={[
        { label: "AI Chatbots", href: "/ai-chatbots", icon: UserCog, description: "Conversations that convert" },
        { label: "Agentic AI", href: "/agentic-ai", icon: Zap, description: "Autonomous, tool-using systems" },
        { label: "RAG Solutions", href: "/rag-solutions", icon: Database, description: "Grounded, cited answers" },
        { label: "Workflow Automation", href: "/workflow-automation", icon: Phone, description: "Remove the busywork" },
      ]}
      cta={{
        title: "Answer every call with",
        highlight: "a voice that helps",
        lead: "We'll deploy a real-time voice agent on your lines and prove it on your busiest call type first.",
      }}
    />
  );
}

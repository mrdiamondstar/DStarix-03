import type { Metadata } from "next";
import { MessagesSquare, Share2, UserCog, Database, BarChart3, Languages, ShieldCheck } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "AI Chatbots",
  description:
    "Assistants that resolve, qualify and support across your site, product and channels — grounded in your knowledge with seamless handoff to humans.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="AI Chatbots"
      icon={MessagesSquare}
      title="Conversations that"
      highlight="resolve and convert"
      lead="We build chat assistants that actually close the loop — answering from your knowledge base, qualifying leads, taking actions in your systems and handing off to a human the moment it's warranted."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Assistants that do more than <span className="text-gradient">deflect tickets</span>
          </>
        ),
        body:
          "A good assistant doesn't just chat — it resolves. We ground responses in your content, connect the bot to the systems where work happens, and instrument every conversation so you can see what it solved, what it escalated and where to improve.",
        points: [
          "Grounded answers from your docs and knowledge base, with citations",
          "Actions in your systems — create tickets, check orders, update records",
          "Seamless live handoff to agents with full conversation context",
          "Omnichannel deployment across web, in-app, WhatsApp, Slack and more",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            Chat that carries its weight <span className="text-gradient">on every channel</span>
          </>
        ),
        lead:
          "From knowledge grounding to human handoff and analytics — the full conversational stack.",
        items: [
          {
            title: "Omnichannel deployment",
            description:
              "One assistant across web, in-app, WhatsApp, Slack and email with consistent behavior everywhere.",
            icon: Share2,
          },
          {
            title: "Knowledge grounding",
            description:
              "Answers drawn from your help center and docs, cited and kept current as content changes.",
            icon: Database,
          },
          {
            title: "Live agent handoff",
            description:
              "Smooth escalation to a human with the full transcript and context, so customers never repeat themselves.",
            icon: UserCog,
          },
          {
            title: "Multilingual support",
            description:
              "Natural conversations in dozens of languages, detected and handled automatically.",
            icon: Languages,
          },
          {
            title: "Conversation analytics",
            description:
              "Dashboards on resolution, deflection, sentiment and gaps that show exactly where to improve.",
            icon: BarChart3,
          },
          {
            title: "Guardrails & safety",
            description:
              "Scope limits, tone control and PII handling that keep every conversation on-policy.",
            icon: ShieldCheck,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            One assistant, <span className="text-gradient">many jobs to be done</span>
          </>
        ),
        lead: "Where conversational AI delivers measurable results.",
        items: [
          "Customer support deflection",
          "Lead qualification & routing",
          "In-product onboarding & help",
          "Order status & account actions",
          "Appointment booking",
          "Internal IT & HR helpdesk",
          "Proactive outreach & nudges",
          "Feedback & survey collection",
          "24/7 multilingual coverage",
        ],
      }}
      visual="dashboard"
      stats={[
        { value: 65, suffix: "%", label: "Conversations self-served" },
        { value: 24, suffix: "/7", label: "Always-on availability" },
        { value: 30, suffix: "%", label: "More qualified leads captured" },
        { value: 40, suffix: "s", label: "Avg. time to resolution" },
      ]}
      faqs={[
        {
          category: "Quality",
          q: "How do you keep the bot from making things up?",
          a: "Responses are grounded in your approved content with citations, and the assistant is scoped to say when it doesn't know and escalate rather than guess.",
        },
        {
          category: "Experience",
          q: "What happens when a customer needs a human?",
          a: "The bot hands off to a live agent with the full conversation context, so the customer never has to repeat themselves and the agent picks up mid-thread.",
        },
        {
          category: "Integration",
          q: "Can the chatbot take real actions, not just answer?",
          a: "Yes. We connect it to your systems so it can check orders, create tickets, update records and complete tasks within the conversation.",
        },
        {
          category: "Channels",
          q: "Which channels can it run on?",
          a: "A single assistant deploys across your website, in-app widget, WhatsApp, Slack, email and more, with consistent behavior and analytics across all of them.",
        },
      ]}
      related={[
        { label: "Voice AI", href: "/voice-ai", icon: Share2, description: "Real-time speech agents" },
        { label: "RAG Solutions", href: "/rag-solutions", icon: Database, description: "Grounded, cited answers" },
        { label: "Agentic AI", href: "/agentic-ai", icon: UserCog, description: "Autonomous, tool-using systems" },
        { label: "Workflow Automation", href: "/workflow-automation", icon: BarChart3, description: "Remove the busywork" },
      ]}
      cta={{
        title: "Launch an assistant that",
        highlight: "actually resolves",
        lead: "We'll ground a chatbot in your knowledge and connect it to your systems in a matter of weeks.",
      }}
    />
  );
}

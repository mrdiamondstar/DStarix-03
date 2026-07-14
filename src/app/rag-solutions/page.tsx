import type { Metadata } from "next";
import { Database, Search, Quote, Lock, GitBranch, RefreshCw, Layers } from "lucide-react";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "RAG Solutions",
  description:
    "Retrieval-augmented generation over your private knowledge — accurate, cited and permission-aware answers your teams and customers can trust.",
};

export default function Page() {
  return (
    <ServicePageTemplate
      eyebrow="RAG Solutions"
      icon={Database}
      title="Answers grounded in"
      highlight="your own knowledge"
      lead="We build retrieval-augmented generation systems that answer from your documents, tickets and databases — with citations, access control and an evaluation harness that keeps accuracy honest."
      overview={{
        eyebrow: "Overview",
        title: (
          <>
            Retrieval that goes <span className="text-gradient">beyond cosine similarity</span>
          </>
        ),
        body:
          "Naive RAG retrieves the wrong chunks and quietly hallucinates. We engineer the whole pipeline — chunking, hybrid retrieval, reranking and grounding checks — so answers cite their sources and accuracy moves from roughly seventy percent to the high nineties.",
        points: [
          "Hybrid retrieval combining semantic vectors with keyword and metadata filters",
          "Rerankers and grounding checks that reject answers the sources don't support",
          "Inline citations back to the exact passage, so every claim is verifiable",
          "Permission-aware retrieval that respects each user's access at query time",
        ],
      }}
      features={{
        eyebrow: "What we build",
        title: (
          <>
            A retrieval pipeline <span className="text-gradient">tuned for accuracy</span>
          </>
        ),
        lead:
          "Each stage engineered and measured so grounded answers stay trustworthy as your corpus grows.",
        items: [
          {
            title: "Hybrid retrieval",
            description:
              "Dense vectors, sparse keywords and metadata filters combined to surface the genuinely relevant context.",
            icon: Search,
          },
          {
            title: "Citations & grounding",
            description:
              "Every answer links to the source passage, and ungrounded claims are caught before they reach a user.",
            icon: Quote,
          },
          {
            title: "Permission-aware access",
            description:
              "Row- and document-level access control applied at retrieval time so users only see what they should.",
            icon: Lock,
          },
          {
            title: "Reranking layer",
            description:
              "Cross-encoder rerankers that reorder candidates by true relevance, lifting answer precision sharply.",
            icon: Layers,
          },
          {
            title: "Freshness sync",
            description:
              "Incremental indexing keeps the knowledge base current as your source systems change.",
            icon: RefreshCw,
          },
          {
            title: "Evaluation harness",
            description:
              "Continuous scoring of retrieval and answer quality so regressions are caught before release.",
            icon: GitBranch,
          },
        ],
      }}
      capabilities={{
        title: (
          <>
            Grounded answers across <span className="text-gradient">every knowledge source</span>
          </>
        ),
        lead: "The retrieval and grounding capabilities we assemble for your domain.",
        items: [
          "Enterprise knowledge assistants",
          "Customer support deflection",
          "Policy & compliance Q&A",
          "Technical documentation search",
          "Contract & document retrieval",
          "Multi-source federated search",
          "Semantic search over tickets & wikis",
          "Citation & source verification",
          "Access-controlled retrieval",
        ],
      }}
      visual="workflow"
      stats={[
        { value: 95, suffix: "%", label: "Answer accuracy achieved" },
        { value: 45, suffix: "%", label: "Less time spent searching" },
        { value: 12, suffix: "+", label: "Sources unified per system" },
        { value: 100, suffix: "%", label: "Answers cite their sources" },
      ]}
      faqs={[
        {
          category: "Accuracy",
          q: "How do you get RAG accuracy above naive baselines?",
          a: "We engineer the full pipeline — smart chunking, hybrid retrieval, cross-encoder reranking and grounding checks — and measure each stage, which typically moves accuracy from around 70% to the mid-90s.",
        },
        {
          category: "Security",
          q: "Can the system respect our existing permissions?",
          a: "Yes. Access control is applied at retrieval time, so each user's results are filtered to exactly the documents and rows they're entitled to see.",
        },
        {
          category: "Trust",
          q: "How do users know an answer is trustworthy?",
          a: "Every answer includes inline citations to the source passages, and answers that the sources don't support are rejected rather than fabricated.",
        },
        {
          category: "Operations",
          q: "How does the knowledge base stay current?",
          a: "Incremental sync jobs re-index changed content from your source systems, so answers reflect the latest state without full rebuilds.",
        },
      ]}
      related={[
        { label: "Generative AI", href: "/generative-ai", icon: Quote, description: "Content, code & synthetic data" },
        { label: "Agentic AI", href: "/agentic-ai", icon: Search, description: "Autonomous, tool-using systems" },
        { label: "AI Chatbots", href: "/ai-chatbots", icon: Database, description: "Conversations that convert" },
        { label: "Enterprise AI", href: "/enterprise-ai", icon: Lock, description: "AI at organizational scale" },
      ]}
      cta={{
        title: "Ground your AI in",
        highlight: "the knowledge you own",
        lead: "We'll stand up a cited, permission-aware assistant over your data and prove its accuracy with evals.",
      }}
    />
  );
}

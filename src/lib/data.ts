import {
  Sparkles,
  Bot,
  Workflow,
  Database,
  Cpu,
  Building2,
  Shield,
  MessagesSquare,
  AudioLines,
  FileText,
  BookOpen,
  LineChart,
  Eye,
  Server,
  Cloud,
  Braces,
  Layers,
  Network,
  Rocket,
  Gauge,
  Lock,
  GitBranch,
  Boxes,
  type LucideIcon,
} from "lucide-react";

/* =====================================================================
   Central content model for DStarix Techno.
   Everything routable / listable lives here so pages stay consistent.
   ===================================================================== */

export interface ServiceItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  accent: string; // tailwind gradient stops
}

export const services: ServiceItem[] = [
  {
    slug: "generative-ai",
    title: "Generative AI",
    tagline: "Create, don't just automate",
    description:
      "Production-grade generative systems for content, code, imagery and synthetic data — grounded in your brand and guardrails.",
    icon: Sparkles,
    points: ["Multimodal generation", "Brand-safe guardrails", "Human-in-the-loop review", "Cost-optimized inference"],
    accent: "from-electric to-violet",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    tagline: "Autonomous systems that act",
    description:
      "Multi-agent architectures that plan, use tools and complete complex workflows end-to-end with full observability.",
    icon: Bot,
    points: ["Tool-using agents", "Planning & reflection", "Guardrailed autonomy", "Audit trails"],
    accent: "from-violet to-electric",
  },
  {
    slug: "rag-solutions",
    title: "RAG Solutions",
    tagline: "Answers grounded in your data",
    description:
      "Retrieval-augmented generation over your private knowledge — accurate, cited and permission-aware.",
    icon: Database,
    points: ["Hybrid retrieval", "Citations & grounding", "Access control", "Evaluation harness"],
    accent: "from-cyan to-electric",
  },
  {
    slug: "custom-llm-development",
    title: "Custom LLM Development",
    tagline: "Models tuned to your domain",
    description:
      "Fine-tuning, distillation and alignment to build models that speak your domain and run at your economics.",
    icon: Cpu,
    points: ["Domain fine-tuning", "Distillation", "Preference alignment", "Eval-driven iteration"],
    accent: "from-electric to-cyan",
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI",
    tagline: "AI at organizational scale",
    description:
      "Reference architectures, governance and platforms that let large organizations deploy AI safely and repeatedly.",
    icon: Building2,
    points: ["Platform engineering", "Governance", "SSO & RBAC", "Multi-tenant"],
    accent: "from-violet to-cyan",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    tagline: "Remove the busywork",
    description:
      "Intelligent automation that connects your tools, understands context and completes multi-step processes.",
    icon: Workflow,
    points: ["Process mining", "Human approvals", "Integrations", "SLA monitoring"],
    accent: "from-electric to-violet",
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    tagline: "Conversations that convert",
    description:
      "Assistants that resolve, qualify and support — on your site, in your product and across channels.",
    icon: MessagesSquare,
    points: ["Omnichannel", "Live handoff", "Knowledge grounding", "Analytics"],
    accent: "from-cyan to-violet",
  },
  {
    slug: "voice-ai",
    title: "Voice AI",
    tagline: "Natural, real-time speech",
    description:
      "Low-latency voice agents for support, scheduling and telephony with lifelike turn-taking.",
    icon: AudioLines,
    points: ["Realtime STT/TTS", "Barge-in", "Telephony (SIP)", "Multilingual"],
    accent: "from-violet to-electric",
  },
  {
    slug: "document-ai",
    title: "Document AI",
    tagline: "Understand every document",
    description:
      "Extract, classify and reason over contracts, forms and reports at scale with verifiable accuracy.",
    icon: FileText,
    points: ["OCR + layout", "Structured extraction", "Validation rules", "Human review"],
    accent: "from-electric to-cyan",
  },
  {
    slug: "knowledge-management",
    title: "Knowledge Management",
    tagline: "Institutional memory, searchable",
    description:
      "Turn scattered wikis, tickets and docs into a single grounded, permission-aware knowledge layer.",
    icon: BookOpen,
    points: ["Unified index", "Semantic search", "Freshness sync", "Governance"],
    accent: "from-cyan to-electric",
  },
  {
    slug: "predictive-ai",
    title: "Predictive AI",
    tagline: "See what's coming",
    description:
      "Forecasting, churn, demand and risk models wired directly into your operational decisions.",
    icon: LineChart,
    points: ["Forecasting", "Anomaly detection", "Explainability", "MLOps pipelines"],
    accent: "from-violet to-cyan",
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    tagline: "Machines that see",
    description:
      "Detection, inspection and understanding for manufacturing, retail, healthcare and safety.",
    icon: Eye,
    points: ["Object detection", "Quality inspection", "Edge deployment", "Active learning"],
    accent: "from-electric to-violet",
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    tagline: "Strategy that ships",
    description:
      "Roadmaps, opportunity mapping and architecture reviews from teams who have shipped AI in production.",
    icon: Layers,
    points: ["Opportunity mapping", "ROI modeling", "Architecture review", "Team enablement"],
    accent: "from-cyan to-violet",
  },
  {
    slug: "private-ai",
    title: "Private AI",
    tagline: "Your data never leaves",
    description:
      "On-prem and VPC deployments with open models — full control, zero data egress, enterprise compliance.",
    icon: Shield,
    points: ["On-prem / VPC", "Open models", "No data egress", "Compliance-ready"],
    accent: "from-violet to-electric",
  },
  {
    slug: "mlops",
    title: "MLOps",
    tagline: "Reliable AI in production",
    description:
      "CI/CD, evaluation, monitoring and rollback for models and prompts — treat AI like the critical system it is.",
    icon: GitBranch,
    points: ["Eval pipelines", "Drift monitoring", "Canary rollouts", "Observability"],
    accent: "from-electric to-cyan",
  },
  {
    slug: "cloud-ai",
    title: "Cloud AI",
    tagline: "Scale without limits",
    description:
      "Cloud-native inference and training platforms on AWS, GCP and Azure — elastic, observable and cost-tuned.",
    icon: Cloud,
    points: ["Autoscaling inference", "GPU orchestration", "Cost controls", "Multi-cloud"],
    accent: "from-cyan to-electric",
  },
];

/** Services promoted into the primary navigation mega-menu / cards. */
export const featuredServiceSlugs = [
  "generative-ai",
  "agentic-ai",
  "rag-solutions",
  "enterprise-ai",
  "workflow-automation",
  "voice-ai",
];

export interface Industry {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  useCases: string[];
}

export const industries: Industry[] = [
  { slug: "financial-services", name: "Financial Services", icon: LineChart, blurb: "Risk, fraud and advisory copilots that satisfy the regulator.", useCases: ["Fraud detection", "Underwriting copilots", "Regulatory reporting", "Client advisory"] },
  { slug: "healthcare", name: "Healthcare & Life Sciences", icon: Shield, blurb: "Clinical documentation and research acceleration, HIPAA-aligned.", useCases: ["Clinical scribing", "Prior authorization", "Literature review", "Patient triage"] },
  { slug: "manufacturing", name: "Manufacturing", icon: Boxes, blurb: "Vision inspection and predictive maintenance on the factory floor.", useCases: ["Defect detection", "Predictive maintenance", "Supply planning", "Digital twins"] },
  { slug: "retail", name: "Retail & E-commerce", icon: Building2, blurb: "Personalization, merchandising and support that lifts conversion.", useCases: ["Product discovery", "Demand forecasting", "Support automation", "Content generation"] },
  { slug: "legal", name: "Legal & Compliance", icon: FileText, blurb: "Contract intelligence and research grounded in your matter set.", useCases: ["Contract review", "eDiscovery", "Policy Q&A", "Due diligence"] },
  { slug: "logistics", name: "Logistics & Supply Chain", icon: Network, blurb: "Routing, forecasting and exception handling in real time.", useCases: ["Route optimization", "ETA prediction", "Exception triage", "Document AI"] },
  { slug: "technology", name: "Technology & SaaS", icon: Cpu, blurb: "Ship AI features fast with platforms built for scale.", useCases: ["In-product copilots", "Code assistance", "Support deflection", "Analytics"] },
  { slug: "energy", name: "Energy & Utilities", icon: Gauge, blurb: "Grid optimization and predictive asset intelligence.", useCases: ["Load forecasting", "Asset monitoring", "Field copilots", "Safety vision"] },
];

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  overview: string;
  challenge: string;
  approach: string[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  quote: { text: string; author: string };
}

export const projects: Project[] = [
  {
    slug: "atlas-support-copilot",
    title: "Support Copilot for a Fintech Leader",
    client: "Atlas Financial",
    category: "Agentic AI",
    summary: "An agent that resolves tier-1 tickets end-to-end with policy-grounded responses and safe escalation.",
    metric: "68%",
    metricLabel: "auto-resolution",
    tags: ["Agentic AI", "RAG", "Support"],
    overview:
      "A fast-growing fintech was scaling faster than it could hire support staff. Ticket volume was doubling year over year, response times were slipping, and the team was spending most of its day on repetitive tier-1 questions that all had documented answers.",
    challenge:
      "The answers existed — in help docs, policy PDFs, and past tickets — but they were scattered, and a wrong answer in a regulated financial product is a real liability. Any automation had to be accurate, cite its sources, and know when to escalate rather than guess.",
    approach: [
      "Built a retrieval layer over help center, policy documents, and resolved tickets, with permission-aware access so the agent only sees what the user is allowed to.",
      "Wrapped the model in a ReAct-style loop with tools to look up account status and create escalations, grounding every response in cited sources.",
      "Added hard guardrails: the agent refuses and escalates on anything touching payments, disputes, or account changes, and never acts without a citation.",
      "Shipped an evaluation harness of real historical tickets, graded on accuracy and escalation correctness, run on every change before deploy.",
    ],
    outcomes: [
      { value: "68%", label: "of tier-1 tickets auto-resolved" },
      { value: "42%", label: "lower cost per ticket" },
      { value: "+19", label: "CSAT points" },
      { value: "9 wks", label: "to production" },
    ],
    stack: ["Claude", "Hybrid retrieval", "pgvector", "Custom eval harness", "Observability tracing"],
    quote: {
      text: "It resolves the boring two-thirds of our queue accurately and hands us the rest with context. Our team finally spends its time on the hard problems.",
      author: "Head of Support, Atlas Financial",
    },
  },
  {
    slug: "meridian-doc-intelligence",
    title: "Contract Intelligence Platform",
    client: "Meridian Legal",
    category: "Document AI",
    summary: "Extraction and risk-flagging across 2M+ contracts with verifiable citations and human review.",
    metric: "12x",
    metricLabel: "faster review",
    tags: ["Document AI", "Enterprise", "Legal"],
    overview:
      "A legal team was reviewing contracts by hand — a slow, inconsistent process that created weeks-long bottlenecks and depended heavily on which reviewer happened to pick up a file.",
    challenge:
      "Contracts are long, inconsistently formatted, and full of clauses whose risk depends on context. Extraction had to be accurate and, crucially, verifiable — a lawyer needs to see exactly where in the document a flagged risk came from, or they won't trust it.",
    approach: [
      "Built layout-aware extraction that preserves document structure, so clauses are read in context rather than as flat text.",
      "Every extracted field and risk flag links back to the exact span in the source document for one-click verification.",
      "Added a validation layer that checks extractions against business rules and routes low-confidence cases to a human.",
      "Kept lawyers in the loop by design: the system drafts and cites, people decide.",
    ],
    outcomes: [
      { value: "12x", label: "faster review" },
      { value: "2M+", label: "contracts processed" },
      { value: "98%", label: "extraction precision" },
      { value: "Weeks→days", label: "turnaround" },
    ],
    stack: ["Claude", "Layout-aware OCR", "Structured extraction", "Rule-based validation", "Human review queue"],
    quote: {
      text: "The citations are what won us over. Every flag points to the exact clause, so we verify in seconds instead of re-reading the whole contract.",
      author: "General Counsel, Meridian Legal",
    },
  },
  {
    slug: "nova-voice-scheduling",
    title: "Voice Scheduling Agent",
    client: "Nova Health",
    category: "Voice AI",
    summary: "Real-time voice agent handling appointment booking across 40 clinics in three languages.",
    metric: "24/7",
    metricLabel: "coverage",
    tags: ["Voice AI", "Healthcare"],
    overview:
      "A network of clinics was losing appointments to voicemail. Patients called after hours or during busy periods, couldn't get through, and didn't call back. The front desk couldn't scale to cover every call.",
    challenge:
      "Voice is unforgiving: latency has to be low enough to feel natural, the agent has to handle interruptions and accents, and in healthcare it has to be careful about what it says and records. It also needed to work in three languages the patient base actually speaks.",
    approach: [
      "Built a low-latency speech pipeline with barge-in, so patients can interrupt naturally instead of waiting for the agent to finish.",
      "Integrated directly with the scheduling system to check real availability and book, reschedule, or cancel in the live call.",
      "Scoped the agent tightly to scheduling, with clear handoff to a human for anything clinical or sensitive.",
      "Handled three languages end to end, with the agent detecting and switching automatically.",
    ],
    outcomes: [
      { value: "24/7", label: "booking coverage" },
      { value: "40", label: "clinics live" },
      { value: "3", label: "languages supported" },
      { value: "<1s", label: "response latency" },
    ],
    stack: ["Realtime STT/TTS", "Telephony (SIP)", "Scheduling API integration", "Multilingual routing"],
    quote: {
      text: "Patients don't hit voicemail anymore. The agent books the routine appointments and passes the rest to us with the details already captured.",
      author: "Operations Director, Nova Health",
    },
  },
  {
    slug: "orbit-demand-forecast",
    title: "Demand Forecasting Engine",
    client: "Orbit Retail",
    category: "Predictive AI",
    summary: "Store-level forecasting that cut stockouts and freed working capital across 900 locations.",
    metric: "31%",
    metricLabel: "fewer stockouts",
    tags: ["Predictive AI", "Retail"],
    overview:
      "A retailer was forecasting demand centrally and manually, blind to the differences between individual stores. The result was the worst of both worlds: empty shelves in some locations and overstock tying up cash in others.",
    challenge:
      "Store-level forecasting means many more models and far more data, and the output is only useful if the planning team trusts and acts on it. A black-box number nobody understands gets ignored.",
    approach: [
      "Built store-level forecasting that accounts for local seasonality, promotions, and events rather than one national average.",
      "Made every forecast explainable, so planners can see why a number moved and trust it enough to act.",
      "Wired forecasts directly into replenishment and planning workflows instead of leaving them in a dashboard.",
      "Set up drift monitoring and retraining so accuracy holds as conditions change.",
    ],
    outcomes: [
      { value: "31%", label: "fewer stockouts" },
      { value: "18%", label: "less overstock" },
      { value: "900", label: "stores live" },
      { value: "6 mo", label: "payback period" },
    ],
    stack: ["Forecasting models", "Explainability layer", "MLOps pipeline", "Drift monitoring"],
    quote: {
      text: "For the first time the forecast reflects each store, and the planners actually trust it because they can see the reasoning.",
      author: "VP Supply Chain, Orbit Retail",
    },
  },
  {
    slug: "vertex-private-llm",
    title: "Private LLM Platform",
    client: "Vertex Manufacturing",
    category: "Private AI",
    summary: "A VPC-isolated assistant over engineering knowledge with zero data egress.",
    metric: "0",
    metricLabel: "data egress",
    tags: ["Private AI", "Enterprise", "Manufacturing"],
    overview:
      "An engineering organization sat on decades of institutional knowledge — specs, manuals, past designs — that nobody could search effectively. But the data was too sensitive to send to an external API.",
    challenge:
      "The requirement was absolute: no proprietary data could leave the company's environment, and security had to be able to audit the whole system. That ruled out most off-the-shelf approaches and made deployment the hard part, not the model.",
    approach: [
      "Deployed open models entirely inside the company's VPC, so no data ever leaves their environment.",
      "Built retrieval over engineering documents with permission-aware access tied to existing identity systems.",
      "Gave the security team full audit logging over every query and document access.",
      "Delivered a reference architecture the internal team could operate and extend themselves.",
    ],
    outcomes: [
      { value: "0", label: "bytes of data egress" },
      { value: "100%", label: "in-VPC deployment" },
      { value: "Decades", label: "of knowledge searchable" },
      { value: "Full", label: "audit coverage" },
    ],
    stack: ["Open-weight models", "VPC deployment", "vLLM", "Permission-aware retrieval", "Audit logging"],
    quote: {
      text: "Security signed off because there was nothing to sign off against — the data never moves. And engineers finally find what they need.",
      author: "Head of Engineering, Vertex Manufacturing",
    },
  },
  {
    slug: "helix-rag-knowledge",
    title: "Enterprise Knowledge Assistant",
    client: "Helix SaaS",
    category: "RAG Solutions",
    summary: "Grounded answers over 12 internal systems with permission-aware retrieval.",
    metric: "45%",
    metricLabel: "less search time",
    tags: ["RAG", "Knowledge", "SaaS"],
    overview:
      "A SaaS company's knowledge was spread across a dozen systems — wikis, ticketing, docs, chat. Employees wasted a real fraction of every day just hunting for information that already existed somewhere.",
    challenge:
      "Unifying twelve sources is hard enough; doing it while respecting each system's permissions is harder. The assistant could never surface something a given employee wasn't allowed to see, and answers had to be current and cited.",
    approach: [
      "Built a unified retrieval layer across all twelve systems with a single semantic index.",
      "Enforced permission-aware retrieval so results always respect each source's access controls.",
      "Grounded every answer in cited sources and kept the index fresh with continuous sync.",
      "Added an evaluation harness to catch regressions in answer quality as sources changed.",
    ],
    outcomes: [
      { value: "45%", label: "less time searching" },
      { value: "12", label: "systems unified" },
      { value: "Cited", label: "answers by default" },
      { value: "Live", label: "freshness sync" },
    ],
    stack: ["Claude", "Hybrid search", "Permission-aware retrieval", "Continuous sync", "Eval harness"],
    quote: {
      text: "People stopped asking each other where things live. They ask the assistant, get a cited answer, and move on.",
      author: "VP Engineering, Helix SaaS",
    },
  },
  {
    slug: "pulse-vision-inspection",
    title: "Vision Quality Inspection",
    client: "Pulse Industries",
    category: "Computer Vision",
    summary: "Edge vision detecting micro-defects on the line with active-learning retraining.",
    metric: "99.4%",
    metricLabel: "detection accuracy",
    tags: ["Computer Vision", "Manufacturing"],
    overview:
      "A manufacturer was catching defects through manual spot checks — slow, inconsistent, and unable to keep up with line speed. The defects that mattered most were small enough that tired human eyes missed them.",
    challenge:
      "Detection had to run in real time at the edge, on the line, without shipping images to the cloud. And defect types evolve, so a model trained once would slowly go stale unless it could keep learning.",
    approach: [
      "Deployed detection models at the edge so inspection runs at line speed with no cloud round-trip.",
      "Tuned for the small, high-value defects human inspectors were most likely to miss.",
      "Built an active-learning loop that flags uncertain cases for labeling and retrains on them.",
      "Gave operators a simple interface to confirm or correct calls, feeding the loop.",
    ],
    outcomes: [
      { value: "99.4%", label: "detection accuracy" },
      { value: "Real-time", label: "at line speed" },
      { value: "Edge", label: "deployment, no egress" },
      { value: "Active", label: "learning retraining" },
    ],
    stack: ["Computer vision models", "Edge deployment", "Active learning", "Operator review UI"],
    quote: {
      text: "It catches the micro-defects we used to miss, at full line speed, and it keeps getting better as it sees more of our parts.",
      author: "Plant Manager, Pulse Industries",
    },
  },
  {
    slug: "cascade-workflow",
    title: "Back-office Automation",
    client: "Cascade Logistics",
    category: "Workflow Automation",
    summary: "Autonomous exception handling across shipping, billing and customs docs.",
    metric: "5,200h",
    metricLabel: "saved / quarter",
    tags: ["Automation", "Logistics"],
    overview:
      "A logistics operation ran on manual back-office work: matching shipping documents, reconciling billing, and handling customs paperwork. Most of it was routine, but the exceptions ate the team's time.",
    challenge:
      "Automating the happy path is easy; the value was in handling exceptions — mismatched documents, missing fields, edge cases — safely, without letting an automated system make a costly mistake unsupervised.",
    approach: [
      "Automated the routine document matching and reconciliation end to end.",
      "Built exception handling that reads the documents, proposes a resolution, and routes anything uncertain to a human with context attached.",
      "Added spend and action guardrails so the system never takes a high-impact step on its own.",
      "Instrumented everything so the team can see what was automated and why.",
    ],
    outcomes: [
      { value: "5,200h", label: "saved per quarter" },
      { value: "3", label: "document workflows automated" },
      { value: "Safe", label: "human-in-loop escalation" },
      { value: "Full", label: "audit trail" },
    ],
    stack: ["Document AI", "Workflow orchestration", "Human-in-the-loop approvals", "Observability"],
    quote: {
      text: "The routine work just happens now, and the exceptions land on our desk already triaged. It gave the team its week back.",
      author: "Operations Lead, Cascade Logistics",
    },
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas-support-copilot",
    title: "How Atlas Financial resolved 68% of tickets autonomously",
    client: "Atlas Financial",
    industry: "Financial Services",
    challenge:
      "A 400-person support org drowning in repetitive tier-1 tickets with rising costs and slipping CSAT.",
    solution:
      "A guardrailed agent grounded in policy docs, wired to core systems with safe escalation and full audit trails.",
    results: [
      { value: "68%", label: "auto-resolution rate" },
      { value: "42%", label: "lower cost per ticket" },
      { value: "+19", label: "CSAT points" },
      { value: "9 wks", label: "to production" },
    ],
    duration: "9 weeks",
  },
  {
    slug: "meridian-doc-intelligence",
    title: "Meridian Legal reviews contracts 12x faster",
    client: "Meridian Legal",
    industry: "Legal",
    challenge: "Manual review of millions of contracts created weeks-long bottlenecks and inconsistent risk flags.",
    solution: "Layout-aware extraction with a validation layer and cited outputs, keeping lawyers in the loop.",
    results: [
      { value: "12x", label: "faster review" },
      { value: "2M+", label: "contracts processed" },
      { value: "98%", label: "extraction precision" },
      { value: "$4.1M", label: "annual savings" },
    ],
    duration: "14 weeks",
  },
  {
    slug: "orbit-demand-forecast",
    title: "Orbit Retail cut stockouts by 31% across 900 stores",
    client: "Orbit Retail",
    industry: "Retail",
    challenge: "Chain-wide forecasting was manual and store-blind, driving both stockouts and overstock.",
    solution: "Store-level forecasting with explainability, integrated into replenishment and planning workflows.",
    results: [
      { value: "31%", label: "fewer stockouts" },
      { value: "18%", label: "less overstock" },
      { value: "900", label: "stores live" },
      { value: "6 mo", label: "payback" },
    ],
    duration: "16 weeks",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  { quote: "They shipped a working agent in weeks, not months. The focus on evaluation and safety is what gave us the confidence to put it in front of real users.", name: "Elena Márquez", role: "Co-founder & CEO", company: "early-stage SaaS" },
  { quote: "No hype — every claim came with an eval and a dashboard. That's exactly what a small team needs to move fast without breaking things.", name: "David Chen", role: "Founder", company: "AI startup" },
  { quote: "They felt like part of our team. We went from a rough idea to something running in production far quicker than we expected.", name: "Priya Nair", role: "Head of Product", company: "seed-stage startup" },
  { quote: "Support that actually resolves issues, at a cost that works for a startup. That combination is genuinely hard to find.", name: "Marcus Feld", role: "Operations Lead", company: "growth-stage startup" },
];

export interface ProcessStep {
  n: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { n: "01", title: "Discover", description: "We map high-value use cases, quantify ROI and pressure-test feasibility before a line of code.", icon: Layers },
  { n: "02", title: "Design", description: "Reference architecture, data flows, guardrails and an evaluation strategy tailored to your risk.", icon: Braces },
  { n: "03", title: "Build", description: "Rapid, eval-driven iteration in short cycles — you see working software every week.", icon: Rocket },
  { n: "04", title: "Deploy", description: "Ship to your cloud or on-prem with monitoring, canary rollouts and safe rollback.", icon: Server },
  { n: "05", title: "Scale", description: "Optimize cost and latency, expand to new workflows and enable your teams to own it.", icon: Gauge },
];

export const techStack: { category: string; items: string[] }[] = [
  { category: "Models", items: ["Claude (Opus / Sonnet / Haiku)", "GPT-4 class", "Llama", "Mistral", "Gemini", "Fine-tuned open models"] },
  { category: "Orchestration", items: ["LangGraph", "LlamaIndex", "Custom agent runtimes", "Temporal", "Model Context Protocol"] },
  { category: "Data & Retrieval", items: ["pgvector", "Pinecone", "Weaviate", "Elasticsearch", "Hybrid search"] },
  { category: "Infrastructure", items: ["AWS", "GCP", "Azure", "Kubernetes", "vLLM", "Ray"] },
  { category: "Evaluation", items: ["Braintrust", "Ragas", "Custom eval harness", "LLM-as-judge", "Human review"] },
  { category: "Observability", items: ["OpenTelemetry", "Langfuse", "Datadog", "Prometheus", "Grafana"] },
];

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
}

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "AI systems shipped" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Production uptime" },
  { value: 1, suffix: "M+", label: "Requests / day served" },
  { value: 1.5, prefix: "$", suffix: "M", decimals: 1, label: "Client value created" },
];

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  label: string;
  href?: string;
  columns?: { title: string; links: NavLink[] }[];
  links?: NavLink[];
}

export const primaryNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: "Build",
        links: [
          { label: "Generative AI", href: "/generative-ai", icon: Sparkles, description: "Content, code & synthetic data" },
          { label: "Agentic AI", href: "/agentic-ai", icon: Bot, description: "Autonomous, tool-using systems" },
          { label: "Custom LLM Development", href: "/custom-llm-development", icon: Cpu, description: "Fine-tuning & alignment" },
          { label: "RAG Solutions", href: "/rag-solutions", icon: Database, description: "Grounded, cited answers" },
        ],
      },
      {
        title: "Operate",
        links: [
          { label: "Workflow Automation", href: "/workflow-automation", icon: Workflow, description: "Remove the busywork" },
          { label: "AI Chatbots", href: "/ai-chatbots", icon: MessagesSquare, description: "Conversations that convert" },
          { label: "Voice AI", href: "/voice-ai", icon: AudioLines, description: "Real-time speech agents" },
          { label: "AI Automation", href: "/ai-automation", icon: Layers, description: "Intelligent process automation" },
        ],
      },
      {
        title: "Scale",
        links: [
          { label: "Enterprise AI", href: "/enterprise-ai", icon: Building2, description: "AI at org scale" },
          { label: "AI Development", href: "/ai-development", icon: Braces, description: "End-to-end delivery" },
          { label: "AI Consulting", href: "/ai-consulting", icon: Lock, description: "Strategy that ships" },
          { label: "All services", href: "/services", icon: Boxes, description: "Explore the full catalog" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/ai-solutions",
    columns: [
      {
        title: "By capability",
        links: [
          { label: "AI Solutions", href: "/ai-solutions", icon: Sparkles, description: "Our full solution suite" },
          { label: "Generative AI", href: "/generative-ai", icon: Sparkles },
          { label: "Agentic AI", href: "/agentic-ai", icon: Bot },
          { label: "RAG Solutions", href: "/rag-solutions", icon: Database },
        ],
      },
      {
        title: "By industry",
        links: [
          { label: "Financial Services", href: "/industries#financial-services", icon: LineChart },
          { label: "Healthcare", href: "/industries#healthcare", icon: Shield },
          { label: "Manufacturing", href: "/industries#manufacturing", icon: Boxes },
          { label: "All industries", href: "/industries", icon: Building2 },
        ],
      },
    ],
  },
  {
    label: "Work",
    columns: [
      {
        title: "Proof",
        links: [
          { label: "Portfolio", href: "/portfolio", icon: Boxes, description: "Selected work" },
          { label: "Case Studies", href: "/case-studies", icon: LineChart, description: "Outcomes & ROI" },
          { label: "Industries", href: "/industries", icon: Building2, description: "Where we operate" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about", icon: Building2, description: "Our story & team" },
          { label: "Careers", href: "/careers", icon: Rocket, description: "Join us" },
          { label: "Blog", href: "/blog", icon: BookOpen, description: "Ideas & research" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export interface ArticleSection {
  heading?: string;
  body?: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  content: ArticleSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "giving-agents-memory",
    title: "Giving AI agents memory that actually persists",
    excerpt:
      "Vector stores give agents recall, but durable memory needs summarization, decay and clear write policies too — otherwise context windows fill with noise instead of signal.",
    category: "Research",
    date: "2026-06-30",
    readTime: "8 min",
    author: "Elena Márquez",
    authorRole: "Co-founder & CEO",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "Every team that ships an agent eventually hits the same wall: the model forgets. A user tells it something on Monday, and by Tuesday it's asking again. The instinct is to \"add memory,\" usually by dropping a vector database into the stack. That helps, but recall is only one part of memory — and treating it as the whole thing is why so many agents feel forgetful even with a vector store attached.",
          "Useful memory is less about storing everything and more about deciding what is worth keeping, how to compress it, and when to let it go. Below is the model we use when we build memory into a production agent.",
        ],
      },
      {
        heading: "Three kinds of memory, not one",
        body: [
          "It helps to separate memory into three roles instead of lumping them together:",
        ],
        bullets: [
          "Working memory — the current conversation and task state, held in the context window. Fast, but small and volatile.",
          "Episodic memory — a record of past interactions and events (\"the user prefers Slack over email,\" \"we already tried approach X\"). This is what vector stores are good at.",
          "Semantic memory — durable facts and summaries distilled from many episodes (\"this account is on the enterprise plan and cares most about latency\").",
        ],
      },
      {
        heading: "Retrieval is not memory",
        body: [
          "Dropping raw conversation turns into a vector store and retrieving the top-k nearest matches feels like memory, but it degrades quickly. As history grows, retrieval starts pulling in near-duplicate, stale, or contradictory snippets, and the context window fills with noise instead of signal.",
          "The fix is to treat writes as deliberately as reads. Before anything is stored, ask whether it is durable enough to matter later. A one-off question rarely is; a stated preference or a decision usually is.",
        ],
      },
      {
        heading: "Summarize, then decay",
        body: [
          "Two operations turn a growing log into a memory that stays sharp. Summarization periodically compresses clusters of episodes into higher-level semantic facts, so the agent recalls the conclusion rather than re-reading the whole transcript. Decay lowers the weight of memories that haven't been useful, so old and rarely-touched entries fade instead of competing with fresh, relevant ones.",
          "Together they keep the working set small. The goal isn't a bigger memory — it's a memory where almost everything retrieved is worth acting on.",
        ],
      },
      {
        heading: "Write policies you can audit",
        body: [
          "In production, you also need to know why a memory exists and be able to remove it. We attach provenance to every stored fact — where it came from, when, and on whose behalf — and enforce clear rules about what an agent is allowed to persist. That makes memory debuggable, and it makes deletion (for privacy or correction) a one-line operation instead of an archaeology project.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "A vector store gives an agent the ability to recall. Summarization, decay, and disciplined write policies give it the judgment to remember the right things. If your agent feels forgetful despite having \"memory,\" the problem is almost never retrieval quality — it's that everything is being stored and nothing is being curated.",
        ],
      },
    ],
  },
  {
    slug: "react-pattern-agents",
    title: "The ReAct pattern: how reasoning and acting changed LLM agents",
    excerpt:
      "The 2022 ReAct paper (Yao et al.) showed that interleaving reasoning traces with tool calls made language models dramatically better at multi-step tasks. It still underpins how most agents are built today.",
    category: "Research",
    date: "2026-06-18",
    readTime: "9 min",
    author: "David Chen",
    authorRole: "Founder",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "Most of the agents running in production today are, at their core, a loop that was described in a 2022 paper: ReAct, short for \"Reasoning and Acting,\" by Yao et al. The idea is simple enough to explain in a sentence, but it changed how people build with language models.",
        ],
      },
      {
        heading: "Reasoning and acting, interleaved",
        body: [
          "Before ReAct, you generally used a model in one of two modes. You could ask it to reason step by step (\"chain of thought\"), which improved answers but left the model reasoning about a world it couldn't observe or change. Or you could let it call a tool, but without space to think about what the tool returned.",
          "ReAct interleaves the two. The model produces a thought, takes an action (a tool call), observes the result, and then thinks again — repeating until it reaches an answer. That observe-then-think step is the whole trick: the model gets to update its plan based on real feedback from the world instead of guessing in one shot.",
        ],
      },
      {
        heading: "The loop, concretely",
        body: ["A single ReAct step looks like this:"],
        bullets: [
          "Thought — the model reasons about what it needs next.",
          "Action — it calls a tool (search, database query, API) with specific arguments.",
          "Observation — the tool's result is fed back into the context.",
          "Repeat — the model reads the observation and decides whether to act again or answer.",
        ],
      },
      {
        heading: "Why it worked so well",
        body: [
          "Two things. First, grounding: because the model acts and then reads real results, it hallucinates less — it's reacting to facts instead of inventing them. Second, recoverability: when a tool call fails or returns something unexpected, the next thought can course-correct. A one-shot plan can't recover from a bad assumption; a ReAct loop can.",
        ],
      },
      {
        heading: "What modern agents changed",
        body: [
          "The pattern is still the backbone, but production systems layer things on top. Native tool-calling APIs made the \"action\" step reliable and structured instead of parsed out of free text. Reflection steps let an agent critique its own trajectory. And guardrails cap how many loops it can run and what actions it's allowed to take, so a confused agent fails safely instead of spinning forever.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "If you understand the think-act-observe loop, you understand the majority of agent frameworks on the market — they're mostly ergonomics and safety wrapped around this core idea. When an agent misbehaves, the fastest way to debug it is to read the ReAct trace step by step and find the thought where the reasoning went wrong.",
        ],
      },
    ],
  },
  {
    slug: "model-context-protocol-explained",
    title: "Model Context Protocol: a shared standard for connecting agents to tools",
    excerpt:
      "Anthropic's Model Context Protocol gives agents a common way to discover and call external tools, files and data sources — replacing one-off integrations with a single open protocol.",
    category: "Engineering",
    date: "2026-06-05",
    readTime: "8 min",
    author: "Priya Nair",
    authorRole: "Head of Product",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "The hardest part of building a useful agent is rarely the model — it's connecting the model to everything else: your database, your ticketing system, your files, your internal APIs. Historically every one of those connections was a bespoke integration, written and maintained by hand. The Model Context Protocol (MCP), introduced by Anthropic and now adopted broadly, exists to fix that.",
        ],
      },
      {
        heading: "The N-times-M problem",
        body: [
          "Say you have five AI applications and ten tools you want them to use. Without a standard, that's up to fifty separate integrations, each with its own auth, schema, and quirks. Add another tool and you write five more. This is the same integration sprawl that USB and language server protocols were invented to solve in their own domains.",
          "MCP turns that N-times-M problem into N-plus-M. Each tool exposes itself once through an MCP server; each application speaks MCP once as a client. Any client can then use any server.",
        ],
      },
      {
        heading: "What an MCP server exposes",
        body: ["A server can offer three kinds of capability, and clients discover them at runtime:"],
        bullets: [
          "Tools — actions the model can invoke, like querying a database or creating a ticket.",
          "Resources — data the model can read, like files, records, or documentation.",
          "Prompts — reusable, parameterized templates a server can offer for common tasks.",
        ],
      },
      {
        heading: "Why discovery matters",
        body: [
          "Because capabilities are discovered at runtime rather than hard-coded, you can add a new tool to an agent without redeploying the agent. Stand up an MCP server, point the client at it, and the model can see and use the new capability immediately. For teams running many internal systems, that turns integration from a code change into a configuration change.",
        ],
      },
      {
        heading: "What it doesn't solve",
        body: [
          "MCP standardizes the plumbing, not the judgment. You still decide which servers an agent may connect to, what each is permitted to do, and how actions are audited. In practice we treat MCP servers like any other privileged dependency: scoped credentials, least privilege, and logging on every call. The protocol makes connection easy; governance is still your job.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "MCP is best understood as a common port for agents. It won't make a bad agent good, but it removes an enormous amount of glue code and makes your tools reusable across every AI application you build. If you're maintaining a pile of one-off integrations, it's the first thing worth standardizing on.",
        ],
      },
    ],
  },
  {
    slug: "why-agent-demos-fail-in-production",
    title: "Why most AI agent demos fail in production",
    excerpt:
      "A slick agent demo and a dependable production agent are different engineering problems. Evaluation harnesses, guardrails and observability are what actually close that gap.",
    category: "Engineering",
    date: "2026-05-22",
    readTime: "10 min",
    author: "Marcus Feld",
    authorRole: "Operations Lead",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "A demo agent and a production agent look almost identical in a screen recording. They are not the same system. The demo has to work once, on a friendly input, with someone watching. The production agent has to work thousands of times a day, on inputs nobody anticipated, with no one watching — and fail safely when it can't. Closing that gap is most of the actual work.",
        ],
      },
      {
        heading: "The demo runs on a happy path",
        body: [
          "Demos are, understandably, built around inputs that show the agent at its best. Production traffic is not curated. Users paste in malformed data, ask for things outside the agent's scope, change their mind halfway through, and phrase the same request ten different ways. An agent that was never tested against that variety will look brilliant on stage and brittle in the wild.",
        ],
      },
      {
        heading: "What actually closes the gap",
        body: ["Three things separate a demo from a dependable system, and none of them are visible in the recording:"],
        bullets: [
          "Evaluation harnesses — a graded test suite of realistic and adversarial cases you can run on every change, so you know whether a prompt tweak helped or quietly broke something.",
          "Guardrails — hard limits on what the agent can do: scoped permissions, spend caps, human approval on high-impact actions, and refusal behavior when it's out of its depth.",
          "Observability — traces of every reasoning step, tool call, and decision, so when something goes wrong you can see exactly where and why.",
        ],
      },
      {
        heading: "Evaluation is the foundation",
        body: [
          "Without an eval harness, you are tuning blind. Every prompt change becomes a gamble: maybe it fixed the reported bug, maybe it regressed three things you won't hear about until a customer does. We build the eval set before we build the agent, seed it with real failures as they surface, and treat a passing suite as the bar for shipping. It's unglamorous and it's the single highest-leverage thing a team can do.",
        ],
      },
      {
        heading: "Failing safely beats failing rarely",
        body: [
          "You will never drive the error rate to zero. What you can control is what happens when the agent is wrong. A production-grade agent knows when it's uncertain, escalates to a human instead of guessing, and can be rolled back instantly. Designing for graceful failure is what lets you put an imperfect system in front of real customers with confidence.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "If an agent demo impresses you, ask to see the eval suite, the guardrails, and the traces. Those artifacts — not the demo — tell you whether it will survive contact with real users. Building them is the difference between a prototype and a product.",
        ],
      },
    ],
  },
  {
    slug: "what-are-ai-agents",
    title: "What are AI agents, really? A practical definition beyond the hype",
    excerpt:
      "An agent isn't just a chatbot with a system prompt. It's a model wired to tools, memory and a control loop that perceives, plans, acts and observes — here's what that actually means in practice.",
    category: "Fundamentals",
    date: "2026-05-08",
    readTime: "7 min",
    author: "Elena Márquez",
    authorRole: "Co-founder & CEO",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "\"AI agent\" is one of the most overloaded terms in the industry right now. It's used for everything from a chatbot with a clever prompt to a fully autonomous system. That vagueness makes it hard to reason about what you're actually building — so here's a definition that holds up in practice.",
        ],
      },
      {
        heading: "A working definition",
        body: [
          "An agent is a language model placed inside a control loop, given tools to act on the world and memory to carry state, working toward a goal with some degree of autonomy over how it gets there. The key words are loop and autonomy. A model that answers one question is not an agent. A model that decides what to do next, does it, observes the result, and repeats until the goal is met — that's an agent.",
        ],
      },
      {
        heading: "The four moving parts",
        body: ["Almost every agent, regardless of framework, is built from the same components:"],
        bullets: [
          "The model — the reasoning engine that decides what to do.",
          "Tools — the actions it can take: search, code execution, API calls, database queries.",
          "Memory — the state it carries across steps and sessions.",
          "The control loop — the orchestration that runs perceive → plan → act → observe until the task is done or a limit is hit.",
        ],
      },
      {
        heading: "Autonomy is a dial, not a switch",
        body: [
          "The most useful mental shift is to stop asking \"is this an agent?\" and start asking \"how much autonomy does it have?\" A tool that drafts an email for you to approve sits low on the dial. A system that triages tickets, takes action, and only escalates the ambiguous ones sits higher. The right level depends entirely on the cost of a mistake — which is why the same underlying model can power a cautious assistant or a bold automation.",
        ],
      },
      {
        heading: "Why the distinction matters",
        body: [
          "Calling everything an agent leads to bad decisions. If you think you're building an agent but you really need a well-prompted single response, you'll add orchestration complexity you don't need. If you think a chatbot will do but the task genuinely requires multi-step tool use, you'll ship something that can't actually complete the job. Naming the shape of the problem correctly is the first design decision.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "An agent is a model in a loop with tools, memory, and a goal. It's not magic and it's not a synonym for \"AI feature.\" Deciding how much autonomy the task can safely support — and building only as much machinery as that requires — is what separates a system that ships from a demo that impresses.",
        ],
      },
    ],
  },
  {
    slug: "multi-agent-orchestration-frameworks",
    title: "Multi-agent orchestration: LangGraph, AutoGen and CrewAI compared",
    excerpt:
      "When a single agent can't hold an entire task, orchestration frameworks let specialized agents plan, delegate and hand off work to one another. Here's how the major frameworks actually differ.",
    category: "Engineering",
    date: "2026-04-24",
    readTime: "11 min",
    author: "David Chen",
    authorRole: "Founder",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80&auto=format&fit=crop",
    content: [
      {
        body: [
          "When a task gets large enough, a single agent starts to struggle — its context fills up, its focus drifts, and its reasoning degrades. The common response is to split the work across several specialized agents that coordinate: a planner, a researcher, a writer, a reviewer. Orchestration frameworks exist to manage that coordination. The three you'll encounter most are LangGraph, AutoGen, and CrewAI, and they take genuinely different approaches.",
        ],
      },
      {
        heading: "Why split one agent into many",
        body: [
          "Specialization keeps each agent's context small and its instructions focused, which improves reliability. It also mirrors how teams work: a hard problem gets decomposed, delegated, and reviewed. The cost is coordination overhead and new failure modes — agents talking past each other, or looping. A good framework is one that makes the coordination legible and controllable.",
        ],
      },
      {
        heading: "LangGraph: explicit graphs",
        body: [
          "LangGraph models your system as a graph of nodes and edges, where state flows along the edges and you define exactly how control moves between agents. It's the most explicit of the three: you can see and control every transition, add cycles, and checkpoint state. That control is ideal when you need determinism, auditability, and the ability to resume a run — which is why it's a common choice for production systems.",
        ],
      },
      {
        heading: "AutoGen: conversational agents",
        body: [
          "AutoGen frames multi-agent work as a conversation between agents that message each other, including a human-in-the-loop agent. It's flexible and fast to prototype with — you describe roles and let the agents converse toward a solution. The tradeoff is that emergent conversation can be harder to constrain and reason about than an explicit graph, so you invest more in stopping conditions and guardrails.",
        ],
      },
      {
        heading: "CrewAI: role-based teams",
        body: [
          "CrewAI leans on an intuitive metaphor: a crew of agents with defined roles, goals, and tasks, working through a process. It's the quickest to get a sensible multi-agent setup running because the abstractions map cleanly onto how people already think about teams. For straightforward \"assign roles and run the pipeline\" workflows, it's very productive; for highly custom control flow you may outgrow the abstraction.",
        ],
      },
      {
        heading: "How to choose",
        body: ["The right pick depends on what you're optimizing for:"],
        bullets: [
          "Need explicit control, determinism, and resumable state → LangGraph.",
          "Want flexible, conversational prototyping with humans in the loop → AutoGen.",
          "Want the fastest path to a clean role-based pipeline → CrewAI.",
        ],
      },
      {
        heading: "The takeaway",
        body: [
          "Multi-agent orchestration is a tool for taming complexity, not a default. Reach for it when a single agent genuinely can't hold the task — and when you do, pick the framework whose model of coordination matches how much control you need. In production, the ability to observe and constrain what the agents are doing matters more than any feature checklist.",
        ],
      },
    ],
  },
];

export interface JobOpening {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: string;
}

export const jobs: JobOpening[] = [
  { slug: "senior-ai-engineer", title: "Senior AI Engineer", team: "Engineering", location: "Remote / Bengaluru", type: "Full-time" },
  { slug: "ml-research-engineer", title: "ML Research Engineer", team: "Research", location: "Remote", type: "Full-time" },
  { slug: "forward-deployed-engineer", title: "Forward-Deployed Engineer", team: "Delivery", location: "Hybrid / Bengaluru", type: "Full-time" },
  { slug: "product-designer", title: "Senior Product Designer", team: "Design", location: "Remote", type: "Full-time" },
  { slug: "ai-solutions-architect", title: "AI Solutions Architect", team: "Solutions", location: "Remote / EU", type: "Full-time" },
  { slug: "devrel-engineer", title: "Developer Relations Engineer", team: "Growth", location: "Remote", type: "Full-time" },
];

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Pilot",
    price: "$25k",
    cadence: "fixed scope",
    description: "Prove a single high-value use case in weeks, with a production-ready prototype.",
    features: ["1 use case", "Discovery & ROI model", "Working prototype", "Eval harness", "Deployment plan"],
    cta: "Start a pilot",
  },
  {
    name: "Build",
    price: "Custom",
    cadence: "per engagement",
    description: "End-to-end delivery of a production AI system with your team embedded alongside ours.",
    features: ["Multiple use cases", "Full production build", "MLOps & monitoring", "Security review support", "Team enablement", "SLA-backed support"],
    cta: "Scope a build",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    cadence: "annual partnership",
    description: "A dedicated pod, platform and governance model for AI across your organization.",
    features: ["Dedicated delivery pod", "AI platform & governance", "Private / on-prem deployment", "Executive roadmap", "24/7 support", "Quarterly business reviews"],
    cta: "Contact sales",
  },
];

export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const faqs: FaqItem[] = [
  { category: "Engagement", q: "How fast can you deliver a production system?", a: "Most pilots reach a production-ready prototype in 6–9 weeks. Full builds typically run 3–5 months depending on integrations and compliance requirements." },
  { category: "Engagement", q: "How do engagements start?", a: "We begin with a discovery sprint to map use cases, quantify ROI and validate feasibility — a low-risk way to align before committing to a build." },
  { category: "Security", q: "Can our data stay private?", a: "Yes. We deploy to your VPC or on-prem with open models when required, guaranteeing zero data egress and full auditability." },
  { category: "Security", q: "Are you compliant with our standards?", a: "We build to SOC 2, ISO 27001, HIPAA and GDPR expectations and support your security review with architecture docs, DPAs and threat models." },
  { category: "Technical", q: "Which models do you use?", a: "We are model-agnostic. We select and often combine frontier and open models based on accuracy, latency, cost and data-residency requirements." },
  { category: "Technical", q: "How do you prevent hallucinations?", a: "Grounding via retrieval, structured outputs, validation layers, evaluation harnesses and human-in-the-loop where stakes are high." },
  { category: "Technical", q: "Do you handle ongoing operations?", a: "Yes. We offer MLOps, monitoring, drift detection and SLA-backed support, or we enable your team to own the system." },
  { category: "Commercial", q: "How is pricing structured?", a: "Pilots are fixed-scope. Builds and enterprise partnerships are scoped per engagement. See our pricing page for a starting point." },
];

export const companyValues = [
  { title: "Rigor over hype", description: "Every claim ships with an evaluation. We measure, then we promise.", icon: Gauge },
  { title: "Own the outcome", description: "We are accountable for business results, not deliverables.", icon: Rocket },
  { title: "Safety by design", description: "Guardrails, audits and rollback are built in, not bolted on.", icon: Shield },
  { title: "Ship weekly", description: "You see working software every week — no black boxes.", icon: GitBranch },
  { title: "Earn trust", description: "Transparent, secure and straight with our clients, always.", icon: Lock },
  { title: "Craft matters", description: "From code to interface, we sweat the details others skip.", icon: Sparkles },
];

export const timeline = [
  { year: "2019", title: "Founded", text: "Started by ML researchers and product engineers frustrated by AI that never left the demo." },
  { year: "2021", title: "First enterprise platform", text: "Shipped our first production AI platform for a Fortune 500 financial institution." },
  { year: "2023", title: "Agentic era", text: "Built one of the first guardrailed multi-agent systems deployed at scale in a regulated industry." },
  { year: "2025", title: "50+ systems", text: "Crossed 50+ production AI systems shipped across finance, health, retail and manufacturing." },
  { year: "2026", title: "Global delivery", text: "Delivery pods across three continents serving 40M+ requests a day." },
];

export const leadership = [
  { name: "Elena Márquez", role: "Co-founder & CEO", bio: "Former ML lead scaling AI in regulated finance." },
  { name: "David Chen", role: "Co-founder & CTO", bio: "Systems engineer; built inference platforms at hyperscale." },
  { name: "Priya Nair", role: "VP, AI Research", bio: "Published researcher in retrieval and alignment." },
  { name: "Marcus Feld", role: "VP, Delivery", bio: "Ran forward-deployed teams shipping AI to the Fortune 100." },
];

export const offices = [
{ city: "Bengaluru", country: "India", label: "HQ", address: "Bengaluru, 560104" },
{ city: "Belagavi", country: "India", label: "Tech Hub", address: "Belagavi, 590001" },
{ city: "Hyderabad", country: "India", label: "R&D Center", address: "Hyderabad,  500081" },
];

// Real Indian startups used as stand-in content until the real client list is supplied.
// TODO: Replace with your actual clients — and only display companies you have
// permission to name, since this strip is framed as "Trusted by".
export const clientLogos = [
  "Muks Robotics", "Ayukriyam", "Bellatrix Aerospace", "Detect Technologies", "Skyroot Aerospace", "GalaxEye",
];

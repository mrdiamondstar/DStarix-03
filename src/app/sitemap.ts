import type { MetadataRoute } from "next";

const BASE = "https://dstarix.tech";

const routes = [
  "", "services", "ai-solutions", "industries", "portfolio", "case-studies",
  "about", "careers", "blog", "contact", "pricing", "ai-consulting",
  "ai-development", "ai-automation", "enterprise-ai", "generative-ai",
  "agentic-ai", "rag-solutions", "ai-chatbots", "voice-ai",
  "custom-llm-development", "workflow-automation", "faq", "privacy", "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${BASE}/${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" || r === "blog" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}

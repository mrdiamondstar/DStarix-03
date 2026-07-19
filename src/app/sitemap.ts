import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";

const BASE = "https://dstarix.in";

const routes = [
  "", "services", "ai-solutions", "industries", "portfolio",
  "about", "careers", "blog", "contact", "pricing", "ai-consulting",
  "ai-development", "ai-automation", "enterprise-ai", "generative-ai",
  "agentic-ai", "rag-solutions", "ai-chatbots", "voice-ai",
  "custom-llm-development", "workflow-automation", "faq", "privacy", "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}/${r}`,
    lastModified: now,
    changeFrequency: r === "" || r === "blog" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}

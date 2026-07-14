"use client";

import { motion } from "framer-motion";

/** Faux macOS code window with syntax-tinted lines. */
export function CodeWindow({ className }: { className?: string }) {
  const lines: { t: string; c?: string }[] = [
    { t: "import { Agent, tools } from \"@dstarix/core\";", c: "text-violet-300" },
    { t: "" },
    { t: "const support = new Agent({", c: "text-electric-400" },
    { t: "  model: \"claude-opus-4-8\"," },
    { t: "  tools: [tools.search, tools.crm, tools.refund]," },
    { t: "  guardrails: policy(\"tier-1\")," },
    { t: "  eval: harness(\"support-v3\"),", c: "text-cyan-300" },
    { t: "});" },
    { t: "" },
    { t: "await support.run(ticket); // 68% auto-resolved", c: "text-emerald-300" },
  ];

  return (
    <div className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12] shadow-2xl ${className ?? ""}`}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-white/40">agent.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-white/80">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex gap-4"
          >
            <span className="w-5 select-none text-right text-white/20">{i + 1}</span>
            <code className={l.c}>{l.t || " "}</code>
          </motion.div>
        ))}
      </pre>
    </div>
  );
}

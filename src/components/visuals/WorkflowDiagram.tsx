"use client";

import { motion } from "framer-motion";

/**
 * Agent flow diagram.
 *
 * Everything (nodes, labels, edges, particles) lives inside ONE SVG coordinate
 * space with a uniform preserveAspectRatio, so geometry can never drift the way
 * it does when HTML nodes are positioned in % over a stretched SVG.
 */

type NodeId = "input" | "retrieve" | "agent" | "tools" | "guard";

const VB = { w: 800, h: 500 };

const NODES: Record<
  NodeId,
  { label: string; x: number; y: number; r: number; icon: string; sub: string }
> = {
  // Symmetric diamond: retrieve/tools mirror exactly around the y-axis of agent.
  input:    { label: "User Intent", sub: "ingest",   x: 110, y: 250, r: 34, icon: "chat" },
  retrieve: { label: "Retrieval",   sub: "vector db", x: 330, y: 130, r: 34, icon: "db" },
  tools:    { label: "Tools",       sub: "functions", x: 330, y: 370, r: 34, icon: "wrench" },
  agent:    { label: "Agent Core",  sub: "reasoning", x: 530, y: 250, r: 44, icon: "bot" },
  guard:    { label: "Guardrails",  sub: "policy",    x: 710, y: 250, r: 34, icon: "shield" },
};

// [from, to, curvature] — curvature bends the edge for a clean, non-overlapping fan.
const EDGES: [NodeId, NodeId, number][] = [
  ["input", "retrieve", -0.18],
  ["input", "tools", 0.18],
  ["retrieve", "agent", 0.18],
  ["tools", "agent", -0.18],
  ["agent", "guard", 0],
];

/** Quadratic edge that starts/ends exactly on each circle's rim (not its center). */
function edgePath(a: NodeId, b: NodeId, curve: number) {
  const na = NODES[a];
  const nb = NODES[b];
  const dx = nb.x - na.x;
  const dy = nb.y - na.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;

  // Gap so the stroke stops just short of the rim — no lines piercing the icons.
  const GAP = 8;
  const x1 = na.x + ux * (na.r + GAP);
  const y1 = na.y + uy * (na.r + GAP);
  const x2 = nb.x - ux * (nb.r + GAP);
  const y2 = nb.y - uy * (nb.r + GAP);

  // Control point offset along the perpendicular.
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const cx = mx + -uy * len * curve;
  const cy = my + ux * len * curve;

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function Icon({ name, cx, cy }: { name: string; cx: number; cy: number }) {
  const s = 1.05; // icon scale
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7 / s,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  // Each icon is drawn on a 24x24 grid, then translated so its centre sits on (cx, cy).
  const g = (children: React.ReactNode) => (
    <g transform={`translate(${cx} ${cy}) scale(${s}) translate(-12 -12)`} {...common}>
      {children}
    </g>
  );

  switch (name) {
    case "chat":
      return g(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />);
    case "db":
      return g(
        <>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
        </>
      );
    case "wrench":
      return g(
        <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.1 2.1 0 0 1-3-3l9.4-9.4a4 4 0 0 0-2-2z" />
      );
    case "shield":
      return g(
        <>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </>
      );
    case "bot":
      return g(
        <>
          <rect x="4" y="8" width="16" height="12" rx="3" />
          <path d="M12 8V4" />
          <circle cx="12" cy="3" r="1.4" />
          <circle cx="9" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13.5" r="1.1" fill="currentColor" stroke="none" />
          <path d="M9.5 17h5" />
        </>
      );
    default:
      return null;
  }
}

export function WorkflowDiagram({ className }: { className?: string }) {
  const ids = Object.keys(NODES) as NodeId[];

  return (
    <div
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b11] ${
        className ?? ""
      }`}
    >
      <div aria-hidden className="absolute inset-0 bg-grid-dark bg-[size:32px_32px] opacity-25" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-radial blur-2xl"
      />

      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="AI agent pipeline: user intent flows through retrieval and tools into the agent core, then through guardrails."
      >
        <defs>
          <linearGradient id="wf-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="0.55" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="wf-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset="0.55" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#2563eb" />
          </linearGradient>
          <radialGradient id="wf-core-glow">
            <stop offset="0" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="wf-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* ---- Edges (drawn first so nodes always sit on top) ---- */}
        {EDGES.map(([a, b, c], i) => {
          const d = edgePath(a, b, c);
          return (
            <g key={`${a}-${b}`}>
              {/* Static rail */}
              <path d={d} stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" fill="none" />
              {/* Animated energy dash */}
              <motion.path
                d={d}
                stroke="url(#wf-edge)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="10 16"
                initial={{ strokeDashoffset: 26, opacity: 0 }}
                whileInView={{ strokeDashoffset: 0, opacity: 0.95 }}
                viewport={{ once: true }}
                transition={{
                  strokeDashoffset: { duration: 1.1, repeat: Infinity, ease: "linear", delay: i * 0.15 },
                  opacity: { duration: 0.5, delay: 0.3 + i * 0.1 },
                }}
              />
              {/* Travelling packet */}
              <motion.circle
                r="3.2"
                fill="#fff"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 1, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.28 }}
                style={{ offsetPath: `path("${d}")`, offsetRotate: "0deg" } as React.CSSProperties}
                // Framer animates offsetDistance for browsers that support motion paths.
                animate={{ offsetDistance: ["0%", "100%"] } as never}
              />
            </g>
          );
        })}

        {/* ---- Nodes ---- */}
        {ids.map((id, i) => {
          const n = NODES[id];
          const isCore = id === "agent";
          return (
            <motion.g
              key={id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 190, damping: 17 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            >
              {isCore && (
                <>
                  <circle cx={n.x} cy={n.y} r={n.r + 30} fill="url(#wf-core-glow)" filter="url(#wf-blur)" />
                  {/* Expanding sonar ring */}
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.85, opacity: 0 }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  />
                </>
              )}

              {/* Disc */}
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill={isCore ? "url(#wf-core)" : "rgba(255,255,255,0.045)"}
                stroke={isCore ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.14)"}
                strokeWidth="1.25"
              />

              {/* Icon — perfectly centred via its own transform */}
              <g className="text-white">
                <Icon name={n.icon} cx={n.x} cy={n.y} />
              </g>

              {/* Labels sit BELOW the disc with a fixed clearance — no more overlap */}
              <text
                x={n.x}
                y={n.y + n.r + 26}
                textAnchor="middle"
                className="fill-white/85 font-sans"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                {n.label}
              </text>
              <text
                x={n.x}
                y={n.y + n.r + 43}
                textAnchor="middle"
                className="fill-white/35 font-mono"
                style={{ fontSize: 11, letterSpacing: "0.06em" }}
              >
                {n.sub}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

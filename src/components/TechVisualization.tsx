"use client";

import { motion } from "framer-motion";
import { Atom, Triangle, Server, Database, Zap, Braces } from "lucide-react";

type TechNode = {
  label: string;
  icon: React.ElementType;
  // position expressed as a percentage of the 500x500 layout box
  xPct: number;
  yPct: number;
};

const NODES: TechNode[] = [
  { label: "Next.js", icon: Triangle, xPct: 50, yPct: 12 },
  { label: "TypeScript", icon: Braces, xPct: 82.9, yPct: 31 },
  { label: "Node.js", icon: Server, xPct: 82.9, yPct: 69 },
  { label: "MongoDB", icon: Database, xPct: 50, yPct: 88 },
  { label: "Express", icon: Zap, xPct: 17.1, yPct: 69 },
  { label: "React", icon: Atom, xPct: 17.1, yPct: 31 },
];

const CENTER = { x: 250, y: 250 };

export default function TechVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
      className="relative mx-auto aspect-square w-full max-w-[480px]"
    >
      {/* connection lines */}
      <svg
        viewBox="0 0 500 500"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="line-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {NODES.map((node) => {
          const x2 = (node.xPct / 100) * 500;
          const y2 = (node.yPct / 100) * 500;
          return (
            <motion.line
              key={node.label}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={x2}
              y2={y2}
              stroke="url(#line-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.7, 0.3] }}
              transition={{
                pathLength: { duration: 1, delay: 0.9, ease: "easeOut" },
                opacity: {
                  duration: 4,
                  delay: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}
      </svg>

      {/* central node */}
      <div
        className="absolute flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-card font-mono text-lg font-semibold text-ink-primary shadow-[0_0_40px_rgba(168,85,247,0.35)]"
        style={{ left: "50%", top: "50%" }}
      >
        <span className="text-gradient">&lt;/&gt;</span>
      </div>

      {/* floating tech cards */}
      {NODES.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 rounded-xl border border-line bg-card/80 px-3 py-2.5 shadow-[0_0_24px_rgba(139,92,246,0.18)] backdrop-blur-sm"
            style={{ left: `${node.xPct}%`, top: `${node.yPct}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.4, delay: 1 + i * 0.08 },
              scale: { duration: 0.4, delay: 1 + i * 0.08 },
              y: {
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4 + i * 0.15,
              },
            }}
          >
            <Icon size={18} className="text-accent-purple" />
            <span className="text-[11px] font-medium text-ink-secondary">
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

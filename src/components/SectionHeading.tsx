"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-14 max-w-2xl"
    >
      <span className="mb-4 inline-flex items-center rounded-full border border-line bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-purple">
        {eyebrow}
      </span>
      <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] font-bold leading-tight tracking-tight text-ink-primary">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-secondary">
          {description}
        </p>
      )}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import HeroBackground from "./HeroBackground";
import TechVisualization from "./TechVisualization";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg pt-28"
    >
      <HeroBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-6 py-12 lg:grid-cols-2 lg:gap-12 lg:px-10"
      >
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          <motion.span
            variants={item}
            className="mb-5 inline-flex items-center rounded-full border border-line bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-purple"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-ink-primary"
          >
            Hi, I&apos;m <span className="text-gradient">Sahil Sabarwal.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-ink-primary/90 sm:text-xl"
          >
            I build modern, scalable, and user-focused web applications.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-lg text-base leading-relaxed text-ink-secondary"
          >
            Full Stack Developer focused on building reliable web experiences
            with React, Next.js, Node.js, and MongoDB.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink px-6 py-3.5 text-sm font-semibold text-ink-primary shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(236,72,153,0.5)]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-transparent px-6 py-3.5 text-sm font-semibold text-ink-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/50 hover:bg-card/40"
            >
              Let&apos;s Connect
              <MessageCircle
                size={16}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </a>
          </motion.div>
        </div>

        {/* Right: abstract tech visualization */}
        <motion.div variants={item}>
          <TechVisualization />
        </motion.div>
      </motion.div>
    </section>
  );
}

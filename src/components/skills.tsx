"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Terminal,
  Wrench,
  Brain,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

type Category = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const SKILLS: Category[] = [
  {
    title: "Frontend",
    icon: Layout,
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "Supabase"],
  },
  {
    title: "Languages",
    icon: Terminal,
    items: ["Python", "JavaScript"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Postman", "Hoppscotch", "Figma"],
  },
  {
    title: "Core",
    icon: Brain,
    items: ["Data Structures & Algorithms", "OOP", "DBMS"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 lg:px-10"
    >
      <SectionHeading
        eyebrow="What I work with"
        title="Skills &"
        highlight="Technologies"
        description="A toolkit built around shipping reliable, production-ready web applications end to end."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILLS.map(({ title, icon: Icon, items }) => (
          <motion.div
            key={title}
            variants={card}
            className="group rounded-2xl border border-line bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-bg-secondary text-accent-purple transition-colors duration-300 group-hover:text-accent-pink">
              <Icon size={20} />
            </div>
            <h3 className="mb-3 font-semibold text-ink-primary">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-bg-secondary/80 px-3 py-1 text-xs text-ink-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

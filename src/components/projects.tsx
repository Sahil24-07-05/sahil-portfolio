"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Tagesschrift } from "next/font/google";

const PROJECTS = [
  {
    title: "InterviewHub",
    description:
      "Full-stack mock interview platform with role-based dashboards, authentication, slot management, and interview booking.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Sahil24-07-05/InterviewHub",
    live: "#",
    featured: false,
  },
  {
    title: "Fitness Partner",
    description:
      "Production-bound fitness and wellness platform focused on responsive frontend experiences, onboarding, profile management, and fitness workflows.",
    tags: ["Next.js", "React.js", "Prisma", "MySQL", "Zod"],
    github: "https://github.com/Fitness-Partner/Fitness-Partner",
    live: "https://fitness-partner-1.onrender.com/",
    featured: false,
  },

  {
    title: "Stayora",
    description:
      "Full-stack travel property listing platform with CRUD operations, authentication, authorization, and property management.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Passport.js"],
    github: "https://github.com/Sahil24-07-05/Stayora",
    live: "https://stayora-tq56.onrender.com",
    featured: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 lg:px-10"
    >
      <SectionHeading
        eyebrow="Selected work"
        title="Featured"
        highlight="Projects"
        description="A few things I've built recently. Each one links out to code and, where available, a live demo."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            variants={card}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
          >
            {/* thumbnail placeholder — swap for a real screenshot/Image */}
            <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-accent-purple/15 via-accent-violet/10 to-accent-pink/15">
              <Folder
                size={32}
                className="text-accent-purple/70 transition-transform duration-300 group-hover:scale-110"
              />
              {project.featured && (
                <span className="absolute right-3 top-3 rounded-full border border-line bg-bg/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-accent-pink">
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 font-semibold text-ink-primary">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-secondary">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-bg-secondary/80 px-3 py-1 text-xs text-ink-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-line pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary"
                  >
                    <Github size={16} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors duration-200 hover:text-ink-primary"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

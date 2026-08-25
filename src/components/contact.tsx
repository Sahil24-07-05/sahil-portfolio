"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";

// TODO(Sahil): swap these for your real details / social links.
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "sabarwalsahil24@gmail.com",
    href: "mailto:sabarwalsahil24@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Open to relocation",
    href: undefined,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Sahil24-07-05",
    href: "https://github.com/Sahil24-07-05",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sahil-sabarwal24",
    href: " https://www.linkedin.com/in/sahil-sabarwal24/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No backend wired up yet — falls back to opening the user's mail client.
    // Replace with a real submit handler (API route, Formspree, Resend, etc.) when ready.
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:sabarwalsahil24@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1280px] scroll-mt-24 px-6 py-24 lg:px-10"
    >
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's Build"
        highlight="Something Together"
        description="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4 lg:col-span-2"
        >
          {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg-secondary text-accent-purple transition-colors duration-300 group-hover:text-accent-pink">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-ink-secondary">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-ink-primary">
                    {value}
                  </p>
                </div>
              </>
            );
            const className =
              "group flex items-center gap-4 rounded-2xl border border-line bg-card/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]";

            return href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {inner}
              </a>
            ) : (
              <div key={label} className={className}>
                {inner}
              </div>
            );
          })}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-4 rounded-2xl border border-line bg-card/60 p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs text-ink-secondary">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="rounded-xl border border-line bg-bg-secondary px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary/60 outline-none transition-colors duration-200 focus:border-accent-purple"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs text-ink-secondary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="rounded-xl border border-line bg-bg-secondary px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary/60 outline-none transition-colors duration-200 focus:border-accent-purple"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs text-ink-secondary">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you looking to build?"
              className="resize-none rounded-xl border border-line bg-bg-secondary px-4 py-3 text-sm text-ink-primary placeholder:text-ink-secondary/60 outline-none transition-colors duration-200 focus:border-accent-purple"
            />
          </div>

          <button
            type="submit"
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-purple to-accent-pink px-6 py-3.5 text-sm font-semibold text-ink-primary shadow-[0_0_24px_rgba(168,85,247,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(236,72,153,0.5)]"
          >
            Send Message
            <Send
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

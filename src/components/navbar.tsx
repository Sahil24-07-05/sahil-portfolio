"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Home", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight text-ink-primary"
        >
          SAHIL<span className="text-gradient">&lt;/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link} className="relative">
              <button
                onClick={() => setActive(link)}
                className={`text-sm transition-colors duration-200 ${
                  active === link
                    ? "text-ink-primary"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                {link}
              </button>
              {active === link && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-accent-purple to-accent-pink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="text-ink-primary md:hidden"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-1 overflow-hidden border-t border-line bg-bg/95 px-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    setActive(link);
                    setMobileOpen(false);
                  }}
                  className={`block w-full py-3 text-left text-sm ${
                    active === link ? "text-ink-primary" : "text-ink-secondary"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

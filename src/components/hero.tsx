"use client";

import { useEffect, useState } from "react";

const texts = ["Hi, I'm Sahil Sabarwal ", "MERN Stack Developer "];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, 80); // typing speed
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, 50); // deleting speed
    } else if (!isDeleting && displayText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200); // pause after typing
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <h1 className="mt-4 text-4xl md:text-5xl font-semibold h-[70px] md:h-[90px]">
        {displayText}
        {displayText === texts[0] && <span> 👋</span>}
        {displayText === texts[1] && <span> ⚙️</span>}
        <span className="animate-pulse">|</span>
      </h1>

      <p className="mt-4 text-slate-400 max-w-xl">
        Building scalable, real-world web applications with clean APIs and
        efficient backend systems.
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="#projects"
          className="px-5 py-2 bg-slate-200 text-slate-900 rounded text-sm font-medium hover:bg-white"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-5 py-2 border border-slate-700 rounded text-sm hover:border-slate-500"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

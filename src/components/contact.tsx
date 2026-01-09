"use client";

import { Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <h2 className="text-3xl font-semibold mb-8">Contact</h2>

      <div className="space-y-5 text-slate-400">
        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail size={18} />
          <a
            href="mailto:sahilsabarwal@example.com"
            className="hover:text-white transition"
          >
            sahilsabarwal24@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <Linkedin size={18} />
          <a
            href="https://www.linkedin.com/in/sahil-sabarwal24/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            linkedin.com/in/sahil-sabarwal24
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <Github size={18} />
          <a
            href="https://github.com/Sahil24-07-05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            github.com/Sahil24-07-05
          </a>
        </div>

        {/* Resume Download */}
        <div className="flex items-center gap-3 ">
          <FileDown size={18} />
          <a
            href="/sahil-resume.pdf"
            download
            className="hover:text-white transition font-medium"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

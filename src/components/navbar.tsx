export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold tracking-wide">
          Sahil<span className="text-slate-400">.dev</span>
        </span>

        <div className="hidden md:flex gap-6 text-sm text-slate-400">
          <a href="#about" className="hover:text-slate-200 transition">
            About
          </a>
          <a href="#skills" className="hover:text-slate-200 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-slate-200 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-slate-200 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

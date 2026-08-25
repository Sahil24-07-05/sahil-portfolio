export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* base grid */}
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* faint particle dots */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
      />

      {/* purple glow, left/behind copy */}
      <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-accent-purple/25 blur-[140px]" />

      {/* pink glow, right/behind tech visual */}
      <div className="absolute right-[-8%] top-[30%] h-[380px] w-[380px] rounded-full bg-accent-pink/20 blur-[140px]" />

      {/* subtle violet wash at the very top for the navbar */}
      <div className="absolute left-1/2 top-[-15%] h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[160px]" />

      {/* bottom vignette back to base background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

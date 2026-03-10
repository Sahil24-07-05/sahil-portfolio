const skills = {
  Frontend: ["React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js , REST APIs, MVC Architecture"],
  Database: ["MongoDB", "MySql"],
  Tools: ["Git", "GitHub", "Hoppscotch", "Figma"],
  Other: [
    " Strong interest in Data Structures & Algorithms with a growing focus on Machine Learning and problem solving.",
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([title, items]) => (
          <div key={title} className="bg-slate-900 p-5 rounded">
            <h3 className="font-medium mb-2">{title}</h3>
            <p className="text-slate-400 text-sm">{items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

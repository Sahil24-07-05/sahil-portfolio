import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-slate-900 p-6 rounded">
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-slate-400 text-sm mt-2">{project.description}</p>
            <p className="text-xs text-slate-500 mt-3">
              {project.tech.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

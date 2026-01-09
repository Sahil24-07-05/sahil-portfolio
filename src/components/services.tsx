export default function Services() {
  const services = [
    "Backend Development",
    "REST APIs",
    "Full-Stack Applications",
    "Database & Data Handling",
  ];

  return (
    <section className="py-20">
      <h2 className="text-2xl font-semibold mb-6">Services</h2>
      <ul className="grid md:grid-cols-2 gap-4 text-slate-400">
        {services.map((service) => (
          <li key={service} className="bg-slate-900 p-4 rounded">
            {service}
          </li>
        ))}
      </ul>
    </section>
  );
}

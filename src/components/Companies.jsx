export default function Companies() {
  const companies = [
    { name: "HackerRank", logo: "/company-icons/HR.png" },
    { name: "Airbnb", logo: "/company-icons/AB.png" },
    { name: "GitLab", logo: "/company-icons/GL.png" },
    { name: "Dropbox", logo: "/company-icons/DB.png" },
    { name: "Upwork", logo: "/company-icons/UP.png" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {companies.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white shadow"
          >
            <img src={c.logo} alt={c.name} className="w-6 h-6 object-contain" />
            <span className="text-gray-900 font-medium text-sm">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export const ExperienceOutput = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      highlights: [
        "Led microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Reduced deployment time by 60% with CI/CD pipelines",
      ],
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      highlights: [
        "Built real-time collaboration features using WebSockets",
        "Developed RESTful APIs with Node.js and PostgreSQL",
        "Optimized database queries, improving response time by 40%",
      ],
    },
    {
      title: "Junior Developer",
      company: "Digital Agency",
      period: "2019 - 2020",
      highlights: [
        "Created responsive web applications using React",
        "Collaborated with design team on UI/UX improvements",
        "Participated in agile development processes",
      ],
    },
  ];

  const certs = [
    { name: "AWS Solutions Architect", year: "2023", color: "text-peach" },
    { name: "Google Cloud Developer", year: "2022", color: "text-blue" },
    { name: "Kubernetes Admin (CKA)", year: "2022", color: "text-sky" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">// Work Experience</p>
      
      {experiences.map((exp, i) => (
        <div 
          key={i} 
          className="bg-surface rounded-lg p-4 border-l-2 border-ctp-green"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
            <span className="text-green font-semibold">{exp.title}</span>
            <span className="text-subtext text-sm">{exp.period}</span>
          </div>
          <p className="text-mauve mb-2">@ {exp.company}</p>
          <ul className="space-y-1">
            {exp.highlights.map((item, j) => (
              <li key={j} className="text-foreground text-sm flex gap-2">
                <span className="text-subtext">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-6">
        <p className="text-lavender mb-3">// Certifications</p>
        <div className="flex flex-wrap gap-3">
          {certs.map((cert) => (
            <div key={cert.name} className="bg-surface rounded-lg px-3 py-2">
              <span className={cert.color}>📜 {cert.name}</span>
              <span className="text-overlay text-sm ml-2">({cert.year})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ProjectsOutput = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: "CloudDeploy",
      desc: "CLI tool for simplified cloud deployments across AWS, GCP, and Azure",
      tech: ["Go", "AWS SDK", "Terraform"],
      color: "text-green",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      name: "DevChat",
      desc: "Real-time collaborative coding platform with integrated video calls",
      tech: ["React", "WebRTC", "Node.js"],
      color: "text-blue",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      name: "TaskFlow",
      desc: "Kanban-style project management with AI-powered task suggestions",
      tech: ["Next.js", "PostgreSQL", "OpenAI"],
      color: "text-mauve",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      name: "MetricsDash",
      desc: "Real-time analytics dashboard for monitoring app performance",
      tech: ["Vue.js", "D3.js", "InfluxDB"],
      color: "text-peach",
      github: "https://github.com",
      live: null,
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.projectsTitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div 
            key={project.name} 
            className="bg-surface rounded-lg p-4 hover:bg-ctp-surface1 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <span className={`${project.color} font-semibold`}>
                📁 {project.name}
              </span>
              <div className="flex gap-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtext hover:text-foreground"
                >
                  <Github size={16} />
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtext hover:text-foreground"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-foreground text-sm mb-3">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 bg-ctp-surface1 rounded text-subtext">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-overlay text-sm">
        {t.projectsTip} <span className="text-green">{t.projectsSocialCmd}</span> {t.projectsFindMore}
      </p>
    </div>
  );
};

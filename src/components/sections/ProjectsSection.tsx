import { TerminalWindow } from "../terminal/TerminalWindow";
import { Prompt } from "../terminal/Prompt";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "CloudDeploy",
    description: "A CLI tool for simplified cloud deployments across AWS, GCP, and Azure",
    tech: ["Go", "AWS SDK", "Terraform"],
    color: "text-green",
    github: "#",
    live: "#",
  },
  {
    name: "DevChat",
    description: "Real-time collaborative coding platform with integrated video calls",
    tech: ["React", "WebRTC", "Node.js", "MongoDB"],
    color: "text-blue",
    github: "#",
    live: "#",
  },
  {
    name: "TaskFlow",
    description: "Kanban-style project management tool with AI-powered task suggestions",
    tech: ["Next.js", "PostgreSQL", "OpenAI API"],
    color: "text-mauve",
    github: "#",
    live: "#",
  },
  {
    name: "MetricsDash",
    description: "Real-time analytics dashboard for monitoring application performance",
    tech: ["Vue.js", "D3.js", "InfluxDB", "Grafana"],
    color: "text-peach",
    github: "#",
    live: "#",
  },
  {
    name: "SecureVault",
    description: "End-to-end encrypted password manager with biometric authentication",
    tech: ["React Native", "Rust", "SQLite"],
    color: "text-pink",
    github: "#",
    live: null,
  },
  {
    name: "APIForge",
    description: "REST API generator that creates boilerplate from OpenAPI specifications",
    tech: ["Python", "FastAPI", "Jinja2"],
    color: "text-teal",
    github: "#",
    live: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="~/projects — bash">
          <Prompt command="find ./projects -type d -maxdepth 1" />
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 slide-up">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-surface rounded-lg p-4 border border-ctp-surface1 hover:border-ctp-surface2 transition-all duration-200 hover-glow"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`${project.color} font-semibold text-lg`}>
                    📁 {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="text-subtext hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={18} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="text-subtext hover:text-foreground transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-ctp-surface1 rounded text-subtext"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-surface pt-4">
            <Prompt command="echo 'More projects on GitHub →'" />
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sapphire hover:underline mt-2"
            >
              <Github size={16} />
              View all repositories
            </a>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

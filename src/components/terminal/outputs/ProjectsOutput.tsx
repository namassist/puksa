import { ExternalLink, Github, Star, GitFork, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ProjectsOutput = () => {
  const { t } = useLanguage();

  const featuredProjects = [
    {
      name: "CloudDeploy",
      desc: "CLI tool for simplified cloud deployments across AWS, GCP, and Azure. Features automatic rollback, blue-green deployments, and real-time monitoring.",
      tech: ["Go", "AWS SDK", "Terraform", "gRPC"],
      color: "text-green",
      github: "https://github.com",
      live: "https://example.com",
      stats: { stars: 1247, forks: 234, contributors: 18 },
      featured: true,
    },
    {
      name: "DevChat",
      desc: "Real-time collaborative coding platform with integrated video calls, live code execution, and AI-powered code suggestions.",
      tech: ["React", "WebRTC", "Node.js", "Socket.io", "Monaco Editor"],
      color: "text-blue",
      github: "https://github.com",
      live: "https://example.com",
      stats: { stars: 892, forks: 156, contributors: 12 },
      featured: true,
    },
    {
      name: "TaskFlow AI",
      desc: "Kanban-style project management with AI-powered task suggestions, automatic priority scoring, and team workload balancing.",
      tech: ["Next.js", "PostgreSQL", "OpenAI", "Prisma", "tRPC"],
      color: "text-mauve",
      github: "https://github.com",
      live: "https://example.com",
      stats: { stars: 567, forks: 89, contributors: 8 },
      featured: true,
    },
    {
      name: "MetricsDash",
      desc: "Real-time analytics dashboard for monitoring app performance, error tracking, and user behavior analysis.",
      tech: ["Vue.js", "D3.js", "InfluxDB", "Grafana"],
      color: "text-peach",
      github: "https://github.com",
      live: null,
      stats: { stars: 423, forks: 67, contributors: 5 },
      featured: false,
    },
    {
      name: "AuthKit",
      desc: "Drop-in authentication library supporting OAuth, SAML, magic links, and passwordless authentication.",
      tech: ["TypeScript", "Node.js", "JWT", "Redis"],
      color: "text-pink",
      github: "https://github.com",
      live: "https://example.com",
      stats: { stars: 2341, forks: 412, contributors: 32 },
      featured: true,
    },
    {
      name: "Terminal Portfolio",
      desc: "This very portfolio! An interactive terminal-based portfolio with multiple themes, Easter eggs, and bilingual support.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "text-lavender",
      github: "https://github.com",
      live: null,
      stats: { stars: 156, forks: 28, contributors: 1 },
      featured: false,
    },
  ];

  const openSourceContributions = [
    { project: "React", contribution: "Performance optimization PRs", prs: 3 },
    { project: "TypeScript", contribution: "Documentation improvements", prs: 5 },
    { project: "Tailwind CSS", contribution: "Plugin development", prs: 2 },
    { project: "Vite", contribution: "Bug fixes & features", prs: 4 },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.projectsTitle}</p>
      
      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {featuredProjects.map((project) => (
          <div 
            key={project.name} 
            className={`bg-surface rounded-lg p-4 hover:bg-ctp-surface1 transition-colors ${project.featured ? 'border border-ctp-surface2' : ''}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className={`${project.color} font-semibold`}>
                  📁 {project.name}
                </span>
                {project.featured && (
                  <span className="text-xs bg-yellow/20 text-yellow px-2 py-0.5 rounded">Featured</span>
                )}
              </div>
              <div className="flex gap-2">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-subtext hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                </a>
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-subtext hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-foreground text-sm mb-3 leading-relaxed">{project.desc}</p>
            
            {/* Stats */}
            <div className="flex gap-4 mb-3 text-xs text-subtext">
              <span className="flex items-center gap-1">
                <Star size={12} className="text-yellow" />
                {project.stats.stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork size={12} className="text-sky" />
                {project.stats.forks}
              </span>
              <span className="flex items-center gap-1">
                <Users size={12} className="text-green" />
                {project.stats.contributors}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="text-xs px-2 py-0.5 bg-ctp-surface1 rounded text-subtext">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Open Source Contributions */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender font-semibold mb-3">// Open Source Contributions</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {openSourceContributions.map((contrib) => (
            <div key={contrib.project} className="flex items-center justify-between bg-ctp-surface1 rounded-lg px-3 py-2">
              <div>
                <span className="text-green font-medium">{contrib.project}</span>
                <p className="text-subtext text-xs">{contrib.contribution}</p>
              </div>
              <span className="text-peach text-sm">{contrib.prs} PRs</span>
            </div>
          ))}
        </div>
      </div>

      {/* Project Stats Summary */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender font-semibold mb-3">// Total Impact</p>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green">50+</div>
            <div className="text-xs text-subtext">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow">5.6K</div>
            <div className="text-xs text-subtext">Total Stars</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-sky">986</div>
            <div className="text-xs text-subtext">Total Forks</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-mauve">100K+</div>
            <div className="text-xs text-subtext">Downloads</div>
          </div>
        </div>
      </div>
      
      <p className="text-overlay text-sm">
        {t.projectsTip} <span className="text-green">{t.projectsSocialCmd}</span> {t.projectsFindMore}
      </p>
    </div>
  );
};

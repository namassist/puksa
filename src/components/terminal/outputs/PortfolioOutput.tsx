import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ExternalLink, Github, Star, GitFork, Eye, Calendar, Code2, Layers, Sparkles, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

interface Project {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: string;
  github: string;
  live: string | null;
  stats: { stars: number; forks: number; views: number };
  year: string;
  featured: boolean;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "CloudDeploy",
    description: "CLI tool for simplified cloud deployments",
    longDescription: "Production-ready CLI tool supporting AWS, GCP, and Azure with automatic rollback, blue-green deployments, and real-time monitoring dashboard.",
    image: "🚀",
    tech: ["Go", "AWS SDK", "Terraform", "gRPC", "Docker"],
    category: "DevOps",
    github: "https://github.com",
    live: "https://example.com",
    stats: { stars: 1247, forks: 234, views: 15000 },
    year: "2024",
    featured: true,
    gradient: "from-green via-teal to-sky",
  },
  {
    name: "DevChat",
    description: "Real-time collaborative coding platform",
    longDescription: "Full-featured collaborative coding with integrated video calls, live code execution in 20+ languages, and AI-powered code suggestions.",
    image: "💬",
    tech: ["React", "WebRTC", "Node.js", "Socket.io", "Monaco"],
    category: "Collaboration",
    github: "https://github.com",
    live: "https://example.com",
    stats: { stars: 892, forks: 156, views: 12000 },
    year: "2024",
    featured: true,
    gradient: "from-blue via-sapphire to-lavender",
  },
  {
    name: "TaskFlow AI",
    description: "AI-powered project management",
    longDescription: "Kanban-style management with AI task suggestions, automatic priority scoring, sprint planning, and team workload balancing.",
    image: "🤖",
    tech: ["Next.js", "PostgreSQL", "OpenAI", "Prisma", "tRPC"],
    category: "Productivity",
    github: "https://github.com",
    live: "https://example.com",
    stats: { stars: 567, forks: 89, views: 8500 },
    year: "2023",
    featured: true,
    gradient: "from-mauve via-pink to-red",
  },
  {
    name: "AuthKit",
    description: "Universal authentication library",
    longDescription: "Drop-in auth supporting OAuth 2.0, SAML, magic links, WebAuthn, and passwordless authentication with enterprise SSO.",
    image: "🔐",
    tech: ["TypeScript", "Node.js", "JWT", "Redis", "PostgreSQL"],
    category: "Security",
    github: "https://github.com",
    live: "https://example.com",
    stats: { stars: 2341, forks: 412, views: 25000 },
    year: "2023",
    featured: true,
    gradient: "from-pink via-red to-peach",
  },
  {
    name: "MetricsDash",
    description: "Real-time analytics dashboard",
    longDescription: "Beautiful analytics dashboard for app performance monitoring, error tracking, user behavior analysis, and custom reporting.",
    image: "📊",
    tech: ["Vue.js", "D3.js", "InfluxDB", "Grafana", "Python"],
    category: "Analytics",
    github: "https://github.com",
    live: null,
    stats: { stars: 423, forks: 67, views: 5200 },
    year: "2023",
    featured: false,
    gradient: "from-peach via-yellow to-green",
  },
  {
    name: "Terminal Portfolio",
    description: "Interactive terminal-based portfolio",
    longDescription: "This portfolio! Features multiple themes, Easter eggs, bilingual support, and a fully interactive terminal experience.",
    image: "💻",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Personal",
    github: "https://github.com",
    live: null,
    stats: { stars: 156, forks: 28, views: 3000 },
    year: "2024",
    featured: false,
    gradient: "from-lavender via-mauve to-pink",
  },
];

const categories = ["All", "DevOps", "Collaboration", "Productivity", "Security", "Analytics", "Personal"];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-surface rounded-xl border border-ctp-surface2 overflow-hidden hover:border-mauve/50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image/Preview Section */}
      <div className={`relative h-32 bg-gradient-to-br ${project.gradient} opacity-80`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl filter drop-shadow-lg">{project.image}</span>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow/90 text-ctp-base px-2 py-1 rounded-md text-xs font-bold">
            <Sparkles size={12} />
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-ctp-base/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-foreground">
          {project.category}
        </div>

        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-ctp-base/80 backdrop-blur-sm flex items-center justify-center gap-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-ctp-surface1 hover:bg-ctp-surface2 px-4 py-2 rounded-lg text-foreground transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green hover:bg-green/80 px-4 py-2 rounded-lg text-ctp-base transition-colors"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Title & Year */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-bold text-foreground group-hover:text-mauve transition-colors">
            {project.name}
          </h3>
          <div className="flex items-center gap-1 text-subtext text-xs">
            <Calendar size={12} />
            {project.year}
          </div>
        </div>

        {/* Description */}
        <p className="text-subtext text-sm leading-relaxed line-clamp-2">
          {isHovered ? project.longDescription : project.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1 text-yellow">
            <Star size={14} />
            <span>{project.stats.stars.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-sky">
            <GitFork size={14} />
            <span>{project.stats.forks}</span>
          </div>
          <div className="flex items-center gap-1 text-lavender">
            <Eye size={14} />
            <span>{project.stats.views.toLocaleString()}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-ctp-surface1 rounded text-xs text-subtext hover:text-foreground hover:bg-ctp-surface2 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-ctp-surface1 rounded text-xs text-mauve">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const PortfolioOutput = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const totalStats = projects.reduce(
    (acc, p) => ({
      stars: acc.stars + p.stats.stars,
      forks: acc.forks + p.stats.forks,
      views: acc.views + p.stats.views,
    }),
    { stars: 0, forks: 0, views: 0 }
  );

  return (
    <div className={`space-y-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* ASCII Header */}
      <pre className="text-mauve text-xs leading-tight hidden sm:block">
{`╔═══════════════════════════════════════════════════════════════╗
║  ____            _    __       _ _                             ║
║ |  _ \\ ___  _ __| |_ / _| ___ | (_) ___                        ║
║ | |_) / _ \\| '__| __| |_ / _ \\| | |/ _ \\                       ║
║ |  __/ (_) | |  | |_|  _| (_) | | | (_) |                      ║
║ |_|   \\___/|_|   \\__|_|  \\___/|_|_|\\___/                       ║
╚═══════════════════════════════════════════════════════════════╝`}
      </pre>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-gradient-to-br from-green/20 to-teal/10 rounded-xl p-4 border border-green/20">
          <div className="flex items-center gap-2 mb-2">
            <Layers size={18} className="text-green" />
            <span className="text-subtext text-sm">Projects</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{projects.length}</div>
        </div>
        <div className="bg-gradient-to-br from-yellow/20 to-peach/10 rounded-xl p-4 border border-yellow/20">
          <div className="flex items-center gap-2 mb-2">
            <Star size={18} className="text-yellow" />
            <span className="text-subtext text-sm">Total Stars</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalStats.stars.toLocaleString()}</div>
        </div>
        <div className="bg-gradient-to-br from-sky/20 to-blue/10 rounded-xl p-4 border border-sky/20">
          <div className="flex items-center gap-2 mb-2">
            <GitFork size={18} className="text-sky" />
            <span className="text-subtext text-sm">Total Forks</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalStats.forks.toLocaleString()}</div>
        </div>
        <div className="bg-gradient-to-br from-lavender/20 to-mauve/10 rounded-xl p-4 border border-lavender/20">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={18} className="text-lavender" />
            <span className="text-subtext text-sm">Total Views</span>
          </div>
          <div className="text-2xl font-bold text-foreground">{totalStats.views.toLocaleString()}</div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-mauve text-ctp-base'
                : 'bg-surface text-subtext hover:bg-ctp-surface1 hover:text-foreground border border-ctp-surface2'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-mauve/10 via-pink/10 to-lavender/10 rounded-xl p-5 border border-mauve/20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mauve to-pink flex items-center justify-center">
              <Code2 size={24} className="text-ctp-base" />
            </div>
            <div>
              <h3 className="text-foreground font-bold">Want to see more?</h3>
              <p className="text-subtext text-sm">Check out my GitHub for all projects</p>
            </div>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-foreground text-ctp-base px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Github size={18} />
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Footer Tip */}
      <div className="flex items-center gap-2 text-overlay text-sm bg-ctp-surface1/50 rounded-lg p-3">
        <span className="text-mauve">💡</span>
        <span>
          Type <span className="text-green font-mono">projects</span> for a compact view or <span className="text-green font-mono">contact</span> to get in touch
        </span>
      </div>
    </div>
  );
};

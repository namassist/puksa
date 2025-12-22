import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState } from "react";

// Tech icons mapping using simple text/emoji representations
const techIcons: Record<string, string> = {
  // Frontend
  "HTML5": "🌐",
  "SCSS": "💅",
  "Tailwind": "🎨",
  "Bootstrap": "🅱️",
  "Shadcn": "🎯",
  "React": "⚛️",
  "Next.js": "▲",
  "Flutter": "🦋",
  "Framer Motion": "🎬",
  // Backend
  "Node.js": "💚",
  "Express": "🚂",
  "Bun": "🥟",
  "Elysia": "⚡",
  "Laravel": "🔴",
  "Idempiere": "🏢",
  "PostgreSQL": "🐘",
  "REST API": "🔌",
  // Tools
  "GitLab": "🦊",
  "Github": "🐙",
  "VS Code": "💻",
  "Figma": "🎨",
  "Postman": "📮",
  "DBeaver": "🦫",
  "Burp Suite": "🔒",
  // State Management
  "Riverpod": "🌊",
  "BLoC": "🧱",
  "TanStack Query": "📡",
  "Redux Toolkit": "🔧",
  "React Context": "🔄",
};

export const SkillsOutput = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const skillGroups = [
    { 
      category: t.categories.frontend, 
      id: "frontend",
      color: "text-green",
      bgColor: "bg-green/20",
      borderColor: "border-green/50",
      items: ["HTML5", "SCSS", "Tailwind", "Bootstrap", "Shadcn", "React", "Next.js", "Flutter", "Framer Motion"]
    },
    { 
      category: t.categories.backend, 
      id: "backend",
      color: "text-mauve",
      bgColor: "bg-mauve/20",
      borderColor: "border-mauve/50",
      items: ["Node.js", "Express", "Bun", "Elysia", "Laravel", "Idempiere", "PostgreSQL", "REST API"]
    },
    { 
      category: t.categories.tools, 
      id: "tools",
      color: "text-pink",
      bgColor: "bg-pink/20",
      borderColor: "border-pink/50",
      items: ["GitLab", "Github", "VS Code", "Figma", "Postman", "DBeaver", "Burp Suite"]
    },
    { 
      category: "State Management", 
      id: "state",
      color: "text-peach",
      bgColor: "bg-peach/20",
      borderColor: "border-peach/50",
      items: ["Riverpod", "BLoC", "TanStack Query", "Redux Toolkit", "React Context"]
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Leadership", icon: "👥" },
    { name: "Communication", icon: "💬" },
    { name: "Agile/Scrum", icon: "🔄" },
    { name: "Code Review", icon: "🔍" },
    { name: "Mentoring", icon: "🎓" },
  ];

  const certifications = [
    { 
      name: "Software Engineer Role", 
      issuer: "HackerRank", 
      year: "2024",
      date: "26 August",
      color: "text-peach",
      url: "https://www.hackerrank.com/certificates/b7b89ad7e8d1"
    },
    { 
      name: "Frontend Developer Role (React)", 
      issuer: "HackerRank", 
      year: "2024",
      date: "13 August",
      color: "text-blue",
      url: "https://www.hackerrank.com/certificates/7efa24004355"
    },
    { 
      name: "MTCNA", 
      issuer: "Mikrotik", 
      year: "2024",
      date: "20 May",
      color: "text-sky"
    },
    { 
      name: "Learn Web Application Fundamentals with React", 
      issuer: "Dicoding", 
      year: "2023",
      date: "15 December",
      color: "text-green",
      url: "https://www.dicoding.com/certificates/2VX3OYNYVZYQ"
    },
    { 
      name: "React & React Native for Frontend Developer", 
      issuer: "Hacktiv8", 
      year: "2023",
      date: "30 June",
      color: "text-mauve",
      url: "https://drive.google.com/file/d/1_kAhjFulL6_fB4TtoVyWNgAGsdZYvbO1/view"
    },
  ];

  const filteredGroups = activeFilter 
    ? skillGroups.filter(g => g.id === activeFilter)
    : skillGroups;

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.skillsTitle}</p>
      
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 bg-surface rounded-lg p-3">
        <button
          onClick={() => setActiveFilter(null)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeFilter === null 
              ? "bg-lavender text-crust" 
              : "bg-ctp-surface1 text-subtext hover:bg-ctp-surface2"
          }`}
        >
          All
        </button>
        {skillGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => setActiveFilter(activeFilter === group.id ? null : group.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeFilter === group.id 
                ? `${group.bgColor} ${group.color} border ${group.borderColor}` 
                : "bg-ctp-surface1 text-subtext hover:bg-ctp-surface2"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Technical Skills as Tags with Icons */}
      <div className={`grid grid-cols-1 ${activeFilter ? "" : "lg:grid-cols-2"} gap-4 transition-all duration-300`}>
        {filteredGroups.map((group) => (
          <div 
            key={group.category} 
            className={`bg-surface rounded-lg p-4 transition-all duration-300 ${
              activeFilter === group.id ? "ring-2 ring-offset-2 ring-offset-crust" : ""
            }`}
            style={{ 
              ["--tw-ring-color" as string]: activeFilter === group.id ? "hsl(var(--lavender))" : undefined 
            }}
          >
            <p className={`${group.color} font-semibold mb-3`}>
              {group.category}:
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span 
                  key={skill} 
                  className={`${group.bgColor} ${group.borderColor} border px-3 py-1.5 rounded-full text-sm text-foreground flex items-center gap-2 hover:scale-105 transition-transform duration-200`}
                >
                  <span className="text-xs opacity-80">{techIcons[skill] || "•"}</span>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender font-semibold mb-3">// Soft Skills</p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2 bg-ctp-surface1 px-3 py-2 rounded-lg hover:scale-105 transition-transform duration-200">
              <span>{skill.icon}</span>
              <span className="text-foreground text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender font-semibold mb-3">// Certifications</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <a 
              key={cert.name} 
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-ctp-surface1 rounded-lg px-3 py-2 hover:scale-[1.02] transition-transform duration-200 block ${cert.url ? 'cursor-pointer hover:ring-1 ring-lavender/30' : 'cursor-default'}`}
            >
              <div className={`${cert.color} font-medium flex items-center gap-2`}>
                📜 {cert.name}
                {cert.url && <span className="text-xs text-subtext">↗</span>}
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-subtext">{cert.issuer}</span>
                <span className="text-overlay">{cert.date} {cert.year}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-sm bg-surface rounded-lg p-3">
        <span className="text-yellow">⚡</span>
        <span className="text-subtext">{t.skillsLearning}</span>
        <span className="text-teal">WebAssembly, Zig, AI/ML, Blockchain</span>
      </div>

      {/* GitHub Stats Simulation */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender font-semibold mb-3">// GitHub Activity (2024)</p>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-xl font-bold text-green">1,247</div>
            <div className="text-xs text-subtext">Contributions</div>
          </div>
          <div>
            <div className="text-xl font-bold text-blue">89</div>
            <div className="text-xs text-subtext">Repos</div>
          </div>
          <div>
            <div className="text-xl font-bold text-mauve">2.3K</div>
            <div className="text-xs text-subtext">Stars</div>
          </div>
          <div>
            <div className="text-xl font-bold text-peach">156</div>
            <div className="text-xs text-subtext">PRs Merged</div>
          </div>
        </div>
      </div>
    </div>
  );
};

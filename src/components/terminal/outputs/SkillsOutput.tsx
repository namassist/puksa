import { useLanguage } from "@/lib/i18n/LanguageContext";

const ProgressBar = ({ level, color }: { level: number; color: string }) => (
  <div className="w-full bg-ctp-surface1 rounded-full h-2">
    <div
      className={`h-2 rounded-full ${color}`}
      style={{ width: `${level}%` }}
    />
  </div>
);

export const SkillsOutput = () => {
  const { t } = useLanguage();

  const skillGroups = [
    { 
      category: t.categories.languages, 
      color: "text-blue",
      bgColor: "bg-blue",
      items: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 85 },
        { name: "Go", level: 75 },
        { name: "Rust", level: 60 },
        { name: "Java", level: 70 },
      ]
    },
    { 
      category: t.categories.frontend, 
      color: "text-green",
      bgColor: "bg-green",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
        { name: "Three.js", level: 65 },
      ]
    },
    { 
      category: t.categories.backend, 
      color: "text-mauve",
      bgColor: "bg-mauve",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 90 },
        { name: "FastAPI", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "GraphQL", level: 80 },
      ]
    },
    { 
      category: t.categories.devops, 
      color: "text-peach",
      bgColor: "bg-peach",
      items: [
        { name: "Docker", level: 90 },
        { name: "AWS", level: 85 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 70 },
        { name: "GitHub Actions", level: 90 },
      ]
    },
    { 
      category: t.categories.tools, 
      color: "text-pink",
      bgColor: "bg-pink",
      items: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Vim/Neovim", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
      ]
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
    { name: "AWS Solutions Architect", issuer: "Amazon", year: "2023", color: "text-peach" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2023", color: "text-blue" },
    { name: "Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2022", color: "text-sky" },
    { name: "MongoDB Developer", issuer: "MongoDB", year: "2022", color: "text-green" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.skillsTitle}</p>
      
      {/* Technical Skills with Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-surface rounded-lg p-4">
            <p className={`${group.color} font-semibold mb-3`}>
              {group.category}:
            </p>
            <div className="space-y-3">
              {group.items.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="text-subtext">{skill.level}%</span>
                  </div>
                  <ProgressBar level={skill.level} color={group.bgColor} />
                </div>
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
            <div key={skill.name} className="flex items-center gap-2 bg-ctp-surface1 px-3 py-2 rounded-lg">
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
            <div key={cert.name} className="bg-ctp-surface1 rounded-lg px-3 py-2">
              <div className={`${cert.color} font-medium`}>📜 {cert.name}</div>
              <div className="flex justify-between text-sm">
                <span className="text-subtext">{cert.issuer}</span>
                <span className="text-overlay">{cert.year}</span>
              </div>
            </div>
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

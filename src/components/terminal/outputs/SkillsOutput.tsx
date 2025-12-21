import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Palette, 
  Server, 
  Cloud, 
  Wrench, 
  Brain,
  Users,
  MessageSquare,
  RefreshCw,
  Search,
  GraduationCap,
  Award,
  Zap,
  TrendingUp,
  GitBranch,
  Star,
  GitPullRequest,
  Sparkles
} from "lucide-react";

// Animated skill bar component
const SkillBar = ({ name, level, color, delay = 0 }: { name: string; level: number; color: string; delay?: number }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-foreground text-sm font-medium">{name}</span>
        <span className={`${color} text-xs font-mono`}>{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color.replace('text-', 'bg-')}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

// Animated counter component
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export const SkillsOutput = () => {
  const { t } = useLanguage();

  const skillGroups = [
    { 
      category: t.categories.languages, 
      icon: Code2,
      color: "text-blue",
      bgColor: "bg-blue/20",
      borderColor: "border-blue/50",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-500",
      items: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Go", level: 75 },
        { name: "Rust", level: 65 },
      ]
    },
    { 
      category: t.categories.frontend, 
      icon: Palette,
      color: "text-green",
      bgColor: "bg-green/20",
      borderColor: "border-green/50",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-500",
      items: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 80 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Three.js", level: 70 },
      ]
    },
    { 
      category: t.categories.backend, 
      icon: Server,
      color: "text-mauve",
      bgColor: "bg-mauve/20",
      borderColor: "border-mauve/50",
      gradientFrom: "from-purple-500",
      gradientTo: "to-pink-500",
      items: [
        { name: "Node.js", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 78 },
        { name: "Redis", level: 75 },
      ]
    },
    { 
      category: t.categories.devops, 
      icon: Cloud,
      color: "text-peach",
      bgColor: "bg-peach/20",
      borderColor: "border-peach/50",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
      items: [
        { name: "Docker", level: 88 },
        { name: "AWS", level: 85 },
        { name: "Kubernetes", level: 75 },
        { name: "CI/CD", level: 90 },
        { name: "Terraform", level: 70 },
      ]
    },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Brain, color: "text-blue" },
    { name: "Team Leadership", icon: Users, color: "text-green" },
    { name: "Communication", icon: MessageSquare, color: "text-peach" },
    { name: "Agile/Scrum", icon: RefreshCw, color: "text-pink" },
    { name: "Code Review", icon: Search, color: "text-lavender" },
    { name: "Mentoring", icon: GraduationCap, color: "text-teal" },
  ];

  const certifications = [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2024", color: "text-peach", bgGradient: "from-orange-500/20 to-amber-500/20" },
    { name: "Google Cloud Professional", issuer: "Google Cloud", year: "2023", color: "text-blue", bgGradient: "from-blue-500/20 to-cyan-500/20" },
    { name: "Kubernetes Administrator", issuer: "CNCF", year: "2023", color: "text-sky", bgGradient: "from-sky-500/20 to-blue-500/20" },
    { name: "MongoDB Developer", issuer: "MongoDB Inc.", year: "2022", color: "text-green", bgGradient: "from-green-500/20 to-emerald-500/20" },
  ];

  const githubStats = [
    { label: "Contributions", value: 1247, icon: GitBranch, color: "text-green" },
    { label: "Repositories", value: 89, icon: Code2, color: "text-blue" },
    { label: "Stars Earned", value: 2300, icon: Star, color: "text-yellow" },
    { label: "PRs Merged", value: 156, icon: GitPullRequest, color: "text-mauve" },
  ];

  return (
    <div className="space-y-6">
      {/* ASCII Art Header */}
      <pre className="text-lavender text-xs leading-tight font-mono hidden sm:block">
{`   _____ __ __ _____ __    __    _____ 
  / ___// //_//  _/ / /   / /   / ___/ 
  \\__ \\/ ,<   / / / /   / /    \\__ \\  
 ___/ / /| |_/ / / /___/ /___ ___/ /  
/____/_/ |_/___//_____/_____//____/   `}
      </pre>
      
      <div className="flex items-center gap-2">
        <Sparkles className="text-lavender" size={20} />
        <p className="text-lavender text-lg font-bold">{t.skillsTitle}</p>
      </div>

      {/* Technical Skills with Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {skillGroups.map((group, groupIndex) => (
          <div 
            key={group.category} 
            className="bg-surface/50 backdrop-blur-sm rounded-xl p-4 border border-surface hover:border-blue/30 transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${group.gradientFrom} ${group.gradientTo} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <group.icon className="text-white" size={20} />
              </div>
              <div>
                <p className={`${group.color} font-bold`}>{group.category}</p>
                <p className="text-subtext text-xs">{group.items.length} skills</p>
              </div>
            </div>
            
            {/* Skill Bars */}
            <div className="space-y-3">
              {group.items.map((skill, index) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={(groupIndex * 200) + (index * 100)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills Hexagon Grid */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-5 border border-surface">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="text-pink" size={20} />
          <p className="text-pink font-bold">// Soft Skills</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {softSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="group flex flex-col items-center gap-2 bg-surface/50 rounded-xl p-4 hover:bg-surface transition-all duration-300 hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-full ${skill.color.replace('text-', 'bg-')}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`${skill.color}`} size={24} />
              </div>
              <span className="text-foreground text-xs text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Cards */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-5 border border-surface">
        <div className="flex items-center gap-2 mb-4">
          <Award className="text-yellow" size={20} />
          <p className="text-yellow font-bold">// Certifications</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => (
            <div 
              key={cert.name}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${cert.bgGradient} p-4 border border-surface hover:border-${cert.color.replace('text-', '')}/50 transition-all duration-300 group`}
            >
              <div className="absolute top-2 right-2">
                <Award className={`${cert.color} opacity-20 group-hover:opacity-40 transition-opacity`} size={40} />
              </div>
              <div className="relative z-10">
                <p className={`${cert.color} font-bold text-sm mb-1`}>{cert.name}</p>
                <div className="flex items-center justify-between">
                  <span className="text-subtext text-xs">{cert.issuer}</span>
                  <span className="text-foreground text-xs font-mono bg-surface/50 px-2 py-0.5 rounded">{cert.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Currently Learning */}
      <div className="bg-gradient-to-r from-teal/10 via-blue/10 to-lavender/10 rounded-xl p-4 border border-teal/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center animate-pulse">
            <Zap className="text-teal" size={20} />
          </div>
          <div>
            <p className="text-teal font-bold text-sm">{t.skillsLearning}</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["WebAssembly", "Zig", "AI/ML", "Blockchain", "Edge Computing"].map((tech) => (
                <span key={tech} className="px-2 py-0.5 bg-teal/20 text-teal rounded text-xs font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Stats with Animated Counters */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-5 border border-surface">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="text-green" size={20} />
          <p className="text-green font-bold">// GitHub Activity (2024)</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {githubStats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-surface/50 rounded-xl p-4 text-center group hover:bg-surface transition-colors duration-300"
            >
              <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${stat.color.replace('text-', 'bg-')}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={stat.color} size={20} />
              </div>
              <div className={`text-2xl font-bold ${stat.color}`}>
                <AnimatedCounter target={stat.value} />
                {stat.value >= 1000 && stat.label !== "Repositories" ? "" : ""}
              </div>
              <div className="text-xs text-subtext mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Contribution Graph Simulation */}
        <div className="mt-4 pt-4 border-t border-surface">
          <p className="text-subtext text-xs mb-2">Contribution Activity</p>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 52 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => {
                  const intensity = Math.random();
                  let bgClass = "bg-surface";
                  if (intensity > 0.8) bgClass = "bg-green";
                  else if (intensity > 0.6) bgClass = "bg-green/70";
                  else if (intensity > 0.4) bgClass = "bg-green/40";
                  else if (intensity > 0.2) bgClass = "bg-green/20";
                  
                  return (
                    <div 
                      key={dayIndex}
                      className={`w-2 h-2 rounded-sm ${bgClass} hover:ring-1 hover:ring-green transition-all`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
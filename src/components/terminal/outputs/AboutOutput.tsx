import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Code, Coffee, Gamepad2, Music, BookOpen, Heart, MapPin, GraduationCap, Briefcase, Target, Zap, Trophy, GitCommit, Users } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

export const AboutOutput = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const interests = [
    { icon: Code, label: "Open Source", color: "text-green" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "text-peach" },
    { icon: Gamepad2, label: "Gaming", color: "text-blue" },
    { icon: Music, label: "Music", color: "text-pink" },
    { icon: BookOpen, label: "Reading", color: "text-lavender" },
  ];

  const funFacts = [
    { emoji: "🎯", text: "Solved 500+ LeetCode problems" },
    { emoji: "🌍", text: "Contributed to 20+ open source projects" },
    { emoji: "☕", text: "Average 4 cups of coffee per day" },
    { emoji: "🎮", text: "Reached Diamond in competitive games" },
    { emoji: "📚", text: "Read 30+ tech books last year" },
  ];

  const stats = [
    { label: "Years Coding", value: 7, suffix: "+", icon: Zap, color: "from-green to-teal" },
    { label: "Projects", value: 50, suffix: "+", icon: Target, color: "from-blue to-lavender" },
    { label: "Commits", value: 1200, suffix: "+", icon: GitCommit, color: "from-mauve to-pink" },
    { label: "Collaborators", value: 100, suffix: "+", icon: Users, color: "from-peach to-yellow" },
  ];

  const values = [
    "Clean Code",
    "User Experience", 
    "Continuous Learning",
    "Open Source",
    "Team Collaboration",
    "Innovation"
  ];

  return (
    <div className={`space-y-5 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* ASCII Art Header */}
      <pre className="text-lavender text-xs leading-tight hidden sm:block">
{`╔═══════════════════════════════════════════════════════════════╗
║     _    ____   ___  _   _ _____   __  __ _____                ║
║    / \\  | __ ) / _ \\| | | |_   _| |  \\/  | ____|               ║
║   / _ \\ |  _ \\| | | | | | | | |   | |\\/| |  _|                 ║
║  / ___ \\| |_) | |_| | |_| | | |   | |  | | |___                ║
║ /_/   \\_\\____/ \\___/ \\___/  |_|   |_|  |_|_____|               ║
╚═══════════════════════════════════════════════════════════════╝`}
      </pre>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-surface via-ctp-surface1 to-surface rounded-xl p-5 border border-ctp-surface2">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Avatar Section */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-28 h-28 rounded-xl bg-gradient-to-br from-mauve via-pink to-lavender p-[2px]">
                <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-green/20 px-2 py-0.5 rounded-full border border-green/30">
                <span className="w-2 h-2 bg-green rounded-full animate-pulse"></span>
                <span className="text-green text-xs font-medium">Available</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1 space-y-3">
            <div>
              <h2 className="text-2xl font-bold text-foreground">John Doe</h2>
              <p className="text-green font-mono">Full Stack Software Engineer</p>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-subtext">
                <MapPin size={14} className="text-sky" />
                <span>San Francisco, CA 🌉</span>
              </div>
              <div className="flex items-center gap-1.5 text-subtext">
                <Briefcase size={14} className="text-peach" />
                <span>5+ years experience</span>
              </div>
              <div className="flex items-center gap-1.5 text-subtext">
                <GraduationCap size={14} className="text-lavender" />
                <span>Stanford University</span>
              </div>
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed border-l-2 border-mauve pl-3">
              {t.aboutBioText}
            </p>
          </div>
        </div>
      </div>

      {/* Animated Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <div 
            key={stat.label} 
            className="group relative overflow-hidden rounded-xl bg-surface border border-ctp-surface2 p-4 hover:border-mauve/50 transition-all duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="relative">
              <stat.icon size={20} className="text-subtext mb-2 group-hover:text-mauve transition-colors" />
              <div className="text-2xl font-bold text-foreground">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-subtext text-xs mt-1">{stat.label}</div>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${stat.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity`}></div>
          </div>
        ))}
      </div>

      {/* Interests & Hobbies */}
      <div className="bg-surface rounded-xl p-4 border border-ctp-surface2">
        <div className="flex items-center gap-2 mb-4">
          <Heart size={16} className="text-pink" />
          <span className="text-lavender font-medium">Interests & Hobbies</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <div 
              key={interest.label} 
              className="group flex items-center gap-2 bg-ctp-surface1 hover:bg-ctp-surface2 px-4 py-2.5 rounded-lg transition-all duration-200 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <interest.icon size={18} className={`${interest.color} group-hover:scale-110 transition-transform`} />
              <span className="text-foreground text-sm">{interest.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts with Progress Bars */}
      <div className="bg-surface rounded-xl p-4 border border-ctp-surface2">
        <div className="flex items-center gap-2 mb-4">
          <Trophy size={16} className="text-yellow" />
          <span className="text-lavender font-medium">Fun Facts & Achievements</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {funFacts.map((fact, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 bg-ctp-surface1 rounded-lg p-3 hover:bg-ctp-surface2 transition-colors"
            >
              <span className="text-xl flex-shrink-0">{fact.emoji}</span>
              <span className="text-foreground text-sm">{fact.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-surface rounded-xl p-4 border border-ctp-surface2">
        <div className="flex items-center gap-2 mb-4">
          <Zap size={16} className="text-peach" />
          <span className="text-lavender font-medium">Core Values</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {values.map((value, index) => (
            <span 
              key={value} 
              className="group px-4 py-2 bg-gradient-to-r from-ctp-surface1 to-ctp-surface2 rounded-full text-sm text-foreground border border-ctp-surface2 hover:border-pink/30 transition-all duration-200 cursor-default"
            >
              <span className="flex items-center gap-2">
                <Heart size={12} className="text-pink group-hover:scale-125 transition-transform" />
                {value}
              </span>
            </span>
          ))}
        </div>
      </div>
      
      {/* Footer Tip */}
      <div className="flex items-center gap-2 text-overlay text-sm bg-ctp-surface1/50 rounded-lg p-3">
        <span className="text-mauve">💡</span>
        <span>
          {t.aboutTip} <span className="text-green font-mono">{t.aboutSkillsCmd}</span> {t.aboutToSeeStack} <span className="text-green font-mono">{t.aboutExpCmd}</span> {t.aboutForHistory}
        </span>
      </div>
    </div>
  );
};

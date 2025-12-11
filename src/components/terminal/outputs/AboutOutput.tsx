import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Code, Coffee, Gamepad2, Music, BookOpen, Heart } from "lucide-react";

export const AboutOutput = () => {
  const { t } = useLanguage();

  const interests = [
    { icon: Code, label: "Open Source", color: "text-green" },
    { icon: Coffee, label: "Coffee Enthusiast", color: "text-peach" },
    { icon: Gamepad2, label: "Gaming", color: "text-blue" },
    { icon: Music, label: "Music", color: "text-pink" },
    { icon: BookOpen, label: "Reading", color: "text-lavender" },
  ];

  const funFacts = [
    "🎯 Solved 500+ LeetCode problems",
    "🌍 Contributed to 20+ open source projects",
    "☕ Average 4 cups of coffee per day",
    "🎮 Reached Diamond in competitive games",
    "📚 Read 30+ tech books last year",
  ];

  const stats = [
    { label: "Years Coding", value: "7+", color: "text-green" },
    { label: "Projects Completed", value: "50+", color: "text-blue" },
    { label: "Commits This Year", value: "1.2K+", color: "text-mauve" },
    { label: "Coffee Consumed", value: "∞", color: "text-peach" },
  ];

  return (
    <div className="space-y-4">
      <pre className="text-lavender text-xs sm:text-sm leading-tight">
{`     _       _             ____             
    | | ___ | |__  _ __   |  _ \\  ___   ___ 
 _  | |/ _ \\| '_ \\| '_ \\  | | | |/ _ \\ / _ \\
| |_| | (_) | | | | | | | | |_| | (_) |  __/
 \\___/ \\___/|_| |_|_| |_| |____/ \\___/ \\___|`}
      </pre>
      
      {/* Basic Info */}
      <div className="bg-surface rounded-lg p-4 space-y-3">
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutName}</span>
          <span className="text-foreground">"John Doe"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutRole}</span>
          <span className="text-green">"Full Stack Software Engineer"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutExperience}</span>
          <span className="text-peach">"5+ years"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutLocation}</span>
          <span className="text-sky">"San Francisco, CA 🌉"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">education:</span>
          <span className="text-teal">"B.S. Computer Science - Stanford University"</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-mauve">{t.aboutBio}</span>
          <span className="text-foreground pl-4 leading-relaxed">
            "{t.aboutBioText}"
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface rounded-lg p-3 text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-subtext text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Interests */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender mb-3">// Interests & Hobbies</p>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest) => (
            <div key={interest.label} className="flex items-center gap-2 bg-ctp-surface1 px-3 py-2 rounded-lg">
              <interest.icon size={16} className={interest.color} />
              <span className="text-foreground text-sm">{interest.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender mb-3">// Fun Facts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {funFacts.map((fact, i) => (
            <div key={i} className="text-foreground text-sm flex items-center gap-2">
              <span className="text-subtext">→</span>
              <span>{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender mb-3">// What I Value</p>
        <div className="flex flex-wrap gap-2">
          {["Clean Code", "User Experience", "Continuous Learning", "Open Source", "Team Collaboration", "Innovation"].map((value) => (
            <span key={value} className="px-3 py-1 bg-ctp-surface1 rounded-full text-sm text-foreground flex items-center gap-1">
              <Heart size={12} className="text-pink" />
              {value}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-overlay text-sm">
        {t.aboutTip} <span className="text-green">{t.aboutSkillsCmd}</span> {t.aboutToSeeStack} <span className="text-green">{t.aboutExpCmd}</span> {t.aboutForHistory}
      </p>
    </div>
  );
};

import { Github, Linkedin, Twitter, Mail, Globe, Youtube, Instagram, MessageCircle, ExternalLink, Users, Star, GitFork } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const SocialOutput = () => {
  const { t } = useLanguage();

  const primaryLinks = [
    { 
      icon: Github, 
      label: "GitHub", 
      value: "github.com/namassist", 
      href: "https://github.com/namassist", 
      color: "text-foreground",
      bgColor: "from-gray-700 to-gray-900",
      stats: { followers: "50+", repos: "30+" }
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn", 
      value: "linkedin.com/in/johndoe", 
      href: "https://linkedin.com", 
      color: "text-blue",
      bgColor: "from-blue-600 to-blue-800",
      stats: { connections: "500+" }
    },
    { 
      icon: Twitter, 
      label: "Twitter/X", 
      value: "@johndoe_dev", 
      href: "https://twitter.com", 
      color: "text-sky",
      bgColor: "from-sky-500 to-sky-700",
      stats: { followers: "1K+" }
    },
  ];

  const secondaryLinks = [
    { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev", color: "text-peach" },
    { icon: Globe, label: "Website", value: "johndoe.dev", href: "https://johndoe.dev", color: "text-green" },
    { icon: Youtube, label: "YouTube", value: "@johndoe_tech", href: "https://youtube.com", color: "text-red" },
    { icon: Instagram, label: "Instagram", value: "@johndoe.dev", href: "https://instagram.com", color: "text-pink" },
    { icon: MessageCircle, label: "Discord", value: "johndoe#1234", href: "https://discord.com", color: "text-lavender" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with ASCII art */}
      <div className="space-y-2">
        <pre className="text-lavender text-xs leading-tight font-mono hidden sm:block">
{`   _____ ____  _____ ___    __   
  / ___// __ \\/ ___//   |  / /   
  \\__ \\/ / / / /   / /| | / /    
 ___/ / /_/ / /___/ ___ |/ /___  
/____/\\____/\\____/_/  |_/_____/  `}
        </pre>
        <p className="text-lavender text-lg font-bold">{t.socialTitle}</p>
        <p className="text-subtext text-sm">Connect with me across the web</p>
      </div>

      {/* Primary Social Cards */}
      <div className="grid grid-cols-1 gap-3">
        {primaryLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl bg-surface/50 border border-surface hover:border-blue/50 transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${link.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <link.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className={`${link.color} font-bold text-lg group-hover:underline`}>{link.label}</p>
                  <p className="text-subtext text-sm">{link.value}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {link.stats && (
                  <div className="hidden sm:flex items-center gap-3 text-xs">
                    {link.stats.followers && (
                      <span className="flex items-center gap-1 text-subtext">
                        <Users size={14} />
                        {link.stats.followers}
                      </span>
                    )}
                    {link.stats.repos && (
                      <span className="flex items-center gap-1 text-subtext">
                        <GitFork size={14} />
                        {link.stats.repos}
                      </span>
                    )}
                    {link.stats.connections && (
                      <span className="flex items-center gap-1 text-subtext">
                        <Users size={14} />
                        {link.stats.connections}
                      </span>
                    )}
                  </div>
                )}
                <ExternalLink className="text-subtext group-hover:text-foreground transition-colors" size={18} />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Secondary Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {secondaryLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface/30 rounded-lg p-3 hover:bg-surface/60 transition-all duration-200 group border border-transparent hover:border-surface"
          >
            <div className={`w-8 h-8 rounded-lg ${link.color} bg-current/10 flex items-center justify-center`}>
              <link.icon className={`${link.color} group-hover:scale-110 transition-transform`} size={16} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-subtext text-xs">{link.label}</span>
              <span className={`${link.color} text-sm truncate hover:underline`}>{link.value}</span>
            </div>
          </a>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue/10 via-lavender/10 to-pink/10 rounded-xl p-4 border border-lavender/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-lavender/20 flex items-center justify-center animate-pulse">
            <Star className="text-lavender" size={20} />
          </div>
          <div>
            <p className="text-foreground font-medium">Let's Connect!</p>
            <p className="text-subtext text-sm">Always open to interesting conversations and collaborations</p>
          </div>
        </div>
      </div>

      {/* Quick Copy Section */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1.5 bg-surface/50 text-subtext rounded-full text-xs font-mono hover:bg-surface transition-colors cursor-pointer">
          📧 hello@johndoe.dev
        </span>
        <span className="px-3 py-1.5 bg-surface/50 text-subtext rounded-full text-xs font-mono hover:bg-surface transition-colors cursor-pointer">
          🐙 @namassist
        </span>
        <span className="px-3 py-1.5 bg-surface/50 text-subtext rounded-full text-xs font-mono hover:bg-surface transition-colors cursor-pointer">
          💬 Discord: johndoe#1234
        </span>
      </div>
    </div>
  );
};

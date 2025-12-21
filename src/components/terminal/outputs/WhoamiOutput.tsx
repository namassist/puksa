import { useLanguage } from "@/lib/i18n/LanguageContext";
import { User, Shield, Clock, MapPin, Terminal, Cpu, Globe, Fingerprint } from "lucide-react";

export const WhoamiOutput = () => {
  const { t } = useLanguage();

  const userInfo = [
    { icon: User, label: "Username", value: "visitor", color: "text-green" },
    { icon: Shield, label: "Role", value: "Guest Explorer", color: "text-blue" },
    { icon: Clock, label: "Session", value: new Date().toLocaleTimeString(), color: "text-peach" },
    { icon: MapPin, label: "Location", value: "Web Browser", color: "text-pink" },
    { icon: Terminal, label: "Shell", value: "/bin/portfolio", color: "text-lavender" },
    { icon: Cpu, label: "Environment", value: "React 18 + TypeScript", color: "text-teal" },
    { icon: Globe, label: "Domain", value: window.location.hostname, color: "text-sapphire" },
    { icon: Fingerprint, label: "Session ID", value: Math.random().toString(36).substring(2, 10).toUpperCase(), color: "text-mauve" },
  ];

  return (
    <div className="space-y-4">
      {/* ASCII Art Header */}
      <pre className="text-green text-xs leading-tight font-mono">
{`  _    _  _____  _____ ____  
 | |  | |/ ____|/ ____|  _ \\ 
 | |  | | (___ | (___ | |_) |
 | |  | |\\___ \\ \\___ \\|  _ < 
 | |__| |____) |____) | |_) |
  \\____/|_____/|_____/|____/ `}
      </pre>

      {/* User Identity Card */}
      <div className="bg-surface/50 backdrop-blur-sm border border-surface rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green to-blue flex items-center justify-center">
            <User className="text-crust" size={24} />
          </div>
          <div>
            <p className="text-foreground font-bold text-lg">
              <span className="text-green">visitor</span>
              <span className="text-subtext">@</span>
              <span className="text-blue">portfolio</span>
            </p>
            <p className="text-subtext text-sm">{t.whoamiLine2}</p>
          </div>
        </div>
      </div>

      {/* System Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {userInfo.map((info) => (
          <div 
            key={info.label}
            className="flex items-center gap-3 bg-surface/30 rounded-lg p-3 hover:bg-surface/50 transition-colors group"
          >
            <info.icon className={`${info.color} group-hover:scale-110 transition-transform`} size={18} />
            <div className="flex flex-col">
              <span className="text-subtext text-xs uppercase tracking-wider">{info.label}</span>
              <span className={`${info.color} font-mono text-sm`}>{info.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-surface/30 rounded-lg p-3 border-l-2 border-green">
        <p className="text-subtext text-sm">
          <span className="text-green">$</span> {t.whoamiLine3}
        </p>
      </div>

      {/* Permissions Badge */}
      <div className="flex flex-wrap gap-2">
        <span className="px-2 py-1 bg-green/20 text-green rounded text-xs font-mono">READ</span>
        <span className="px-2 py-1 bg-blue/20 text-blue rounded text-xs font-mono">EXPLORE</span>
        <span className="px-2 py-1 bg-peach/20 text-peach rounded text-xs font-mono">INTERACT</span>
        <span className="px-2 py-1 bg-pink/20 text-pink rounded text-xs font-mono">DISCOVER</span>
      </div>
    </div>
  );
};

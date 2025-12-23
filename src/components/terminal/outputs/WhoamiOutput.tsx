import { useLanguage } from "@/lib/i18n/LanguageContext";
import { User, Shield, Clock, MapPin, Terminal, Cpu, Globe, Fingerprint, Zap, Eye, MousePointer, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export const WhoamiOutput = () => {
  const { t } = useLanguage();
  const [sessionTime, setSessionTime] = useState(new Date().toLocaleTimeString());
  const [isHovered, setIsHovered] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const userInfo = [
    { icon: User, label: "Username", value: "visitor", color: "from-green-500 to-emerald-600", textColor: "text-green" },
    { icon: Shield, label: "Role", value: "Guest Explorer", color: "from-blue-500 to-blue-600", textColor: "text-blue" },
    { icon: Clock, label: "Session", value: sessionTime, color: "from-orange-500 to-amber-600", textColor: "text-peach" },
    { icon: MapPin, label: "Location", value: "Web Browser", color: "from-pink-500 to-rose-600", textColor: "text-pink" },
    { icon: Terminal, label: "Shell", value: "/bin/portfolio", color: "from-violet-500 to-purple-600", textColor: "text-lavender" },
    { icon: Cpu, label: "Environment", value: "React 18 + TypeScript", color: "from-teal-500 to-cyan-600", textColor: "text-teal" },
    { icon: Globe, label: "Domain", value: window.location.hostname, color: "from-sky-500 to-blue-600", textColor: "text-sapphire" },
    { icon: Fingerprint, label: "Session ID", value: Math.random().toString(36).substring(2, 10).toUpperCase(), color: "from-fuchsia-500 to-pink-600", textColor: "text-mauve" },
  ];

  const permissions = [
    { label: "READ", color: "from-green-500 to-emerald-600", icon: Eye },
    { label: "EXPLORE", color: "from-blue-500 to-blue-600", icon: MousePointer },
    { label: "INTERACT", color: "from-orange-500 to-amber-600", icon: Zap },
    { label: "DISCOVER", color: "from-pink-500 to-rose-600", icon: Activity },
  ];

  return (
    <div className="space-y-5">
      {/* Animated ASCII Art Header */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green/10 via-blue/10 to-lavender/10 p-4 border border-green/30">
        <div className="absolute inset-0 bg-gradient-to-r from-green/5 to-transparent animate-pulse" />
        <pre className="text-green text-xs leading-tight font-mono relative z-10">
{`  ╦ ╦╦ ╦╔═╗╔═╗╔╦╗╦
  ║║║╠═╣║ ║╠═╣║║║║
  ╚╩╝╩ ╩╚═╝╩ ╩╩ ╩╩`}
        </pre>
        <div className="flex items-center gap-2 mt-2 relative z-10">
          <span className="text-subtext text-xs">→ Current user identity</span>
          <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
        </div>
      </div>

      {/* User Identity Card */}
      <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-sm border border-surface hover:border-green/50 transition-all duration-500 p-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green/5 via-blue/5 to-lavender/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green/10 to-transparent rounded-bl-full" />
        
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green via-blue to-lavender flex items-center justify-center shadow-lg shadow-green/20 group-hover:scale-110 transition-transform duration-300">
              <User className="text-crust" size={28} />
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green rounded-full border-2 border-crust flex items-center justify-center">
              <span className="text-crust text-xs">✓</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-foreground font-bold text-xl tracking-tight">
              <span className="text-green">visitor</span>
              <span className="text-subtext mx-1">@</span>
              <span className="text-blue">portfolio</span>
            </p>
            <p className="text-subtext text-sm mt-1">{t.whoamiLine2}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 bg-green/20 text-green rounded-full text-xs font-mono">active</span>
              <span className="px-2 py-0.5 bg-blue/20 text-blue rounded-full text-xs font-mono">authenticated</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {userInfo.map((info) => (
          <div 
            key={info.label}
            className="group relative overflow-hidden rounded-xl bg-surface/50 border border-surface hover:border-blue/50 transition-all duration-300 cursor-default"
            onMouseEnter={() => setIsHovered(info.label)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="relative p-4 flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <info.icon className="text-white" size={20} />
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-subtext text-xs uppercase tracking-wider">{info.label}</span>
                <span className={`${info.textColor} font-mono text-sm truncate font-medium`}>{info.value}</span>
              </div>
              {isHovered === info.label && (
                <div className="w-2 h-2 bg-green rounded-full animate-pulse" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Info */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-surface/60 to-surface/30 border-l-4 border-green p-4">
        <div className="absolute inset-0 bg-gradient-to-r from-green/5 to-transparent" />
        <div className="relative flex items-start gap-3">
          <Terminal className="text-green mt-0.5" size={18} />
          <div>
            <p className="text-foreground font-medium text-sm">
              <span className="text-green font-mono">$</span> {t.whoamiLine3}
            </p>
            <p className="text-subtext text-xs mt-1">Type 'help' to see all available commands</p>
          </div>
        </div>
      </div>

      {/* Permissions Grid */}
      <div className="space-y-2">
        <p className="text-subtext text-xs uppercase tracking-wider flex items-center gap-2">
          <Shield size={12} />
          Permissions Granted
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {permissions.map((perm) => (
            <div 
              key={perm.label}
              className="group relative overflow-hidden rounded-xl bg-surface/40 border border-surface hover:border-green/50 transition-all duration-300 p-3"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${perm.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${perm.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <perm.icon className="text-white" size={16} />
                </div>
                <span className="text-foreground text-xs font-mono font-medium">{perm.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

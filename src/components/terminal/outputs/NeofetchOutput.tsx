import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Monitor, User, Box, Cpu, Clock, Terminal, Maximize, Palette, Layout, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const NeofetchOutput = () => {
  const { t } = useLanguage();
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const asciiArt = [
    "    ⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀    ",
    "   ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇   ",
    "   ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇   ",
    "   ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇   ",
    "   ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇   ",
    "   ⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁   ",
    "      ⣿⣿⣿⣿⣿⣿      ",
    "   ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿   ",
  ];

  const info = [
    { icon: User, label: t.neofetch.user, value: "visitor@portfolio", color: "from-green-500 to-emerald-600", textColor: "text-green" },
    { icon: Box, label: t.neofetch.os, value: "Portfolio OS 1.0", color: "from-blue-500 to-blue-600", textColor: "text-blue" },
    { icon: Monitor, label: t.neofetch.host, value: t.welcomeName, color: "from-violet-500 to-purple-600", textColor: "text-lavender" },
    { icon: Cpu, label: t.neofetch.kernel, value: "React 18.3.1", color: "from-sky-500 to-cyan-600", textColor: "text-sapphire" },
    { icon: Clock, label: t.neofetch.uptime, value: formatUptime(uptime), color: "from-orange-500 to-amber-600", textColor: "text-peach" },
    { icon: Terminal, label: t.neofetch.shell, value: "terminal-sh", color: "from-teal-500 to-green-600", textColor: "text-teal" },
    { icon: Maximize, label: t.neofetch.resolution, value: `${window.innerWidth}x${window.innerHeight}`, color: "from-pink-500 to-rose-600", textColor: "text-pink" },
    { icon: Palette, label: t.neofetch.theme, value: "Catppuccin Mocha", color: "from-fuchsia-500 to-pink-600", textColor: "text-mauve" },
    { icon: Layout, label: t.neofetch.terminal, value: "Interactive Portfolio", color: "from-indigo-500 to-blue-600", textColor: "text-blue" },
  ];

  const colorPalette = [
    { color: "from-red-500 to-red-600", name: "Red" },
    { color: "from-orange-500 to-orange-600", name: "Peach" },
    { color: "from-yellow-500 to-yellow-600", name: "Yellow" },
    { color: "from-green-500 to-green-600", name: "Green" },
    { color: "from-blue-500 to-blue-600", name: "Blue" },
    { color: "from-violet-500 to-violet-600", name: "Mauve" },
    { color: "from-pink-500 to-pink-600", name: "Pink" },
    { color: "from-teal-500 to-teal-600", name: "Teal" },
  ];

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-lavender/10 via-blue/10 to-mauve/10 p-4 border border-lavender/30">
        <div className="absolute inset-0 bg-gradient-to-r from-lavender/5 to-transparent animate-pulse" />
        <div className="relative flex items-center gap-3">
          <Zap className="text-lavender" size={20} />
          <div>
            <p className="text-foreground font-bold">System Information</p>
            <p className="text-subtext text-xs">neofetch-style system fetch</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ASCII Art Card */}
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-surface/80 to-surface/40 backdrop-blur-sm border border-surface hover:border-lavender/50 transition-all duration-500 p-5">
          <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-blue/5 to-mauve/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="text-lavender font-mono text-sm">
              {asciiArt.map((line, i) => (
                <div 
                  key={i} 
                  className="whitespace-pre leading-tight"
                  style={{ 
                    animationDelay: `${i * 100}ms`,
                    animation: 'fade-in 0.3s ease-out forwards'
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
            
            {/* Color Palette */}
            <div className="mt-4 space-y-2">
              <p className="text-subtext text-xs uppercase tracking-wider text-center">Color Palette</p>
              <div className="flex gap-1.5 justify-center">
                {colorPalette.map((c, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-md bg-gradient-to-br ${c.color} hover:scale-125 transition-transform duration-200 cursor-pointer shadow-sm`}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* System Info Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {info.map((item, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-xl bg-surface/50 border border-surface hover:border-blue/50 transition-all duration-300"
              style={{ 
                animationDelay: `${i * 50}ms`,
                animation: 'fade-in 0.3s ease-out forwards'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative p-3 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className="text-white" size={16} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-subtext text-xs">{item.label}</span>
                  <span className={`${item.textColor} font-mono text-sm truncate font-medium`}>{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="relative overflow-hidden rounded-xl bg-surface/40 border border-surface p-3 text-center group hover:border-green/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-green font-mono text-lg font-bold relative">99.9%</p>
          <p className="text-subtext text-xs relative">Uptime</p>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-surface/40 border border-surface p-3 text-center group hover:border-blue/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-blue font-mono text-lg font-bold relative">16MB</p>
          <p className="text-subtext text-xs relative">Memory</p>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-surface/40 border border-surface p-3 text-center group hover:border-lavender/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="text-lavender font-mono text-lg font-bold relative">∞</p>
          <p className="text-subtext text-xs relative">Creativity</p>
        </div>
      </div>
    </div>
  );
};

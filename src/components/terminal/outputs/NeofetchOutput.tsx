import { useLanguage } from "@/lib/i18n/LanguageContext";

export const NeofetchOutput = () => {
  const { t } = useLanguage();

  const asciiArt = [
    "       .--.       ",
    "      |o_o |      ",
    "      |:_/ |      ",
    "     //   \\ \\     ",
    "    (|     | )    ",
    "   /'\\_   _/`\\    ",
    "   \\___)=(___/    ",
  ];

  const info = [
    { label: t.neofetch.user, value: "visitor@portfolio", color: "text-green" },
    { label: t.neofetch.os, value: "Portfolio OS 1.0", color: "text-blue" },
    { label: t.neofetch.host, value: t.welcomeName, color: "text-lavender" },
    { label: t.neofetch.kernel, value: "React 18.3.1", color: "text-sapphire" },
    { label: t.neofetch.uptime, value: t.neofetch.uptimeValue, color: "text-peach" },
    { label: t.neofetch.shell, value: "terminal-sh", color: "text-teal" },
    { label: t.neofetch.resolution, value: "Responsive", color: "text-pink" },
    { label: t.neofetch.theme, value: "Catppuccin Mocha", color: "text-mauve" },
    { label: t.neofetch.terminal, value: "Interactive Portfolio", color: "text-blue" },
  ];

  const colors = ["bg-red", "bg-peach", "bg-yellow", "bg-green", "bg-teal", "bg-blue", "bg-lavender", "bg-mauve"];

  return (
    <div className="font-mono text-sm">
      <div className="flex gap-6">
        {/* ASCII Art */}
        <div className="text-lavender shrink-0">
          {asciiArt.map((line, i) => (
            <div key={i} className="whitespace-pre leading-tight">{line}</div>
          ))}
          <div className="flex gap-1 mt-3 justify-center">
            {colors.map((c, i) => (
              <span key={i} className={`w-3 h-3 ${c} rounded-sm`} />
            ))}
          </div>
        </div>
        
        {/* System Info */}
        <div className="space-y-0.5">
          <div className="text-green font-bold">visitor<span className="text-subtext">@</span><span className="text-blue">portfolio</span></div>
          <div className="text-subtext">{"─".repeat(18)}</div>
          {info.slice(1).map((item, i) => (
            <div key={i}>
              <span className="text-sapphire">{item.label}</span>
              <span className={item.color}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

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
    { label: t.neofetch.user, value: "visitor@portfolio" },
    { label: "", value: "─".repeat(20) },
    { label: t.neofetch.os, value: "Portfolio OS 1.0" },
    { label: t.neofetch.host, value: t.welcomeName },
    { label: t.neofetch.kernel, value: "React 18.3.1" },
    { label: t.neofetch.uptime, value: t.neofetch.uptimeValue },
    { label: t.neofetch.shell, value: "terminal-sh" },
    { label: t.neofetch.resolution, value: "Responsive" },
    { label: t.neofetch.theme, value: "Catppuccin Mocha" },
    { label: t.neofetch.terminal, value: "Interactive Portfolio" },
  ];

  return (
    <div className="fade-in">
      <div className="flex gap-6 font-mono text-sm">
        {/* ASCII Art */}
        <div className="text-lavender">
          {asciiArt.map((line, i) => (
            <div key={i} className="whitespace-pre leading-tight">{line}</div>
          ))}
          {/* Color palette */}
          <div className="flex gap-1 mt-2 justify-center">
            <span className="w-3 h-3 bg-ctp-red rounded-sm" />
            <span className="w-3 h-3 bg-ctp-peach rounded-sm" />
            <span className="w-3 h-3 bg-ctp-yellow rounded-sm" />
            <span className="w-3 h-3 bg-ctp-green rounded-sm" />
            <span className="w-3 h-3 bg-ctp-blue rounded-sm" />
            <span className="w-3 h-3 bg-ctp-mauve rounded-sm" />
          </div>
        </div>
        
        {/* System Info */}
        <div className="space-y-0.5">
          {info.map((item, i) => (
            <div key={i}>
              {item.label ? (
                <>
                  <span className="text-sapphire">{item.label}</span>
                  <span className="text-foreground">{item.value}</span>
                </>
              ) : (
                <span className="text-subtext">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

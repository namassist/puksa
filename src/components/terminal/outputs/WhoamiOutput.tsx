import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";

export const WhoamiOutput = () => {
  const { t } = useLanguage();
  const [glitch, setGlitch] = useState(false);

  // Catppuccin Mocha colors
  const colors = {
    green: "#a6e3a1",
    blue: "#89b4fa",
    lavender: "#b4befe",
    peach: "#fab387",
    pink: "#f5c2e7",
    mauve: "#cba6f7",
    teal: "#94e2d5",
    yellow: "#f9e2af",
    red: "#f38ba8",
    subtext: "#a6adc8",
    surface: "#313244",
  };

  // Fun mysterious messages that rotate
  const mysteries = [
    "⌁ signal detected from sector 7G",
    "◈ anomaly logged at 03:14:15",
    "⚡ quantum state: superpositioned",
    "☾ lunar phase: waxing gibbous",
    "⌬ matrix stability: 99.7%",
    "◎ consciousness level: elevated",
    "⟁ temporal drift: -0.003s",
    "✧ stardust count: ∞",
  ];

  const secrets = [
    "try 'ggmu' for a surprise",
    "the cake is a lie",
    "there is no spoon",
    "01101000 01101001",
    "rm -rf doubts",
    "sudo make me coffee",
  ];

  const [mystery] = useState(() => mysteries[Math.floor(Math.random() * mysteries.length)]);
  const [secret] = useState(() => secrets[Math.floor(Math.random() * secrets.length)]);
  const [luckyStat] = useState(() => Math.floor(Math.random() * 100));

  useEffect(() => {
    const timer = setTimeout(() => setGlitch(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const info = [
    { label: "user", value: "visitor@portfolio", color: colors.green },
    { label: "role", value: "Guest Explorer", color: colors.blue },
    { label: "shell", value: "/bin/portfolio", color: colors.lavender },
    { label: "env", value: "React 18 + TypeScript", color: colors.teal },
    { label: "luck", value: `${luckyStat}%`, color: luckyStat > 70 ? colors.green : luckyStat > 30 ? colors.yellow : colors.red },
    { label: "perms", value: "read, explore, interact", color: colors.pink },
  ];

  return (
    <div className="font-mono text-sm space-y-1">
      <p style={{ color: colors.subtext }}>
        <span style={{ color: colors.green }}>visitor</span>
        <span style={{ color: colors.subtext }}>@</span>
        <span style={{ color: colors.blue }}>portfolio</span>
      </p>
      <p style={{ color: colors.subtext }}>─────────────────</p>
      {info.map((item) => (
        <p key={item.label}>
          <span style={{ color: colors.mauve }}>{item.label}</span>
          <span style={{ color: colors.subtext }}>: </span>
          <span style={{ color: item.color }}>{item.value}</span>
        </p>
      ))}
      
      {/* Mystery transmission */}
      <div className="mt-3 pt-2" style={{ borderTop: `1px dashed ${colors.surface}` }}>
        <p style={{ color: colors.subtext, opacity: 0.7, fontSize: '11px' }}>
          <span style={{ color: colors.peach }}>[transmission]</span> {mystery}
        </p>
      </div>

      {/* Secret hint with delayed glitch */}
      {glitch && (
        <p 
          className="mt-1 animate-pulse" 
          style={{ color: colors.subtext, opacity: 0.5, fontSize: '10px' }}
        >
          <span style={{ color: colors.red }}>►</span> {secret}
        </p>
      )}

      <p className="mt-2" style={{ color: colors.subtext }}>
        <span style={{ color: colors.yellow }}>$</span> {t.whoamiLine3}
      </p>
    </div>
  );
};

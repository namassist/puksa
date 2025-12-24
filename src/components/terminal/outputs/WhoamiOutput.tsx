import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";

export const WhoamiOutput = () => {
  const { t } = useLanguage();
  const [glitch, setGlitch] = useState(false);
  const [hackProgress, setHackProgress] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

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
    rosewater: "#f5e0dc",
    flamingo: "#f2cdcd",
    maroon: "#eba0ac",
    sky: "#89dceb",
  };

  // Fun mysterious messages
  const mysteries = [
    "⌁ signal detected from sector 7G",
    "◈ anomaly logged at 03:14:15",
    "⚡ quantum state: superpositioned",
    "☾ lunar phase: waxing gibbous",
    "⌬ matrix stability: 99.7%",
    "◎ consciousness level: elevated",
    "⟁ temporal drift: -0.003s",
    "✧ stardust count: ∞",
    "♾ parallel universes: 42",
    "◇ coffee consumed: OVERFLOW",
    "⚛ bugs squashed: 1,337",
    "☄ meteor shower: incoming",
  ];

  const secrets = [
    "try 'ggmu' for a surprise",
    "the cake is a lie",
    "there is no spoon",
    "01101000 01101001",
    "rm -rf doubts",
    "sudo make me coffee",
    "have you tried 'nyan'?",
    "type 'matrix' to enter",
    "party mode exists...",
  ];

  const funFacts = [
    "You've scrolled 2,847 pixels today",
    "This terminal runs on vibes",
    "Error 418: I'm a teapot",
    "Achievement unlocked: Curious Mind",
    "You found a hidden stat!",
    "The answer is always 42",
  ];

  const titles = [
    "Digital Wanderer",
    "Pixel Pioneer",
    "Code Whisperer",
    "Bug Hunter",
    "Keyboard Warrior",
    "Terminal Tamer",
    "Caffeine-Powered Entity",
  ];

  const [mystery] = useState(() => mysteries[Math.floor(Math.random() * mysteries.length)]);
  const [mystery2] = useState(() => mysteries[Math.floor(Math.random() * mysteries.length)]);
  const [secret] = useState(() => secrets[Math.floor(Math.random() * secrets.length)]);
  const [funFact] = useState(() => funFacts[Math.floor(Math.random() * funFacts.length)]);
  const [title] = useState(() => titles[Math.floor(Math.random() * titles.length)]);
  const [luckyStat] = useState(() => Math.floor(Math.random() * 100));
  const [charisma] = useState(() => Math.floor(Math.random() * 20) + 1);
  const [curiosity] = useState(() => Math.floor(Math.random() * 100) + 50);

  useEffect(() => {
    const timer = setTimeout(() => setGlitch(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (glitch) {
      const hackInterval = setInterval(() => {
        setHackProgress(prev => {
          if (prev >= 100) {
            setShowSecret(true);
            clearInterval(hackInterval);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 200);
      return () => clearInterval(hackInterval);
    }
  }, [glitch]);

  const getStatBar = (value: number, max: number = 100) => {
    const filled = Math.floor((value / max) * 10);
    return "█".repeat(filled) + "░".repeat(10 - filled);
  };

  const info = [
    { label: "user", value: "visitor@portfolio", color: colors.green },
    { label: "class", value: title, color: colors.flamingo },
    { label: "shell", value: "/bin/adventure", color: colors.lavender },
    { label: "env", value: "React 18 + TypeScript + ☕", color: colors.teal },
    { label: "luck", value: `${getStatBar(luckyStat)} ${luckyStat}%`, color: luckyStat > 70 ? colors.green : luckyStat > 30 ? colors.yellow : colors.red },
    { label: "charisma", value: `D20 roll: ${charisma}`, color: charisma >= 18 ? colors.pink : charisma >= 10 ? colors.peach : colors.maroon },
    { label: "curiosity", value: `${getStatBar(curiosity > 100 ? 100 : curiosity)} ${curiosity}%`, color: colors.sky },
    { label: "perms", value: "read, explore, interact, ✨imagine✨", color: colors.pink },
  ];

  return (
    <div className="font-mono text-sm space-y-1">
      <p style={{ color: colors.subtext }}>
        <span style={{ color: colors.green }}>visitor</span>
        <span style={{ color: colors.subtext }}>@</span>
        <span style={{ color: colors.blue }}>portfolio</span>
        <span style={{ color: colors.peach }}> ~ </span>
        <span style={{ color: colors.mauve, fontSize: '10px' }}>lvl {Math.floor(Math.random() * 99) + 1}</span>
      </p>
      <p style={{ color: colors.subtext }}>─────────────────────────</p>
      
      {info.map((item) => (
        <p key={item.label}>
          <span style={{ color: colors.mauve }}>{item.label}</span>
          <span style={{ color: colors.subtext }}>: </span>
          <span style={{ color: item.color }}>{item.value}</span>
        </p>
      ))}
      
      {/* Mystery transmissions */}
      <div className="mt-3 pt-2" style={{ borderTop: `1px dashed ${colors.surface}` }}>
        <p style={{ color: colors.subtext, opacity: 0.7, fontSize: '11px' }}>
          <span style={{ color: colors.peach }}>[transmission]</span> {mystery}
        </p>
        <p style={{ color: colors.subtext, opacity: 0.5, fontSize: '11px' }} className="mt-1">
          <span style={{ color: colors.teal }}>[intercept]</span> {mystery2}
        </p>
      </div>

      {/* Fun fact */}
      <p className="mt-2" style={{ color: colors.rosewater, fontSize: '11px', fontStyle: 'italic' }}>
        💡 {funFact}
      </p>

      {/* Hacking progress bar */}
      {glitch && !showSecret && (
        <div className="mt-2" style={{ fontSize: '10px' }}>
          <span style={{ color: colors.red }}>⚠ </span>
          <span style={{ color: colors.yellow }}>decrypting secrets... </span>
          <span style={{ color: colors.green }}>[{getStatBar(hackProgress)}]</span>
          <span style={{ color: colors.peach }}> {Math.min(hackProgress, 100)}%</span>
        </div>
      )}

      {/* Secret hint with delayed glitch */}
      {showSecret && (
        <div className="mt-2 animate-pulse" style={{ fontSize: '10px' }}>
          <p style={{ color: colors.green }}>✓ decryption complete</p>
          <p className="mt-1">
            <span style={{ color: colors.red }}>►</span>
            <span style={{ color: colors.subtext, opacity: 0.7 }}> psst... </span>
            <span style={{ color: colors.yellow }}>{secret}</span>
          </p>
        </div>
      )}

      <p className="mt-2" style={{ color: colors.subtext }}>
        <span style={{ color: colors.yellow }}>$</span> {t.whoamiLine3}
      </p>
    </div>
  );
};

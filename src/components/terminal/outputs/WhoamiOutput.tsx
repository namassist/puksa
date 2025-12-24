import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";

export const WhoamiOutput = () => {
  const { t } = useLanguage();
  const [glitch, setGlitch] = useState(false);
  const [flicker, setFlicker] = useState(false);
  const [revealCode, setRevealCode] = useState(false);

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
    overlay: "#6c7086",
  };

  // Cryptic transmissions
  const transmissions = [
    "⌁ SIGNAL INTERCEPT: origin unknown",
    "◈ ANOMALY: temporal rift at 03:14:15.926",
    "⚡ WARNING: reality buffer overflow",
    "☾ ALERT: lunar alignment critical",
    "⌬ STATUS: dimension-7 breach detected",
    "◎ SCAN: consciousness fragmentation 23%",
    "⟁ ERROR: causality loop #4,815,162,342",
    "✧ TRACE: stardust signature matched",
  ];

  const whispers = [
    "they're watching through the pixels",
    "the void remembers your name",
    "between 0 and 1, something lives",
    "your cursor leaves trails in spacetime",
    "every keystroke echoes eternally",
    "the terminal dreams of you",
  ];

  const glyphs = "⌁◈⚡☾⌬◎⟁✧▲▼◆●○□■△▽◇";
  
  const [transmission] = useState(() => transmissions[Math.floor(Math.random() * transmissions.length)]);
  const [whisper] = useState(() => whispers[Math.floor(Math.random() * whispers.length)]);
  const [sessionId] = useState(() => Math.random().toString(36).substring(2, 10).toUpperCase());
  const [entropy] = useState(() => (Math.random() * 100).toFixed(3));
  const [coordinates] = useState(() => `${(Math.random() * 180 - 90).toFixed(4)}°, ${(Math.random() * 360 - 180).toFixed(4)}°`);
  const [glyphSequence, setGlyphSequence] = useState("");

  useEffect(() => {
    const timer1 = setTimeout(() => setGlitch(true), 1200);
    const timer2 = setTimeout(() => setFlicker(true), 2000);
    const timer3 = setTimeout(() => setRevealCode(true), 2800);
    
    // Randomly shifting glyphs
    const glyphInterval = setInterval(() => {
      setGlyphSequence(
        Array(8).fill(null).map(() => glyphs[Math.floor(Math.random() * glyphs.length)]).join(" ")
      );
    }, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(glyphInterval);
    };
  }, []);

  const info = [
    { label: "identity", value: "visitor@unknown", color: colors.green },
    { label: "clearance", value: "LEVEL-0 [OBSERVER]", color: colors.blue },
    { label: "shell", value: "/dev/consciousness", color: colors.lavender },
    { label: "entropy", value: `${entropy}%`, color: colors.teal },
    { label: "coordinates", value: coordinates, color: colors.peach },
    { label: "session", value: sessionId, color: colors.mauve },
  ];

  return (
    <div className="font-mono text-sm space-y-1 relative">
      {/* Header with animated glyphs */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: colors.red, opacity: 0.8 }} className="animate-pulse">●</span>
        <span style={{ color: colors.overlay, fontSize: '10px', letterSpacing: '2px' }}>
          {glyphSequence || "◈ ◈ ◈ ◈ ◈ ◈ ◈ ◈"}
        </span>
      </div>

      <p style={{ color: colors.subtext }}>
        <span style={{ color: colors.green }}>???</span>
        <span style={{ color: colors.subtext }}>@</span>
        <span style={{ color: colors.blue }}>void</span>
      </p>
      <p style={{ color: colors.surface }}>═══════════════════════</p>
      
      {info.map((item, i) => (
        <p key={item.label} style={{ animationDelay: `${i * 100}ms` }} className="animate-fade-in">
          <span style={{ color: colors.mauve }}>{item.label}</span>
          <span style={{ color: colors.surface }}> ─── </span>
          <span style={{ color: item.color }}>{item.value}</span>
        </p>
      ))}
      
      {/* Cryptic transmission */}
      <div className="mt-4 pt-2" style={{ borderTop: `1px solid ${colors.surface}` }}>
        <p style={{ color: colors.red, fontSize: '10px', letterSpacing: '1px' }} className="animate-pulse">
          ▌▌▌ INTERCEPTED TRANSMISSION ▌▌▌
        </p>
        <p className="mt-1" style={{ color: colors.peach, fontSize: '11px' }}>
          {transmission}
        </p>
      </div>

      {/* Delayed whisper */}
      {glitch && (
        <div className="mt-3 overflow-hidden">
          <p 
            style={{ 
              color: colors.subtext, 
              opacity: 0.4, 
              fontSize: '10px',
              fontStyle: 'italic',
            }}
          >
            <span style={{ color: colors.pink }}>◇</span> "{whisper}"
          </p>
        </div>
      )}

      {/* Flickering warning */}
      {flicker && (
        <div 
          className="mt-2"
          style={{ 
            opacity: flicker ? 0.6 : 0,
            transition: 'opacity 0.3s'
          }}
        >
          <p style={{ color: colors.yellow, fontSize: '10px' }}>
            ⚠ NOTICE: You are being observed
          </p>
        </div>
      )}

      {/* Hidden code reveal */}
      {revealCode && (
        <div 
          className="mt-3 p-2 rounded"
          style={{ 
            backgroundColor: `${colors.surface}40`,
            border: `1px dashed ${colors.overlay}`,
          }}
        >
          <p style={{ color: colors.overlay, fontSize: '9px', letterSpacing: '1px' }}>
            ╔══ ENCRYPTED FRAGMENT ══╗
          </p>
          <p style={{ color: colors.teal, fontSize: '10px', fontFamily: 'monospace' }} className="mt-1">
            &gt; try: <span style={{ color: colors.green }}>'matrix'</span> or <span style={{ color: colors.pink }}>'nyan'</span>
          </p>
        </div>
      )}

      <p className="mt-3" style={{ color: colors.subtext }}>
        <span style={{ color: colors.yellow }}>$</span> {t.whoamiLine3}
      </p>
    </div>
  );
};

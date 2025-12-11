import { useEffect, useState } from "react";

const CONFETTI = ["🎉", "🎊", "✨", "🌟", "💫", "🎈", "🎁", "🥳"];
const PARTY_ASCII = `
    🎉 PARTY MODE ACTIVATED 🎉
    
    ╔══════════════════════════╗
    ║   🎊  CONGRATULATIONS  🎊 ║
    ║                          ║
    ║   You found the secret!  ║
    ║                          ║
    ║   🎈 🎁 🥳 🎈 🎁 🥳 🎈  ║
    ╚══════════════════════════╝
`;

interface Particle {
  id: number;
  emoji: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const PartyOutput = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [colorIndex, setColorIndex] = useState(0);

  const COLORS = [
    "text-red",
    "text-peach",
    "text-yellow",
    "text-green",
    "text-sapphire",
    "text-lavender",
    "text-pink",
  ];

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array(20).fill(null).map((_, i) => ({
      id: i,
      emoji: CONFETTI[Math.floor(Math.random() * CONFETTI.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -5 - 2,
    }));
    setParticles(initialParticles);

    const particleInterval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy + 0.5,
          vy: p.vy + 0.3,
        }))
      );
    }, 50);

    const colorInterval = setInterval(() => {
      setColorIndex(prev => (prev + 1) % COLORS.length);
    }, 200);

    return () => {
      clearInterval(particleInterval);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <div className="font-mono relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(p => (
          <span
            key={p.id}
            className="absolute text-lg transition-all"
            style={{
              left: `${Math.min(100, Math.max(0, p.x))}%`,
              top: `${Math.min(100, Math.max(0, p.y))}%`,
              opacity: p.y > 80 ? 0 : 1,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      {/* Party ASCII */}
      <pre className={`${COLORS[colorIndex]} transition-colors duration-200`}>
        {PARTY_ASCII}
      </pre>

      <div className="mt-4 space-y-1">
        <p className="text-green animate-pulse">{">"} Easter egg unlocked!</p>
        <p className="text-subtext">Type 'help' to see all commands</p>
      </div>
    </div>
  );
};

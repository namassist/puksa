import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

interface ParticleEffectProps {
  trigger: boolean;
  originX?: number;
  originY?: number;
}

const COLORS = [
  "hsl(var(--ctp-green))",
  "hsl(var(--ctp-blue))",
  "hsl(var(--ctp-mauve))",
  "hsl(var(--ctp-peach))",
  "hsl(var(--ctp-teal))",
  "hsl(var(--ctp-pink))",
];

export const ParticleEffect = ({ trigger, originX = 50, originY = 50 }: ParticleEffectProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: originX,
        y: originY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 6 + 3,
        angle: (i / 12) * 360 + Math.random() * 30,
        speed: Math.random() * 60 + 40,
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [trigger, originX, originY]);

  if (particles.length === 0) return null;

  return (
    <div className="particle-container">
      {particles.map((particle) => {
        const rad = (particle.angle * Math.PI) / 180;
        const translateX = Math.cos(rad) * particle.speed;
        const translateY = Math.sin(rad) * particle.speed;

        return (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              "--tx": `${translateX}px`,
              "--ty": `${translateY}px`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

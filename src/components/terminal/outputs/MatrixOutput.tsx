import { useEffect, useState } from "react";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
const COLUMNS = 40;
const ROWS = 12;

export const MatrixOutput = () => {
  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    const initialMatrix = Array(ROWS).fill(null).map(() => 
      Array(COLUMNS).fill(null).map(() => ({
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        brightness: Math.random()
      }))
    );
    
    setMatrix(initialMatrix.map(row => row.map(cell => cell.char)));

    const interval = setInterval(() => {
      setMatrix(prev => 
        prev.map(row => 
          row.map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
        )
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs leading-tight overflow-hidden">
      <p className="text-green mb-2">{"// Entering the Matrix..."}</p>
      <div className="relative">
        {matrix.map((row, i) => (
          <div key={i} className="flex">
            {row.map((char, j) => (
              <span
                key={j}
                className="transition-all duration-100"
                style={{
                  color: `hsl(120, 100%, ${20 + Math.random() * 60}%)`,
                  textShadow: Math.random() > 0.8 ? '0 0 10px #0f0' : 'none'
                }}
              >
                {char}
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="text-subtext mt-2 animate-pulse">Wake up, Neo...</p>
    </div>
  );
};

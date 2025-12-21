import { useEffect, useState } from "react";

export const GgmuOutput = () => {
  const [frame, setFrame] = useState(0);
  const [showTrophies, setShowTrophies] = useState(false);
  const [trophyWave, setTrophyWave] = useState(0);

  const trophyAscii = `
   ___________
  '._==_==_=_.'
  .-\\:      /-.
 | (|:.     |) |
  '-|:.     |-'
    \\::.    /
     '::. .'
       ) (
     _.' '._
    '-------'`;

  const miniTrophy = "🏆";

  const banner = `
   ██████╗  ██████╗ ███╗   ███╗██╗   ██╗
  ██╔════╝ ██╔════╝ ████╗ ████║██║   ██║
  ██║  ███╗██║  ███╗██╔████╔██║██║   ██║
  ██║   ██║██║   ██║██║╚██╔╝██║██║   ██║
  ╚██████╔╝╚██████╔╝██║ ╚═╝ ██║╚██████╔╝
   ╚═════╝  ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ `;

  const unitedCrest = `
       ▄▄▄▄▄▄▄▄▄▄▄
      █ MANCHESTER █
      █   UNITED   █
      █  ⚽ 1878 ⚽  █
      █ ★★★★★★★★★★ █
      █  20 TITLES █
      ▀▀▀▀▀▀▀▀▀▀▀▀▀`;

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 200);

    const trophyTimer = setTimeout(() => {
      setShowTrophies(true);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(trophyTimer);
    };
  }, []);

  useEffect(() => {
    if (showTrophies) {
      const waveInterval = setInterval(() => {
        setTrophyWave((prev) => {
          if (prev >= 6) {
            clearInterval(waveInterval);
            return prev;
          }
          return prev + 1;
        });
      }, 300);

      return () => clearInterval(waveInterval);
    }
  }, [showTrophies]);

  const waveFrames = ["~", "≈", "∿", "~"];
  const currentWave = waveFrames[frame];

  const trophyRows = [
    "🏆".repeat(3),
    "🏆".repeat(5),
    "🏆".repeat(7),
    "🏆".repeat(9),
    "🏆".repeat(11),
    "🏆".repeat(13),
    "🏆".repeat(15),
  ];

  return (
    <div className="space-y-4 overflow-hidden">
      {/* GGMU Banner */}
      <div className="relative">
        <pre className="text-red text-xs sm:text-sm leading-tight animate-pulse">
          {banner}
        </pre>
        <p className="text-center text-yellow font-bold text-lg mt-2">
          ⚽ GLORY GLORY MAN UNITED ⚽
        </p>
      </div>

      {/* United Crest */}
      <div className="flex justify-center">
        <pre className="text-red text-xs leading-tight bg-surface p-4 rounded-xl border-2 border-red">
          {unitedCrest}
        </pre>
      </div>

      {/* Trophy ASCII Art */}
      <div className="flex justify-center">
        <pre className="text-yellow text-xs leading-tight">
          {trophyAscii}
        </pre>
      </div>

      {/* Trophy Tsunami Wave */}
      {showTrophies && (
        <div className="space-y-1 text-center">
          <p className="text-sky text-sm font-bold mb-2">
            {currentWave.repeat(20)} TROPHY TSUNAMI {currentWave.repeat(20)}
          </p>
          
          <div className="relative overflow-hidden">
            {trophyRows.slice(0, trophyWave + 1).map((row, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${Math.sin((frame + index) * 0.5) * 3}px)`,
                }}
              >
                <span className="text-xl sm:text-2xl">{row}</span>
              </div>
            ))}
          </div>

          {/* Wave Effect */}
          <div className="text-blue text-lg mt-2">
            {currentWave.repeat(30)}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="bg-red/20 rounded-lg p-3 text-center border border-red/30">
          <div className="text-2xl font-bold text-red">20</div>
          <div className="text-xs text-subtext">League Titles</div>
        </div>
        <div className="bg-yellow/20 rounded-lg p-3 text-center border border-yellow/30">
          <div className="text-2xl font-bold text-yellow">3</div>
          <div className="text-xs text-subtext">UCL Trophies</div>
        </div>
        <div className="bg-green/20 rounded-lg p-3 text-center border border-green/30">
          <div className="text-2xl font-bold text-green">12</div>
          <div className="text-xs text-subtext">FA Cups</div>
        </div>
        <div className="bg-sky/20 rounded-lg p-3 text-center border border-sky/30">
          <div className="text-2xl font-bold text-sky">1</div>
          <div className="text-xs text-subtext">Europa League</div>
        </div>
      </div>

      {/* Legends */}
      <div className="bg-surface rounded-xl p-4 border border-red/30">
        <p className="text-red font-bold mb-2">⭐ LEGENDS ⭐</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {["Sir Alex Ferguson", "Cantona", "Beckham", "Ronaldo", "Rooney", "Scholes", "Giggs", "Best"].map((legend) => (
            <span key={legend} className="px-3 py-1 bg-red/20 rounded-full text-foreground border border-red/30">
              {legend}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center space-y-2">
        <p className="text-red font-bold text-sm">
          🔴 THE THEATRE OF DREAMS - OLD TRAFFORD 🔴
        </p>
        <p className="text-subtext text-xs">
          Est. 1878 • The Red Devils • GGMU Forever! 🇾🇪
        </p>
      </div>
    </div>
  );
};

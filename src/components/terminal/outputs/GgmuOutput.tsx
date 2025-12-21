import { useEffect, useState } from "react";

export const GgmuOutput = () => {
  const [frame, setFrame] = useState(0);
  const [wavePosition, setWavePosition] = useState(-100);
  const [showContent, setShowContent] = useState(false);

  const banner = `
   ██████╗  ██████╗ ███╗   ███╗██╗   ██╗
  ██╔════╝ ██╔════╝ ████╗ ████║██║   ██║
  ██║  ███╗██║  ███╗██╔████╔██║██║   ██║
  ██║   ██║██║   ██║██║╚██╔╝██║██║   ██║
  ╚██████╔╝╚██████╔╝██║ ╚═╝ ██║╚██████╔╝
   ╚═════╝  ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ `;

  const unitedCrest = `
      █▀▀▀▀▀▀▀▀▀▀▀▀▀█
      █ MANCHESTER  █
      █   UNITED    █
      █  ⚽ 1878 ⚽   █
      █ ★★★★★★★★★★★ █
      █  20 TITLES  █
      █▄▄▄▄▄▄▄▄▄▄▄▄▄█`;

  // Wave ASCII art frames
  const waveFrames = [
    "　　　　　　　～～～≋≋≋≈≈≈∿∿∿",
    "　　　　～～～≋≋≋≈≈≈∿∿∿～～～",
    "　　～～～≋≋≋≈≈≈∿∿∿～～～≋≋≋",
    "～～～≋≋≋≈≈≈∿∿∿～～～≋≋≋≈≈≈",
  ];

  useEffect(() => {
    // Wave animation frame
    const frameInterval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 150);

    // Horizontal wave sweep animation
    const waveInterval = setInterval(() => {
      setWavePosition((prev) => {
        if (prev >= 110) {
          clearInterval(waveInterval);
          setShowContent(true);
          return 110;
        }
        return prev + 3;
      });
    }, 50);

    return () => {
      clearInterval(frameInterval);
      clearInterval(waveInterval);
    };
  }, []);

  const trophyLine = "🏆".repeat(8);
  
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

      {/* Horizontal Wave Tsunami Animation */}
      <div className="relative bg-surface rounded-xl p-4 border border-sky/30 overflow-hidden min-h-[180px]">
        <p className="text-sky text-sm font-bold mb-3 text-center">
          🌊 TROPHY TSUNAMI 🌊
        </p>

        {/* Wave Container */}
        <div className="relative h-[120px] overflow-hidden">
          {/* Water waves moving horizontally */}
          <div 
            className="absolute inset-y-0 flex flex-col justify-center transition-all duration-100 ease-linear"
            style={{ 
              left: `${wavePosition}%`,
              width: '200%'
            }}
          >
            {/* Top wave */}
            <div className="text-sky text-lg whitespace-nowrap">
              {waveFrames[frame]}
              <span className="text-2xl">{trophyLine}</span>
              {waveFrames[(frame + 1) % 4]}
            </div>
            
            {/* Middle wave with more trophies */}
            <div className="text-blue text-xl whitespace-nowrap">
              ～≋≈∿
              <span className="text-3xl">{trophyLine}{trophyLine}</span>
              ∿≈≋～
            </div>

            {/* Wave ASCII art */}
            <pre className="text-sky text-xs whitespace-nowrap">
{`    ▓▓▓░░░▓▓▓░░░▓▓▓   🏆🏆🏆🏆🏆🏆   ▓▓▓░░░▓▓▓░░░▓▓▓
   ░░▓▓▓░░░▓▓▓░░░▓▓  🏆🏆🏆🏆🏆🏆🏆🏆  ▓▓░░░▓▓▓░░░▓▓▓░░
  ▓░░░▓▓▓░░░▓▓▓░░░▓ 🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆 ▓░░░▓▓▓░░░▓▓▓░░░▓`}
            </pre>

            {/* Bottom wave */}
            <div className="text-teal text-lg whitespace-nowrap">
              {waveFrames[(frame + 2) % 4]}
              <span className="text-2xl">{trophyLine}</span>
              {waveFrames[(frame + 3) % 4]}
            </div>
          </div>

          {/* Splash effect at the end */}
          {wavePosition > 80 && (
            <div className="absolute right-0 top-0 bottom-0 flex items-center text-4xl animate-pulse">
              💦💦💦
            </div>
          )}
        </div>

        {/* Wave complete message */}
        {showContent && (
          <div className="text-center mt-2 animate-fade-in">
            <span className="text-yellow font-bold">✨ 66 TROPHIES SWEPT IN! ✨</span>
          </div>
        )}
      </div>

      {/* United Crest */}
      <div className="flex justify-center">
        <pre className="text-red text-xs leading-tight bg-surface p-4 rounded-xl border-2 border-red">
          {unitedCrest}
        </pre>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          Est. 1878 • The Red Devils • GGMU Forever!
        </p>
      </div>
    </div>
  );
};

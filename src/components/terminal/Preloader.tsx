import { useState, useEffect } from "react";

const bootSequence = [
  { text: "Initializing system...", delay: 0 },
  { text: "[OK] Loading kernel modules", delay: 800 },
  { text: "[OK] Mounting filesystems", delay: 1500 },
  { text: "[OK] Starting network services", delay: 2200 },
  { text: "[OK] Configuring environment", delay: 2900 },
  { text: "[OK] Loading user profile", delay: 3600 },
  { text: "[OK] Establishing secure connection", delay: 4300 },
  { text: "[OK] Preparing workspace", delay: 5000 },
  { text: "", delay: 5700 },
  { text: "Welcome to terminal.sh", delay: 6200 },
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    bootSequence.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, bootSequence[index].delay);
      timers.push(timer);
    });

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 6800);
    timers.push(fadeTimer);

    // Complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 7300);
    timers.push(completeTimer);

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--ctp-base))] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-2xl px-8 font-mono text-sm">
        {/* ASCII Header */}
        <pre className="mb-6 text-[hsl(var(--ctp-mauve))] text-xs leading-tight">
{`  _                      _             _ 
 | |_ ___ _ __ _ __ ___ (_)_ __   __ _| |
 | __/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
 | ||  __/ |  | | | | | | | | | | (_| | |
  \\__\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|`}
        </pre>

        {/* Boot sequence */}
        <div className="space-y-1">
          {bootSequence.slice(0, visibleLines).map((line, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {line.text.startsWith("[OK]") ? (
                <span>
                  <span className="text-[hsl(var(--ctp-green))]">[OK]</span>
                  <span className="text-[hsl(var(--ctp-text))]">
                    {line.text.slice(4)}
                  </span>
                </span>
              ) : line.text === "Welcome to terminal.sh" ? (
                <span className="text-[hsl(var(--ctp-lavender))] font-bold">
                  {line.text}
                </span>
              ) : (
                <span className="text-[hsl(var(--ctp-subtext1))]">
                  {line.text}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        {visibleLines < bootSequence.length && (
          <div className="mt-4 flex items-center gap-2">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-[hsl(var(--ctp-mauve))]"
                  style={{
                    animation: "pulse 1s ease-in-out infinite",
                    animationDelay: `${i * 150}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

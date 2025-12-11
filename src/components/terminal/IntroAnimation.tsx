import { useState, useEffect } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isEntering, setIsEntering] = useState(false);
  const command = "welcome";

  useEffect(() => {
    // Start typing after a brief delay
    const startDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < command.length) {
          setTypedText(command.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Brief pause before "pressing enter"
          setTimeout(() => {
            setIsEntering(true);
            setShowCursor(false);
            // Complete animation after enter effect
            setTimeout(() => {
              onComplete();
            }, 300);
          }, 500);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }, 600);

    return () => clearTimeout(startDelay);
  }, [onComplete]);

  return (
    <div className="flex items-center gap-1">
      <span className="text-green">visitor</span>
      <span className="text-subtext">@</span>
      <span className="text-blue">portfolio</span>
      <span className="text-subtext">:</span>
      <span className="text-mauve">~</span>
      <span className="text-foreground ml-1">$</span>
      <span className="ml-2 text-foreground">{typedText}</span>
      {showCursor && (
        <span className="w-2 h-5 bg-ctp-rosewater cursor-blink" />
      )}
      {isEntering && (
        <span className="text-subtext animate-pulse ml-1">↵</span>
      )}
    </div>
  );
};

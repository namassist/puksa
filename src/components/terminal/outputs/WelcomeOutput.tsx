import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useState, useEffect } from "react";

const useTypewriter = (text: string, speed: number = 30, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

export const WelcomeOutput = () => {
  const { t } = useLanguage();
  const [showAscii, setShowAscii] = useState(false);
  const [showLines, setShowLines] = useState([false, false, false, false]);

  const line1 = useTypewriter(t.welcomeMessage, 25, 800);
  const line2Text = `${t.welcomeIntro} `;
  const line2 = useTypewriter(line2Text, 25, 1600);
  const line3 = useTypewriter(`${t.welcomeHelp} `, 25, 2400);

  useEffect(() => {
    // Show ASCII art with animation
    const asciiTimer = setTimeout(() => setShowAscii(true), 100);
    
    // Show each line progressively
    const timers = [
      setTimeout(() => setShowLines(prev => [true, prev[1], prev[2], prev[3]]), 800),
      setTimeout(() => setShowLines(prev => [prev[0], true, prev[2], prev[3]]), 1600),
      setTimeout(() => setShowLines(prev => [prev[0], prev[1], true, prev[3]]), 2400),
      setTimeout(() => setShowLines(prev => [prev[0], prev[1], prev[2], true]), 3200),
    ];

    return () => {
      clearTimeout(asciiTimer);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="space-y-4">
      <pre className={`text-lavender text-[6px] sm:text-[8px] leading-none transition-all duration-500 ${showAscii ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
{`⠀⠀⠀⣠⠖⠚⠉⠙⠲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠾⠋⠉⠑⠢⣄⠀⠀⠀⠀⠀
⠀⢀⡞⠁⠀⠀⠀⠀⠀⠈⠓⠦⠤⠤⠴⠖⠒⠉⠉⠉⠉⠉⠉⠉⠒⠲⠦⠤⠤⠴⠟⠁⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀
⠀⣾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀
⢸⡇⢀⡴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢦⠀⢹⣆⠀⠀
⠈⢧⡞⣴⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠠⣤⢧⡾⠙⠀⠀
⠀⠈⢿⡇⠀⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⠀⣾⣣⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⢹⡾⠀⠀⠀⠀
⠀⠀⠘⣇⠀⠀⢀⡾⠀⠀⠀⠀⣾⣿⠀⠀⢸⣯⣿⣿⣿⣿⡇⠀⠀⣿⣷⠄⠀⠀⠀⠀⠈⣷⠀⠀⠀⣼⠁⠀⠀⠀⠀
⠀⠀⠀⠈⠳⠤⣼⠁⠀⠀⠀⠀⠈⠁⠀⠀⠸⣿⣿⣿⣿⣿⡇⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠘⣧⠤⠞⠁⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠻⠿⠿⠿⠟⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠘⠲⠴⠟⠦⠴⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣶⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠋⠁⠀⠀⠀⠀⠀⢀⡖⠚⣻⠀⠀⠀⠀⠀⠀⠀⠈⢻⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡏⠀⠀⠀⣾⠉⠙⢲⣼⡤⠞⠉⠀⠀⠀⢐⡆⠀⠀⠀⠈⣯⢧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠇⠀⠀⠀⠈⣩⠉⠉⠙⣆⠀⠀⠀⠀⠀⣸⠇⠀⠀⠀⠀⢹⡈⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⢰⡏⠀⠀⠀⠸⡆⠀⠀⣠⡶⠋⠀⠀⠀⠀⠀⢸⡇⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⢸⡇⠀⠀⠀⢀⡿⠶⠋⠉⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠘⣗⠲⣆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡖⠋⠙⠲⡇⠀⠀⠀⠀⢸⠀⣰⠤⢥⣿⠤⠤⠄⠀⠀⠀⠀⠀⣀⣤⠞⠁⠀⠀⠀⢹⡆⠛⢶⡄⠀⠀⠀
⠀⠀⠀⠀⡟⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸⣸⠃⠀⠀⠙⢷⣖⣃⣠⡤⠴⠖⠋⠉⠀⠀⠀⠀⠀⠀⠈⣷⠀⡼⠃⠀⠀⠀
⠀⠀⠀⢸⡇⠀⠀⠀⠀⡇⠀⠀⠀⠀⢸⡟⠀⠀⠀⠀⠈⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣠⠏⠀⠀⠀⠀
⠀⠀⠀⠈⣧⠀⠀⠀⠀⣷⠀⠀⠀⠀⣼⣇⠀⠀⠀⠀⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⣧⠀⠀⠀⢿⣀⡀⠀⠀⡿⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡴⠟⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠳⠤⠤⠼⢷⣇⣸⡾⠓⠚⠳⣄⣀⠀⠀⠀⠀⣀⣀⣀⣠⡤⠤⠴⠖⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
      </pre>
      
      <div className="space-y-2">
        <p className={`text-foreground transition-opacity duration-300 ${showLines[0] ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-subtext">{">"}</span> {line1.displayText}
          {!line1.isComplete && <span className="terminal-cursor" />}
        </p>
        <p className={`text-foreground transition-opacity duration-300 ${showLines[1] ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-subtext">{">"}</span> {line2.displayText}
          {line2.isComplete && (
            <>
              <span className="text-green font-semibold">{t.welcomeName}</span>, a{" "}
              <span className="text-mauve">{t.welcomeRole}</span>
            </>
          )}
          {!line2.isComplete && showLines[1] && <span className="terminal-cursor" />}
        </p>
        <p className={`text-foreground transition-opacity duration-300 ${showLines[2] ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-subtext">{">"}</span> {line3.displayText}
          {line3.isComplete && (
            <>
              <span className="text-yellow">{t.welcomeHelpCommand}</span> {t.welcomeHelpSuffix}
            </>
          )}
          {!line3.isComplete && showLines[2] && <span className="terminal-cursor" />}
        </p>
      </div>
      
      <div className={`text-overlay text-sm pt-2 transition-all duration-500 ${showLines[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p>{t.lastLogin} {new Date().toLocaleDateString()} {t.at} {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

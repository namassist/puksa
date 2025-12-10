import { useState, useRef, useEffect, KeyboardEvent } from "react";

interface CommandInputProps {
  onCommand: (command: string) => void;
  history: string[];
}

export const CommandInput = ({ onCommand, history }: CommandInputProps) => {
  const [input, setInput] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      onCommand(input.trim().toLowerCase());
      setInput("");
      setHistoryIndex(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex < history.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Auto-complete - added welcome and lang commands
      const commands = ["help", "about", "experience", "projects", "contact", "clear", "ls", "whoami", "skills", "social", "resume", "welcome", "lang", "neofetch", "theme"];
      const match = commands.find(cmd => cmd.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  return (
    <div 
      className="flex items-center gap-1 cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <span className="text-green">visitor</span>
      <span className="text-subtext">@</span>
      <span className="text-blue">portfolio</span>
      <span className="text-subtext">:</span>
      <span className="text-mauve">~</span>
      <span className="text-foreground ml-1">$</span>
      <div className="flex-1 relative ml-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent outline-none text-foreground caret-transparent"
          spellCheck={false}
          autoComplete="off"
        />
        <span 
          className="absolute top-0 h-5 w-2 bg-ctp-rosewater cursor-blink pointer-events-none"
          style={{ left: `${input.length * 0.6}em` }}
        />
      </div>
    </div>
  );
};

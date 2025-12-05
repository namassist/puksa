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
      // Auto-complete
      const commands = ["help", "about", "experience", "projects", "contact", "clear", "ls", "whoami", "skills", "social", "resume"];
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
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none text-foreground ml-2 caret-ctp-rosewater"
        spellCheck={false}
        autoComplete="off"
      />
      <span className="w-2 h-5 bg-ctp-rosewater cursor-blink" />
    </div>
  );
};

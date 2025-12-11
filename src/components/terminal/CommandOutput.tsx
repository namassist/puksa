import { ReactNode, useState } from "react";
import { TypingOutput } from "./TypingOutput";

interface CommandOutputProps {
  command: string;
  children: ReactNode;
  enableTyping?: boolean;
}

export const CommandOutput = ({ command, children, enableTyping = true }: CommandOutputProps) => {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div className="mb-4 command-enter">
      <div className="flex items-center gap-1 mb-2">
        <span className="text-green">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue">portfolio</span>
        <span className="text-subtext">:</span>
        <span className="text-mauve">~</span>
        <span className="text-foreground ml-1">$</span>
        <span className="text-foreground ml-2">{command}</span>
      </div>
      <div className="pl-0 output-content">
        {enableTyping && !typingComplete ? (
          <TypingOutput onComplete={() => setTypingComplete(true)} speed={8}>
            {children}
          </TypingOutput>
        ) : (
          <div className={typingComplete ? "animate-fade-in" : ""}>{children}</div>
        )}
      </div>
    </div>
  );
};

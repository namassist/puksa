import { ReactNode } from "react";

interface PromptProps {
  command?: string;
  children?: ReactNode;
  showCursor?: boolean;
}

export const Prompt = ({ command, children, showCursor = false }: PromptProps) => {
  return (
    <div className="mb-2">
      <div className="prompt">
        <span className="text-green">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue">portfolio</span>
        <span className="text-subtext">:</span>
        <span className="text-mauve">~</span>
        <span className="text-foreground ml-1">$</span>
        {command && <span className="text-foreground ml-2">{command}</span>}
        {showCursor && (
          <span className="inline-block w-2 h-5 bg-ctp-rosewater ml-1 cursor-blink" />
        )}
      </div>
      {children && <div className="mt-2 pl-0">{children}</div>}
    </div>
  );
};

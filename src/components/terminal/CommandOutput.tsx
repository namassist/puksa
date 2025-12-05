import { ReactNode } from "react";

interface CommandOutputProps {
  command: string;
  children: ReactNode;
}

export const CommandOutput = ({ command, children }: CommandOutputProps) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-1 mb-2">
        <span className="text-green">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue">portfolio</span>
        <span className="text-subtext">:</span>
        <span className="text-mauve">~</span>
        <span className="text-foreground ml-1">$</span>
        <span className="text-foreground ml-2">{command}</span>
      </div>
      <div className="pl-0">{children}</div>
    </div>
  );
};

import { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
  glitch?: boolean;
}

export const TerminalWindow = ({ title = "terminal", children, className = "", glitch = false }: TerminalWindowProps) => {
  return (
    <div className={`terminal-window crt-effect ${className}`}>
      <div className="crt-scanlines" />
      <div className="crt-flicker" />
      <div className={`terminal-header ${glitch ? 'header-glitch' : ''}`}>
        <div className="flex gap-2">
          <span className={`terminal-dot terminal-dot-red ${glitch ? 'dot-flicker' : ''}`} />
          <span className={`terminal-dot terminal-dot-yellow ${glitch ? 'dot-flicker' : ''}`} />
          <span className={`terminal-dot terminal-dot-green ${glitch ? 'dot-flicker' : ''}`} />
        </div>
        <span className={`text-ctp-subtext0 text-sm flex-1 text-center ${glitch ? 'text-glitch' : ''}`}>{title}</span>
        <div className="w-14" />
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
};

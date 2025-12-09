import { useState, useRef, useEffect, ReactNode } from "react";
import { TerminalWindow } from "./TerminalWindow";
import { CommandInput } from "./CommandInput";
import { CommandOutput } from "./CommandOutput";
import { WelcomeOutput } from "./outputs/WelcomeOutput";
import { HelpOutput } from "./outputs/HelpOutput";
import { AboutOutput } from "./outputs/AboutOutput";
import { SkillsOutput } from "./outputs/SkillsOutput";
import { ExperienceOutput } from "./outputs/ExperienceOutput";
import { ProjectsOutput } from "./outputs/ProjectsOutput";
import { ContactOutput } from "./outputs/ContactOutput";
import { SocialOutput } from "./outputs/SocialOutput";
import { WhoamiOutput } from "./outputs/WhoamiOutput";
import { LsOutput } from "./outputs/LsOutput";
import { ErrorOutput } from "./outputs/ErrorOutput";
import { NeofetchOutput } from "./outputs/NeofetchOutput";
import { ThemeOutput } from "./outputs/ThemeOutput";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useTheme, CatppuccinTheme } from "@/lib/theme/ThemeContext";

interface OutputEntry {
  id: number;
  command: string;
  content: ReactNode;
}

const validThemes: CatppuccinTheme[] = ["mocha", "latte", "frappe", "macchiato"];

export const InteractiveTerminal = () => {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [outputs, setOutputs] = useState<OutputEntry[]>([
    { id: 0, command: "welcome", content: <WelcomeOutput /> },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [glitch, setGlitch] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const outputIdRef = useRef(1);

  useEffect(() => {
    // Scroll to bottom when new output is added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputs]);

  const getCommandOutput = (cmd: string): ReactNode => {
    const command = cmd.toLowerCase().trim();
    const parts = command.split(" ");
    
    // Handle lang command
    if (parts[0] === "lang") {
      const newLang = parts[1];
      if (newLang === "en" || newLang === "id") {
        setLanguage(newLang);
        return (
          <p className="text-green">
            {newLang === "en" ? "Language changed to English" : "Bahasa diubah ke Indonesia"}
          </p>
        );
      }
      return <p className="text-yellow">{t.langInvalid}</p>;
    }

    // Handle theme command
    if (parts[0] === "theme") {
      const newTheme = parts[1] as CatppuccinTheme;
      if (validThemes.includes(newTheme)) {
        setTheme(newTheme);
        return <ThemeOutput theme={newTheme} success={true} />;
      }
      return <ThemeOutput theme="" success={false} />;
    }
    
    switch (command) {
      case "help":
      case "?":
        return <HelpOutput />;
      case "welcome":
      case "home":
        return <WelcomeOutput />;
      case "about":
      case "cat about.md":
        return <AboutOutput />;
      case "skills":
      case "cat skills.json":
        return <SkillsOutput />;
      case "experience":
      case "exp":
      case "work":
        return <ExperienceOutput />;
      case "projects":
      case "ls projects":
        return <ProjectsOutput />;
      case "contact":
      case "cat contact.txt":
        return <ContactOutput />;
      case "social":
      case "cat social.json":
        return <SocialOutput />;
      case "whoami":
        return <WhoamiOutput />;
      case "ls":
      case "ls -la":
      case "dir":
        return <LsOutput />;
      case "neofetch":
        return <NeofetchOutput />;
      case "resume":
      case "cv":
        return (
          <p className="text-foreground">
            {t.resumeOpening} <span className="text-sapphire">{t.resumeNote}</span>
          </p>
        );
      case "clear":
      case "cls":
        return null; // Special case handled in handleCommand
      case "pwd":
        return <p className="text-foreground">{t.pwd}</p>;
      case "date":
        return <p className="text-foreground">{new Date().toString()}</p>;
      case "echo hello":
      case "echo hi":
        return <p className="text-green">{t.helloResponse}</p>;
      case "sudo":
      case "sudo su":
      case "sudo -i":
        return <p className="text-red">{t.sudoResponse}</p>;
      case "exit":
      case "quit":
        return <p className="text-subtext">{t.exitResponse}</p>;
      case "vim":
      case "nano":
      case "emacs":
        return <p className="text-yellow">{t.editorResponse}</p>;
      case "":
        return null;
      default:
        return <ErrorOutput command={command} />;
    }
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    // Trigger glitch effect
    setGlitch(true);
    setTimeout(() => setGlitch(false), 300);
    
    // Update command history
    setCommandHistory((prev) => [...prev, cmd]);

    // Handle clear command
    if (command === "clear" || command === "cls") {
      setOutputs([]);
      return;
    }

    // Get output for command
    const output = getCommandOutput(cmd);
    
    if (output !== null) {
      setOutputs((prev) => [
        ...prev,
        {
          id: outputIdRef.current++,
          command: cmd,
          content: output,
        },
      ]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="visitor@portfolio: ~" glitch={glitch}>
          <div
            ref={terminalRef}
            className="max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-ctp-surface1 scrollbar-track-transparent"
          >
            {outputs.map((entry) => (
              <CommandOutput key={entry.id} command={entry.command}>
                {entry.content}
              </CommandOutput>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-ctp-surface0">
            <CommandInput 
              onCommand={handleCommand} 
              history={commandHistory}
            />
          </div>
        </TerminalWindow>
        
        <footer className="mt-6 text-center">
          <p className="text-overlay text-xs">
            <span className="text-subtext">{"/*"}</span> Built with React + Tailwind • Catppuccin Mocha Theme • {language.toUpperCase()}{" "}
            <span className="text-subtext">{"*/"}</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

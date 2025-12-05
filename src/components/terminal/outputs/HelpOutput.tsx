export const HelpOutput = () => {
  const commands = [
    { cmd: "help", desc: "Show available commands" },
    { cmd: "about", desc: "Display information about me" },
    { cmd: "skills", desc: "List my technical skills" },
    { cmd: "experience", desc: "Show work experience" },
    { cmd: "projects", desc: "View my projects" },
    { cmd: "contact", desc: "Get my contact information" },
    { cmd: "social", desc: "Display social media links" },
    { cmd: "resume", desc: "Open resume/CV" },
    { cmd: "whoami", desc: "Who is visiting?" },
    { cmd: "ls", desc: "List available sections" },
    { cmd: "clear", desc: "Clear terminal" },
  ];

  return (
    <div className="space-y-1">
      <p className="text-lavender mb-3">Available commands:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {commands.map(({ cmd, desc }) => (
          <div key={cmd} className="flex gap-4">
            <span className="text-green w-24">{cmd}</span>
            <span className="text-subtext">- {desc}</span>
          </div>
        ))}
      </div>
      <p className="text-overlay mt-4 text-sm">
        Tip: Use <span className="text-yellow">Tab</span> to autocomplete, <span className="text-yellow">↑/↓</span> for history
      </p>
    </div>
  );
};

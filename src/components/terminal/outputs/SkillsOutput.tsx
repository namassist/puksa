export const SkillsOutput = () => {
  const skillGroups = [
    { 
      category: "Languages", 
      color: "text-blue",
      items: ["TypeScript", "JavaScript", "Python", "Go", "Rust"] 
    },
    { 
      category: "Frontend", 
      color: "text-green",
      items: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"] 
    },
    { 
      category: "Backend", 
      color: "text-mauve",
      items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"] 
    },
    { 
      category: "DevOps", 
      color: "text-peach",
      items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"] 
    },
    { 
      category: "Tools", 
      color: "text-pink",
      items: ["Git", "Linux", "Vim", "VS Code", "Figma"] 
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">// Technical Skills</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="bg-surface rounded-lg p-4">
            <p className={`${group.color} font-semibold mb-2`}>
              {group.category}:
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-2 py-1 bg-ctp-surface1 rounded text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <span className="text-yellow">⚡</span>
        <span className="text-subtext">Currently learning:</span>
        <span className="text-teal">WebAssembly, Zig</span>
      </div>
    </div>
  );
};

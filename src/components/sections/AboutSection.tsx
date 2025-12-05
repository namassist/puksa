import { TerminalWindow } from "../terminal/TerminalWindow";
import { Prompt } from "../terminal/Prompt";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "Rust"], color: "text-blue" },
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"], color: "text-green" },
  { category: "Backend", items: ["Node.js", "Express", "FastAPI", "PostgreSQL"], color: "text-mauve" },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"], color: "text-peach" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="~/about — bash">
          <Prompt command="cat about.md" />
          
          <div className="mt-4 space-y-6 slide-up">
            <div>
              <h2 className="text-2xl font-bold text-lavender mb-4">
                <span className="text-subtext"># </span>About Me
              </h2>
              <div className="text-foreground leading-relaxed space-y-3">
                <p>
                  <span className="text-subtext">{">"}</span> A passionate software engineer with{" "}
                  <span className="text-green">5+ years</span> of experience in building
                  scalable web applications and distributed systems.
                </p>
                <p>
                  <span className="text-subtext">{">"}</span> Currently focused on{" "}
                  <span className="text-mauve">full-stack development</span> and{" "}
                  <span className="text-peach">cloud architecture</span>.
                </p>
                <p>
                  <span className="text-subtext">{">"}</span> I believe in writing{" "}
                  <span className="text-sky">clean, maintainable code</span> and creating
                  intuitive user experiences.
                </p>
              </div>
            </div>

            <div className="border-t border-surface pt-6">
              <Prompt command="echo $SKILLS | jq" />
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category} className="bg-surface rounded-lg p-4">
                    <h3 className={`${skillGroup.color} font-semibold mb-2`}>
                      {"{"}"{skillGroup.category}"{"}"}:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-2 py-1 bg-ctp-surface1 rounded text-foreground"
                        >
                          "{skill}"
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-surface pt-6">
              <Prompt command="cat hobbies.txt" />
              <div className="mt-2 text-subtext">
                <span className="text-foreground">{"["}</span>
                <span className="text-yellow"> "Open Source"</span>,
                <span className="text-pink"> "Reading"</span>,
                <span className="text-teal"> "Gaming"</span>,
                <span className="text-peach"> "Coffee"</span>
                <span className="text-foreground"> {"]"}</span>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

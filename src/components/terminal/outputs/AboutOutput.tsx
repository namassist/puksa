export const AboutOutput = () => {
  return (
    <div className="space-y-4">
      <pre className="text-lavender text-xs sm:text-sm leading-tight">
{`     _       _             ____             
    | | ___ | |__  _ __   |  _ \\  ___   ___ 
 _  | |/ _ \\| '_ \\| '_ \\  | | | |/ _ \\ / _ \\
| |_| | (_) | | | | | | | | |_| | (_) |  __/
 \\___/ \\___/|_| |_|_| |_| |____/ \\___/ \\___|`}
      </pre>
      
      <div className="bg-surface rounded-lg p-4 space-y-3">
        <div className="flex gap-2">
          <span className="text-mauve">name:</span>
          <span className="text-foreground">"John Doe"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">role:</span>
          <span className="text-green">"Software Engineer"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">experience:</span>
          <span className="text-peach">"5+ years"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">location:</span>
          <span className="text-sky">"San Francisco, CA"</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-mauve">bio:</span>
          <span className="text-foreground pl-4">
            "A passionate software engineer focused on building scalable
            <br className="hidden sm:block" />
            {" "}web applications and distributed systems. I believe in writing
            <br className="hidden sm:block" />
            {" "}clean, maintainable code and creating intuitive user experiences."
          </span>
        </div>
      </div>
      
      <p className="text-overlay text-sm">
        Type <span className="text-green">skills</span> to see my technical stack, or <span className="text-green">experience</span> for work history.
      </p>
    </div>
  );
};

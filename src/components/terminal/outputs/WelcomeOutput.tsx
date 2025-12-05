export const WelcomeOutput = () => {
  return (
    <div className="space-y-4">
      <pre className="text-lavender text-xs sm:text-sm leading-tight">
{`
 ██╗  ██╗███████╗██╗     ██╗      ██████╗ 
 ██║  ██║██╔════╝██║     ██║     ██╔═══██╗
 ███████║█████╗  ██║     ██║     ██║   ██║
 ██╔══██║██╔══╝  ██║     ██║     ██║   ██║
 ██║  ██║███████╗███████╗███████╗╚██████╔╝
 ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
`}
      </pre>
      
      <div className="space-y-2">
        <p className="text-foreground">
          <span className="text-subtext">{">"}</span> Welcome to my interactive portfolio!
        </p>
        <p className="text-foreground">
          <span className="text-subtext">{">"}</span> I'm{" "}
          <span className="text-green font-semibold">John Doe</span>, a{" "}
          <span className="text-mauve">Software Engineer</span>
        </p>
        <p className="text-foreground">
          <span className="text-subtext">{">"}</span> Type{" "}
          <span className="text-yellow">help</span> to see available commands
        </p>
      </div>
      
      <div className="text-overlay text-sm pt-2">
        <p>Last login: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

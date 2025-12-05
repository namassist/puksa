import { useEffect, useState } from "react";
import { TerminalWindow } from "../terminal/TerminalWindow";
import { Prompt } from "../terminal/Prompt";
import { TerminalNav } from "../terminal/TerminalNav";

export const HomeSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "cat welcome.txt";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="~/portfolio — bash">
          <Prompt command={typedText} showCursor={!showContent} />
          
          {showContent && (
            <div className="slide-up">
              <div className="mb-8">
                <pre className="text-lavender text-sm sm:text-base leading-relaxed">
{`
 ██╗  ██╗███████╗██╗     ██╗      ██████╗ 
 ██║  ██║██╔════╝██║     ██║     ██╔═══██╗
 ███████║█████╗  ██║     ██║     ██║   ██║
 ██╔══██║██╔══╝  ██║     ██║     ██║   ██║
 ██║  ██║███████╗███████╗███████╗╚██████╔╝
 ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝ 
`}
                </pre>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-foreground">
                  <span className="text-subtext">{">"}</span> Welcome to my portfolio!
                </p>
                <p className="text-foreground">
                  <span className="text-subtext">{">"}</span> I'm{" "}
                  <span className="text-green font-semibold">John Doe</span>, a{" "}
                  <span className="text-mauve">Software Engineer</span>
                </p>
                <p className="text-foreground">
                  <span className="text-subtext">{">"}</span> Passionate about building{" "}
                  <span className="text-peach">elegant solutions</span> to complex problems
                </p>
              </div>

              <div className="border-t border-surface pt-6">
                <Prompt command="ls -la sections/" />
                <div className="mt-4">
                  <TerminalNav />
                </div>
              </div>
            </div>
          )}
        </TerminalWindow>
      </div>
    </section>
  );
};

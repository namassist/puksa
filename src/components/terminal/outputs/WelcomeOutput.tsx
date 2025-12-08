import { useLanguage } from "@/lib/i18n/LanguageContext";

export const WelcomeOutput = () => {
  const { t } = useLanguage();

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
          <span className="text-subtext">{">"}</span> {t.welcomeMessage}
        </p>
        <p className="text-foreground">
          <span className="text-subtext">{">"}</span> {t.welcomeIntro}{" "}
          <span className="text-green font-semibold">{t.welcomeName}</span>, a{" "}
          <span className="text-mauve">{t.welcomeRole}</span>
        </p>
        <p className="text-foreground">
          <span className="text-subtext">{">"}</span> {t.welcomeHelp}{" "}
          <span className="text-yellow">{t.welcomeHelpCommand}</span> {t.welcomeHelpSuffix}
        </p>
      </div>
      
      <div className="text-overlay text-sm pt-2">
        <p>{t.lastLogin} {new Date().toLocaleDateString()} {t.at} {new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

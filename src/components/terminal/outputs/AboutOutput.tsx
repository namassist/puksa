import { useLanguage } from "@/lib/i18n/LanguageContext";

export const AboutOutput = () => {
  const { t } = useLanguage();

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
          <span className="text-mauve">{t.aboutName}</span>
          <span className="text-foreground">"John Doe"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutRole}</span>
          <span className="text-green">"Software Engineer"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutExperience}</span>
          <span className="text-peach">"5+ years"</span>
        </div>
        <div className="flex gap-2">
          <span className="text-mauve">{t.aboutLocation}</span>
          <span className="text-sky">"San Francisco, CA"</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-mauve">{t.aboutBio}</span>
          <span className="text-foreground pl-4">
            "{t.aboutBioText}"
          </span>
        </div>
      </div>
      
      <p className="text-overlay text-sm">
        {t.aboutTip} <span className="text-green">{t.aboutSkillsCmd}</span> {t.aboutToSeeStack} <span className="text-green">{t.aboutExpCmd}</span> {t.aboutForHistory}
      </p>
    </div>
  );
};

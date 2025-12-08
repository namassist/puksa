import { useLanguage } from "@/lib/i18n/LanguageContext";

export const HelpOutput = () => {
  const { t } = useLanguage();

  const commands = [
    { cmd: "help", desc: t.commands.help },
    { cmd: "about", desc: t.commands.about },
    { cmd: "skills", desc: t.commands.skills },
    { cmd: "experience", desc: t.commands.experience },
    { cmd: "projects", desc: t.commands.projects },
    { cmd: "contact", desc: t.commands.contact },
    { cmd: "social", desc: t.commands.social },
    { cmd: "resume", desc: t.commands.resume },
    { cmd: "whoami", desc: t.commands.whoami },
    { cmd: "ls", desc: t.commands.ls },
    { cmd: "welcome", desc: t.commands.welcome },
    { cmd: "lang", desc: t.commands.lang },
    { cmd: "clear", desc: t.commands.clear },
  ];

  return (
    <div className="space-y-1">
      <p className="text-lavender mb-3">{t.helpTitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
        {commands.map(({ cmd, desc }) => (
          <div key={cmd} className="flex gap-4">
            <span className="text-green w-24">{cmd}</span>
            <span className="text-subtext">- {desc}</span>
          </div>
        ))}
      </div>
      <p className="text-overlay mt-4 text-sm">
        {t.helpTip} <span className="text-yellow">{t.helpTabKey}</span> {t.helpToAutocomplete} <span className="text-yellow">{t.helpArrowKeys}</span> {t.helpForHistory}
      </p>
    </div>
  );
};

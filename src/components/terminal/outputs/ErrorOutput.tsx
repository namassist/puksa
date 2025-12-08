import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ErrorOutputProps {
  command: string;
}

export const ErrorOutput = ({ command }: ErrorOutputProps) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <p className="text-red">
        bash: {command}: {t.errorNotFound}
      </p>
      <p className="text-subtext text-sm">
        {t.errorTip} <span className="text-green">{t.errorHelpCmd}</span> {t.errorSeeCommands}
      </p>
    </div>
  );
};

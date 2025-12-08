import { useLanguage } from "@/lib/i18n/LanguageContext";

export const WhoamiOutput = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <p className="text-foreground">
        <span className="text-green">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue">portfolio</span>
      </p>
      <p className="text-subtext text-sm">
        {t.whoamiLine2}
      </p>
      <p className="text-subtext text-sm">
        {t.whoamiLine3}
      </p>
    </div>
  );
};

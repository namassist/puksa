import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ThemeOutputProps {
  theme: string;
  success: boolean;
}

export const ThemeOutput = ({ theme, success }: ThemeOutputProps) => {
  const { t } = useLanguage();

  if (success) {
    return (
      <div className="fade-in">
        <p className="text-green">{t.theme.changed} {theme}</p>
      </div>
    );
  }

  return (
    <div className="fade-in space-y-3">
      <p className="text-yellow">{t.theme.invalid}</p>
      <div className="space-y-2">
        <p className="text-subtext">{t.theme.available}</p>
        <div className="grid grid-cols-2 gap-2 ml-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#1e1e2e" }} />
            <span className="text-foreground">mocha</span>
            <span className="text-subtext text-xs">({t.theme.current})</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#eff1f5" }} />
            <span className="text-foreground">latte</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#303446" }} />
            <span className="text-foreground">frappe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: "#24273a" }} />
            <span className="text-foreground">macchiato</span>
          </div>
        </div>
        <p className="text-subtext mt-2">{t.theme.usage}</p>
      </div>
    </div>
  );
};

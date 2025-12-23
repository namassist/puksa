import { useLanguage } from "@/lib/i18n/LanguageContext";

export const SocialOutput = () => {
  const { t } = useLanguage();

  // Catppuccin Mocha colors
  const colors = {
    green: "#a6e3a1",
    blue: "#89b4fa",
    lavender: "#b4befe",
    peach: "#fab387",
    pink: "#f5c2e7",
    mauve: "#cba6f7",
    teal: "#94e2d5",
    yellow: "#f9e2af",
    subtext: "#a6adc8",
    text: "#cdd6f4",
  };

  const links = [
    { label: "github", value: "github.com/namassist", color: colors.text },
    { label: "linkedin", value: "linkedin.com/in/chairulanmm", color: colors.blue },
    { label: "email", value: "chairulanmm@gmail.com", color: colors.peach },
    { label: "website", value: "chairulanammaulid.in", color: colors.green },
    { label: "instagram", value: "@chairulssr", color: colors.pink },
    { label: "discord", value: "namassist", color: colors.lavender },
  ];

  return (
    <div className="font-mono text-sm space-y-1">
      <p style={{ color: colors.lavender }}>{t.socialTitle}</p>
      <p style={{ color: colors.subtext }}>─────────────────</p>
      {links.map((link) => (
        <p key={link.label}>
          <span style={{ color: colors.mauve }}>{link.label}</span>
          <span style={{ color: colors.subtext }}>: </span>
          <span style={{ color: link.color }}>{link.value}</span>
        </p>
      ))}
      <p className="mt-2" style={{ color: colors.subtext }}>
        <span style={{ color: colors.yellow }}>tip</span>: click 'contact' for more options
      </p>
    </div>
  );
};

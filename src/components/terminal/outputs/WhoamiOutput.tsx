import { useLanguage } from "@/lib/i18n/LanguageContext";

export const WhoamiOutput = () => {
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
  };

  const info = [
    { label: "user", value: "visitor@portfolio", color: colors.green },
    { label: "role", value: "Guest Explorer", color: colors.blue },
    { label: "shell", value: "/bin/portfolio", color: colors.lavender },
    { label: "env", value: "React 18 + TypeScript", color: colors.teal },
    { label: "domain", value: window.location.hostname, color: colors.peach },
    { label: "perms", value: "read, explore, interact", color: colors.pink },
  ];

  return (
    <div className="font-mono text-sm space-y-1">
      <p style={{ color: colors.subtext }}>
        <span style={{ color: colors.green }}>visitor</span>
        <span style={{ color: colors.subtext }}>@</span>
        <span style={{ color: colors.blue }}>portfolio</span>
      </p>
      <p style={{ color: colors.subtext }}>─────────────────</p>
      {info.map((item) => (
        <p key={item.label}>
          <span style={{ color: colors.mauve }}>{item.label}</span>
          <span style={{ color: colors.subtext }}>: </span>
          <span style={{ color: item.color }}>{item.value}</span>
        </p>
      ))}
      <p className="mt-2" style={{ color: colors.subtext }}>
        <span style={{ color: colors.yellow }}>$</span> {t.whoamiLine3}
      </p>
    </div>
  );
};

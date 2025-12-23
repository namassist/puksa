import { useLanguage } from "@/lib/i18n/LanguageContext";

export const WhoamiOutput = () => {
  const { t } = useLanguage();

  const userInfo = [
    { label: "Username: ", value: "visitor", color: "text-green" },
    { label: "Role: ", value: "Guest Explorer", color: "text-blue" },
    { label: "Session: ", value: new Date().toLocaleTimeString(), color: "text-peach" },
    { label: "Location: ", value: "Web Browser", color: "text-pink" },
    { label: "Shell: ", value: "/bin/portfolio", color: "text-lavender" },
    { label: "Environment: ", value: "React 18 + TypeScript", color: "text-teal" },
    { label: "Domain: ", value: window.location.hostname, color: "text-sapphire" },
    { label: "Session ID: ", value: Math.random().toString(36).substring(2, 10).toUpperCase(), color: "text-mauve" },
  ];

  const permissions = ["READ", "EXPLORE", "INTERACT", "DISCOVER"];
  const colors = ["bg-red", "bg-peach", "bg-yellow", "bg-green", "bg-teal", "bg-blue", "bg-lavender", "bg-mauve"];

  return (
    <div className="font-mono text-sm space-y-3">
      {/* User Header */}
      <div>
        <span className="text-green font-bold">visitor</span>
        <span className="text-subtext">@</span>
        <span className="text-blue font-bold">portfolio</span>
      </div>
      <div className="text-subtext">{"─".repeat(20)}</div>

      {/* User Info */}
      <div className="space-y-0.5">
        {userInfo.map((info, i) => (
          <div key={i}>
            <span className="text-sapphire">{info.label}</span>
            <span className={info.color}>{info.value}</span>
          </div>
        ))}
      </div>

      {/* Permissions */}
      <div>
        <span className="text-sapphire">Permissions: </span>
        <span className="text-green">{permissions.join(", ")}</span>
      </div>

      {/* Tip */}
      <div className="text-subtext text-xs">
        <span className="text-green">$</span> {t.whoamiLine3}
      </div>

      {/* Color Palette */}
      <div className="flex gap-1">
        {colors.map((c, i) => (
          <span key={i} className={`w-3 h-3 ${c} rounded-sm`} />
        ))}
      </div>
    </div>
  );
};

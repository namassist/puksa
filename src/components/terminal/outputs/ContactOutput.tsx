import { Mail, MapPin, Clock, MessageCircle, Globe, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ContactOutput = () => {
  const { t } = useLanguage();

  const asciiArt = [
    "   ______            __             __ ",
    "  / ____/___  ____  / /_____ ______/ /_",
    " / /   / __ \\/ __ \\/ __/ __ `/ ___/ __/",
    "/ /___/ /_/ / / / / /_/ /_/ / /__/ /_  ",
    "\\____/\\____/_/ /_/\\__/\\__,_/\\___/\\__/  ",
  ];

  const contactInfo = [
    { icon: Mail, label: "email", value: "chairulanmm@gmail.com", color: "text-ctp-peach", link: "mailto:chairulanmm@gmail.com" },
    { icon: MessageCircle, label: "discord", value: "namassist", color: "text-ctp-blue", link: null },
    { icon: Send, label: "telegram", value: "@chairulanmm", color: "text-ctp-sky", link: "https://t.me/chairulanmm" },
    { icon: Globe, label: "website", value: "chairulanammaulid.in", color: "text-ctp-green", link: "https://chairulanammaulid.in" },
    { icon: MapPin, label: "location", value: "Semarang, Indonesia", color: "text-ctp-mauve", link: null },
    { icon: Clock, label: "timezone", value: "WIB (UTC+7)", color: "text-ctp-yellow", link: null },
  ];

  const availability = [
    { label: "status", value: "● available", color: "text-ctp-green" },
    { label: "response", value: "< 24 hours", color: "text-ctp-text" },
    { label: "hours", value: "09:00 - 18:00 WIB", color: "text-ctp-text" },
  ];

  const openTo = [
    "Full-time Positions",
    "Freelance Projects", 
    "Open Source",
    "Consulting",
    "Mentoring",
  ];

  return (
    <div className="space-y-4 font-mono">
      {/* ASCII Header */}
      <div className="space-y-1">
        {asciiArt.map((line, i) => (
          <pre key={i} className="text-ctp-lavender text-xs leading-tight">{line}</pre>
        ))}
      </div>

      {/* Contact Info */}
      <div className="space-y-1">
        <p className="text-ctp-subtext1 text-sm">// contact info</p>
        {contactInfo.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className={item.color} size={14} />
            <span className="text-ctp-subtext0 w-20">{item.label}</span>
            <span className="text-ctp-overlay0">~</span>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-ctp-sapphire hover:underline">
                {item.value}
              </a>
            ) : (
              <span className="text-ctp-text">{item.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* Availability */}
      <div className="space-y-1">
        <p className="text-ctp-subtext1 text-sm">// availability</p>
        {availability.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-ctp-subtext0 w-20">{item.label}</span>
            <span className="text-ctp-overlay0">~</span>
            <span className={item.color}>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Open To */}
      <div className="space-y-1">
        <p className="text-ctp-subtext1 text-sm">// open to</p>
        <div className="flex flex-wrap gap-2">
          {openTo.map((item) => (
            <span key={item} className="px-2 py-1 bg-ctp-surface0 text-ctp-green text-xs rounded border border-ctp-surface1">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-l-2 border-ctp-green pl-3 py-2">
        <p className="text-ctp-green text-sm">Let's build something amazing together!</p>
        <p className="text-ctp-subtext0 text-xs mt-1">
          {t.contactTip} <span className="text-ctp-sapphire">{t.contactSocialCmd}</span> {t.contactSeeLinks}
        </p>
      </div>
    </div>
  );
};

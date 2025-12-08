import { Github, Linkedin, Twitter, Mail, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const SocialOutput = () => {
  const { t } = useLanguage();

  const links = [
    { icon: Github, label: "GitHub", value: "github.com/johndoe", href: "https://github.com", color: "text-foreground" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/johndoe", href: "https://linkedin.com", color: "text-blue" },
    { icon: Twitter, label: "Twitter", value: "@johndoe_dev", href: "https://twitter.com", color: "text-sky" },
    { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev", color: "text-peach" },
    { icon: Globe, label: "Website", value: "johndoe.dev", href: "https://johndoe.dev", color: "text-green" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.socialTitle}</p>
      
      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-surface rounded-lg p-3 hover:bg-ctp-surface1 transition-colors group"
          >
            <link.icon className={`${link.color} group-hover:scale-110 transition-transform`} size={20} />
            <div className="flex flex-col sm:flex-row sm:gap-2">
              <span className="text-subtext">{link.label}:</span>
              <span className="text-sapphire hover:underline">{link.value}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

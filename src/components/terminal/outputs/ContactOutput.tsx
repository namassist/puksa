import { Mail, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ContactOutput = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.contactTitle}</p>
      
      <div className="bg-surface rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Mail className="text-peach" size={18} />
          <div>
            <span className="text-subtext text-sm">{t.contactEmail}</span>
            <a 
              href="mailto:hello@johndoe.dev" 
              className="text-sapphire hover:underline ml-2"
            >
              hello@johndoe.dev
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <MapPin className="text-green" size={18} />
          <div>
            <span className="text-subtext text-sm">{t.contactLocation}</span>
            <span className="text-foreground ml-2">San Francisco, CA</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="text-sky" size={18} />
          <div>
            <span className="text-subtext text-sm">{t.contactTimezone}</span>
            <span className="text-foreground ml-2">PST (UTC-8)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-surface rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow">✨</span>
          <span className="text-yellow">{t.contactOpen}</span>
        </div>
        <p className="text-subtext text-sm">
          {t.contactInterested}
        </p>
      </div>
      
      <p className="text-overlay text-sm">
        {t.contactTip} <span className="text-green">{t.contactSocialCmd}</span> {t.contactSeeLinks}
      </p>
    </div>
  );
};

import { Mail, MapPin, Clock, Calendar, MessageCircle, Globe, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export const ContactOutput = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t.contactEmail,
      value: "hello@johndoe.dev",
      link: "mailto:hello@johndoe.dev",
      color: "text-peach",
      preferred: true,
    },
    {
      icon: MessageCircle,
      label: "Discord:",
      value: "johndoe#1234",
      link: null,
      color: "text-blue",
      preferred: false,
    },
    {
      icon: Send,
      label: "Telegram:",
      value: "@johndoe_dev",
      link: "https://t.me/johndoe_dev",
      color: "text-sky",
      preferred: false,
    },
  ];

  const availability = {
    status: "available", // available, busy, limited
    responseTime: "< 24 hours",
    timezone: "PST (UTC-8)",
    workingHours: "9:00 AM - 6:00 PM",
    preferredDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  };

  const openTo = [
    { type: "Full-time Positions", icon: "💼", interested: true },
    { type: "Freelance Projects", icon: "🎯", interested: true },
    { type: "Open Source Collaboration", icon: "🤝", interested: true },
    { type: "Technical Consulting", icon: "💡", interested: true },
    { type: "Speaking Engagements", icon: "🎤", interested: true },
    { type: "Mentoring", icon: "🎓", interested: true },
  ];

  const faq = [
    {
      q: "What's your tech stack preference?",
      a: "TypeScript/React for frontend, Node.js/Go for backend, AWS/GCP for cloud.",
    },
    {
      q: "Are you open to remote work?",
      a: "Yes! I've been working remotely for 3+ years and have great async communication skills.",
    },
    {
      q: "What's your rate for freelance?",
      a: "It depends on the project scope. Let's discuss your requirements first!",
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lavender">{t.contactTitle}</p>
      
      {/* Contact Methods */}
      <div className="bg-surface rounded-lg p-4 space-y-3">
        {contactMethods.map((method) => (
          <div key={method.label} className="flex items-center gap-3">
            <method.icon className={method.color} size={18} />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-subtext text-sm">{method.label}</span>
              {method.link ? (
                <a 
                  href={method.link}
                  className="text-sapphire hover:underline"
                >
                  {method.value}
                </a>
              ) : (
                <span className="text-foreground">{method.value}</span>
              )}
              {method.preferred && (
                <span className="text-xs bg-green/20 text-green px-2 py-0.5 rounded">Preferred</span>
              )}
            </div>
          </div>
        ))}
        
        <div className="flex items-center gap-3">
          <MapPin className="text-green" size={18} />
          <div>
            <span className="text-subtext text-sm">{t.contactLocation}</span>
            <span className="text-foreground ml-2">San Francisco, CA 🌉</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Globe className="text-mauve" size={18} />
          <div>
            <span className="text-subtext text-sm">Website:</span>
            <a href="https://johndoe.dev" className="text-sapphire hover:underline ml-2">
              johndoe.dev
            </a>
          </div>
        </div>
      </div>
      
      {/* Availability Status */}
      <div className="bg-surface rounded-lg p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-3 h-3 rounded-full ${
            availability.status === 'available' ? 'bg-green animate-pulse' : 
            availability.status === 'busy' ? 'bg-red' : 'bg-yellow'
          }`} />
          <span className={`font-medium ${
            availability.status === 'available' ? 'text-green' : 
            availability.status === 'busy' ? 'text-red' : 'text-yellow'
          }`}>
            {availability.status === 'available' ? '✨ Currently Available!' : 
             availability.status === 'busy' ? 'Currently Busy' : 'Limited Availability'}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="text-sky" size={14} />
            <span className="text-subtext">Response Time:</span>
            <span className="text-foreground">{availability.responseTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="text-peach" size={14} />
            <span className="text-subtext">Timezone:</span>
            <span className="text-foreground">{availability.timezone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="text-mauve" size={14} />
            <span className="text-subtext">Working Hours:</span>
            <span className="text-foreground">{availability.workingHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green" size={14} />
            <span className="text-subtext">Best Days:</span>
            <span className="text-foreground">{availability.preferredDays.join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Open To */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender mb-3">// Open To</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {openTo.map((item) => (
            <div 
              key={item.type}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                item.interested ? 'bg-green/10 border border-green/20' : 'bg-ctp-surface1'
              }`}
            >
              <span>{item.icon}</span>
              <span className={`text-sm ${item.interested ? 'text-green' : 'text-subtext'}`}>
                {item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick FAQ */}
      <div className="bg-surface rounded-lg p-4">
        <p className="text-lavender mb-3">// Quick FAQ</p>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <div key={i} className="border-l-2 border-ctp-surface2 pl-3">
              <p className="text-mauve text-sm font-medium">Q: {item.q}</p>
              <p className="text-foreground text-sm mt-1">A: {item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green/10 to-blue/10 border border-green/20 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🚀</span>
          <div>
            <p className="text-green font-medium mb-1">Let's Build Something Amazing!</p>
            <p className="text-subtext text-sm">
              Whether you have a project idea, job opportunity, or just want to say hi - 
              I'd love to hear from you. Don't hesitate to reach out!
            </p>
          </div>
        </div>
      </div>
      
      <p className="text-overlay text-sm">
        {t.contactTip} <span className="text-green">{t.contactSocialCmd}</span> {t.contactSeeLinks}
      </p>
    </div>
  );
};

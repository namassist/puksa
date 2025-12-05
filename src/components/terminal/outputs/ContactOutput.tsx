import { Mail, MapPin, Clock } from "lucide-react";

export const ContactOutput = () => {
  return (
    <div className="space-y-4">
      <p className="text-lavender">// Contact Information</p>
      
      <div className="bg-surface rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Mail className="text-peach" size={18} />
          <div>
            <span className="text-subtext text-sm">Email:</span>
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
            <span className="text-subtext text-sm">Location:</span>
            <span className="text-foreground ml-2">San Francisco, CA</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock className="text-sky" size={18} />
          <div>
            <span className="text-subtext text-sm">Timezone:</span>
            <span className="text-foreground ml-2">PST (UTC-8)</span>
          </div>
        </div>
      </div>
      
      <div className="bg-surface rounded-lg p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow">✨</span>
          <span className="text-yellow">Currently open to opportunities!</span>
        </div>
        <p className="text-subtext text-sm">
          I'm interested in full-time positions, freelance projects, and collaboration on open source.
        </p>
      </div>
      
      <p className="text-overlay text-sm">
        Type <span className="text-green">social</span> to see all my social links.
      </p>
    </div>
  );
};

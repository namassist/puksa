import { useState } from "react";
import { TerminalWindow } from "../terminal/TerminalWindow";
import { Prompt } from "../terminal/Prompt";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { icon: Mail, label: "Email", value: "hello@johndoe.dev", href: "mailto:hello@johndoe.dev", color: "text-peach" },
  { icon: Github, label: "GitHub", value: "github.com/johndoe", href: "#", color: "text-foreground" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/johndoe", href: "#", color: "text-blue" },
  { icon: Twitter, label: "Twitter", value: "@johndoe_dev", href: "#", color: "text-sky" },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <TerminalWindow title="~/contact — bash">
          <Prompt command="cat contact.md" />
          
          <div className="mt-4 slide-up">
            <h2 className="text-2xl font-bold text-lavender mb-4">
              <span className="text-subtext"># </span>Get In Touch
            </h2>
            <p className="text-foreground mb-8">
              <span className="text-subtext">{">"}</span> Have a question or want to work together?
              Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-surface rounded-lg p-6">
                <Prompt command="./send_message.sh" />
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                  <div>
                    <label className="text-green text-sm mb-1 block">name:</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ctp-mantle border border-ctp-surface1 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-ctp-lavender transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-blue text-sm mb-1 block">email:</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ctp-mantle border border-ctp-surface1 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-ctp-lavender transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-mauve text-sm mb-1 block">message:</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-ctp-mantle border border-ctp-surface1 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-ctp-lavender transition-colors min-h-[120px] resize-none"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-ctp-lavender text-ctp-crust font-semibold py-2 px-4 rounded-lg hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Social Links */}
              <div>
                <Prompt command="cat socials.json" />
                <div className="mt-4 space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-4 bg-surface rounded-lg p-4 hover:bg-ctp-surface1 transition-all duration-200 group"
                    >
                      <link.icon className={`${link.color} group-hover:scale-110 transition-transform`} size={24} />
                      <div>
                        <span className="text-subtext text-sm">{link.label}</span>
                        <p className="text-foreground">{link.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-8 bg-surface rounded-lg p-4">
                  <p className="text-subtext text-sm">
                    <span className="text-green">$</span> echo "Available for freelance"
                  </p>
                  <p className="text-yellow mt-2">✨ Currently open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-subtext text-sm">
            <span className="text-overlay">{"/*"}</span> Built with{" "}
            <span className="text-pink">♥</span> using React + Tailwind{" "}
            <span className="text-overlay">{"*/"}</span>
          </p>
          <p className="text-overlay text-xs mt-2">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

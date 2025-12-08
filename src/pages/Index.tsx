import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-background">
        <InteractiveTerminal />
      </main>
    </LanguageProvider>
  );
};

export default Index;

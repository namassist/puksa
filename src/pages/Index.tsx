import { useState } from "react";
import { InteractiveTerminal } from "@/components/terminal/InteractiveTerminal";
import { Preloader } from "@/components/terminal/Preloader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-background">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <InteractiveTerminal />
    </main>
  );
};

export default Index;

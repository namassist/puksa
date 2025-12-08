import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CatppuccinTheme = "mocha" | "latte" | "frappe" | "macchiato";

interface ThemeContextType {
  theme: CatppuccinTheme;
  setTheme: (theme: CatppuccinTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Catppuccin color palettes
const themes: Record<CatppuccinTheme, Record<string, string>> = {
  mocha: {
    rosewater: "10 56% 91%",
    flamingo: "0 59% 88%",
    pink: "316 72% 86%",
    mauve: "267 84% 81%",
    red: "343 81% 75%",
    maroon: "350 65% 77%",
    peach: "23 92% 75%",
    yellow: "41 86% 83%",
    green: "115 54% 76%",
    teal: "170 57% 73%",
    sky: "189 71% 73%",
    sapphire: "199 76% 69%",
    blue: "217 92% 76%",
    lavender: "232 97% 85%",
    text: "226 64% 88%",
    subtext1: "227 35% 80%",
    subtext0: "228 24% 72%",
    overlay2: "228 17% 63%",
    overlay1: "227 13% 55%",
    overlay0: "229 13% 47%",
    surface2: "228 13% 39%",
    surface1: "227 15% 31%",
    surface0: "230 14% 23%",
    base: "240 21% 15%",
    mantle: "240 21% 12%",
    crust: "240 23% 9%",
  },
  latte: {
    rosewater: "11 59% 67%",
    flamingo: "0 60% 67%",
    pink: "316 73% 69%",
    mauve: "266 85% 58%",
    red: "347 87% 44%",
    maroon: "355 76% 59%",
    peach: "22 99% 52%",
    yellow: "35 77% 49%",
    green: "109 58% 40%",
    teal: "183 74% 35%",
    sky: "197 97% 46%",
    sapphire: "189 70% 42%",
    blue: "220 91% 54%",
    lavender: "231 97% 72%",
    text: "234 16% 35%",
    subtext1: "233 13% 41%",
    subtext0: "233 10% 47%",
    overlay2: "232 10% 53%",
    overlay1: "231 10% 59%",
    overlay0: "228 11% 65%",
    surface2: "227 12% 71%",
    surface1: "225 14% 77%",
    surface0: "223 16% 83%",
    base: "220 23% 95%",
    mantle: "220 22% 92%",
    crust: "220 21% 89%",
  },
  frappe: {
    rosewater: "10 57% 88%",
    flamingo: "0 59% 84%",
    pink: "316 73% 84%",
    mauve: "277 59% 76%",
    red: "359 68% 71%",
    maroon: "358 66% 76%",
    peach: "20 79% 70%",
    yellow: "40 62% 73%",
    green: "96 44% 68%",
    teal: "172 39% 65%",
    sky: "189 48% 73%",
    sapphire: "199 55% 69%",
    blue: "222 74% 74%",
    lavender: "239 66% 84%",
    text: "227 70% 87%",
    subtext1: "227 44% 80%",
    subtext0: "228 29% 73%",
    overlay2: "228 17% 63%",
    overlay1: "227 17% 54%",
    overlay0: "229 20% 45%",
    surface2: "228 18% 37%",
    surface1: "227 17% 29%",
    surface0: "230 16% 23%",
    base: "229 19% 23%",
    mantle: "231 19% 20%",
    crust: "229 20% 17%",
  },
  macchiato: {
    rosewater: "10 58% 90%",
    flamingo: "0 58% 86%",
    pink: "316 74% 85%",
    mauve: "279 70% 79%",
    red: "351 74% 73%",
    maroon: "355 71% 77%",
    peach: "21 86% 73%",
    yellow: "40 70% 78%",
    green: "105 48% 72%",
    teal: "171 47% 69%",
    sky: "189 59% 73%",
    sapphire: "199 66% 69%",
    blue: "220 83% 75%",
    lavender: "234 82% 85%",
    text: "227 68% 88%",
    subtext1: "228 39% 80%",
    subtext0: "227 27% 72%",
    overlay2: "228 15% 63%",
    overlay1: "228 15% 53%",
    overlay0: "230 16% 45%",
    surface2: "230 14% 37%",
    surface1: "231 14% 28%",
    surface0: "230 15% 22%",
    base: "232 23% 18%",
    mantle: "233 22% 15%",
    crust: "236 23% 12%",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<CatppuccinTheme>("mocha");

  useEffect(() => {
    const root = document.documentElement;
    const colors = themes[theme];
    
    Object.entries(colors).forEach(([name, value]) => {
      root.style.setProperty(`--ctp-${name}`, value);
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

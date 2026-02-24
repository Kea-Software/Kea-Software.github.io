import { createContext, useContext, useState } from "react";
import translations from "./translations.json";

type Language = "en" | "de";

type LanguageContextType = {
  lang: Language;
  t: (key: keyof typeof translations["en"]) => string;
  switchLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: keyof typeof translations["en"]) =>
    translations[lang][key];

  return (
    <LanguageContext.Provider
      value={{ lang, t, switchLanguage: setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
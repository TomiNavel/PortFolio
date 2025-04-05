"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import es from "@/languajes/es.json";
import en from "@/languajes/en.json";

const translations = { es, en };

type Locale = "es" | "en";

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "es",
  setLocale: () => {},
  t: () => "",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const getDefaultLocale = (): Locale => {
    if (typeof window !== "undefined") {
      const lang = navigator.language.slice(0, 2);
      return ["es", "en"].includes(lang) ? (lang as Locale) : "es";
    }
    return "es";
  };

  const [locale, setLocale] = useState<Locale>(getDefaultLocale());

  const t = (key: string): string => {
    const keys = key.split(".");
    return keys.reduce((obj: any, k) => obj?.[k], translations[locale]) || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

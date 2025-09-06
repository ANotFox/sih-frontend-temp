import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, TranslationStrings } from '@/lib/translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof TranslationStrings) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage, default to English
    const saved = localStorage.getItem('language');
    return (saved && Object.keys(translations).includes(saved)) ? saved as Language : 'en';
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
  };

  const t = (key: keyof TranslationStrings): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  useEffect(() => {
    // Set document language attribute for accessibility
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
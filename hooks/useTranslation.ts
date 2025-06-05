import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import en from '@/locales/en.json';
import ar from '@/locales/ar.json';

const translations = { en, ar };

export function useTranslation() {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string) => {
    const keys = key.split('.');
    let translation: any = translations[language as keyof typeof translations];
    
    for (const k of keys) {
      if (translation[k] === undefined) {
        console.warn(`Translation key "${key}" not found`);
        return key;
      }
      translation = translation[k];
    }
    
    if (typeof translation === 'string') {
      return translation.replace(/{year}/g, new Date().getFullYear().toString());
    }
    
    return translation;
  };

  return { t, language };
}
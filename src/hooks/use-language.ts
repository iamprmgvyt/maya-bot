'use client';

import { useState, useEffect } from 'react';
import { translations, Language, TranslationKey } from '@/i18n/translations';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('maya-bot-language') as Language;
    if (saved && (saved === 'en' || saved === 'vi' || saved === 'hi')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('maya-bot-language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return { language, setLanguage, t };
}

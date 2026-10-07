'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { english } from '@/lib/translations';

type Language = 'es' | 'en';
const LanguageContext = createContext({ language: 'es' as Language, setLanguage: (_language: Language) => {}, t: (text: string) => text });
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>('es');
  const activeLanguage = pathname === '/' ? language : 'es';
  useEffect(() => {
    try { if (localStorage.getItem('site-language') === 'en') setLanguage('en'); } catch { /* Storage may be unavailable. */ }
  }, []);
  useEffect(() => { document.documentElement.lang = activeLanguage; }, [activeLanguage]);
  function chooseLanguage(value: Language) {
    setLanguage(value);
    try { localStorage.setItem('site-language', value); } catch { /* Switching still works without storage. */ }
  }
  return <LanguageContext.Provider value={{ language: activeLanguage, setLanguage: chooseLanguage, t: text => activeLanguage === 'en' ? english[text] ?? text : text }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }

'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import styles from './legal.module.css';

type Language = 'es' | 'en';
const languageStorageKey = 'andresgomezos-legal-language';

export default function LegalLayout({ title, englishTitle, spanishContent, englishContent }: {
  title: string;
  englishTitle: string;
  spanishContent: ReactNode;
  englishContent: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    function syncLanguage() {
      if (window.location.hash === '#english') {
        setLanguage('en');
      } else if (window.location.hash === '#espanol') {
        setLanguage('es');
      } else {
        try {
          setLanguage(window.localStorage.getItem(languageStorageKey) === 'en' ? 'en' : 'es');
        } catch {
          setLanguage('es');
        }
      }
    }
    syncLanguage();
    window.addEventListener('hashchange', syncLanguage);
    return () => window.removeEventListener('hashchange', syncLanguage);
  }, []);

  function selectLanguage(value: unknown) {
    if (value !== 'es' && value !== 'en') return;
    setLanguage(value);
    window.history.replaceState(window.history.state, '', value === 'en' ? '#english' : '#espanol');
    try {
      window.localStorage.setItem(languageStorageKey, value);
    } catch {
      // Switching languages still works when browser storage is unavailable.
    }
  }

  const isEnglish = language === 'en';
  const suffix = isEnglish ? '#english' : '#espanol';

  return <div className={styles.shell}>
    <header className={styles.header}><a href="/">AndresGomez[OS]</a><span>Autochat</span></header>
    <main className={styles.content} lang={language}>
      <h1>{isEnglish ? englishTitle : title}</h1>
      <Tabs value={language} onValueChange={selectLanguage}>
        <TabsList className={styles.languageSelector} aria-label="Idioma / Language">
          <TabsTrigger className={styles.languageOption} value="es" lang="es">Español</TabsTrigger>
          <TabsTrigger className={styles.languageOption} value="en" lang="en">English</TabsTrigger>
        </TabsList>
        <TabsContent className={styles.languageContent} value="es" keepMounted>{spanishContent}</TabsContent>
        <TabsContent className={styles.languageContent} value="en" keepMounted>{englishContent}</TabsContent>
      </Tabs>
    </main>
    <footer className={styles.footer} lang={language}>
      <nav aria-label={isEnglish ? 'Legal information' : 'Información legal'}>
        <a href={`/privacidad${suffix}`}>{isEnglish ? 'Privacy Policy' : 'Política de Privacidad'}</a>
        <a href={`/eliminacion-datos${suffix}`}>{isEnglish ? 'Data deletion' : 'Eliminación de datos'}</a>
        <a href={`/condiciones-del-servicio${suffix}`}>{isEnglish ? 'Terms of Service' : 'Términos del Servicio'}</a>
      </nav>
      <a href="mailto:hello@andresgomez.store">hello@andresgomez.store</a>
    </footer>
  </div>;
}

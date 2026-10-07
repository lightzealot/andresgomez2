'use client';
import { useLanguage } from './LanguageProvider';
import styles from '@/app/business.module.css';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  return <div className={styles.languageSwitch} role="group" aria-label={language === 'en' ? 'Language' : 'Idioma'}>
    <button type="button" lang="es" aria-label="Español" aria-pressed={language === 'es'} onClick={() => setLanguage('es')}>ES</button>
    <button type="button" lang="en" aria-label="English" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
  </div>;
}

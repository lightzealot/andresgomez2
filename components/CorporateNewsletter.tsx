'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import styles from '@/app/business.module.css';

export function CorporateNewsletter() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  async function subscribe(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const honeypot = data.get('bot-field');
    setStatus('submitting');
    try {
      const response = await fetch('/newsletter-form.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': 'newsletter', email: typeof email === 'string' ? email : '', 'bot-field': typeof honeypot === 'string' ? honeypot : '' }).toString() });
      if (!response.ok) throw new Error('Subscription failed');
      setStatus('done');
    } catch { setStatus('error'); }
  }
  return <div className={styles.newsletter}><div><span>NEWSLETTER</span><h3>{t("IA aplicada, en tu correo.")}</h3><p>{t("Ideas y recursos para aplicar IA a las tareas de tu equipo.")}</p></div><form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={subscribe}><input type="hidden" name="form-name" value="newsletter"/><input className={styles.honeypot} name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true"/><label htmlFor="business-email">{t("Tu correo electrónico")}</label><div className={styles.newsletterField}><input id="business-email" type="email" name="email" required autoComplete="email" placeholder={t("tu@empresa.com")}/><button type="submit" disabled={status === 'submitting' || status === 'done'} aria-label={t("Suscribirme")}>{status === 'done' ? <Check size={18}/> : <ArrowRight size={18}/>}</button></div><output aria-live="polite">{status === 'done' ? t("Listo. Te avisaré cuando haya algo nuevo.") : status === 'error' ? t("No pudimos completar la suscripción. Inténtalo de nuevo.") : ''}</output></form></div>;
}

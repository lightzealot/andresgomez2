'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, Check, Copy, Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import styles from './resources.module.css';

export function ResourceHeader({ article = false }: { article?: boolean }) {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('andresgomezos-theme');
    setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('andresgomezos-theme', dark ? 'dark' : 'light');
  }, [dark, ready]);
  return <>
    <a className={styles.skipLink} href="#contenido">Saltar al contenido</a>
    <header className={styles.header}>
      <a className={styles.brand} href="/"><img src="/andresgomezos-logo.png" width={28} height={28} alt=""/><span>AndresGomez[OS]</span></a>
      <nav aria-label="Navegación principal"><a href={article ? '/recursos/' : '/'}><ArrowLeft size={16}/>{article ? 'Biblioteca' : 'Portafolio'}</a><div className={styles.theme}><Sun size={15}/><Switch size="sm" checked={dark} onCheckedChange={setDark} aria-label="Usar tema oscuro"/><Moon size={15}/></div></nav>
    </header>
  </>;
}

export function CopyButton({ text, label = 'Copiar prompt' }: { text: string; label?: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  useEffect(() => {
    if (state !== 'copied') return;
    const timer = setTimeout(() => setState('idle'), 2500);
    return () => clearTimeout(timer);
  }, [state]);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setState('copied'); }
    catch { setState('error'); }
  }
  return <span className={styles.copyControl}><button className={styles.copyButton} onClick={copy}>{state === 'copied' ? <Check size={16}/> : <Copy size={16}/>}<span>{state === 'copied' ? 'Copiado' : label}</span></button><span className={styles.copyStatus} role="status">{state === 'error' ? 'Selecciona el texto para copiarlo manualmente.' : state === 'copied' ? 'Texto copiado al portapapeles.' : ''}</span></span>;
}

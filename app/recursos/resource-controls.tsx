'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Copy, Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import styles from './resources.module.css';

export function ResourceHeader({ article = false }: { article?: boolean }) {
  const [dark, setDark] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = localStorage.getItem('andresgomezos-theme');
      if (saved) setDark(saved === 'dark');
      setReady(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle('resource-light', !dark);
    localStorage.setItem('andresgomezos-theme', dark ? 'dark' : 'light');
    return () => document.documentElement.classList.remove('resource-light');
  }, [dark, ready]);
  return <>
    <a className={styles.skipLink} href="#contenido">Saltar al contenido</a>
    <header className={styles.header}>
      <Link className={styles.brand} href="/"><span className={styles.brandMark}>AG<span>✳</span></span><span>AndresGomez[OS]</span></Link>
      <nav aria-label="Navegación principal"><Link href={article ? '/recursos/' : '/'}><ArrowLeft size={16}/>{article ? 'Biblioteca' : 'Volver al escritorio'}</Link><div className={styles.theme}><Sun size={15}/><Switch size="sm" checked={dark} onCheckedChange={setDark} aria-label="Alternar tema claro y oscuro"/><Moon size={15}/></div></nav>
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
  return <span className={styles.copyControl}><button className={styles.copyButton} onClick={copy}>{state === 'copied' ? <Check size={16}/> : <Copy size={16}/>}<span>{state === 'copied' ? 'Copiado' : label}</span></button><output className={styles.copyStatus}>{state === 'error' ? 'Selecciona el texto para copiarlo manualmente.' : state === 'copied' ? 'Texto copiado al portapapeles.' : ''}</output></span>;
}

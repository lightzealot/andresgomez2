'use client';

import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { CorporateHeader } from '@/components/CorporateHeader';
import styles from './resources.module.css';

export function ResourceHeader(_props: { article?: boolean }) {
  return <CorporateHeader bilingual={false}/>;
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

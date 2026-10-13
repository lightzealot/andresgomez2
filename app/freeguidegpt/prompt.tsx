'use client';
import { useState } from 'react';
import styles from '../business.module.css';
const prompt = 'Help me [task]. Here is the context: [details]. Write for [audience], use a [tone] tone, and respond in [format and length].';
export function GuidePrompt() {
  const [status, setStatus] = useState('');
  async function copy() { try { await navigator.clipboard.writeText(prompt); setStatus('Copied!'); } catch { setStatus('Select the text above to copy it.'); } }
  return <div className={styles.diagnosticAction}><span>A REUSABLE TEMPLATE</span><p style={{fontSize:18,lineHeight:1.7,color:'var(--ink)'}}>{prompt}</p><button className={styles.primary} type="button" onClick={copy}>Copy prompt</button><p role="status" aria-live="polite">{status}</p></div>;
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bot, MessagesSquare, Pause, Play, Workflow } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import styles from '@/app/business.module.css';

const tools = [
  { label: 'ChatGPT', logo: '/tool-logos/openai.svg' },
  { label: 'Agentes de IA', icon: Bot },
  { label: 'Claude Code', logo: '/tool-logos/claude-color.svg' },
  { label: 'Automatizaciones', icon: Workflow },
  { label: 'Gemini', logo: '/tool-logos/gemini-color.svg' },
  { label: 'Asistentes de IA', icon: MessagesSquare },
];

export function LearningHeadline() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex(current => (current + 1) % tools.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const tool = tools[index];
  const Icon = tool.icon;

  return <div className={styles.learningHeadline}>
    <h1 id="presentacion" className={styles.learningTitle} aria-label={t('Aprende a usar herramientas, agentes y automatizaciones de IA para tu negocio')}>
      <span className={styles.headlineLine} aria-hidden="true">{t('Aprende a usar')}</span>
      <span className={styles.changingTool} aria-hidden="true"><span key={index} className={styles.toolEntry} data-long={t(tool.label).length > 10}>
        {tool.logo ? <Image src={tool.logo} alt="" width={64} height={64} className={styles.toolLogo} unoptimized/> : Icon && <Icon className={styles.toolLogo} strokeWidth={1.6}/>}
        <span>{t(tool.label)}</span>
      </span></span>
      <span className={styles.headlineLine} aria-hidden="true">{t('para tu negocio')}</span>
    </h1>
    {!reducedMotion && <button type="button" className={styles.headlineToggle} onClick={() => setPaused(value => !value)} aria-label={t(paused ? 'Reanudar animación del título' : 'Pausar animación del título')}>
      {paused ? <Play size={13} aria-hidden="true"/> : <Pause size={13} aria-hidden="true"/>}
      {t(paused ? 'Reanudar' : 'Pausar')}
    </button>}
  </div>;
}

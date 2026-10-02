'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronRight, Clock3, FolderOpen, Mail, Minus, Monitor, Sparkles, UserRound, X } from 'lucide-react';
import './os.css';

type AppId = 'inicio' | 'sobre-mi' | 'aprender' | 'contacto';
const apps = [
  { id: 'inicio', label: 'Inicio', icon: Monitor, color: 'mint' },
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound, color: 'lilac' },
  { id: 'aprender', label: 'Empieza aquí', icon: BookOpen, color: 'sun' },
  { id: 'contacto', label: 'Contacto', icon: Mail, color: 'sky' },
] as const;
const lessons = [
  { number: '01', title: 'Planea una semana de contenido', detail: 'Convierte una idea en Reels, carrusel, historias y calendario.', time: 'Sistema', slug: 'sistema-60-minutos-contenido-ia' },
  { number: '02', title: 'Escribe prompts que sí ayudan', detail: 'Da contexto y dirección para conseguir mejores borradores.', time: 'Guía', slug: 'formula-buen-prompt' },
  { number: '03', title: 'Crea visuales con intención', detail: 'Prueba estilos y encuadres para tus publicaciones.', time: 'Visuales', slug: '30-atajos-imagenes-ia' },
  { number: '04', title: 'Produce video con IA', detail: 'Pasa de una idea a un storyboard y una pieza animada.', time: 'Video', slug: 'videos-animados-claude' },
  { number: '05', title: 'Automatiza tareas repetitivas', detail: 'Libera tiempo para las decisiones creativas.', time: 'Flujo', slug: '10-automatizaciones-chatgpt' },
];
export default function Home() {
  const [openApps, setOpenApps] = useState<AppId[]>(['inicio']);
  const [activeApp, setActiveApp] = useState<AppId>('inicio');
  const [windowPositions, setWindowPositions] = useState<Record<AppId, { x: number; y: number }>>({
    inicio: { x: 0, y: 0 }, 'sobre-mi': { x: 0, y: 0 },
    aprender: { x: 0, y: 0 }, contacto: { x: 0, y: 0 },
  });
  const windowRef = useRef<HTMLElement>(null);
  const dragRef = useRef<{ pointerId: number; app: AppId; startX: number; startY: number; x: number; y: number; baseLeft: number; baseTop: number; width: number } | null>(null);
  const [time, setTime] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()));
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    const resetMobilePosition = () => {
      if (window.innerWidth > 760) return;
      setWindowPositions({ inicio: { x: 0, y: 0 }, 'sobre-mi': { x: 0, y: 0 }, aprender: { x: 0, y: 0 }, contacto: { x: 0, y: 0 } });
    };
    window.addEventListener('resize', resetMobilePosition);
    return () => window.removeEventListener('resize', resetMobilePosition);
  }, []);
  const openApp = (id: AppId) => { setOpenApps(current => current.includes(id) ? current : [...current, id]); setActiveApp(id); };
  const closeApp = (id: AppId) => { const next = openApps.filter(item => item !== id); setOpenApps(next); setActiveApp(next[next.length - 1] ?? 'inicio'); };
  const minimizeApp = (id: AppId) => { const next = openApps.filter(item => item !== id); setOpenApps(next); setActiveApp(next[next.length - 1] ?? 'inicio'); };
  const startDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 760 || event.button !== 0 || (event.target instanceof Element && event.target.closest('button'))) return;
    const rect = windowRef.current?.getBoundingClientRect();
    if (!rect) return;
    event.preventDefault();
    event.currentTarget.classList.add('is-dragging');
    const position = windowPositions[activeApp];
    dragRef.current = { pointerId: event.pointerId, app: activeApp, startX: event.clientX, startY: event.clientY, x: position.x, y: position.y, baseLeft: rect.left - position.x, baseTop: rect.top - position.y, width: rect.width };
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const dragWindow = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const minX = 16 - drag.baseLeft;
    const maxX = window.innerWidth - 16 - drag.width - drag.baseLeft;
    const minY = 56 - drag.baseTop;
    const maxY = window.innerHeight - 88 - drag.baseTop;
    const x = Math.max(minX, Math.min(maxX, drag.x + event.clientX - drag.startX));
    const y = Math.max(minY, Math.min(maxY, drag.y + event.clientY - drag.startY));
    setWindowPositions(current => ({ ...current, [drag.app]: { x, y } }));
  };
  const stopDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    dragRef.current = null;
    event.currentTarget.classList.remove('is-dragging');
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };
  const subscribe = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault(); setNewsletterStatus('submitting');
    try { const response = await fetch('/newsletter-form.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': 'newsletter', email, 'bot-field': '' }).toString() }); if (!response.ok) throw new Error(); setNewsletterStatus('done'); }
    catch { setNewsletterStatus('error'); }
  };
  const current = apps.find(app => app.id === activeApp);

  return <main className="os-shell">
    <div className="os-wallpaper" aria-hidden="true"><span className="os-orb os-orb-one"/><span className="os-orb os-orb-two"/><span className="os-orb os-orb-three"/><span className="os-grid"/></div>
    <header className="os-menubar"><button className="os-menu-brand" onClick={() => openApp('inicio')} aria-label="Abrir inicio"><span className="os-mark">A<span>✳</span></span><strong>AndresGomez[OS]</strong></button><div className="os-menubar-right"><span className="os-availability"><i/> Disponible para conversar</span><span className="os-time"><Clock3 size={14}/>{time}</span></div></header>
    <div className="os-desktop-copy" aria-hidden="true"><span>UNA NUEVA FORMA DE CREAR</span><strong>Ideas que<br/>cobran vida<span>.</span></strong><small>ANDRÉS GÓMEZ · CREADOR DIGITAL</small></div>
    {openApps.length > 0 && <section ref={windowRef} className="os-window" aria-label={`Ventana: ${current?.label}`} key={activeApp} style={{ translate: `${windowPositions[activeApp].x}px ${windowPositions[activeApp].y}px` }}>
      <div className="os-window-bar" onPointerDown={startDrag} onPointerMove={dragWindow} onPointerUp={stopDrag} onPointerCancel={stopDrag} onDoubleClick={() => setWindowPositions(current => ({ ...current, [activeApp]: { x: 0, y: 0 } }))}><div className="os-window-controls"><button onClick={() => closeApp(activeApp)} aria-label="Cerrar ventana" className="os-control close"><X size={11}/></button><button onClick={() => minimizeApp(activeApp)} aria-label="Minimizar ventana" className="os-control minimize"><Minus size={11}/></button><span className="os-control maximize" aria-hidden="true"/></div><span className="os-window-title">{current?.icon && <current.icon size={14}/>} {current?.label} — AndresGomez[OS]</span><span className="os-window-hint">ARRASTRA PARA MOVER</span></div>
      <div className="os-window-body">
        {activeApp === 'inicio' && <div className="os-home"><div className="os-home-main"><div className="os-kicker"><span className="os-kicker-line"/> IA PARA CREADORES DE CONTENIDO</div><h1>Crea contenido <em>con IA.</em></h1><p>Aprende a planear, escribir y producir contenido con IA: guiones, carruseles, imágenes y flujos que puedes repetir cada semana.</p><div className="os-home-actions"><button className="os-primary" onClick={() => openApp('aprender')}>Empieza a crear <ArrowUpRight size={17}/></button><button className="os-text-button" onClick={() => openApp('sobre-mi')}>Conóceme <ArrowRight size={16}/></button></div><div className="os-home-footer"><span>IDEA / PIEZA / PUBLICACIÓN</span><span>USA LA BARRA INFERIOR <ArrowDownRight size={17}/></span></div></div><div className="os-home-side"><div className="os-profile-frame"><Image src="/4c-contraste.png" alt="Retrato de Andrés Gómez" fill sizes="(max-width: 760px) 100vw, 400px"/><span className="os-profile-badge">CREADOR DIGITAL<br/>+ EDUCADOR IA</span></div><div className="os-side-caption"><span>PARA TU PROCESO</span><strong>Planear.<br/>Crear.<br/>Publicar.</strong></div></div></div>}
        {activeApp === 'sobre-mi' && <div className="os-inner os-about"><div className="os-section-number">01 / SOBRE MÍ</div><div className="os-about-grid"><div><h2>IA útil para <em>creadores de contenido.</em></h2><p className="os-large-copy">Soy Andrés Gómez, creador digital. Comparto formas prácticas de usar IA para desarrollar ideas, guiones, imágenes y sistemas de publicación.</p><p>En AndresGomez[OS] reúno herramientas y procesos para crear contenido con más claridad y consistencia, desde la primera idea hasta la pieza final.</p><button className="os-inline-link" onClick={() => openApp('contacto')}>Hablemos de tu idea <ArrowUpRight size={17}/></button></div><div className="os-about-card"><Image src="/4c-contraste.png" alt="Andrés Gómez" fill sizes="(max-width: 760px) 100vw, 400px"/><div><span>ANDRÉS GÓMEZ</span><strong>Creo, aprendo y comparto.</strong></div></div></div><div className="os-capabilities"><span>LO QUE EXPLORO</span><div><span>Estrategia de contenido</span><span>Guiones y prompts</span><span>Visuales con IA</span><span>Automatización</span></div></div></div>}
        {activeApp === 'aprender' && <div className="os-inner"><div className="os-section-number">02 / RUTA CREATIVA</div><div className="os-section-heading"><h2>Crea paso a paso<span className="os-period">.</span></h2><p>Cinco puntos de partida para integrar la IA en tu proceso de contenido.</p></div><div className="os-learning-layout"><div className="os-learning-intro"><Sparkles size={24}/><strong>Empieza con una idea</strong><p>Sigue el flujo que necesitas hoy y adapta cada recurso a tu voz y a tu audiencia.</p><Link href="/recursos">Ver biblioteca de recursos <ArrowUpRight size={16}/></Link></div><div className="os-lessons">{lessons.map(lesson => <Link className="os-lesson" key={lesson.number} href={`/recursos/${lesson.slug}`}><span>{lesson.number}</span><div><strong>{lesson.title}</strong><p>{lesson.detail}</p></div><small>{lesson.time}</small><ChevronRight size={17}/></Link>)}</div></div></div>}
        {activeApp === 'contacto' && <div className="os-inner os-contact"><div className="os-section-number">03 / CONTACTO</div><h2>Hagamos algo <em>juntos.</em></h2><p>¿Quieres desarrollar un flujo de contenido con IA o explorar una colaboración? Cuéntame qué estás creando.</p><a className="os-mail-link" href="mailto:hello@andresgomez.store">hello@andresgomez.store <ArrowUpRight size={24}/></a><div className="os-contact-bottom"><div><span>NEWSLETTER</span><strong>Ideas para crear contenido con IA en tu correo.</strong><p>Prompts, procesos y recursos que puedes probar en tu próxima publicación.</p></div><form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={subscribe}><input type="hidden" name="form-name" value="newsletter"/><input className="os-honeypot" name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true"/><label htmlFor="os-email">Tu correo electrónico</label><div className="os-email-field"><input id="os-email" type="email" name="email" required autoComplete="email" placeholder="tu@email.com" value={email} onChange={event => setEmail(event.target.value)}/><button type="submit" disabled={newsletterStatus === 'submitting'} aria-label="Suscribirme">{newsletterStatus === 'done' ? <Check size={18}/> : <ArrowRight size={18}/>}</button></div>{newsletterStatus === 'done' && <output>Listo. Te avisaré cuando haya algo nuevo.</output>}{newsletterStatus === 'error' && <small role="alert">No pudimos completar la suscripción. Inténtalo de nuevo.</small>}</form></div></div>}
      </div>
    </section>}
    <nav className="os-dock" aria-label="Aplicaciones"><div className="os-dock-apps">{apps.map(app => { const Icon = app.icon; return <button key={app.id} className={`os-dock-button ${activeApp === app.id && openApps.length ? 'is-active' : ''}`} onClick={() => openApp(app.id)} aria-label={`Abrir ${app.label}`} title={app.label}><span className={`os-app-icon ${app.color}`}><Icon size={23} strokeWidth={1.8}/></span><i/></button>; })}<span className="os-dock-divider"/><Link href="/recursos" className="os-dock-button" aria-label="Abrir recursos" title="Recursos"><span className="os-app-icon blue"><FolderOpen size={23} strokeWidth={1.8}/></span></Link></div></nav><div className="os-corner-note">DISEÑADO PARA EXPLORAR <span>✳</span></div>
  </main>;
}

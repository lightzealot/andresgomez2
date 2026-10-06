'use client';
/* oxlint-disable next/no-html-link-for-pages -- Native resource navigation works reliably on mobile. */

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDownRight, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronRight, Clock3, FolderOpen, Mail, Minus, Monitor, Sparkles, UserRound, X } from 'lucide-react';
import './os.css';

type AppId = 'inicio' | 'sobre-mi' | 'aprender' | 'contacto';
const apps = [
  { id: 'inicio', label: 'Inicio', icon: Monitor, color: 'mint' },
  { id: 'sobre-mi', label: 'Enfoque', icon: UserRound, color: 'lilac' },
  { id: 'aprender', label: 'Soluciones', icon: BookOpen, color: 'sun' },
  { id: 'contacto', label: 'Contacto', icon: Mail, color: 'sky' },
] as const;
const solutions = [
  { number: '01', title: 'Automatización de procesos', detail: 'Conecta tareas, documentos y herramientas para reducir trabajo manual.', time: 'Operación' },
  { number: '02', title: 'Asistentes para tu equipo', detail: 'Facilita consultas sobre documentación y conocimiento interno.', time: 'Equipos' },
  { number: '03', title: 'IA para ventas y servicio', detail: 'Apoya el seguimiento comercial y la preparación de respuestas.', time: 'Clientes' },
  { number: '04', title: 'Análisis y gestión de información', detail: 'Organiza datos y prepara reportes con revisión de tu equipo.', time: 'Datos' },
  { number: '05', title: 'Formación y adopción de IA', detail: 'Capacita al equipo con casos de uso de su trabajo cotidiano.', time: 'Adopción' },
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
    <header className="os-menubar"><button className="os-menu-brand" onClick={() => openApp('inicio')} aria-label="Abrir inicio"><span className="os-mark">A<span>✳</span></span><strong>AndresGomez[OS]</strong></button><div className="os-menubar-right"><span className="os-availability"><i/> IA aplicada a tu negocio</span><span className="os-time"><Clock3 size={14}/>{time}</span></div></header>
    <div className="os-desktop-copy" aria-hidden="true"><span>INTELIGENCIA ARTIFICIAL PARA EMPRESAS</span><strong>Empresas que<br/>avanzan con IA<span>.</span></strong><small>ANDRÉS GÓMEZ · IA APLICADA A NEGOCIOS</small></div>
    {openApps.length > 0 && <section ref={windowRef} className="os-window" aria-label={`Ventana: ${current?.label}`} key={activeApp} style={{ translate: `${windowPositions[activeApp].x}px ${windowPositions[activeApp].y}px` }}>
      <div className="os-window-bar" onPointerDown={startDrag} onPointerMove={dragWindow} onPointerUp={stopDrag} onPointerCancel={stopDrag} onDoubleClick={() => setWindowPositions(current => ({ ...current, [activeApp]: { x: 0, y: 0 } }))}><div className="os-window-controls"><button onClick={() => closeApp(activeApp)} aria-label="Cerrar ventana" className="os-control close"><X size={11}/></button><button onClick={() => minimizeApp(activeApp)} aria-label="Minimizar ventana" className="os-control minimize"><Minus size={11}/></button><span className="os-control maximize" aria-hidden="true"/></div><span className="os-window-title">{current?.icon && <current.icon size={14}/>} {current?.label} — AndresGomez[OS]</span><span className="os-window-hint">ARRASTRA PARA MOVER</span></div>
      <div className="os-window-body">
        {activeApp === 'inicio' && <div className="os-home"><div className="os-home-main"><div className="os-kicker"><span className="os-kicker-line"/> IA PARA EMPRESAS</div><h1>Haz crecer tu empresa <em>con IA.</em></h1><p>Transforma tareas repetitivas en procesos eficientes. Integra asistentes, automatización y herramientas de IA en el trabajo diario de tu equipo.</p><div className="os-home-actions"><button className="os-primary" onClick={() => openApp('contacto')}>Hablemos de tu empresa <ArrowUpRight size={17}/></button><button className="os-text-button" onClick={() => openApp('aprender')}>Ver soluciones <ArrowRight size={16}/></button></div><div className="os-home-footer"><span>ESTRATEGIA / INTEGRACIÓN / ADOPCIÓN</span><span>EXPLORA LAS SOLUCIONES <ArrowDownRight size={17}/></span></div></div><div className="os-home-side"><div className="os-profile-frame"><Image src="/4c-contraste.png" alt="Retrato de Andrés Gómez" fill sizes="(max-width: 760px) 100vw, 400px" unoptimized/><span className="os-profile-badge">ANDRÉS GÓMEZ<br/>IA PARA EMPRESAS</span></div><div className="os-side-caption"><span>PARA TU NEGOCIO</span><strong>Simplificar.<br/>Integrar.<br/>Avanzar.</strong></div></div></div>}
        {activeApp === 'sobre-mi' && <div className="os-inner os-about"><div className="os-section-number">01 / ENFOQUE</div><div className="os-about-grid"><div><h2>IA que encaja <em>en tu operación.</em></h2><p className="os-large-copy">Soy Andrés Gómez. Ayudo a empresas a identificar dónde la IA puede aportar valor y a convertir esas oportunidades en procesos que su equipo pueda usar.</p><p>El punto de partida es tu negocio: sus tareas, sus datos y sus prioridades. Definimos un caso de uso, lo validamos con un piloto y acompañamos al equipo en su adopción, con criterios de acceso y revisión humana.</p><button className="os-inline-link" onClick={() => openApp('contacto')}>Revisemos tu caso <ArrowUpRight size={17}/></button></div><div className="os-about-card"><Image src="/4c-contraste.png" alt="Andrés Gómez" fill sizes="(max-width: 760px) 100vw, 400px" unoptimized/><div><span>ANDRÉS GÓMEZ</span><strong>Tecnología con criterio de negocio.</strong></div></div></div><div className="os-capabilities"><span>ÁREAS DE TRABAJO</span><div><span>Estrategia de IA</span><span>Asistentes internos</span><span>Formación de equipos</span><span>Automatización</span></div></div></div>}
        {activeApp === 'aprender' && <div className="os-inner"><div className="os-section-number">02 / SOLUCIONES</div><div className="os-section-heading"><h2>IA para el trabajo real<span className="os-period">.</span></h2><p>Soluciones que parten de una necesidad concreta de tu empresa.</p></div><div className="os-learning-layout"><div className="os-learning-intro"><Sparkles size={24}/><strong>Empieza con un proceso</strong><p>Identificamos una tarea, definimos cómo medir la mejora y probamos un piloto antes de ampliar su alcance.</p><button className="os-inline-link" onClick={() => openApp('contacto')}>Evaluar mi caso <ArrowUpRight size={16}/></button></div><div className="os-lessons">{solutions.map(solution => <button type="button" className="os-lesson" key={solution.number} onClick={() => openApp('contacto')} aria-label={`Consultar sobre ${solution.title}`}><span>{solution.number}</span><div><strong>{solution.title}</strong><p>{solution.detail}</p></div><small>{solution.time}</small><ChevronRight size={17}/></button>)}</div></div></div>}
        {activeApp === 'contacto' && <div className="os-inner os-contact"><div className="os-section-number">03 / CONTACTO</div><h2>Hablemos de <em>tu empresa.</em></h2><p>Cuéntame qué proceso quieres mejorar, qué herramientas usa tu equipo y qué resultado esperas. Ese es el punto de partida para evaluar una solución con IA.</p><a className="os-mail-link" href="mailto:hello@andresgomez.store?subject=IA%20para%20mi%20empresa">hello@andresgomez.store <ArrowUpRight size={24}/></a><div className="os-contact-bottom"><div><span>NEWSLETTER</span><strong>IA aplicada a empresas, en tu correo.</strong><p>Ideas y recursos para mejorar procesos y acompañar la adopción de IA en tu equipo.</p></div><form name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={subscribe}><input type="hidden" name="form-name" value="newsletter"/><input className="os-honeypot" name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true"/><label htmlFor="os-email">Tu correo electrónico</label><div className="os-email-field"><input id="os-email" type="email" name="email" required autoComplete="email" placeholder="tu@empresa.com" value={email} onChange={event => setEmail(event.target.value)}/><button type="submit" disabled={newsletterStatus === 'submitting'} aria-label="Suscribirme">{newsletterStatus === 'done' ? <Check size={18}/> : <ArrowRight size={18}/>}</button></div>{newsletterStatus === 'done' && <output>Listo. Te avisaré cuando haya algo nuevo.</output>}{newsletterStatus === 'error' && <small role="alert">No pudimos completar la suscripción. Inténtalo de nuevo.</small>}</form></div></div>}
      </div>
    </section>}
    <nav className="os-dock" aria-label="Aplicaciones"><div className="os-dock-apps">{apps.map(app => { const Icon = app.icon; return <button key={app.id} className={`os-dock-button ${activeApp === app.id && openApps.length ? 'is-active' : ''}`} onClick={() => openApp(app.id)} aria-label={`Abrir ${app.label}`} title={app.label}><span className={`os-app-icon ${app.color}`}><Icon size={23} strokeWidth={1.8}/></span><i/></button>; })}<span className="os-dock-divider"/><a href="/recursos" className="os-dock-button" aria-label="Abrir recursos" title="Recursos"><span className="os-app-icon blue"><FolderOpen size={23} strokeWidth={1.8}/></span></a></div></nav><div className="os-corner-note">DISEÑADO PARA AVANZAR <span>✳</span></div>
  </main>;
}

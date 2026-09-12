'use client';
import { ArrowUp, BriefcaseBusiness, ExternalLink, Folder, Mail, Menu, MessageSquare, Moon, PanelLeftClose, Search, Sun, UserRound, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Switch } from '@/components/ui/switch';

type Section = 'inicio' | 'proyectos' | 'sobre-mi' | 'contacto';
const nav = [
  { id: 'inicio', label: 'Inicio', icon: MessageSquare },
  { id: 'proyectos', label: 'Proyectos', icon: BriefcaseBusiness },
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound },
] as const;
const projects = [
  { number: '01', title: 'IA desde cero / Empieza aquí', description: 'Qué es la inteligencia artificial, cómo funciona un modelo de lenguaje y qué puedes hacer hoy aunque no tengas experiencia técnica.', tags: ['Principiantes', 'Fundamentos', '15 min'] },
  { number: '02', title: 'Prompts que sí funcionan', description: 'Una fórmula sencilla para dar contexto, definir una tarea y pedir un resultado útil. Incluye ejemplos para trabajo, estudio y creación.', tags: ['ChatGPT', 'Prompts', 'Práctica'] },
  { number: '03', title: 'Tu primera automatización', description: 'Convierte una tarea repetitiva en un flujo con IA: recibe información, la organiza y genera una respuesta lista para revisar.', tags: ['Automatización', 'Sin código', 'Paso a paso'] },
  { number: '04', title: 'Herramientas IA gratis', description: 'Una selección pequeña y explicada por uso: investigar, escribir, crear imágenes, resumir documentos y producir contenido.', tags: ['Herramientas', 'Gratis', 'Guía'] },
  { number: '05', title: 'Crea una web con un agente', description: 'De una idea escrita en lenguaje natural a una página funcional, entendiendo cómo pedir cambios y conservar el control.', tags: ['Agentes', 'Web', 'Proyecto real'] },
];

const bootSteps = [
  'Iniciando núcleo de AndresgomezOS',
  'Conectando modelos de lenguaje',
  'Montando memoria y contexto',
  'Cargando agentes especializados',
  'Activando skills de investigación',
  'Preparando automatizaciones',
  'Sistema listo',
];

export default function Home() {
  const [active, setActive] = useState<Section>('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioMenu, setPortfolioMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bootStep, setBootStep] = useState(0);
  const [booting, setBooting] = useState(true);
  const goTo = (section: Section) => { setActive(section); setMobileOpen(false); document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); };

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reducedMotion ? 90 : 650;
    const timer = window.setInterval(() => {
      setBootStep(current => {
        if (current >= bootSteps.length - 1) {
          window.clearInterval(timer);
          window.setTimeout(() => setBooting(false), reducedMotion ? 80 : 760);
          return current;
        }
        return current + 1;
      });
    }, delay);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem('andresgomezos-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(saved ? saved === 'dark' : prefersDark);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('andresgomezos-theme', darkMode ? 'dark' : 'light');
  }, [darkMode, themeReady]);

  useEffect(() => {
    if (!booting) return;
    const video = videoRef.current;
    if (!video) return;
    const playVideo = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      void video.play().catch(() => undefined);
    };
    const resumeVisibleVideo = () => { if (document.visibilityState === 'visible') playVideo(); };
    video.addEventListener('canplay', playVideo);
    document.addEventListener('visibilitychange', resumeVisibleVideo);
    playVideo();
    return () => {
      video.removeEventListener('canplay', playVideo);
      document.removeEventListener('visibilitychange', resumeVisibleVideo);
    };
  }, [booting]);

  return <>{booting && <div className="boot-screen" role="status" aria-live="polite">
    <div className="boot-video-wrap" aria-hidden="true"><video ref={videoRef} className="boot-video" src="/robot.mp4" autoPlay muted loop playsInline preload="auto" disablePictureInPicture/></div>
    <div className="boot-terminal">
      <div className="boot-brand"><span className="boot-logo"><img src="/andresgomezos-logo.png" alt=""/></span><div><strong>AndresGomezOS</strong><span>AI creative system · build 2026.09</span></div></div>
      <div className="boot-log">
        {bootSteps.slice(0, bootStep + 1).map((step, index) => <div key={step} className={index === bootStep ? 'current' : 'complete'}><span>{index === bootStep && index < bootSteps.length - 1 ? '›' : '✓'}</span><p>{step}</p><small>{index < bootStep || bootStep === bootSteps.length - 1 ? 'OK' : '...'}</small></div>)}
      </div>
      <div className="boot-progress"><span style={{ width: `${((bootStep + 1) / bootSteps.length) * 100}%` }}/></div>
      <div className="boot-footer"><span>{Math.round(((bootStep + 1) / bootSteps.length) * 100)}%</span><button onClick={() => setBooting(false)}>Omitir arranque</button></div>
    </div>
  </div>}
  <main className="portfolio-shell">
    <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Abrir menú"><Menu size={20}/></button>
    <aside className={`sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-top">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio"><span className="brand-mark"><img src="/andresgomezos-logo.png" alt=""/></span><span>AndresGomezOS</span></button>
        <button className="icon-button desktop-collapse" aria-label="Ocultar barra lateral"><PanelLeftClose size={18}/></button>
        <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><X size={19}/></button>
      </div>
      <div className="system-search"><Search size={15}/><span>Buscar</span><kbd>⌘ K</kbd></div>
      <nav aria-label="Navegación principal"><p className="nav-label">Explorar</p>
        {nav.map(item => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => goTo(item.id)}><Icon size={17}/><span>{item.label}</span></button>; })}
      </nav>
      <div className="recent"><p className="nav-label">Proyectos recientes</p><button onClick={() => goTo('proyectos')}><Folder size={15}/> IA desde cero</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Prompts que funcionan</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Primera automatización</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Herramientas IA gratis</button></div>
      <div className="sidebar-footer"><span className="profile-avatar"><img src="/andres-gomez-avatar.png" alt="Retrato de Andrés Gómez"/></span><div><strong>Andrés Gómez</strong><span>Aprende IA sin complicarte</span></div></div>
    </aside>
    {mobileOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}/>} 
    <section className="conversation">
      <header className="topbar"><div className="window-controls" aria-hidden="true"><span/><span/><span/></div><button className="model-selector" onClick={() => { setMobileOpen(true); setPortfolioMenu(open => !open); }} aria-expanded={portfolioMenu} aria-label="Abrir menú de portfolio.ai">portfolio.ai <span>⌄</span></button><div className="topbar-actions"><label className="theme-toggle" title={darkMode ? 'Usar tema claro' : 'Usar tema oscuro'}><Sun size={14}/><Switch size="sm" checked={darkMode} onCheckedChange={setDarkMode} aria-label="Alternar tema claro y oscuro"/><Moon size={14}/></label><span className="system-time">Sistema en línea</span><button className="contact-pill" onClick={() => goTo('contacto')}>Hablemos</button></div></header>
      {portfolioMenu && <div className="portfolio-menu">{nav.map(item => { const Icon = item.icon; return <button key={item.id} onClick={() => { goTo(item.id); setPortfolioMenu(false); }}><Icon size={16}/><span>{item.label}</span></button>; })}<button onClick={() => { goTo('contacto'); setPortfolioMenu(false); }}><Mail size={16}/><span>Contacto</span></button></div>}
      <div className="thread">
        <section id="inicio" className="welcome section-block"><div className="assistant-avatar profile-photo">AG</div><div><p className="eyebrow">Andrés Gómez / creador digital</p><h1>Aprende inteligencia artificial sin complicarte.</h1><p className="lead">Si estás comenzando, aquí aprenderás a conversar con una IA, convertir tus ideas en imágenes y automatizar tareas que hoy haces manualmente.</p><div className="starter-map"><article><span>01</span><div><strong>Habla con la IA</strong><p>Escribe instrucciones claras y consigue respuestas que puedas usar.</p></div></article><article><span>02</span><div><strong>Crea con tus ideas</strong><p>Genera textos, imágenes y conceptos aunque no tengas experiencia técnica.</p></div></article><article><span>03</span><div><strong>Ahorra tiempo</strong><p>Conecta herramientas y construye tu primera automatización.</p></div></article></div><div className="profile-topics"><span>🧠 Prompts</span><span>🎨 Imágenes</span><span>⚙ Automatización</span><span>🤖 Agentes</span></div><div className="system-status"><span>RUTA ACTIVA</span><strong>De cero a crear con IA</strong></div><div className="quick-actions"><button onClick={() => goTo('proyectos')}>Empezar desde cero <ArrowUp size={15}/></button><button onClick={() => goTo('sobre-mi')}>Conoce a Andrés</button></div></div></section>
        <section id="proyectos" className="section-block response-block"><div className="user-prompt">~/proyectos/ia-para-empezar</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><Folder size={15}/></div><div className="response-content"><h2>Aprende IA construyendo algo útil</h2><p>Una ruta práctica: primero entiendes lo esencial, luego pruebas herramientas y terminas creando tu propio sistema.</p><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-head"><span>{project.number}</span><ExternalLink size={16}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></div></section>
        <section id="sobre-mi" className="section-block response-block"><div className="user-prompt">~/usuario/acerca-de</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><UserRound size={15}/></div><div className="response-content prose"><h2>Hola, soy Andrés Gómez.</h2><p>Soy creador digital y enseño inteligencia artificial para principiantes. Explico prompts, generación de imágenes, automatización y agentes con ejemplos que puedes probar.</p><p>AndresgomezOS reúne mis guías y proyectos para ayudarte a empezar desde cero y crear con IA.</p></div></div></section>
        <section id="contacto" className="section-block response-block contact-section"><div className="user-prompt">Tengo una idea. ¿Hablamos?</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><Mail size={15}/></div><div className="response-content"><h2>Claro. Empecemos por una conversación.</h2><p>Cuéntame qué estás construyendo, dónde estás atascado o qué te gustaría hacer posible.</p><a className="email-link" href="mailto:hello@andresgomez.store"><Mail size={17}/> hello@andresgomez.store</a></div></div></section>
      </div>
      <footer className="os-dock"><span>AndresgomezOS</span><span>Portfolio build 2026.09</span></footer>
    </section>
  </main></>;
}

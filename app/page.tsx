'use client';
import { ArrowRight, ArrowUp, BriefcaseBusiness, ExternalLink, Folder, Library, Mail, Menu, MessageSquare, Moon, PanelLeftClose, Sun, UserRound, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Section = 'inicio' | 'sobre-mi' | 'proyectos' | 'labs' | 'contacto';
const nav = [
  { id: 'inicio', label: 'Inicio', icon: MessageSquare },
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound },
  { id: 'proyectos', label: 'Proyectos', icon: BriefcaseBusiness },
] as const;
const projects = [
  { number: '01', title: 'IA desde cero', description: 'Entiende qué puede hacer una IA generativa y cómo comenzar sin conocimientos técnicos.', tags: ['Principiantes', 'Fundamentos', '15 min'], lessons: ['Qué diferencia una IA generativa de un buscador tradicional.', 'Cómo funcionan las instrucciones, el contexto y las respuestas.', 'Qué información conviene verificar antes de utilizarla.'], practice: 'Pídele que explique un tema que conozcas en tres niveles: para un niño, para un estudiante y para un profesional.', result: 'Sabrás elegir una tarea adecuada para IA y evaluar mejor su respuesta.' },
  { number: '02', title: 'Prompts que funcionan', description: 'Aprende una estructura sencilla para obtener respuestas específicas y fáciles de utilizar.', tags: ['ChatGPT', 'Prompts', 'Práctica'], lessons: ['Define el rol o punto de vista que necesitas.', 'Explica el objetivo, añade contexto y limita el formato.', 'Refina el resultado con preguntas de seguimiento.'], practice: 'Usa esta plantilla: Ayúdame a [objetivo]. Contexto: [datos]. Entrega: [formato]. Ten en cuenta: [límites].', result: 'Tendrás una plantilla reutilizable para trabajo, estudio y proyectos personales.' },
  { number: '03', title: 'Tu primera automatización', description: 'Transforma una tarea repetitiva en un flujo que organiza información y prepara una respuesta.', tags: ['Automatización', 'Sin código', 'Paso a paso'], lessons: ['Detecta tareas repetitivas basadas en reglas.', 'Separa el flujo en entrada, procesamiento y resultado.', 'Añade una revisión humana antes de publicar o enviar.'], practice: 'Crea un flujo que reciba notas desordenadas, extraiga tareas y devuelva una lista con responsable y fecha.', result: 'Diseñarás una automatización pequeña que puedas probar antes de conectarla a otras herramientas.' },
  { number: '04', title: 'Herramientas IA gratis', description: 'Escoge una herramienta según tu tarea sin instalar una colección de aplicaciones que no utilizarás.', tags: ['Herramientas', 'Gratis', 'Guía'], lessons: ['ChatGPT o Gemini para conversar, resumir y organizar.', 'NotebookLM para estudiar documentos y fuentes propias.', 'Canva o generadores de imagen para piezas visuales.'], practice: 'Elige una sola tarea real y resuélvela con dos herramientas. Compara tiempo, facilidad y calidad.', result: 'Tendrás un conjunto inicial de herramientas elegido por utilidad y no por popularidad.' },
  { number: '05', title: 'Crea una web con un agente', description: 'Convierte una idea escrita en lenguaje natural en una primera página funcional.', tags: ['Agentes', 'Web', 'Proyecto real'], lessons: ['Describe público, objetivo y contenido antes del estilo.', 'Construye una primera versión pequeña y navegable.', 'Pide cambios concretos y comprueba cada resultado.'], practice: 'Solicita una página personal con presentación, tres proyectos y contacto. Después mejora una sección por vez.', result: 'Publicarás una primera web y aprenderás a dirigir al agente durante las revisiones.' },
];

const bootSteps = [
  'Inicializando núcleo',
  'Conectando inteligencia',
  'Cargando conocimiento',
  'Activando creación',
  'Montando automatizaciones',
];

export default function Home() {
  const [active, setActive] = useState<Section>('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [portfolioMenu, setPortfolioMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [bootStep, setBootStep] = useState(0);
  const [booting, setBooting] = useState(false);
  const [introChecked, setIntroChecked] = useState(false);
  const [bootLeaving, setBootLeaving] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');
  const [openLabs, setOpenLabs] = useState<string[]>(['resource-01']);
  const goTo = (section: Section) => { setActive(section); setMobileOpen(false); document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); };
  const openLab = (number: string) => {
    const resourceId = `resource-${number}`;
    setOpenLabs([resourceId]);
    setActive('labs');
    setMobileOpen(false);
    window.setTimeout(() => document.getElementById(resourceId)?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 80);
  };

  useEffect(() => {
    const introSeen = window.sessionStorage.getItem('andresgomez-intro-seen') === 'true';
    if (!introSeen) {
      window.sessionStorage.setItem('andresgomez-intro-seen', 'true');
      setBooting(true);
    }
    setIntroChecked(true);
  }, []);

  useEffect(() => {
    if (!booting) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reducedMotion ? 90 : 650;
    const timer = window.setInterval(() => {
      setBootStep(current => {
        if (current >= bootSteps.length - 1) {
          window.clearInterval(timer);
          window.setTimeout(() => {
            setBootLeaving(true);
            window.setTimeout(() => setBooting(false), reducedMotion ? 80 : 700);
          }, reducedMotion ? 80 : 760);
          return current;
        }
        return current + 1;
      });
    }, delay);
    return () => window.clearInterval(timer);
  }, [booting]);

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

  useEffect(() => {
    if (!introChecked) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.response-block'));
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
    };
  }, [introChecked]);

  const closeBoot = () => {
    setBootLeaving(true);
    window.setTimeout(() => setBooting(false), 700);
  };

  const subscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNewsletterStatus('submitting');
    setNewsletterMessage('');

    try {
      const response = await fetch('/newsletter-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email: newsletterEmail,
          'bot-field': '',
        }).toString(),
      });
      if (!response.ok) throw new Error('No pudimos completar la suscripción.');
      setSubscribed(true);
      setNewsletterMessage('Listo. Te avisaré cuando haya algo nuevo.');
      setNewsletterStatus('idle');
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage(error instanceof Error ? error.message : 'No pudimos completar la suscripción.');
    }
  };

  if (!introChecked) return null;

  return <>{booting && <div className={`boot-screen ${bootLeaving ? 'is-leaving' : ''}`} role="status" aria-live="polite">
    <div className="boot-video-wrap" aria-hidden="true"><video ref={videoRef} className="boot-video" src="/ia2.mp4" autoPlay muted playsInline preload="auto" disablePictureInPicture/></div>
    <div className="boot-terminal">
      <div className="boot-brand"><span className="boot-logo"><img src="/andresgomezos-logo.png" alt=""/></span><div><strong>AndresGomez[OS]</strong><span>AI creative system · build 2026.09</span></div></div>
      <div className="boot-log">
        {bootSteps.slice(0, bootStep + 1).map((step, index) => <div key={step} className={index === bootStep ? 'current' : 'complete'}><span>{index === bootStep && index < bootSteps.length - 1 ? '[›]' : '[✓]'}</span><p>{step}</p><small>{index < bootStep || bootStep === bootSteps.length - 1 ? 'OK' : '...'}</small></div>)}
      </div>
      <div className="boot-progress"><span style={{ width: `${((bootStep + 1) / bootSteps.length) * 100}%` }}/></div>
      <div className="boot-footer"><span>{Math.round(((bootStep + 1) / bootSteps.length) * 100)}%</span><button onClick={closeBoot}>Omitir arranque</button></div>
    </div>
  </div>}
  <main className={`portfolio-shell ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
    <button className="mobile-menu" onClick={() => { setSidebarCollapsed(false); setMobileOpen(true); }} aria-label="Abrir menú"><Menu size={20}/></button>
      <aside className={`sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-top">
        <button className="brand" onClick={() => { setSidebarCollapsed(false); goTo('inicio'); }} aria-label="Abrir barra lateral"><span className="brand-mark"><img src="/andresgomezos-logo.png" alt=""/></span><span className="brand-name">AndresGomez[OS]</span><span className="sidebar-tooltip" role="tooltip">Abrir barra lateral</span></button>
        <button className="icon-button desktop-collapse" onClick={() => setSidebarCollapsed(true)} aria-label="Ocultar barra lateral"><PanelLeftClose size={18}/></button>
        <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><X size={19}/></button>
      </div>
      <nav aria-label="Navegación principal"><p className="nav-label">Explorar</p>
        {nav.map(item => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => goTo(item.id)}><Icon size={17}/><span>{item.label}</span></button>; })}
        <a className="nav-item" href="/recursos"><Library size={17}/><span>Recursos</span></a>
      </nav>
      <div className="recent"><p className="nav-label">Labs | Playground</p>{projects.map(project => <button key={project.number} className={openLabs.includes(`resource-${project.number}`) ? 'active' : ''} onClick={() => openLab(project.number)}><Folder size={15}/>{project.title}</button>)}</div>
      <form className="newsletter" name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={subscribe}><input type="hidden" name="form-name" value="newsletter"/><input className="newsletter-honeypot" name="bot-field" tabIndex={-1} autoComplete="off" aria-hidden="true"/><div className="newsletter-title"><Mail size={15}/><strong>Newsletter</strong></div>{subscribed ? <p className="newsletter-success" role="status">{newsletterMessage}</p> : <><p>Una idea práctica de IA, sin llenar tu bandeja.</p><div className="newsletter-field"><input type="email" name="email" required autoComplete="email" value={newsletterEmail} onChange={event => { setNewsletterEmail(event.target.value); setNewsletterStatus('idle'); setNewsletterMessage(''); }} placeholder="tu@email.com" aria-label="Correo para el newsletter" aria-describedby={newsletterMessage ? 'newsletter-message' : undefined}/><button type="submit" disabled={newsletterStatus === 'submitting'} aria-label={newsletterStatus === 'submitting' ? 'Guardando suscripción' : 'Suscribirme'}><ArrowUp size={15}/></button></div>{newsletterMessage && <p id="newsletter-message" className="newsletter-error" role="alert">{newsletterMessage}</p>}</>}</form>
      <div className="sidebar-footer"><span className="profile-avatar"><img src="/andres-gomez-avatar.png" alt="Retrato de Andrés Gómez"/></span><div><strong>Andrés Gómez</strong><span>Aprende IA sin complicarte</span></div></div>
    </aside>
    {mobileOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}/>} 
    <section className="conversation">
      <header className="topbar"><div className="window-controls" aria-hidden="true"><span/><span/><span/></div><button className="model-selector" onClick={() => { setSidebarCollapsed(false); setMobileOpen(true); setPortfolioMenu(open => !open); }} aria-expanded={portfolioMenu} aria-label="Abrir menú de portfolio.ai">portfolio.ai <span>⌄</span></button><div className="topbar-actions"><label className="theme-toggle" title={darkMode ? 'Usar tema claro' : 'Usar tema oscuro'}><Sun size={14}/><Switch size="sm" checked={darkMode} onCheckedChange={setDarkMode} aria-label="Alternar tema claro y oscuro"/><Moon size={14}/></label><span className="system-time">Sistema en línea</span><button className="contact-pill" onClick={() => goTo('contacto')}>Hablemos</button></div></header>
      {portfolioMenu && <div className="portfolio-menu">{nav.map(item => { const Icon = item.icon; return <button key={item.id} onClick={() => { goTo(item.id); setPortfolioMenu(false); }}><Icon size={16}/><span>{item.label}</span></button>; })}<a href="/recursos"><Library size={16}/><span>Recursos</span></a><button onClick={() => { goTo('contacto'); setPortfolioMenu(false); }}><Mail size={16}/><span>Contacto</span></button></div>}
      <div className="thread">
        <section id="inicio" className="welcome section-block"><div className="assistant-avatar profile-photo">AG</div><div><p className="eyebrow">Andrés Gómez / creador digital</p><h1>Aprende inteligencia artificial sin complicarte.</h1><p className="lead">Si estás comenzando, aquí aprenderás a conversar con una IA, convertir tus ideas en imágenes y automatizar tareas que hoy haces manualmente.</p><div className="starter-map"><article><span>01</span><div><strong>Habla con la IA</strong><p>Escribe instrucciones claras y consigue respuestas que puedas usar.</p></div></article><article><span>02</span><div><strong>Crea con tus ideas</strong><p>Genera textos, imágenes y conceptos aunque no tengas experiencia técnica.</p></div></article><article><span>03</span><div><strong>Ahorra tiempo</strong><p>Conecta herramientas y construye tu primera automatización.</p></div></article></div><div className="profile-topics"><span>🧠 Prompts</span><span>🎨 Imágenes</span><span>⚙ Automatización</span><span>🤖 Agentes</span></div><div className="system-status"><span>RUTA ACTIVA</span><strong>De cero a crear con IA</strong></div><div className="quick-actions"><button onClick={() => goTo('proyectos')}>Empezar desde cero <ArrowUp size={15}/></button><button onClick={() => goTo('sobre-mi')}>Conoce a Andrés</button></div></div></section>
        <section id="sobre-mi" className="section-block response-block"><div className="user-prompt">~/usuario/acerca-de</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><UserRound size={15}/></div><div className="response-content prose"><h2>Hola, soy Andrés Gómez.</h2><p>Soy creador digital y enseño inteligencia artificial para principiantes. Explico prompts, generación de imágenes, automatización y agentes con ejemplos que puedes probar.</p><p>AndresGomez[OS] reúne mis guías y proyectos para ayudarte a empezar desde cero y crear con IA.</p></div></div></section>
        <section id="proyectos" className="section-block response-block"><div className="user-prompt">~/portfolio/proyectos</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><BriefcaseBusiness size={15}/></div><div className="response-content"><h2>Proyectos</h2><p>Sistemas y experiencias digitales creadas para convertir ideas en herramientas útiles.</p><div className="projects-grid"><article className="project-card"><div className="project-head"><span>01</span><span>Sistema creativo</span></div><h3>AndresGomez[OS]</h3><p>Un espacio personal para aprender, experimentar y construir con inteligencia artificial.</p><div className="tags"><span>IA</span><span>Diseño</span><span>Web</span></div></article><article className="project-card"><div className="project-head"><span>02</span><span>Portal de cliente</span></div><h3>Biblioteca de recursos</h3><p>Guías y materiales prácticos reunidos en un lugar sencillo de consultar y compartir.</p><div className="tags"><span>Recursos</span><span>Educación</span></div></article></div></div></div></section>
        <section id="labs" className="section-block response-block"><div className="user-prompt">~/labs/playground</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><Folder size={15}/></div><div className="response-content"><h2>Labs | Playground</h2><p>Abre un ejercicio, completa la práctica y continúa con el siguiente cuando puedas explicar el resultado con tus propias palabras.</p><Accordion className="resource-accordion" value={openLabs} onValueChange={setOpenLabs}>{projects.map((project, index) => { const nextProject = projects[index + 1]; return <AccordionItem id={`resource-${project.number}`} key={project.number} value={`resource-${project.number}`}><AccordionTrigger><span className="resource-trigger"><small>{project.number}</small><span><strong>{project.title}</strong><em>{project.description}</em></span></span></AccordionTrigger><AccordionContent><div className="resource-content"><div><h3>Qué aprenderás</h3><ul>{project.lessons.map(lesson => <li key={lesson}>{lesson}</li>)}</ul></div><div className="practice-box"><span>PRÁCTICA</span><p>{project.practice}</p></div><div className="resource-result"><span>AL TERMINAR</span><p>{project.result}</p></div><div className="resource-footer"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{nextProject && <button className="next-resource" onClick={() => openLab(nextProject.number)}>Continuar: {nextProject.title}<ArrowRight size={14}/></button>}</div></div></AccordionContent></AccordionItem>; })}</Accordion></div></div></section>
        <section id="contacto" className="section-block response-block contact-section"><div className="user-prompt">Tengo una idea. ¿Hablamos?</div><div className="assistant-response"><div className="assistant-avatar section-avatar"><Mail size={15}/></div><div className="response-content"><h2>Claro. Empecemos por una conversación.</h2><p>Cuéntame qué estás construyendo, dónde estás atascado o qué te gustaría hacer posible.</p><a className="email-link" href="mailto:hello@andresgomez.store"><Mail size={17}/> hello@andresgomez.store</a></div></div></section>
      </div>
      <footer className="os-dock"><span>AndresGomez[OS]</span><span>Portfolio build 2026.09</span></footer>
    </section>
  </main></>;
}

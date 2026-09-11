'use client';
import { ArrowUp, BriefcaseBusiness, Code2, ExternalLink, Folder, Mail, Menu, MessageSquare, PanelLeftClose, Search, Sparkles, UserRound, X } from 'lucide-react';
import { useState } from 'react';

type Section = 'inicio' | 'proyectos' | 'servicios' | 'sobre-mi' | 'contacto';
const nav = [
  { id: 'inicio', label: 'Inicio', icon: MessageSquare },
  { id: 'proyectos', label: 'Proyectos', icon: BriefcaseBusiness },
  { id: 'servicios', label: 'Servicios', icon: Sparkles },
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound },
] as const;
const projects = [
  { number: '01', title: 'IA desde cero / Empieza aquí', description: 'Qué es la inteligencia artificial, cómo funciona un modelo de lenguaje y qué puedes hacer hoy aunque no tengas experiencia técnica.', tags: ['Principiantes', 'Fundamentos', '15 min'] },
  { number: '02', title: 'Prompts que sí funcionan', description: 'Una fórmula sencilla para dar contexto, definir una tarea y pedir un resultado útil. Incluye ejemplos para trabajo, estudio y creación.', tags: ['ChatGPT', 'Prompts', 'Práctica'] },
  { number: '03', title: 'Tu primera automatización', description: 'Convierte una tarea repetitiva en un flujo con IA: recibe información, la organiza y genera una respuesta lista para revisar.', tags: ['Automatización', 'Sin código', 'Paso a paso'] },
  { number: '04', title: 'Herramientas IA gratis', description: 'Una selección pequeña y explicada por uso: investigar, escribir, crear imágenes, resumir documentos y producir contenido.', tags: ['Herramientas', 'Gratis', 'Guía'] },
  { number: '05', title: 'Crea una web con un agente', description: 'De una idea escrita en lenguaje natural a una página funcional, entendiendo cómo pedir cambios y conservar el control.', tags: ['Agentes', 'Web', 'Proyecto real'] },
];

export default function Home() {
  const [active, setActive] = useState<Section>('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const goTo = (section: Section) => { setActive(section); setMobileOpen(false); document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); };

  return <main className="portfolio-shell">
    <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Abrir menú"><Menu size={20}/></button>
    <aside className={`sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-top">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio"><span className="brand-mark">AG</span><span>AndresgomezOS</span></button>
        <button className="icon-button desktop-collapse" aria-label="Ocultar barra lateral"><PanelLeftClose size={18}/></button>
        <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><X size={19}/></button>
      </div>
      <div className="system-search"><Search size={15}/><span>Buscar</span><kbd>⌘ K</kbd></div>
      <nav aria-label="Navegación principal"><p className="nav-label">Explorar</p>
        {nav.map(item => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => goTo(item.id)}><Icon size={17}/><span>{item.label}</span></button>; })}
      </nav>
      <div className="recent"><p className="nav-label">Proyectos recientes</p><button onClick={() => goTo('proyectos')}><Folder size={15}/> IA desde cero</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Prompts que funcionan</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Primera automatización</button><button onClick={() => goTo('proyectos')}><Folder size={15}/> Herramientas IA gratis</button></div>
      <div className="sidebar-footer"><div className="status-dot"/><div><strong>Disponible para proyectos</strong><span>Remoto · Colombia</span></div></div>
    </aside>
    {mobileOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}/>} 
    <section className="conversation">
      <header className="topbar"><div className="window-controls" aria-hidden="true"><span/><span/><span/></div><button className="model-selector">Portafolio.exe <span>⌄</span></button><div className="topbar-actions"><span className="system-time">Sistema en línea</span><button className="contact-pill" onClick={() => goTo('contacto')}>Hablemos</button></div></header>
      <div className="thread">
        <section id="inicio" className="welcome section-block"><div className="assistant-avatar">AG</div><div><p className="eyebrow">AndresgomezOS / sesión iniciada</p><h1>Aprende inteligencia artificial desde cero, creando cosas reales.</h1><p className="lead">Guías claras sobre prompts, herramientas, automatización y agentes para pasar de “no sé por dónde empezar” a tener tu primer proyecto funcionando.</p><div className="system-status"><span>RUTA ACTIVA</span><strong>IA para principiantes</strong></div><div className="quick-actions"><button onClick={() => goTo('proyectos')}>Empezar desde cero <ArrowUp size={15}/></button><button onClick={() => goTo('servicios')}>Explorar capacidades</button></div></div></section>
        <section id="proyectos" className="section-block response-block"><div className="user-prompt">~/proyectos/ia-para-empezar</div><div className="assistant-response"><div className="assistant-avatar">AG</div><div className="response-content"><h2>Aprende IA construyendo algo útil</h2><p>Una ruta práctica y sin humo: primero entiendes lo esencial, luego pruebas herramientas y terminas creando tu propio sistema.</p><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-head"><span>{project.number}</span><ExternalLink size={16}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></div></section>
        <section id="servicios" className="section-block response-block"><div className="user-prompt">~/directorio/creadores-recomendados</div><div className="assistant-response"><div className="assistant-avatar">AG</div><div className="response-content"><h2>Creadores para aprender IA en español</h2><p>Elige según lo que quieres aprender. Cada recomendación lleva directamente a su contenido.</p><div className="services-list creator-list"><a href="https://www.youtube.com/@DotCSV" target="_blank" rel="noreferrer"><Sparkles size={18}/><div><h3>DotCSV <ExternalLink size={14}/></h3><p>Para entender cómo funciona la IA, conocer nuevos modelos y ver experimentos explicados de forma visual.</p><span>Divulgación · fundamentos · actualidad</span></div></a><a href="https://www.youtube.com/@XavierMitjana" target="_blank" rel="noreferrer"><Sparkles size={18}/><div><h3>Xavier Mitjana <ExternalLink size={14}/></h3><p>Para aprender ChatGPT y herramientas de imagen, vídeo, audio y creación de contenido mediante tutoriales.</p><span>Herramientas · creatividad · tutoriales</span></div></a><a href="https://www.youtube.com/watch?v=YI22pVuZk7M" target="_blank" rel="noreferrer"><Sparkles size={18}/><div><h3>Jon Hernández <ExternalLink size={14}/></h3><p>Para aplicar ChatGPT al trabajo, crear GPTs propios y automatizar tareas con Make paso a paso.</p><span>Productividad · GPTs · automatización</span></div></a><a href="https://www.youtube.com/@mouredev" target="_blank" rel="noreferrer"><Sparkles size={18}/><div><h3>MoureDev <ExternalLink size={14}/></h3><p>Para empezar a programar con asistentes y agentes de IA mediante cursos completos y proyectos.</p><span>Programación · agentes · cursos</span></div></a><a href="https://www.youtube.com/@midudev" target="_blank" rel="noreferrer"><Sparkles size={18}/><div><h3>midudev <ExternalLink size={14}/></h3><p>Para entender tokens, modelos, editores con IA y herramientas modernas de desarrollo.</p><span>Desarrollo web · agentes · herramientas</span></div></a></div></div></div></section>
        <section id="sobre-mi" className="section-block response-block"><div className="user-prompt">~/usuario/acerca-de</div><div className="assistant-response"><div className="assistant-avatar">AG</div><div className="response-content prose"><h2>Hola, soy Andrés Gómez.</h2><p>Creo productos digitales y comparto formas prácticas de usar inteligencia artificial en proyectos personales y profesionales.</p><p>En AndresgomezOS organizo recursos, pruebas y proyectos para que puedas aprender haciendo, incluso si apenas estás comenzando.</p></div></div></section>
        <section id="contacto" className="section-block response-block contact-section"><div className="user-prompt">Tengo una idea. ¿Hablamos?</div><div className="assistant-response"><div className="assistant-avatar">A</div><div className="response-content"><h2>Claro. Empecemos por una conversación.</h2><p>Cuéntame qué estás construyendo, dónde estás atascado o qué te gustaría hacer posible.</p><a className="email-link" href="mailto:hola@andyia.co"><Mail size={17}/> hola@andyia.co</a></div></div></section>
      </div>
      <footer className="os-dock"><span>AndresgomezOS</span><span>Portfolio build 2026.09</span></footer>
    </section>
  </main>;
}

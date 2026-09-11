'use client';
import { ArrowUp, BriefcaseBusiness, Code2, ExternalLink, Mail, Menu, MessageSquare, PanelLeftClose, Plus, Sparkles, UserRound, X } from 'lucide-react';
import { FormEvent, useState } from 'react';

type Section = 'inicio' | 'proyectos' | 'servicios' | 'sobre-mi' | 'contacto';
const nav = [
  { id: 'inicio', label: 'Inicio', icon: MessageSquare },
  { id: 'proyectos', label: 'Proyectos', icon: BriefcaseBusiness },
  { id: 'servicios', label: 'Servicios', icon: Sparkles },
  { id: 'sobre-mi', label: 'Sobre mí', icon: UserRound },
] as const;
const projects = [
  { number: '01', title: 'Pulse / Finanzas claras', description: 'Una experiencia financiera que traduce datos complejos en decisiones simples, con paneles rápidos y una interfaz sin ruido.', tags: ['Producto digital', 'UX/UI', 'Desarrollo'] },
  { number: '02', title: 'Nexo / Operaciones inteligentes', description: 'Sistema interno para automatizar tareas repetitivas y reunir el trabajo de varios equipos en un solo lugar.', tags: ['Automatización', 'IA aplicada', 'Sistemas'] },
  { number: '03', title: 'Aster / Identidad y presencia', description: 'Nueva presencia digital para una marca de servicios: narrativa, sistema visual y sitio web orientado a conversión.', tags: ['Estrategia', 'Dirección visual', 'Web'] },
];

export default function Home() {
  const [active, setActive] = useState<Section>('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const goTo = (section: Section) => { setActive(section); setMobileOpen(false); document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' }); };
  const submitPrompt = (event: FormEvent) => {
    event.preventDefault(); const value = prompt.toLowerCase();
    if (value.includes('proyecto') || value.includes('trabajo')) goTo('proyectos');
    else if (value.includes('servicio') || value.includes('ayuda')) goTo('servicios');
    else if (value.includes('contact') || value.includes('hablar')) goTo('contacto');
    else goTo('sobre-mi'); setPrompt('');
  };

  return <main className="portfolio-shell">
    <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Abrir menú"><Menu size={20}/></button>
    <aside className={`sidebar ${mobileOpen ? 'is-open' : ''}`}>
      <div className="sidebar-top">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio"><span className="brand-mark">A</span><span>Andy IA</span></button>
        <button className="icon-button desktop-collapse" aria-label="Ocultar barra lateral"><PanelLeftClose size={18}/></button>
        <button className="icon-button mobile-close" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú"><X size={19}/></button>
      </div>
      <button className="new-chat" onClick={() => goTo('inicio')}><Plus size={17}/><span>Nueva conversación</span></button>
      <nav aria-label="Navegación principal"><p className="nav-label">Explorar</p>
        {nav.map(item => { const Icon = item.icon; return <button key={item.id} className={`nav-item ${active === item.id ? 'active' : ''}`} onClick={() => goTo(item.id)}><Icon size={17}/><span>{item.label}</span></button>; })}
      </nav>
      <div className="recent"><p className="nav-label">Conversaciones recientes</p><button onClick={() => goTo('proyectos')}>Diseño de producto con IA</button><button onClick={() => goTo('servicios')}>Cómo trabajo una idea</button><button onClick={() => goTo('sobre-mi')}>Mi forma de pensar</button></div>
      <div className="sidebar-footer"><div className="status-dot"/><div><strong>Disponible para proyectos</strong><span>Remoto · Colombia</span></div></div>
    </aside>
    {mobileOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMobileOpen(false)}/>} 
    <section className="conversation">
      <header className="topbar"><button className="model-selector">Andy IA <span>⌄</span></button><button className="contact-pill" onClick={() => goTo('contacto')}>Hablemos</button></header>
      <div className="thread">
        <section id="inicio" className="welcome section-block"><div className="assistant-avatar">A</div><div><p className="eyebrow">Hola, soy Andy</p><h1>Convierto ideas en experiencias digitales que se sienten simples.</h1><p className="lead">Trabajo entre estrategia, diseño y tecnología para crear productos útiles, marcas claras y automatizaciones con inteligencia artificial.</p><div className="quick-actions"><button onClick={() => goTo('proyectos')}>Ver proyectos <ArrowUp size={15}/></button><button onClick={() => goTo('servicios')}>¿En qué puedo ayudarte?</button></div></div></section>
        <section id="proyectos" className="section-block response-block"><div className="user-prompt">Muéstrame tu trabajo más reciente.</div><div className="assistant-response"><div className="assistant-avatar">A</div><div className="response-content"><h2>Una selección de proyectos</h2><p>Problemas distintos, una misma obsesión: que la experiencia final sea clara, útil y memorable.</p><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-head"><span>{project.number}</span><ExternalLink size={16}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></div></section>
        <section id="servicios" className="section-block response-block"><div className="user-prompt">¿Cómo puedes ayudar a mi proyecto?</div><div className="assistant-response"><div className="assistant-avatar">A</div><div className="response-content"><h2>Tres formas de crear valor</h2><div className="services-list"><article><Code2 size={18}/><div><h3>Producto digital</h3><p>Diseño y desarrollo de sitios, herramientas y experiencias centradas en las personas.</p></div></article><article><Sparkles size={18}/><div><h3>IA y automatización</h3><p>Flujos inteligentes que reducen trabajo manual y amplifican las capacidades de tu equipo.</p></div></article><article><BriefcaseBusiness size={18}/><div><h3>Estrategia y dirección</h3><p>Claridad para convertir una idea difusa en una propuesta, un sistema y un plan ejecutable.</p></div></article></div></div></div></section>
        <section id="sobre-mi" className="section-block response-block"><div className="user-prompt">Cuéntame un poco sobre ti.</div><div className="assistant-response"><div className="assistant-avatar">A</div><div className="response-content prose"><h2>Diseño con criterio. Tecnología con propósito.</h2><p>Soy Andy, diseñador y creador digital. Me gusta entrar en problemas complejos, encontrar la idea esencial y construir una solución que las personas entiendan sin instrucciones.</p><p>Combino pensamiento de producto, sensibilidad visual y herramientas de IA. El resultado no busca parecer futurista: busca funcionar mejor hoy.</p></div></div></section>
        <section id="contacto" className="section-block response-block contact-section"><div className="user-prompt">Tengo una idea. ¿Hablamos?</div><div className="assistant-response"><div className="assistant-avatar">A</div><div className="response-content"><h2>Claro. Empecemos por una conversación.</h2><p>Cuéntame qué estás construyendo, dónde estás atascado o qué te gustaría hacer posible.</p><a className="email-link" href="mailto:hola@andyia.co"><Mail size={17}/> hola@andyia.co</a></div></div></section>
      </div>
      <div className="composer-wrap"><form className="composer" onSubmit={submitPrompt}><input value={prompt} onChange={event => setPrompt(event.target.value)} placeholder="Pregunta sobre mi trabajo..." aria-label="Pregunta sobre el portafolio"/><button type="submit" aria-label="Enviar pregunta" disabled={!prompt.trim()}><ArrowUp size={18}/></button></form><p>Diseñado y construido por Andy · 2026</p></div>
    </section>
  </main>;
}

'use client';

import { ArrowLeft, ArrowUpRight, Download, FileText, FolderOpen, Library, Menu, Moon, Play, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';

const resources = [
  { type: 'Documento', title: 'IA: primer paso', description: 'Una guía de inicio para entender la inteligencia artificial y comenzar con una base clara.', meta: 'DOCX · Guía práctica', href: '/ia1.docx', icon: FileText, download: true },
  { type: 'Video', title: 'Introducción visual a IA', description: 'Una pieza audiovisual para abrir la conversación y presentar el universo de AndresGomezOS.', meta: 'MP4 · Recurso audiovisual', href: '/ia.mp4', icon: Play, download: false },
];

export default function RecursosPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('andresgomezos-theme');
    setDarkMode(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    setThemeReady(true);
  }, []);
  useEffect(() => {
    if (!themeReady) return;
    document.documentElement.classList.toggle('dark', darkMode);
    window.localStorage.setItem('andresgomezos-theme', darkMode ? 'dark' : 'light');
  }, [darkMode, themeReady]);

  return <main className="portfolio-shell resources-shell">
    <button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="Abrir menú"><Menu size={20}/></button>
    <aside className={`sidebar resources-sidebar ${menuOpen ? 'is-open' : ''}`}>
      <div className="sidebar-top"><Link className="brand" href="/" aria-label="Volver al inicio"><span className="brand-mark"><img src="/andresgomezos-logo.png" alt=""/></span><span className="brand-name">AndresGomezOS</span></Link><button className="icon-button mobile-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X size={19}/></button></div>
      <nav aria-label="Navegación de recursos"><p className="nav-label">Biblioteca</p><Link className="nav-item active" href="/recursos"><Library size={17}/><span>Todos los recursos</span></Link><a className="nav-item" href="#guias"><FileText size={17}/><span>Guías y archivos</span></a><a className="nav-item" href="#videos"><Play size={17}/><span>Videos</span></a></nav>
      <div className="resources-note"><span>ACCESO CLIENTE</span><p>Material seleccionado para consultar, guardar y compartir.</p></div>
      <div className="sidebar-footer"><span className="profile-avatar"><img src="/andres-gomez-avatar.png" alt="Retrato de Andrés Gómez"/></span><div><strong>Andrés Gómez</strong><span>Recursos para crear con IA</span></div></div>
    </aside>
    {menuOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}/>}
    <section className="conversation resources-conversation">
      <header className="topbar"><div className="window-controls" aria-hidden="true"><span/><span/><span/></div><strong className="resources-top-title">recursos.ai</strong><div className="topbar-actions"><div className="theme-toggle" title={darkMode ? 'Usar tema claro' : 'Usar tema oscuro'}><Sun size={14}/><Switch size="sm" checked={darkMode} onCheckedChange={setDarkMode} aria-label="Alternar tema claro y oscuro"/><Moon size={14}/></div><Link className="contact-pill resources-back" href="/"><ArrowLeft size={14}/> Portfolio</Link></div></header>
      <div className="resources-main">
        <div className="resources-heading"><div className="assistant-avatar section-avatar"><FolderOpen size={15}/></div><div><p className="eyebrow">Biblioteca de cliente · actualizada continuamente</p><h1>Recursos para llevar tus ideas a la práctica.</h1><p className="lead">Guías, archivos y videos reunidos en un solo lugar. Abre lo que necesites o guárdalo para consultarlo después.</p></div></div>
        <section id="guias" className="resources-section" aria-labelledby="resources-title"><div className="resources-section-head"><div><span>01</span><h2 id="resources-title">Biblioteca</h2></div><p>{resources.length} recursos disponibles</p></div><div className="resources-grid">
          {resources.map(resource => { const Icon = resource.icon; return <a key={resource.title} className="resource-card" href={resource.href} download={resource.download || undefined} target={resource.download ? undefined : '_blank'} rel={resource.download ? undefined : 'noreferrer'} id={resource.type === 'Video' ? 'videos' : undefined}><div className="resource-card-top"><span className="resource-icon"><Icon size={19}/></span><span className="resource-type">{resource.type}</span><span className="resource-action">{resource.download ? <Download size={16}/> : <ArrowUpRight size={16}/>}</span></div><div><h3>{resource.title}</h3><p>{resource.description}</p></div><span className="resource-meta">{resource.meta}</span></a>; })}
          <article className="resource-card resource-card-empty" aria-label="Próximamente más recursos"><div className="resource-card-top"><span className="resource-icon"><Library size={19}/></span><span className="resource-type">Próximamente</span></div><div><h3>La biblioteca sigue creciendo</h3><p>Aquí aparecerán las nuevas plantillas, guías y herramientas que prepare para mis clientes.</p></div><span className="resource-meta">NUEVOS RECURSOS · EN PREPARACIÓN</span></article>
        </div></section>
      </div>
      <footer className="os-dock"><span>AndresgomezOS</span><span>Biblioteca de recursos</span></footer>
    </section>
  </main>;
}

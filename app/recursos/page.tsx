'use client';

import { ArrowLeft, ExternalLink, FileText, FolderOpen, House, Library, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/switch';

const resources = [
  { type: 'Lectura', title: 'IA: primer paso', description: 'Una guía de inicio para entender la inteligencia artificial y comenzar con una base clara.', meta: 'TXT · Lectura en línea', href: '/ia1.txt', icon: FileText },
  { type: 'Guía práctica', title: 'Plantilla para pedirle mejores resultados a cualquier IA', description: 'Una estructura sencilla y reutilizable para explicar tu situación, definir el objetivo y pedir el formato que necesitas.', meta: 'GUÍA · LECTURA EN LÍNEA', href: '/recursos/mejores-resultados-con-ia', icon: FileText },
  { type: 'Guía', title: '30 atajos para crear imágenes con IA', description: 'Una colección práctica de comandos para transformar productos, escenas y personajes con estilos visuales listos para explorar.', meta: 'TXT · LECTURA EN LÍNEA', href: '/codigos.txt', icon: FileText },
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
      <div className="sidebar-top"><a className="brand" href="/" aria-label="Volver al inicio"><span className="brand-mark"><img src="/andresgomezos-logo.png" alt=""/></span><span className="brand-name">AndresGomez[OS]</span></a><button className="icon-button mobile-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú"><X size={19}/></button></div>
      <nav aria-label="Navegación de recursos"><p className="nav-label">Explorar</p><a className="nav-item" href="/"><House size={17}/><span>Inicio</span></a><p className="nav-label resources-nav-label">Biblioteca</p><a className="nav-item active" href="/recursos"><Library size={17}/><span>Todos los recursos</span></a><a className="nav-item" href="#guias"><FileText size={17}/><span>Guías y archivos</span></a></nav>
      <div className="resources-note"><span>ACCESO CLIENTE</span><p>Material seleccionado para consultar, guardar y compartir.</p></div>
      <div className="sidebar-footer"><span className="profile-avatar"><img src="/andres-gomez-avatar.png" alt="Retrato de Andrés Gómez"/></span><div><strong>Andrés Gómez</strong><span>Recursos para crear con IA</span></div></div>
    </aside>
    {menuOpen && <button className="scrim" aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}/>}
    <section className="conversation resources-conversation">
      <header className="topbar"><div className="window-controls" aria-hidden="true"><span/><span/><span/></div><strong className="resources-top-title">recursos.ai</strong><div className="topbar-actions"><div className="theme-toggle" title={darkMode ? 'Usar tema claro' : 'Usar tema oscuro'}><Sun size={14}/><Switch size="sm" checked={darkMode} onCheckedChange={setDarkMode} aria-label="Alternar tema claro y oscuro"/><Moon size={14}/></div><a className="contact-pill resources-back" href="/"><ArrowLeft size={14}/> Portfolio</a></div></header>
      <div className="resources-main">
        <div className="resources-heading"><div className="assistant-avatar section-avatar"><FolderOpen size={15}/></div><div><p className="eyebrow">Biblioteca de cliente · actualizada continuamente</p><h1>Recursos para llevar tus ideas a la práctica.</h1><p className="lead">Guías y archivos reunidos en un solo lugar. Abre lo que necesites o guárdalo para consultarlo después.</p></div></div>
        <section id="guias" className="resources-section" aria-labelledby="resources-title"><div className="resources-section-head"><div><span>01</span><h2 id="resources-title">Biblioteca</h2></div><p>{resources.length} recursos disponibles</p></div><div className="resources-grid">
          {resources.map(resource => { const Icon = resource.icon; return <a key={resource.title} className="resource-card" href={resource.href}><div className="resource-card-top"><span className="resource-icon"><Icon size={19}/></span><span className="resource-type">{resource.type}</span><span className="resource-action"><ExternalLink size={16}/></span></div><div><h3>{resource.title}</h3><p>{resource.description}</p></div><span className="resource-meta">{resource.meta}</span></a>; })}
          <article className="resource-card resource-card-empty" aria-label="Próximamente más recursos"><div className="resource-card-top"><span className="resource-icon"><Library size={19}/></span><span className="resource-type">Próximamente</span></div><div><h3>La biblioteca sigue creciendo</h3><p>Aquí aparecerán las nuevas plantillas, guías y herramientas que prepare para mis clientes.</p></div><span className="resource-meta">NUEVOS RECURSOS · EN PREPARACIÓN</span></article>
        </div></section>
      </div>
      <footer className="os-dock"><span>AndresGomez[OS]</span><span>Biblioteca de recursos</span></footer>
    </section>
  </main>;
}

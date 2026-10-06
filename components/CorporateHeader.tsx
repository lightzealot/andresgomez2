'use client';
import { useRef } from 'react';
/* oxlint-disable next/no-html-link-for-pages -- Native navigation supports static routes and section anchors. */
import { ArrowUpRight, Menu } from 'lucide-react';
import styles from '@/app/business.module.css';
import { diagnosticUrl } from '@/lib/site-links';

export function CorporateHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  return <><a className={styles.skip} href="#contenido">Saltar al contenido</a><header className={styles.header}><div className={styles.headerInner}><a href="/" className={styles.brand}><span className={styles.mark}>[<b>AG</b>]</span> ANDRÉS GÓMEZ</a><nav className={styles.desktopNav} aria-label="Navegación principal"><a href="/#soluciones">Soluciones</a><a href="/#enfoque">Enfoque</a><a href="/recursos">Recursos</a><a href={diagnosticUrl} className={styles.diagnosticNav}>Diagnóstico <ArrowUpRight size={16}/></a><a href="/#contacto" className={styles.headerCta}>Trabaja conmigo <ArrowUpRight size={16}/></a></nav><details ref={mobileMenu} className={styles.mobileNav}><summary aria-label="Abrir menú"><Menu size={22}/></summary><nav aria-label="Navegación móvil"><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#soluciones">Soluciones</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#enfoque">Enfoque</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/recursos">Recursos</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href={diagnosticUrl}>Diagnóstico <ArrowUpRight size={16}/></a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#contacto">Trabaja conmigo <ArrowUpRight size={16}/></a></nav></details></div></header></>;
}

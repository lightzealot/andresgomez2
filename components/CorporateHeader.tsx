'use client';
import { useRef } from 'react';
/* oxlint-disable next/no-html-link-for-pages -- Native navigation supports static routes and section anchors. */
import { Menu } from 'lucide-react';
import styles from '@/app/business.module.css';
import { diagnosticUrl } from '@/lib/site-links';

export function CorporateHeader() {
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  return <><a className={styles.skip} href="#contenido">Saltar al contenido</a><header className={styles.header}><div className={styles.headerInner}><a href="/" className={styles.brand}><span className={styles.mark}>[<b>AG</b>]</span> ANDRÉS GÓMEZ</a><nav className={styles.desktopNav} aria-label="Navegación principal"><a href="/#soluciones">Procesos</a><a href="/#enfoque">Método</a><a href="/recursos">Recursos</a><a href="/#sprint">Sprint</a><a href={diagnosticUrl} className={styles.diagnosticNav}>Evaluar mi empresa</a></nav><details ref={mobileMenu} className={styles.mobileNav}><summary aria-label="Abrir menú"><Menu size={22}/></summary><nav aria-label="Navegación móvil"><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#soluciones">Procesos</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#enfoque">Método</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/recursos">Recursos</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href={diagnosticUrl}>Evaluar mi empresa</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#sprint">Sprint</a></nav></details></div></header></>;
}


'use client';
import { useLanguage } from '@/components/LanguageProvider';
import Image from 'next/image';
import { useRef } from 'react';
/* oxlint-disable next/no-html-link-for-pages -- Native navigation supports static routes and section anchors. */
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { Menu } from 'lucide-react';
import styles from '@/app/business.module.css';
import { diagnosticUrl } from '@/lib/site-links';

export function CorporateHeader() {
  const { t } = useLanguage();
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  return <><a className={styles.skip} href="#contenido">{t("Saltar al contenido")}</a><header className={styles.header}><div className={styles.headerInner}><a href="/" className={styles.brand}><span className={styles.logo} aria-hidden="true"><Image className={styles.logoImage} src="/andresgomezos-logo.png" alt="" width={64} height={64} unoptimized/></span> ANDRÉS GÓMEZ</a><nav className={styles.desktopNav} aria-label="Navegación principal"><a href="/#soluciones">{t("Procesos")}</a><a href="/#enfoque">{t("Método")}</a><a href="/recursos">{t("Recursos")}</a><a href="/#sprint">Sprint</a><a href={diagnosticUrl} className={styles.diagnosticNav}>{t("Evaluar mi empresa")}</a></nav><LanguageSwitch/><details ref={mobileMenu} className={styles.mobileNav}><summary aria-label="Abrir menú"><Menu size={22}/></summary><nav aria-label="Navegación móvil"><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#soluciones">{t("Procesos")}</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#enfoque">{t("Método")}</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/recursos">{t("Recursos")}</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href={diagnosticUrl}>{t("Evaluar mi empresa")}</a><a onClick={() => { if (mobileMenu.current) mobileMenu.current.open = false; }} href="/#sprint">Sprint</a></nav></details></div></header></>;
}



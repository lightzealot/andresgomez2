import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import styles from '@/app/business.module.css';
import { diagnosticUrl } from '@/lib/site-links';

export function CorporateHeader() {
  return <><a className={styles.skip} href="#contenido">Saltar al contenido</a><header className={styles.header}><div className={styles.headerInner}><Link href="/" className={styles.brand}><span className={styles.mark}>[<b>AG</b>]</span> ANDRÉS GÓMEZ</Link><nav className={styles.desktopNav} aria-label="Navegación principal"><Link href="/#soluciones">Soluciones</Link><Link href="/#enfoque">Enfoque</Link><Link href="/recursos">Recursos</Link><a href={diagnosticUrl} className={styles.diagnosticNav}>Diagnóstico <ArrowUpRight size={16}/></a><Link href="/#contacto" className={styles.headerCta}>Trabaja conmigo <ArrowUpRight size={16}/></Link></nav><details className={styles.mobileNav}><summary aria-label="Abrir menú"><Menu size={22}/></summary><nav aria-label="Navegación móvil"><Link href="/#soluciones">Soluciones</Link><Link href="/#enfoque">Enfoque</Link><Link href="/recursos">Recursos</Link><a href={diagnosticUrl}>Diagnóstico <ArrowUpRight size={16}/></a><Link href="/#contacto">Trabaja conmigo <ArrowUpRight size={16}/></Link></nav></details></div></header></>;
}

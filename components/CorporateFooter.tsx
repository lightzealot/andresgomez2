import Link from 'next/link';
import styles from '@/app/business.module.css';

function InstagramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
}

export function CorporateFooter() {
  return <footer className={styles.footerBar}><div className={styles.footerInner}><Link className={styles.footerIdentity} href="/" aria-label="Andrés Gómez, inicio"><span className={styles.mark}>[<b>AG</b>]</span><span>© {new Date().getFullYear()} ANDRÉS GÓMEZ · IA PARA EMPRESAS</span></Link><nav className={styles.footerLinks} aria-label="Enlaces del pie de página"><a href="https://www.instagram.com/andresgomez.ia/" target="_blank" rel="noopener noreferrer"><InstagramIcon/>Instagram</a><Link href="/recursos">Recursos</Link><span className={styles.footerDivider} aria-hidden="true"/><Link href="/privacidad">Privacidad</Link><Link href="/terminos">Términos</Link></nav></div></footer>;
}

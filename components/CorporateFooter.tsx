/* oxlint-disable next/no-html-link-for-pages -- Native navigation supports static routes and section anchors. */
import styles from '@/app/business.module.css';

function InstagramIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></svg>;
}

export function CorporateFooter() {
  return <footer className={styles.footerBar}><div className={styles.footerInner}><a className={styles.footerIdentity} href="/" aria-label="Andrés Gómez, inicio"><span className={styles.mark}>[<b>AG</b>]</span><span>© {new Date().getFullYear()} ANDRÉS GÓMEZ · IA PARA EMPRESAS</span></a><nav className={styles.footerLinks} aria-label="Enlaces del pie de página"><a href="https://www.instagram.com/andresgomez.ia/" target="_blank" rel="noopener noreferrer"><InstagramIcon/>Instagram</a><a href="/recursos">Recursos</a><span className={styles.footerDivider} aria-hidden="true"/><a href="/privacidad">Privacidad</a><a href="/terminos">Términos</a></nav></div></footer>;
}

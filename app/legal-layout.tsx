import type { ReactNode } from 'react';
import styles from './legal.module.css';

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return <div className={styles.shell}>
    <header className={styles.header}><a href="/">AndresGomez[OS]</a><span>andygraph2</span></header>
    <main className={styles.content}><h1>{title}</h1>{children}</main>
    <footer className={styles.footer}><nav aria-label="Información legal"><a href="/privacidad/">Política de Privacidad</a><a href="/eliminacion-datos/">Eliminación de datos</a><a href="/condiciones-del-servicio/">Condiciones del Servicio</a></nav><a href="mailto:hello@andresgomez.store">hello@andresgomez.store</a></footer>
  </div>;
}

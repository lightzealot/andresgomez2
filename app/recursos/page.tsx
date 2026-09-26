import type { Metadata } from 'next';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { resources, readingMinutes, coverAlt } from './catalog';
import { ResourceHeader } from './resource-controls';
import styles from './resources.module.css';

export const metadata: Metadata = {
  title: 'Recursos para crear con IA | Andrés Gómez',
  description: 'Guías, prompts y sistemas prácticos de @andyontrade para trabajar con inteligencia artificial.',
};

export default function RecursosPage() {
  const [featured, ...rest] = resources;
  return <div className={styles.shell}>
    <ResourceHeader />
    <main id="contenido" className={styles.library}>
      <header className={styles.libraryHeading}>
        <p className={styles.eyebrow}>LA BIBLIOTECA / @andyontrade</p>
        <div><h1>Recursos para<br/>crear con IA.</h1><p>Prompts, guías y sistemas para trabajar con IA.<br/>Abre un recurso y llévalo a tu práctica.</p></div>
      </header>
      <a className={styles.featured} href={`/recursos/${featured.slug}/`}>
        <div className={styles.featuredCopy}><span className={styles.featuredLabel}>NUEVO RECURSO · {featured.category.toUpperCase()}</span><h2>{featured.title}</h2><p>{featured.description}</p><span className={styles.featuredAction}>Leer y copiar el prompt <ArrowRight size={20}/></span></div>
        <img src={`/recursos/${featured.image}.jpg`} alt={coverAlt[featured.image]} width={1440} height={960} fetchPriority="high" />
      </a>
      <section className={styles.collection} aria-labelledby="coleccion">
        <div className={styles.collectionHeading}><h2 id="coleccion">Explora la colección</h2><span>{resources.length} recursos / acceso libre</span></div>
        <div className={styles.grid}>
          {rest.map((resource, index) => <a className={styles.card} key={resource.slug} href={`/recursos/${resource.slug}/`}>
            <div className={`${styles.cardImage} ${styles['crop' + (index % 3)]}`}><img src={`/recursos/${resource.image}.jpg`} alt={coverAlt[resource.image]} loading="lazy" width={1440} height={960}/><span className={styles.cardNumber}>{String(index + 2).padStart(2, '0')}</span></div>
            <div className={styles.cardBody}><span className={styles.cardCategory}>{resource.category} / {resource.type}</span><h3>{resource.title}</h3><p>{resource.description}</p><div className={styles.cardBottom}><span>{readingMinutes(resource.slug)} min de lectura</span><ArrowUpRight size={20} aria-hidden="true"/></div></div>
          </a>)}
        </div>
      </section>
    </main>
    <footer className={styles.footer}><a href="/">AndresGomez[OS]</a><span>Por Andrés Gómez · @andyontrade</span><a href="/privacidad/">Privacidad</a></footer>
  </div>;
}

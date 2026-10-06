/* oxlint-disable next/no-html-link-for-pages -- Full document navigation keeps resource cards reliable on mobile. */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react';
import { resources, readingMinutes, coverAlt } from './catalog';
import { ResourceHeader } from './resource-controls';
import styles from './resources.module.css';

export const metadata: Metadata = {
  title: 'Recursos de IA para creadores de contenido | Andrés Gómez',
  description: 'Prompts, guías y sistemas para planear, producir y publicar contenido con inteligencia artificial.',
};

export default function RecursosPage() {
  const featured = resources.find(resource => resource.slug === 'sistema-60-minutos-contenido-ia') ?? resources[0];
  const rest = resources.filter(resource => resource.slug !== featured.slug);
  return <div className={styles.shell}>
    <ResourceHeader />
    <main id="contenido" className={styles.library}>
      <header className={styles.libraryHeading}>
        <div className={styles.libraryIntro}>
          <div className={styles.libraryTitle}>
            <p className={styles.eyebrow}><Sparkles size={14}/> LA BIBLIOTECA / @ANDRESGOMEZ.IA</p>
            <h1>Contenido con IA, <span>a tu manera.</span></h1>
            <p>Recursos para planear publicaciones, escribir mejores prompts y producir piezas visuales sin perder tu voz.</p>
          </div>
          <div className={styles.creatorCard}>
            <Image src="/4c-contraste.png" alt="Retrato de Andrés Gómez" width={82} height={118} priority unoptimized/>
            <div><span>CURADO POR</span><strong>Andrés Gómez</strong><small>@andresgomez.ia · IA para creadores</small></div>
          </div>
        </div>
        <div className={styles.libraryMeta}><span>RECURSOS ABIERTOS / 001—{String(resources.length).padStart(3, '0')}</span><span>LEE · COPIA · CREA</span></div>
      </header>
      <a className={styles.featured} href={`/recursos/${featured.slug}`}>
        <div className={styles.featuredCopy}><span className={styles.featuredLabel}>EMPIEZA AQUÍ / {featured.category.toUpperCase()}</span><h2>{featured.title}</h2><p>{featured.description}</p><span className={styles.featuredAction}>Abrir recurso <ArrowRight size={20}/></span></div>
        <Image src={`/recursos/${featured.image}.jpg`} alt={coverAlt[featured.image]} width={1440} height={960} priority unoptimized />
      </a>
      <section className={styles.collection} aria-labelledby="coleccion">
        <div className={styles.collectionHeading}><div><span className={styles.sectionIndex}>01 / EXPLORA</span><h2 id="coleccion">Tu caja de herramientas<span>.</span></h2></div><span>{resources.length} recursos / acceso libre</span></div>
        <div className={styles.grid}>
          {rest.map((resource, index) => <a className={styles.card} key={resource.slug} href={`/recursos/${resource.slug}`}>
            <div className={styles.cardImage}><Image src={`/recursos/${resource.image}.jpg`} alt={coverAlt[resource.image]} loading="lazy" width={1440} height={960} unoptimized/><span className={styles.cardNumber}>{String(index + 2).padStart(2, '0')}</span></div>
            <div className={styles.cardBody}><span className={styles.cardCategory}>{resource.category} / {resource.type}</span><h3>{resource.title}</h3><p>{resource.description}</p><div className={styles.cardBottom}><span>{readingMinutes(resource.slug)} min de lectura</span><ArrowUpRight size={20} aria-hidden="true"/></div></div>
          </a>)}
        </div>
      </section>
    </main>
    <footer className={styles.footer}><Link href="/">AndresGomez[OS]</Link><span>Por Andrés Gómez · @andresgomez.ia</span><Link href="/privacidad/">Privacidad</Link></footer>
  </div>;
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Download } from 'lucide-react';
import { resources, readingMinutes, coverAlt, resourceContent } from '../catalog';
import { parseMarkdown } from '../markdown';
import ResourceBody from '../resource-body';
import { ResourceHeader } from '../resource-controls';
import styles from '../resources.module.css';

export const dynamicParams = false;
export function generateStaticParams() { return resources.map(({ slug }) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = resources.find(item => item.slug === slug);
  if (!resource) return {};
  return { title: `${resource.title} | @andyontrade`, description: resource.description };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const resource = resources.find(item => item.slug === slug);
  if (!resource) notFound();
  const blocks = parseMarkdown(resourceContent(slug));
  const headings = blocks.filter(block => block.type === 'heading' && block.level === 2);
  const position = resources.findIndex(item => item.slug === slug);
  const next = resources[(position + 1) % resources.length];
  return <div className={styles.shell}>
    <ResourceHeader article/>
    <main id="contenido">
      <header className={styles.articleHero}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{resource.category.toUpperCase()} / {resource.type.toUpperCase()}</p><h1>{resource.title}</h1><p className={styles.heroDescription}>{resource.description}</p><div className={styles.author}><img src="/andres-gomez-avatar.png" width={40} height={40} alt="Andrés Gómez"/><div><strong>Por @andyontrade</strong><span>{readingMinutes(slug)} min de lectura</span></div></div></div>
        <figure className={styles.heroImage}><img src={`/recursos/${resource.image}.jpg`} alt={coverAlt[resource.image]} width={1440} height={960} fetchPriority="high"/></figure>
      </header>
      <div className={styles.articleLayout}>
        <aside className={styles.toc} aria-label="Índice del recurso"><p className={styles.eyebrow}>EN ESTA GUÍA</p><nav>{headings.map(heading => heading.type === 'heading' && <a href={`#${heading.id}`} key={heading.id}>{heading.text}</a>)}</nav><a className={styles.download} href={`/${resource.download}`} download><Download size={16}/>Descargar texto</a></aside>
        <article className={styles.article}><ResourceBody blocks={blocks}/><nav className={styles.articleEnd} aria-label="Continuar leyendo"><a href="/recursos/"><ArrowLeft size={16}/>Volver a la biblioteca</a><a href={`/recursos/${next.slug}/`}><span>Siguiente recurso<strong>{next.title}</strong></span><ArrowRight size={20}/></a></nav></article>
      </div>
    </main>
    <footer className={styles.footer}><a href="/">AndresGomez[OS]</a><span>Por Andrés Gómez · @andyontrade</span><a href="/privacidad/">Privacidad</a></footer>
  </div>;
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CorporateFooter } from '@/components/CorporateFooter';
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
  return { title: `${resource.title} | @andresgomez.ia`, description: resource.description };
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
        <div className={styles.heroCopy}><p className={styles.eyebrow}>{resource.category.toUpperCase()} / {resource.type.toUpperCase()}</p><h1>{resource.title}</h1><p className={styles.heroDescription}>{resource.description}</p><div className={styles.author}><Image src="/andres-estudio-ia-empresas.webp" width={48} height={48} alt="Andrés Gómez" unoptimized/><div><strong>{'shared' in resource && resource.shared ? 'Compartido por @andresgomez.ia' : 'Por @andresgomez.ia'}</strong><span>{readingMinutes(slug)} min de lectura</span></div></div></div>
        <figure className={styles.heroImage}><Image src={`/recursos/corporativos/${resource.image}.webp`} alt={coverAlt[resource.image]} width={1440} height={960} priority unoptimized/></figure>
      </header>
      <div className={styles.articleLayout}>
        <aside className={styles.toc} aria-label="Índice del recurso"><p className={styles.eyebrow}>EN ESTA GUÍA</p><nav>{headings.map(heading => heading.type === 'heading' && <a href={`#${heading.id}`} key={heading.id}>{heading.text}</a>)}</nav><a className={styles.download} href={`/${resource.download}`} download><Download size={16}/>Descargar texto</a></aside>
        <article className={styles.article}><ResourceBody blocks={blocks}/><nav className={styles.articleEnd} aria-label="Continuar leyendo"><Link href="/recursos/"><ArrowLeft size={16}/>Volver a la biblioteca</Link><Link href={`/recursos/${next.slug}/`}><span>Siguiente recurso<strong>{next.title}</strong></span><ArrowRight size={20}/></Link></nav></article>
      </div>
    </main>
    <CorporateFooter/>
  </div>;
}

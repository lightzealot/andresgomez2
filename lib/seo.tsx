import type { Metadata } from 'next';

export const siteUrl = 'https://andresgomez.store';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = new URL(path, siteUrl).href;
  return { title, description, alternates: { canonical: url },
    openGraph: { title, description, url, siteName: 'Andrés Gómez', locale: 'es_CO', type: 'website', images: [{ url: `${siteUrl}/andresgomezos-logo.png`, alt: 'Andrés Gómez' }] },
    twitter: { card: 'summary', title, description, images: [`${siteUrl}/andresgomezos-logo.png`] } };
}
export function StructuredData({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll('<', '\\u003c') }} />;
}

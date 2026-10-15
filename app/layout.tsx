import type { Metadata } from 'next';
import './globals.css';
import { siteUrl, StructuredData } from '@/lib/seo';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  authors: [{ name: 'Andr?s G?mez', url: siteUrl }],
  title: 'Andrés Gómez — IA y automatización para empresas',
  description: 'Andrés Gómez: IA aplicada a empresas de servicios. Optimización de procesos para reducir trabajo manual, implementar mejoras y medir resultados.',
  icons: { icon: '/andresgomezos-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body><StructuredData data={{ '@context': 'https://schema.org', '@graph': [{ '@type': 'Person', '@id': siteUrl + '/#author', name: 'Andr?s G?mez', url: siteUrl }, { '@type': 'WebSite', '@id': siteUrl + '/#website', name: 'Andr?s G?mez', url: siteUrl, inLanguage: 'es', publisher: { '@id': siteUrl + '/#author' } }] }}/><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}

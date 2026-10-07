import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';

export const metadata: Metadata = {
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
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}

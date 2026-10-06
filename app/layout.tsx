import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AndresGomez[OS] — IA para empresas',
  description: 'Soluciones de inteligencia artificial para empresas: automatización de procesos, asistentes internos y formación de equipos.',
  icons: { icon: '/andresgomezos-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

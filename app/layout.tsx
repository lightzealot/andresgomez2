import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AndresGomez[OS] — IA para creadores de contenido',
  description: 'Ideas, prompts y sistemas prácticos para planear, crear y publicar contenido con inteligencia artificial.',
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

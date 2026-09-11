import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AndresgomezOS — Portafolio',
  description: 'El sistema creativo de Andrés Gómez: estrategia, diseño, desarrollo y automatización con inteligencia artificial.',
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

import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Registro recibido | Workshop Carruseles con IA' };

export default function GraciasWorkshopPage() {
  return (
    <main className="workshop-thanks">
      <div className="workshop-thanks-card">
        <span className="workshop-thanks-icon"><Check size={22} /></span>
        <p className="workshop-kicker">REGISTRO RECIBIDO</p>
        <h1>Recibimos tu registro.</h1>
        <p>Gracias por inscribirte al workshop gratuito. Te enviaré la fecha y los detalles de acceso cuando estén confirmados.</p>
        <Link href="/"><ArrowLeft size={16} /> Volver al inicio</Link>
      </div>
    </main>
  );
}

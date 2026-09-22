import { ArrowLeft, Check } from 'lucide-react';
import Link from 'next/link';

export const metadata = { title: 'Registro recibido | Workshop Carruseles con IA' };

export default function GraciasWorkshopPage() {
  return (
    <main className="workshop-thanks">
      <div className="workshop-thanks-card">
        <span className="workshop-thanks-icon"><Check size={22} /></span>
        <p className="workshop-kicker">REGISTRO RECIBIDO</p>
        <h1>Ya estás en la lista.</h1>
        <p>Gracias por tu interés. Te contactaré cuando estén confirmados la fecha, el precio y los cupos del workshop.</p>
        <Link href="/"><ArrowLeft size={16} /> Volver al inicio</Link>
      </div>
    </main>
  );
}

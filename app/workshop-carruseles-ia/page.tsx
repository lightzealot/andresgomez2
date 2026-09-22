import { ArrowRight, Check, Layers3, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Workshop: Carruseles con IA | Andrés Gómez',
  description: 'Regístrate para recibir primero los detalles del workshop práctico de creación de carruseles con inteligencia artificial.',
};

export default function WorkshopCarruselesPage() {
  return (
    <main className="workshop-page">
      <header className="workshop-header">
        <Link className="workshop-brand" href="/" aria-label="Ir al inicio de AndresGomez OS">
          <img src="/andresgomezos-logo.png" alt="Logo de AndresGomez OS" width="28" height="28" />
          <span>AndresGomez[OS]</span>
        </Link>
        <span className="workshop-status"><i /> Lista prioritaria abierta</span>
      </header>

      <section className="workshop-layout">
        <div className="workshop-copy">
          <p className="workshop-kicker"><Sparkles size={15} /> WORKSHOP PRÁCTICO · PRÓXIMAMENTE</p>
          <h1>Crea carruseles que la gente quiera guardar, usando IA.</h1>
          <p className="workshop-lead">Una sesión práctica para pasar de una idea suelta a un carrusel claro, atractivo y listo para publicar, sin depender de prompts genéricos.</p>

          <div className="workshop-outcomes">
            <div><Check size={16} /><span>Encontrar un ángulo que conecte con tu audiencia.</span></div>
            <div><Check size={16} /><span>Crear la estructura y el texto con ayuda de IA.</span></div>
            <div><Check size={16} /><span>Convertirlo en un diseño coherente y publicable.</span></div>
          </div>

          <aside className="workshop-note">
            <Layers3 size={18} />
            <p><strong>No es una clase para mirar.</strong> La idea es que salgas con un carrusel creado y un sistema que puedas repetir.</p>
          </aside>
        </div>

        <div className="workshop-form-card" id="registro">
          <span className="workshop-step">01 / LISTA DE INTERÉS</span>
          <h2>Quiero participar</h2>
          <p>Déjame tus datos. Te avisaré primero cuando confirme fecha, precio y cupos.</p>

          <form name="interes-workshop-carruseles-ia" method="POST" action="/workshop-carruseles-ia/gracias" data-netlify="true">
            <input type="hidden" name="form-name" value="interes-workshop-carruseles-ia" />
            <input type="hidden" name="origen" value="Instagram" />

            <label>Nombre
              <input name="nombre" type="text" autoComplete="name" placeholder="Tu nombre" required />
            </label>
            <label>Correo
              <input name="email" type="email" autoComplete="email" placeholder="tu@email.com" required />
            </label>
            <label>Usuario de Instagram <small>opcional</small>
              <input name="instagram" type="text" placeholder="@tuusuario" />
            </label>
            <label>¿Qué te cuesta más al crear carruseles?
              <select name="principal-dificultad" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                <option value="ideas">Encontrar ideas interesantes</option>
                <option value="estructura">Organizar la información</option>
                <option value="texto">Escribir textos claros</option>
                <option value="diseno">Diseñar cada slide</option>
                <option value="constancia">Publicar con constancia</option>
              </select>
            </label>
            <label>¿Cuánto invertirías en un workshop práctico en vivo?
              <select name="rango-de-inversion" defaultValue="" required>
                <option value="" disabled>Selecciona un rango</option>
                <option value="menos-20">Menos de USD 20</option>
                <option value="20-35">Entre USD 20 y 35</option>
                <option value="36-50">Entre USD 36 y 50</option>
                <option value="mas-50">Más de USD 50</option>
                <option value="depende">Depende de lo que incluya</option>
              </select>
            </label>

            <button type="submit">Unirme a la lista <ArrowRight size={17} /></button>
            <small className="workshop-privacy">Sin spam. Solo recibirás información relacionada con este workshop.</small>
          </form>
        </div>
      </section>

      <footer className="workshop-footer"><span>AndresGomez[OS]</span><span>Crear · aprender · compartir</span></footer>
    </main>
  );
}

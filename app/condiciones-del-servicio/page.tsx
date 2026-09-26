import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  title: 'Condiciones del Servicio | andygraph2',
  description: 'Condiciones de uso de andygraph2 y los servicios de automatización de mensajes de Instagram de andresgomez.store.',
};

export default function CondicionesServicioPage() {
  return <LegalLayout title="Condiciones del Servicio">
    <p>Aplicación: andygraph2 · Última actualización: <time dateTime="2026-09-26">26 de septiembre de 2026</time></p>
    <h2>1. Aceptación</h2>
    <p>Al conectar una cuenta de Instagram a la aplicación &quot;andygraph2&quot; o usar los servicios de automatización ofrecidos a través de andresgomez.store (el &quot;Servicio&quot;), aceptas estas condiciones. Si no estás de acuerdo, no uses el Servicio.</p>
    <h2>2. Prestador del servicio</h2>
    <p>Andrés Fernando Gómez Padilla, Barranquilla, Colombia. Contacto: <a href="mailto:hello@andresgomez.store">hello@andresgomez.store</a>.</p>
    <h2>3. Descripción del servicio</h2>
    <p>El Servicio permite a cuentas de Instagram Business o Creator responder automáticamente, mediante mensaje directo, a usuarios que comentan una palabra clave en sus publicaciones, usando exclusivamente la API oficial de Instagram de Meta.</p>
    <h2>4. Requisitos</h2>
    <ul><li>Ser mayor de 18 años.</li><li>Tener una cuenta de Instagram Business o Creator.</li><li>Cumplir las Condiciones de uso de Instagram, las Políticas de la Plataforma de Meta y la legislación aplicable.</li></ul>
    <h2>5. Uso permitido y prohibido</h2>
    <p>Te comprometes a usar el Servicio solo para responder a personas que iniciaron la interacción. Está prohibido:</p>
    <ul><li>Enviar spam, mensajes no solicitados o contenido engañoso.</li><li>Enviar contenido ilegal, ofensivo, fraudulento o que infrinja derechos de terceros.</li><li>Intentar eludir los límites o restricciones de la API de Meta.</li><li>Usar el Servicio para recopilar datos de usuarios con fines distintos a los descritos en la <a href="/privacidad/">Política de Privacidad</a>.</li></ul>
    <p>Podemos suspender el acceso de cualquier cuenta que incumpla estas reglas.</p>
    <h2>6. Contenido del usuario</h2>
    <p>Eres responsable del contenido de los mensajes y recursos que configuras para enviar. No revisamos ese contenido previamente.</p>
    <h2>7. Disponibilidad</h2>
    <p>El Servicio depende de la API de Meta, que puede cambiar, limitarse o dejar de estar disponible. No garantizamos un funcionamiento ininterrumpido ni somos responsables por restricciones que Meta aplique a tu cuenta.</p>
    <h2>8. Limitación de responsabilidad</h2>
    <p>El Servicio se ofrece &quot;tal cual&quot;. En la medida permitida por la ley, no somos responsables por daños indirectos, pérdida de datos, pérdida de ingresos o sanciones impuestas por terceros derivadas del uso del Servicio.</p>
    <h2>9. Privacidad</h2>
    <p>El tratamiento de datos se rige por nuestra <a href="/privacidad/">Política de Privacidad</a>. Las instrucciones para eliminar datos están en <a href="/eliminacion-datos/">andresgomez.store/eliminacion-datos</a>.</p>
    <h2>10. Terminación</h2>
    <p>Puedes dejar de usar el Servicio en cualquier momento desconectando la aplicación desde la configuración de Instagram. Nosotros podemos terminar el Servicio con aviso previo razonable, salvo incumplimiento grave de estas condiciones.</p>
    <h2>11. Cambios</h2>
    <p>Podemos modificar estas condiciones. La fecha de la última actualización aparecerá al inicio de esta página. El uso continuado del Servicio implica la aceptación de los cambios.</p>
    <h2>12. Ley aplicable</h2>
    <p>Estas condiciones se rigen por las leyes de la República de Colombia.</p>
  </LegalLayout>;
}

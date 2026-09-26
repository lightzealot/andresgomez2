import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  title: 'Instrucciones para la eliminación de datos | andygraph2',
  description: 'Cómo solicitar la eliminación de los datos recibidos por andygraph2 a través de Instagram.',
};

export default function EliminacionDatosPage() {
  return <LegalLayout title="Instrucciones para la eliminación de datos">
    <p>Aplicación: andygraph2 · Última actualización: <time dateTime="2026-09-26">26 de septiembre de 2026</time></p>
    <p>Puedes solicitar en cualquier momento la eliminación de los datos que nuestra aplicación haya recibido de ti a través de Instagram.</p>
    <h2>Opción 1: por correo electrónico</h2>
    <ol><li>Escribe a <a href="mailto:hello@andresgomez.store?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos">hello@andresgomez.store</a> con el asunto &quot;Solicitud de eliminación de datos&quot;.</li><li>Incluye tu nombre de usuario de Instagram.</li><li>Eliminaremos todos los registros asociados (comentarios, mensajes, identificadores) en un plazo máximo de 30 días y te confirmaremos por el mismo medio.</li></ol>
    <h2>Opción 2: si conectaste tu cuenta a la aplicación</h2>
    <ol><li>En Instagram, ve a <strong>Configuración → Apps y sitios web</strong>.</li><li>Selecciona la aplicación y elige <strong>Eliminar</strong>.</li><li>Al revocar el acceso, eliminamos el token y los datos de tu cuenta en un plazo máximo de 30 días.</li></ol>
    <h2>Qué se elimina</h2>
    <p>Tu identificador de Instagram, nombre de usuario, textos de comentarios y mensajes recibidos, y el historial de envíos. No conservamos copias una vez completada la eliminación, salvo lo que la ley nos obligue a mantener.</p>
    <p>Más información en nuestra <a href="/privacidad/">Política de Privacidad</a>.</p>
  </LegalLayout>;
}

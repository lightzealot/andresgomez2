import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://andresgomez.store/eliminacion-datos' },
  title: "Instrucciones para la eliminación de datos | Autochat",
  description: "Cómo eliminar tus datos de Autochat por correo o mensaje directo y desconectar una cuenta profesional.",
};

export default function EliminacionDatosPage() {
  return <LegalLayout title="Instrucciones para la eliminación de datos" englishTitle="Data Deletion Instructions" spanishContent={
    <section lang="es" id="espanol" aria-label="Instrucciones para la eliminación de datos">
    <p><strong>Última actualización:</strong> <time dateTime="2026-09-27">{"27 de septiembre de 2026"}</time></p>
    <p>{"Si interactuaste con @andyontrade (comentaste una palabra clave o tocaste un botón en un mensaje) y quieres que eliminemos tus datos, tienes estas opciones:"}</p>
    <h2>{"Opción 1 — Por correo"}</h2>
    <p>{"Escribe a "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{" con el asunto "}<strong>{"\"Eliminar mis datos\""}</strong>{" e indica tu "}<strong>{"nombre de usuario de Instagram"}</strong>{" (@usuario). Te confirmaremos la eliminación en un máximo de "}<strong>{"15 días hábiles"}</strong>{"."}</p>
    <h2>{"Opción 2 — Por mensaje directo"}</h2>
    <p>{"Envía un DM a "}<strong>{"@andyontrade"}</strong>{" con el texto "}<strong>{"\"Eliminar mis datos\""}</strong>{". Usaremos tu cuenta de Instagram para identificar tus datos y te confirmaremos por el mismo medio."}</p>
    <h2>{"Qué eliminamos"}</h2>
    <p>{"Tu registro de contacto y "}<strong>{"todas tus interacciones"}</strong>{": identificador y nombre de usuario de Instagram, textos de comentarios, registros de mensajes, clics y enlaces abiertos, etiquetas y notas. La eliminación es permanente. Solo conservamos un registro anónimo (un código irreversible, sin datos personales) que prueba que la solicitud se atendió. Los registros técnicos temporales se borran automáticamente en un máximo de 7 días."}</p>
    <h2>{"Si conectaste una cuenta profesional al panel"}</h2>
    <p>{"Puedes desconectarla desde el panel (Configuración → Desconectar), lo que borra de inmediato el token guardado, o solicitarlo por correo. También puedes quitar el acceso desde Instagram: Configuración → Seguridad → Apps y sitios web → Autochat / andygraph2 → Eliminar."}</p>
    <h2>{"Dejar de recibir mensajes sin borrar datos"}</h2>
    <p>{"Escríbenos \"no más mensajes\" y marcaremos tu contacto como \"no contactar\"."}</p>
    <p>{"Más información en nuestra Política de privacidad: "}<a href="/privacidad">{"https://andresgomez.store/privacidad"}</a>{""}</p>
    </section>
  } englishContent={
    <section lang="en" id="english" aria-label="Data Deletion Instructions">
    <p><strong>Last updated:</strong> <time dateTime="2026-09-27">{"September 27, 2026"}</time></p>
    <p>{"If you interacted with @andyontrade (commented a keyword or tapped a button in a message) and want us to delete your data, you have these options:"}</p>
    <h2>{"Option 1 — By email"}</h2>
    <p>{"Email "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{" with the subject "}<strong>{"\"Delete my data\""}</strong>{" and include your "}<strong>{"Instagram username"}</strong>{" (@username). We will confirm deletion within "}<strong>{"15 business days"}</strong>{"."}</p>
    <h2>{"Option 2 — By direct message"}</h2>
    <p>{"Send a DM to "}<strong>{"@andyontrade"}</strong>{" saying "}<strong>{"\"Delete my data\""}</strong>{". We will use your Instagram account to identify your data and confirm through the same channel."}</p>
    <h2>{"What we delete"}</h2>
    <p>{"Your contact record and "}<strong>{"all your interactions"}</strong>{": Instagram user ID and username, comment texts, message logs, clicks and opened links, tags and notes. Deletion is permanent. We only keep an anonymous record (an irreversible code with no personal data) proving the request was handled. Temporary technical logs are deleted automatically within 7 days."}</p>
    <h2>{"If you connected a professional account to the dashboard"}</h2>
    <p>{"You can disconnect it from the dashboard (Settings → Disconnect), which immediately deletes the stored token, or request it by email. You can also remove access from Instagram: Settings → Security → Apps and websites → Autochat / andygraph2 → Remove."}</p>
    <h2>{"Stop receiving messages without deleting data"}</h2>
    <p>{"Message us \"stop\" and we will mark your contact as \"do not contact\"."}</p>
    <p>{"More information in our Privacy Policy: "}<a href="/privacidad#english">{"https://andresgomez.store/privacidad#english"}</a>{""}</p>
    </section>
  } />;
}

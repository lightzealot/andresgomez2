import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  title: "Política de Privacidad | Autochat",
  description: "Política de privacidad de Autochat: datos tratados, uso, seguridad, conservación y derechos de las personas.",
};

export default function PrivacidadPage() {
  return <LegalLayout title="Política de Privacidad">
    <nav aria-label="Idioma / Language"><a href="#english" lang="en">English version</a></nav>
    <section lang="es" id="espanol" aria-label="Política de Privacidad">
    <p><strong>Última actualización:</strong> <time dateTime="2026-09-27">{"27 de septiembre de 2026"}</time></p>
    <h2>{"1. Quiénes somos"}</h2>
    <p>{"Esta política explica cómo "}<strong>{"Andrés Fernando Gómez Padilla"}</strong>{" (Barranquilla, Colombia), en adelante \"nosotros\", trata los datos personales en relación con "}<strong>{"Autochat"}</strong>{", un servicio que automatiza respuestas en Instagram para la cuenta profesional "}<strong>{"@andyontrade"}</strong>{" y un panel de administración disponible en "}<a href="https://ryu.andresgomez.store">{"https://ryu.andresgomez.store"}</a>{"."}{" Somos el responsable del tratamiento de los datos descritos aquí."}</p>
    <p>{"Contacto para cualquier asunto de privacidad: "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{"."}</p>
    <h2>{"2. Cómo funciona el servicio"}</h2>
    <p>{"Cuando una persona comenta una palabra clave en una publicación o reel de @andyontrade, el servicio puede:"}</p>
    <ol>
      <li>{"responder públicamente a su comentario;"}</li>
      <li>{"enviarle un mensaje directo (DM) con un botón;"}</li>
      <li>{"cuando la persona toca ese botón, enviarle un segundo mensaje con un enlace al recurso solicitado;"}</li>
      <li>{"si no abre el enlace, enviarle como máximo "}<strong>{"un"}</strong>{" recordatorio dentro de las 24 horas siguientes a su interacción."}</li>
    </ol>
    <p><strong>{"Solo escribimos a personas que iniciaron la interacción"}</strong>{" (comentando la palabra clave o tocando el botón). Nunca enviamos mensajes no solicitados, masivos ni publicitarios. Los mensajes son automatizados."}</p>
    <h2>{"3. Datos que tratamos"}</h2>
    <p><strong>{"a) De las personas que interactúan con @andyontrade en Instagram"}</strong>{" (recibidos a través de la API oficial de Instagram de Meta):"}</p>
    <ul>
      <li>{"identificador de usuario de Instagram con alcance de la app (IGSID) y nombre de usuario (@usuario);"}</li>
      <li>{"texto del comentario, identificador del comentario y de la publicación comentada;"}</li>
      <li>{"registro de la interacción: si se envió la respuesta pública y el mensaje, si tocó el botón, si abrió el enlace, si se envió el recordatorio, con sus fechas y horas;"}</li>
      <li>{"mensajes de error técnicos devueltos por Meta, si un envío falla;"}</li>
      <li>{"etiquetas, estado (por ejemplo \"recibió el recurso\") y notas internas que el administrador asigna para organizar sus contactos."}</li>
    </ul>
    <p>{"Cuando la persona abre el enlace del recurso, este pasa por una redirección de nuestro servidor que registra "}<strong>{"únicamente que el enlace fue abierto y cuándo"}</strong>{". No usamos cookies de seguimiento ni píxeles publicitarios."}</p>
    <p><strong>{"b) De las cuentas profesionales de Instagram que se conectan al panel"}</strong>{" (mediante \"Iniciar sesión con Instagram\"):"}</p>
    <ul>
      <li>{"identificador de la cuenta, nombre de usuario, nombre, foto de perfil y número de seguidores;"}</li>
      <li>{"token de acceso de Instagram, que se guarda "}<strong>{"cifrado"}</strong>{" (AES-256-GCM) y nunca se muestra en el navegador."}</li>
    </ul>
    <h2>{"c) De los usuarios del panel:"}</h2>
    <ul>
      <li>{"nombre de usuario y contraseña (almacenada solo como hash bcrypt);"}</li>
      <li>{"dirección IP y resultado de los intentos de inicio de sesión, para prevenir accesos no autorizados."}</li>
    </ul>
    <p>{"No solicitamos ni tratamos datos sensibles, datos de pago ni contraseñas de Instagram."}</p>
    <h2>{"4. Para qué usamos los datos"}</h2>
    <ul>
      <li>{"Entregar el recurso que la persona solicitó y ejecutar la automatización configurada."}</li>
      <li>{"Evitar envíos duplicados y respetar los límites de Meta (una respuesta privada por comentario; mensajes solo dentro de la ventana de 24 horas)."}</li>
      <li>{"Mostrar al administrador la actividad y métricas de sus automatizaciones."}</li>
      <li>{"Mantener la seguridad del servicio (validación de firmas de Meta, límites de intentos de acceso, detección de errores)."}</li>
    </ul>
    <p><strong>{"No vendemos, alquilamos ni compartimos datos personales con fines publicitarios"}</strong>{", ni los usamos para crear perfiles publicitarios o entrenar modelos de terceros."}</p>
    <h2>{"5. Base legal"}</h2>
    <p>{"Tratamos los datos para prestar el servicio que la persona solicita al comentar la palabra clave o tocar el botón (ejecución de su solicitud), por nuestro interés legítimo en operar y proteger el servicio, y en cumplimiento de la "}<strong>{"Ley 1581 de 2012"}</strong>{" de Colombia y sus decretos reglamentarios. Cuando aplique el Reglamento General de Protección de Datos (RGPD) u otra normativa, las bases equivalentes son la ejecución de la solicitud y el interés legítimo."}</p>
    <h2>{"6. Con quién compartimos los datos"}</h2>
    <p>{"Solo con proveedores que nos ayudan a operar el servicio, bajo acuerdos de confidencialidad y únicamente para ese fin:"}</p>
    <ul>
      <li><strong>{"Meta Platforms"}</strong>{" (Instagram): plataforma a través de la cual se reciben y envían los mensajes."}</li>
      <li><strong>{"Netlify, Inc."}</strong>{" (Estados Unidos): alojamiento del panel y de sus funciones."}</li>
      <li><strong>{"Hostinger"}</strong>{" (Boston, Estados Unidos): servidor donde se ejecutan la base de datos y el motor de automatización."}</li>
    </ul>
    <p>{"Podemos divulgar datos si una autoridad competente lo exige conforme a la ley. En ese caso revisamos la legalidad de la solicitud, divulgamos la mínima información necesaria y documentamos la solicitud y nuestra respuesta."}</p>
    <h2>{"7. Transferencias internacionales"}</h2>
    <p>{"Algunos proveedores están fuera de Colombia (por ejemplo, Estados Unidos). Solo trabajamos con proveedores que aplican medidas de seguridad adecuadas."}</p>
    <h2>{"8. Conservación"}</h2>
    <ul>
      <li>{"Contactos e interacciones: hasta "}<strong>{"12 meses"}</strong>{" desde la última interacción; luego se eliminan automáticamente."}</li>
      <li>{"Registros técnicos de eventos para evitar duplicados: 7 días."}</li>
      <li>{"Intentos de inicio de sesión del panel: 30 días."}</li>
      <li>{"Registros de ejecución del motor de automatización: hasta 7 días."}</li>
      <li>{"Cuentas conectadas y sus tokens: hasta que se desconectan desde el panel o se solicita su eliminación."}</li>
    </ul>
    <h2>{"9. Seguridad"}</h2>
    <p>{"La base de datos está en una red privada, no expuesta a internet. Los tokens de acceso se cifran. El panel usa conexión cifrada (HTTPS), contraseñas con hash, cookies de sesión seguras y límite de intentos de acceso. Verificamos criptográficamente que los eventos recibidos provengan de Meta."}</p>
    <h2>{"10. Tus derechos"}</h2>
    <p>{"Puedes solicitar en cualquier momento "}<strong>{"conocer, actualizar, rectificar o eliminar"}</strong>{" tus datos, revocar tu autorización y presentar quejas ante la "}<strong>{"Superintendencia de Industria y Comercio (SIC)"}</strong>{" de Colombia o la autoridad de tu país. Para eliminar tus datos sigue las instrucciones de "}<a href="/eliminacion-datos/">{"https://andresgomez.store/eliminacion-datos/"}</a>{""}{" o escríbenos a "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{". Respondemos en un máximo de "}<strong>{"15 días hábiles"}</strong>{"."}</p>
    <p>{"También puedes dejar de recibir mensajes en cualquier momento: basta con no volver a comentar la palabra clave, escribirnos \"no más mensajes\" o bloquear la cuenta. Marcamos tu contacto como \"no contactar\" y el servicio no vuelve a escribirte."}</p>
    <p>{"Puedes revisar y quitar el acceso de apps a tu cuenta de Instagram desde la configuración de Instagram (Configuración → Seguridad → Apps y sitios web)."}</p>
    <h2>{"11. Menores de edad"}</h2>
    <p>{"El servicio no está dirigido a menores de 13 años (o la edad mínima que exija Instagram en tu país). Si sabemos que tratamos datos de un menor sin la autorización correspondiente, los eliminamos."}</p>
    <h2>{"12. Cambios"}</h2>
    <p>{"Si cambiamos esta política, actualizaremos la fecha de arriba. Los cambios importantes se anunciarán en esta página."}</p>
    </section>
    <section lang="en" id="english" aria-label="Privacy Policy">
      <h2>{"Privacy Policy"}</h2>
      <p><a href="#espanol" lang="es">Versión en español</a></p>
    <p><strong>Last updated:</strong> <time dateTime="2026-09-27">{"September 27, 2026"}</time></p>
    <h2>{"1. Who we are"}</h2>
    <p>{"This policy explains how "}<strong>{"Andrés Fernando Gómez Padilla"}</strong>{" (Barranquilla, Colombia) (\"we\") processes personal data in connection with "}<strong>{"Autochat"}</strong>{", a service that automates Instagram replies for the professional account "}<strong>{"@andyontrade"}</strong>{", and an admin dashboard at "}<a href="https://ryu.andresgomez.store">{"https://ryu.andresgomez.store"}</a>{"."}{" We are the data controller for the data described here."}</p>
    <p>{"Privacy contact: "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{"."}</p>
    <h2>{"2. How the service works"}</h2>
    <p>{"When someone comments a keyword on a post or reel by @andyontrade, the service may:"}</p>
    <ol>
      <li>{"reply publicly to the comment;"}</li>
      <li>{"send them a direct message (DM) with a button;"}</li>
      <li>{"when they tap the button, send a second message with a link to the requested resource;"}</li>
      <li>{"if they don't open the link, send at most "}<strong>{"one"}</strong>{" reminder within 24 hours of their interaction."}</li>
    </ol>
    <p><strong>{"We only message people who started the interaction"}</strong>{" (by commenting the keyword or tapping the button). We never send unsolicited, bulk or promotional messages. Messages are automated."}</p>
    <h2>{"3. Data we process"}</h2>
    <p><strong>{"a) People who interact with @andyontrade on Instagram"}</strong>{" (received through Meta's official Instagram API):"}</p>
    <ul>
      <li>{"app-scoped Instagram user ID (IGSID) and username;"}</li>
      <li>{"comment text, comment ID and ID of the commented post;"}</li>
      <li>{"interaction log: whether the public reply and DM were sent, whether the button was tapped, whether the link was opened, whether the reminder was sent, with dates and times;"}</li>
      <li>{"technical error messages returned by Meta if a delivery fails;"}</li>
      <li>{"tags, status (e.g. \"received resource\") and internal notes the administrator assigns to organize contacts."}</li>
    </ul>
    <p>{"When the resource link is opened, it goes through a redirect on our server that records "}<strong>{"only that the link was opened and when"}</strong>{". We do not use tracking cookies or advertising pixels."}</p>
    <p><strong>{"b) Instagram professional accounts connected to the dashboard"}</strong>{" (via \"Log in with Instagram\"):"}</p>
    <ul>
      <li>{"account ID, username, name, profile picture and followers count;"}</li>
      <li>{"Instagram access token, stored "}<strong>{"encrypted"}</strong>{" (AES-256-GCM) and never exposed to the browser."}</li>
    </ul>
    <h2>{"c) Dashboard users:"}</h2>
    <ul>
      <li>{"username and password (stored only as a bcrypt hash);"}</li>
      <li>{"IP address and outcome of login attempts, to prevent unauthorized access."}</li>
    </ul>
    <p>{"We do not request or process sensitive data, payment data or Instagram passwords."}</p>
    <h2>{"4. How we use data"}</h2>
    <ul>
      <li>{"To deliver the resource the person requested and run the configured automation."}</li>
      <li>{"To avoid duplicate messages and respect Meta's limits (one private reply per comment; messages only within the 24-hour window)."}</li>
      <li>{"To show the administrator the activity and metrics of their automations."}</li>
      <li>{"To keep the service secure (Meta signature verification, login rate limiting, error detection)."}</li>
    </ul>
    <p><strong>{"We do not sell, rent or share personal data for advertising"}</strong>{", nor use it to build advertising profiles or train third-party models."}</p>
    <h2>{"5. Legal basis"}</h2>
    <p>{"We process data to provide the service the person requests by commenting the keyword or tapping the button (performance of their request), for our legitimate interest in operating and protecting the service, and in compliance with Colombia's "}<strong>{"Law 1581 of 2012"}</strong>{". Where the GDPR or similar laws apply, the equivalent bases are performance of the request and legitimate interest."}</p>
    <h2>{"6. Who we share data with"}</h2>
    <p>{"Only with providers that help us operate the service, under confidentiality obligations and only for that purpose:"}</p>
    <ul>
      <li><strong>{"Meta Platforms"}</strong>{" (Instagram): the platform through which messages are received and sent."}</li>
      <li><strong>{"Netlify, Inc."}</strong>{" (United States): hosting of the dashboard and its functions."}</li>
      <li><strong>{"Hostinger"}</strong>{" (Boston, United States): server running the database and automation engine."}</li>
    </ul>
    <p>{"We may disclose data if required by a competent authority under applicable law. In that case we review the legality of the request, disclose the minimum information necessary and document the request and our response."}</p>
    <h2>{"7. International transfers"}</h2>
    <p>{"Some providers are located outside Colombia (e.g. the United States). We only work with providers that apply appropriate security measures."}</p>
    <h2>{"8. Retention"}</h2>
    <ul>
      <li>{"Contacts and interactions: up to "}<strong>{"12 months"}</strong>{" from the last interaction, then deleted automatically."}</li>
      <li>{"Technical event records used to prevent duplicates: 7 days."}</li>
      <li>{"Dashboard login attempts: 30 days."}</li>
      <li>{"Automation engine execution logs: up to 7 days."}</li>
      <li>{"Connected accounts and their tokens: until disconnected from the dashboard or deletion is requested."}</li>
    </ul>
    <h2>{"9. Security"}</h2>
    <p>{"The database runs on a private network, not exposed to the internet. Access tokens are encrypted. The dashboard uses HTTPS, hashed passwords, secure session cookies and login rate limiting. We cryptographically verify that incoming events come from Meta."}</p>
    <h2>{"10. Your rights"}</h2>
    <p>{"You may at any time request to "}<strong>{"access, update, correct or delete"}</strong>{" your data, withdraw your authorization and file complaints with Colombia's "}<strong>{"Superintendencia de Industria y Comercio (SIC)"}</strong>{" or your local authority. To delete your data follow the instructions at "}<a href="/eliminacion-datos/#english">{"https://andresgomez.store/eliminacion-datos/#english"}</a>{""}{" or email "}<strong><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></strong>{". We respond within "}<strong>{"15 business days"}</strong>{"."}</p>
    <p>{"You can stop receiving messages at any time: simply don't comment the keyword again, message us \"stop\", or block the account. We mark your contact as \"do not contact\" and the service will not message you again."}</p>
    <p>{"You can review and remove app access to your Instagram account in Instagram settings (Settings → Security → Apps and websites)."}</p>
    <h2>{"11. Children"}</h2>
    <p>{"The service is not directed to children under 13 (or the minimum age required by Instagram in your country). If we learn we processed a minor's data without proper authorization, we delete it."}</p>
    <h2>{"12. Changes"}</h2>
    <p>{"If we change this policy we will update the date above. Material changes will be announced on this page."}</p>
    </section>
  </LegalLayout>;
}

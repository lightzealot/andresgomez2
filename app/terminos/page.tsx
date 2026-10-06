import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  alternates: { canonical: 'https://andresgomez.store/condiciones-del-servicio' },
  title: "Términos del Servicio | Autochat",
  description: "Términos de uso de Autochat y su panel de administración para automatizaciones de Instagram.",
};

export default function TerminosPage() {
  return <LegalLayout title="Términos del Servicio" englishTitle="Terms of Service" spanishContent={
    <section lang="es" id="espanol" aria-label="Términos del Servicio">
    <p><strong>Última actualización:</strong> <time dateTime="2026-10-06">{"6 de octubre de 2026"}</time></p>
    <h2>{"1. Servicio"}</h2>
    <p>{"Autochat automatiza respuestas a comentarios y mensajes directos en Instagram para la cuenta profesional @andresgomez.ia y ofrece un panel de administración para configurar esas automatizaciones. Lo presta Andrés Fernando Gómez Padilla (Barranquilla, Colombia)."}</p>
    <h2>{"2. Uso del panel"}</h2>
    <p>{"El acceso al panel está restringido a usuarios autorizados. Eres responsable de mantener la confidencialidad de tus credenciales y de toda actividad realizada con ellas."}</p>
    <h2>{"3. Conexión de cuentas de Instagram"}</h2>
    <p>{"Al conectar una cuenta profesional mediante \"Iniciar sesión con Instagram\", autorizas al servicio a usar los permisos concedidos (perfil básico, gestión de comentarios y gestión de mensajes) solo para las funciones descritas. Puedes desconectar la cuenta en cualquier momento desde el panel o desde la configuración de Instagram."}</p>
    <h2>{"4. Uso aceptable"}</h2>
    <p>{"No puedes usar el servicio para enviar spam, mensajes no solicitados o masivos, contenido ilegal, engañoso, ofensivo o que infrinja derechos de terceros, ni para eludir las políticas de Meta. El servicio solo responde a personas que iniciaron la interacción."}</p>
    <h2>{"5. Cumplimiento de las políticas de Meta"}</h2>
    <p>{"El uso del servicio está sujeto también a las Condiciones de uso de Instagram y a las Políticas de la plataforma de Meta. Podemos pausar automatizaciones si Meta muestra advertencias o limitaciones."}</p>
    <h2>{"6. Recursos enlazados"}</h2>
    <p>{"Los recursos que se entregan por enlace son responsabilidad del titular de la cuenta que los configura."}</p>
    <h2>{"7. Disponibilidad"}</h2>
    <p>{"El servicio depende de plataformas de terceros (Meta, proveedores de alojamiento). No garantizamos disponibilidad ininterrumpida ni que los mensajes se entreguen siempre, por ejemplo si Meta limita o rechaza un envío."}</p>
    <h2>{"8. Limitación de responsabilidad"}</h2>
    <p>{"En la medida permitida por la ley, el servicio se ofrece \"tal cual\" y no somos responsables por daños indirectos derivados de su uso o de fallos de plataformas de terceros."}</p>
    <h2>{"9. Privacidad"}</h2>
    <p>{"El tratamiento de datos personales se rige por nuestra Política de privacidad: "}<a href="/privacidad">{"https://andresgomez.store/privacidad"}</a>{""}</p>
    <h2>{"10. Terminación"}</h2>
    <p>{"Podemos suspender el acceso al panel ante un uso que incumpla estos términos. Puedes dejar de usar el servicio y solicitar la eliminación de tus datos en cualquier momento."}</p>
    <h2>{"11. Cambios"}</h2>
    <p>{"Podemos actualizar estos términos; la fecha de arriba indica la última versión."}</p>
    <h2>{"12. Ley aplicable"}</h2>
    <p>{"Estos términos se rigen por las leyes de la República de Colombia."}</p>
    <h2>{"13. Contacto"}</h2>
    <p><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></p>
    </section>
  } englishContent={
    <section lang="en" id="english" aria-label="Terms of Service">
    <p><strong>Last updated:</strong> <time dateTime="2026-10-06">{"October 6, 2026"}</time></p>
    <h2>{"1. Service"}</h2>
    <p>{"Autochat automates replies to comments and direct messages on Instagram for the professional account @andresgomez.ia and provides an admin dashboard to configure those automations. It is provided by Andrés Fernando Gómez Padilla (Barranquilla, Colombia)."}</p>
    <h2>{"2. Dashboard use"}</h2>
    <p>{"Dashboard access is restricted to authorized users. You are responsible for keeping your credentials confidential and for all activity under them."}</p>
    <h2>{"3. Connecting Instagram accounts"}</h2>
    <p>{"By connecting a professional account through \"Log in with Instagram\", you authorize the service to use the granted permissions (basic profile, comment management and message management) only for the functions described. You can disconnect the account at any time from the dashboard or from Instagram settings."}</p>
    <h2>{"4. Acceptable use"}</h2>
    <p>{"You may not use the service to send spam, unsolicited or bulk messages, illegal, misleading or offensive content, content that infringes third-party rights, or to circumvent Meta's policies. The service only replies to people who started the interaction."}</p>
    <h2>{"5. Meta policies"}</h2>
    <p>{"Use of the service is also subject to Instagram's Terms of Use and Meta Platform Terms and Developer Policies. We may pause automations if Meta shows warnings or restrictions."}</p>
    <h2>{"6. Linked resources"}</h2>
    <p>{"Resources delivered by link are the responsibility of the account holder who configures them."}</p>
    <h2>{"7. Availability"}</h2>
    <p>{"The service depends on third-party platforms (Meta, hosting providers). We do not guarantee uninterrupted availability or that every message is delivered, e.g. if Meta limits or rejects a delivery."}</p>
    <h2>{"8. Limitation of liability"}</h2>
    <p>{"To the extent permitted by law, the service is provided \"as is\" and we are not liable for indirect damages arising from its use or from third-party platform failures."}</p>
    <h2>{"9. Privacy"}</h2>
    <p>{"Personal data processing is governed by our Privacy Policy: "}<a href="/privacidad#english">{"https://andresgomez.store/privacidad#english"}</a>{""}</p>
    <h2>{"10. Termination"}</h2>
    <p>{"We may suspend dashboard access for use that breaches these terms. You may stop using the service and request deletion of your data at any time."}</p>
    <h2>{"11. Changes"}</h2>
    <p>{"We may update these terms; the date above shows the latest version."}</p>
    <h2>{"12. Governing law"}</h2>
    <p>{"These terms are governed by the laws of the Republic of Colombia."}</p>
    <h2>{"13. Contact"}</h2>
    <p><a href="mailto:hello@andresgomez.store">{"hello@andresgomez.store"}</a></p>
    </section>
  } />;
}

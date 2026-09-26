import type { Metadata } from 'next';
import LegalLayout from '../legal-layout';

export const metadata: Metadata = {
  title: 'Política de Privacidad | andygraph2',
  description: 'Política de privacidad de andygraph2 y los servicios de automatización de mensajes de Instagram de andresgomez.store.',
};

export default function PrivacidadPage() {
  return <LegalLayout title="Política de Privacidad">
    <p>Última actualización: <time dateTime="2026-09-26">26 de septiembre de 2026</time></p>
    <h2>1. Responsable del tratamiento</h2>
    <p>Andrés Fernando Gómez Padilla, Barranquilla, Colombia (en adelante, &quot;nosotros&quot;), es responsable del tratamiento de los datos descritos en esta política, en relación con la aplicación &quot;andygraph2&quot; y los servicios de automatización de mensajes de Instagram ofrecidos a través de andresgomez.store.</p>
    <p>Contacto: <a href="mailto:hello@andresgomez.store">hello@andresgomez.store</a></p>
    <h2>2. Qué datos recopilamos</h2>
    <p>Cuando un usuario comenta en una publicación o envía un mensaje directo a una cuenta de Instagram Business o Creator que utiliza nuestro servicio, recibimos a través de la API oficial de Instagram (Meta) únicamente:</p>
    <ul><li>El identificador de Instagram con alcance de la aplicación (IGSID) y el nombre de usuario.</li><li>El texto del comentario o mensaje y el identificador de la publicación.</li><li>La fecha y hora de la interacción.</li></ul>
    <p>De las cuentas que conectan su perfil a la aplicación, almacenamos el identificador de la cuenta y el token de acceso otorgado por Meta. No recopilamos contraseñas, datos de pago ni información de personas que no hayan interactuado con la cuenta.</p>
    <h2>3. Para qué usamos los datos</h2>
    <ul><li>Detectar palabras clave en comentarios y enviar, por mensaje directo, el recurso que el usuario solicitó.</li><li>Evitar envíos duplicados a la misma persona.</li><li>Generar métricas agregadas de funcionamiento para la cuenta propietaria.</li></ul>
    <p>No usamos los datos para publicidad de terceros, no creamos perfiles y no enviamos mensajes a personas que no hayan iniciado la interacción.</p>
    <h2>4. Con quién compartimos los datos</h2>
    <p>No vendemos ni alquilamos datos personales. Los datos solo se comparten con:</p>
    <ul><li>Meta Platforms, Inc., a través de su API oficial, para enviar los mensajes.</li><li>El proveedor de servidores donde se aloja el servicio, bajo medidas de seguridad adecuadas.</li><li>Autoridades competentes, cuando la ley lo exija.</li></ul>
    <h2>5. Conservación</h2>
    <p>Conservamos los registros de interacción por un máximo de 12 meses, o hasta que el usuario o la cuenta propietaria soliciten su eliminación, lo que ocurra primero. Los tokens de acceso se eliminan cuando la cuenta se desconecta de la aplicación.</p>
    <h2>6. Seguridad</h2>
    <p>Aplicamos cifrado en tránsito (HTTPS), control de acceso restringido al servidor y almacenamiento protegido de credenciales.</p>
    <h2>7. Derechos del titular</h2>
    <p>De acuerdo con la Ley 1581 de 2012 de Colombia y demás normas aplicables, puedes conocer, actualizar, rectificar y solicitar la eliminación de tus datos, así como revocar la autorización otorgada. Para ejercer estos derechos escribe a <a href="mailto:hello@andresgomez.store">hello@andresgomez.store</a>. Responderemos en los plazos que establece la ley.</p>
    <h2>8. Eliminación de datos</h2>
    <p>Consulta las instrucciones en <a href="/eliminacion-datos/">andresgomez.store/eliminacion-datos</a>.</p>
    <h2>9. Menores de edad</h2>
    <p>El servicio no está dirigido a menores de 18 años y no recopilamos datos de ellos de forma intencional.</p>
    <h2>10. Cambios a esta política</h2>
    <p>Podemos actualizar esta política. La fecha de la última actualización aparecerá siempre al inicio de esta página.</p>
  </LegalLayout>;
}

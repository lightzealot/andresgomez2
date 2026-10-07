/* oxlint-disable next/no-html-link-for-pages -- Native navigation supports static routes and section anchors. */
import Image from 'next/image';
import { Workflow, MessagesSquare, ChartNoAxesCombined, FileText } from 'lucide-react';
import { CorporateHeader } from '@/components/CorporateHeader';
import { CorporateNewsletter } from '@/components/CorporateNewsletter';
import { CorporateFooter } from '@/components/CorporateFooter';
import styles from './business.module.css';
import { diagnosticUrl } from '@/lib/site-links';

const processes = [
  { icon: Workflow, title: 'Información entre sistemas', text: 'Tu equipo copia los mismos datos en hojas de cálculo, correo y CRM.', tag: 'Menos trabajo manual' },
  { icon: FileText, title: 'Propuestas y reportes', text: 'Preparar documentos repetitivos ocupa horas que podrían dedicarse a clientes.', tag: 'Menos tiempo de preparación' },
  { icon: MessagesSquare, title: 'Seguimiento a clientes', text: 'Los pendientes dependen de la memoria de una persona y cuesta darles continuidad.', tag: 'Respuestas más consistentes' },
  { icon: ChartNoAxesCombined, title: 'Documentos e información', text: 'Buscar, clasificar y revisar información frena decisiones y genera retrabajo.', tag: 'Menos errores y retrabajo' },
];
const steps = [
  ['Diagnóstico', 'Entendemos el proceso actual y cuánto tiempo y trabajo requiere.'],
  ['Priorización', 'Elegimos dónde empezar según impacto, esfuerzo y retorno esperado.'],
  ['Optimización', 'Simplificamos pasos y resolvemos cuellos de botella.'],
  ['Implementación', 'Integramos IA o automatización donde aporte valor, con permisos y revisión definidos.'],
  ['Medición', 'Comparamos el antes y después: tiempo, errores y capacidad operativa.'],
];
const questions = [
  ['¿Es para mi empresa?', 'Trabajo con empresas de servicios que ya tienen clientes y procesos en marcha. Si tu equipo dedica demasiado tiempo a tareas repetitivas, podemos evaluar dónde empezar.'],
  ['¿Necesitamos cambiar nuestras herramientas?', 'Primero revisamos lo que ya utilizas. Cualquier cambio se evalúa según su utilidad, costo y complejidad.'],
  ['¿Y si el proceso no necesita IA?', 'La mejora puede venir de simplificar el flujo o conectar herramientas. Aplicamos IA cuando su utilidad justifica el esfuerzo.'],
  ['¿Cuánto dura y cuánto cuesta el Sprint?', 'El alcance, el plazo y la inversión se definen después de revisar el proceso y las integraciones necesarias.'],
];

export default function Home() {
  return <div className={styles.site}><CorporateHeader/><main id="contenido">
    <section className={styles.hero} aria-labelledby="presentacion"><div className={styles.heroInner}><div>
      <p className={styles.eyebrow}>IA APLICADA A EMPRESAS DE SERVICIOS</p><h1 id="presentacion">Andrés Gómez<span>.</span></h1>
      <p className={styles.statement}>Menos trabajo manual.<br/>Más capacidad para tu empresa.</p>
      <p className={styles.description}>Ayudo a optimizar tus procesos y a aplicar IA y automatización donde aporten valor. Empezamos por un proceso y medimos qué mejora.</p>
      <div className={styles.heroDiagnostic}><span>ENCUENTRA POR DÓNDE EMPEZAR</span><a className={styles.primary} href={diagnosticUrl}>Evaluar mi empresa</a><p>Un diagnóstico inicial para identificar oportunidades en tu operación.</p></div>
      <a className={styles.secondary} href="#enfoque">Cómo trabajo</a>
    </div><figure className={styles.portrait}><div className={styles.portraitImage}><Image src="/p4k.jpg" alt="Andrés Gómez" fill sizes="(max-width: 800px) 90vw, 430px" priority unoptimized/></div><figcaption><span>ANDRÉS GÓMEZ · @ANDRESGOMEZ.IA</span><strong>IA CON CRITERIO DE NEGOCIO</strong></figcaption></figure></div></section>
    <div className={styles.disciplines}><span>EL PROCESO MARCA EL CAMINO</span><ul><li>Menos tareas manuales</li><li>Menos retrabajo</li><li>Resultados medibles</li></ul></div>
    <section id="soluciones" className={styles.section} aria-labelledby="soluciones-titulo"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / OPORTUNIDADES</p><h2 id="soluciones-titulo">¿Dónde se van las horas de tu equipo?</h2></div><p>Estas son algunas situaciones que podemos analizar. El diagnóstico permite decidir qué conviene mejorar primero.</p></div><div className={styles.solutions}>{processes.map(({icon: Icon,title,text,tag},index)=><article className={styles.solution} key={title}><div className={styles.solutionTop}><Icon size={25} strokeWidth={1.5} aria-hidden="true"/><span>0{index+1}</span></div><h3>{title}</h3><p>{text}</p><div className={styles.tags}><span>{tag}</span></div></article>)}</div></section>
    <section id="enfoque" className={`${styles.section} ${styles.approach}`} aria-labelledby="enfoque-titulo"><div><p className={styles.eyebrow}>02 / MÉTODO</p><h2 id="enfoque-titulo">Optimiza primero.<br/>Automatiza después.</h2><p className={styles.description}>Añadir IA a un proceso confuso puede multiplicar el problema. Primero mejoramos la forma de trabajar; después elegimos la tecnología que merece la pena implementar.</p></div><ol className={styles.steps}>{steps.map(([title,text],index)=><li key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></section>
    <section id="sprint" className={`${styles.section} ${styles.diagnostic}`} aria-labelledby="sprint-titulo"><div><p className={styles.eyebrow}>03 / EMPEZAR CON FOCO</p><h2 id="sprint-titulo">Un proceso. Una mejora que podamos medir.</h2><p className={styles.description}>En el Sprint de Eficiencia Operativa con IA seleccionamos un proceso, lo optimizamos e implementamos las mejoras acordadas. Comparamos el resultado con el punto de partida y decidimos dónde seguir.</p></div><div className={styles.diagnosticAction}><span>SPRINT DE EFICIENCIA OPERATIVA CON IA</span><a className={styles.primary} href={diagnosticUrl}>Evaluar mi empresa</a><p>El alcance se define según el proceso, las herramientas y el resultado que buscamos.</p></div></section>
    <section className={`${styles.section} ${styles.approach}`} aria-labelledby="andres-titulo"><div><p className={styles.eyebrow}>04 / CRITERIO TÉCNICO</p><h2 id="andres-titulo">Entender tu operación.<br/>Cuidar la implementación.</h2></div><div><p className={styles.description}>Mi experiencia combina ingeniería de sistemas, redes, ciberseguridad e inteligencia artificial. Esa base me permite evaluar procesos, integraciones y el manejo de datos con criterio técnico.</p><p className={styles.description}>Trabajamos con objetivos claros, permisos definidos y documentación para que tu equipo pueda incorporar la mejora a su operación.</p></div></section>
    <section className={styles.section} aria-labelledby="preguntas-titulo"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>05 / PREGUNTAS FRECUENTES</p><h2 id="preguntas-titulo">Antes de empezar.</h2></div></div><div className={styles.faq}>{questions.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section id="contacto" className={styles.contact} aria-labelledby="contacto-titulo"><div className={styles.contactInner}><div className={styles.contactCopy}><p className={styles.eyebrow}>EL SIGUIENTE PASO</p><h2 id="contacto-titulo">Encuentra el primer proceso que vale la pena mejorar.</h2><p>Empieza con un diagnóstico de tu empresa. Revisemos dónde hay trabajo manual y qué oportunidad merece atención.</p></div><div className={styles.contactActions}><a className={styles.primary} href={diagnosticUrl}>Evaluar mi empresa</a><a className={styles.email} href="mailto:hello@andresgomez.store">HELLO@ANDRESGOMEZ.STORE</a></div></div></section>
    <div className={styles.newsletterSection}><CorporateNewsletter/></div>
  </main><CorporateFooter/></div>;
}

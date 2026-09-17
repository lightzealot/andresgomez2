import { AlertTriangle, ArrowLeft, Check, Lightbulb, Sparkles } from 'lucide-react';

const examples = [
  {
    number: '01',
    title: 'Escribir un correo',
    basic: 'Hazme un correo.',
    improved: 'Un cliente lleva cinco días sin responder una propuesta que le envié. Escribe un correo breve, amable y profesional para hacer seguimiento. No quiero que suene insistente y debe terminar con una pregunta clara.',
  },
  {
    number: '02',
    title: 'Crear contenido',
    improved: 'Tengo una cuenta de Instagram donde enseño inteligencia artificial a personas que están comenzando. Dame cinco ideas de Reels fáciles de grabar. Para cada una incluye un hook corto, la enseñanza principal y un CTA. Usa un lenguaje sencillo y evita tecnicismos.',
  },
  {
    number: '03',
    title: 'Aprender un tema',
    improved: 'Estoy comenzando a aprender inteligencia artificial y todavía no entiendo qué es un modelo de lenguaje. Explícamelo con palabras sencillas, usando una comparación de la vida diaria y un ejemplo práctico. Limita la respuesta a cinco párrafos.',
  },
  {
    number: '04',
    title: 'Organizar una tarea',
    improved: 'Tengo que preparar una presentación de diez minutos para explicar una idea de negocio. Ayúdame a organizarla en cinco secciones. Para cada sección indica el mensaje principal y lo que debería mostrar en pantalla.',
  },
];

const followUps = [
  'Hazlo más corto y directo.',
  'Explícalo con palabras más sencillas.',
  'Dame un ejemplo aplicado a mi caso.',
  'Cambia el tono para que suene más cercano.',
  'Organízalo en pasos.',
  'Dame tres opciones diferentes.',
  'Elimina las repeticiones.',
  '¿Qué información te falta para mejorar la respuesta?',
  'Revisa tu respuesta y dime qué podría estar equivocado o incompleto.',
];

const checklist = [
  'Expliqué la situación.',
  'Dije exactamente qué necesito.',
  'Indiqué cómo quiero recibir la respuesta.',
  'Incluí los datos que pueden cambiar el resultado.',
  'Evité compartir información privada o confidencial.',
];

export default function BetterAiResultsPage() {
  return <main className="guide-page">
    <header className="guide-topbar">
      <a href="/recursos" className="guide-back"><ArrowLeft size={16}/> Recursos</a>
      <span>AndresGomez[OS]</span>
    </header>

    <article className="guide-article">
      <header className="guide-hero">
        <p className="guide-kicker"><Sparkles size={15}/> Guía práctica</p>
        <h1>Plantilla para obtener mejores resultados con IA</h1>
        <p className="guide-byline">Por Andrés Gómez · @andyontrade</p>
        <p className="guide-intro">No necesitas palabras mágicas ni instrucciones complicadas. La IA responde mejor cuando entiende tres cosas:</p>
        <div className="guide-pillars">
          <div><span>01</span><strong>Situación</strong><p>¿Qué está pasando?</p></div>
          <div><span>02</span><strong>Objetivo</strong><p>¿Qué necesitas conseguir?</p></div>
          <div><span>03</span><strong>Formato</strong><p>¿Cómo quieres recibir la respuesta?</p></div>
        </div>
      </header>

      <section className="guide-section">
        <div className="guide-section-title"><span>01</span><div><p>Para usar ahora</p><h2>Plantilla principal</h2></div></div>
        <div className="prompt-template">
          <p><strong>Estoy en esta situación:</strong><br/><span>[Explica brevemente qué está pasando e incluye los datos importantes].</span></p>
          <p><strong>Necesito conseguir:</strong><br/><span>[Describe con claridad el resultado que esperas].</span></p>
          <p><strong>Quiero que la respuesta sea:</strong><br/><span>[Indica el formato, el tono, la extensión y el nivel de dificultad].</span></p>
          <p>Antes de responder, si te falta un dato importante, hazme las preguntas necesarias.</p>
        </div>
        <div className="quick-template"><span>VERSIÓN RÁPIDA</span><p><strong>Contexto:</strong> [¿Qué está pasando?]</p><p><strong>Objetivo:</strong> [¿Qué necesitas conseguir?]</p><p><strong>Formato:</strong> [¿Cómo quieres recibir la respuesta?]</p></div>
      </section>

      <section className="guide-section">
        <div className="guide-section-title"><span>02</span><div><p>Casos de uso</p><h2>Ejemplos</h2></div></div>
        <div className="guide-examples">
          {examples.map(example => <article className="guide-example" key={example.number}>
            <div><span>{example.number}</span><h3>{example.title}</h3></div>
            {example.basic && <p className="example-basic"><small>INSTRUCCIÓN BÁSICA</small>“{example.basic}”</p>}
            <p><small>INSTRUCCIÓN MEJORADA</small>“{example.improved}”</p>
          </article>)}
        </div>
      </section>

      <section className="guide-section guide-split">
        <div>
          <div className="guide-section-title"><span>03</span><div><p>Itera</p><h2>Si la primera respuesta no te convence</h2></div></div>
          <p className="guide-copy">No necesitas comenzar otra conversación. Continúa con frases como:</p>
          <ul className="follow-up-list">{followUps.map(item => <li key={item}><Lightbulb size={15}/><span>{item}</span></li>)}</ul>
        </div>
        <div>
          <div className="guide-section-title"><span>04</span><div><p>Antes de enviar</p><h2>Lista de verificación</h2></div></div>
          <ul className="check-list">{checklist.map(item => <li key={item}><Check size={15}/><span>{item}</span></li>)}</ul>
          <aside className="privacy-note"><AlertTriangle size={19}/><div><strong>Importante</strong><p>No compartas contraseñas, documentos de identidad, datos bancarios, información médica sensible, secretos empresariales ni información privada de otras personas.</p><p>La IA puede equivocarse. Verifica nombres, cifras, fechas y decisiones importantes antes de usar la respuesta.</p></div></aside>
        </div>
      </section>

      <footer className="guide-footer">
        <p>Una buena instrucción no tiene que sonar técnica. Solo debe ayudar a la IA a entender tu situación, tu objetivo y el resultado que esperas.</p>
        <strong>Pregunta · Aprende · Crea · Mejora</strong>
        <span>Andrés Gómez · @andyontrade</span>
      </footer>
    </article>
  </main>;
}

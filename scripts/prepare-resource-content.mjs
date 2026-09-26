import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = name => readFileSync(resolve(root, 'public', name), 'utf8').replace(/\r/g, '');
const sentenceCase = text => (text.charAt(0).toLocaleUpperCase('es') + text.slice(1).toLocaleLowerCase('es')).replace(/\bia\b/g, 'IA').replace(/google flow/g, 'Google Flow').replace(/reel\b/g, 'Reel').replace(/^¿([a-záéíóúñ])/, (_, letter) => '¿' + letter.toLocaleUpperCase('es'));

// Convert the legacy text layouts to semantic Markdown, keeping the full content.
function cleanText(source) {
  const lines = source.split('\n');
  const out = [];
  let prompt = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) { out.push(''); continue; }
    if (/^[+][\-]+[+]$/.test(line)) {
      out.push(prompt ? '```' : '```text'); prompt = !prompt; continue;
    }
    if (/^[\u2500-\u257f\s+\-▼]+$/.test(line)) continue;
    line = line.replace(/^[║│|]\s*/, '').replace(/\s*[║│|]$/, '').trim();
    if (!line || /A N D R E S G O M E Z|FIN DE LA GUÍA|^DESDE CERO$/.test(line)) continue;
    if (prompt) { out.push(line); continue; }
    if (/^\d+\s*·/.test(line)) {
      out.push('\n### ' + sentenceCase(line.replace(/^\d+\s*·\s*/, '')) + '\n'); continue;
    }
    if (/^\d{2}\s+/.test(line) && line === line.toLocaleUpperCase('es')) {
      out.push('\n## ' + sentenceCase(line.replace(/^[\[ ]*\d+[\] ]+/, '')) + '\n'); continue;
    }
    if (line === line.toLocaleUpperCase('es') && /[A-ZÁÉÍÓÚÑ]/.test(line) && !/^\[|→/.test(line)) {
      out.push('\n## ' + sentenceCase(line) + '\n'); continue;
    }
    if (/^\[ \]|^→/.test(line)) line = '- ' + line.replace(/^\[ \]\s*|^→\s*/, '');
    out.push(line);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

const data = {};
data['sistema-60-minutos-contenido-ia'] = read('sistema-60-minutos-contenido-ia.md').replace(/^# .*\n\n/, '');
data['mejores-resultados-ia'] = cleanText(read('3.txt'))
  .replace(/^## Plantilla para obtener mejores resultados con IA\n\n/, '')
  .replace(/\n\s*01\s+SITUACIÓN.*\n\s*02\s+OBJETIVO.*\n\s*03\s+FORMATO.*\n/, '\n- Situación: ¿qué está pasando?\n- Objetivo: ¿qué necesitas conseguir?\n- Formato: ¿cómo quieres recibir la respuesta?\n')
  .replace(/(## Plantilla principal[^\n]*\n\n)([\s\S]*?)(\n\n## Versión rápida)/, '$1```text\n$2\n```$3')
  .replace(/(## Versión rápida\n\n)([\s\S]*?)(\n\n## Ejemplos)/, '$1```text\n$2\n```$3');
data['ia-primer-paso'] = `Una estructura sencilla para empezar a obtener mejores respuestas de una IA.

## No necesitas aprender 20 herramientas
Si estás empezando con inteligencia artificial, empieza con una sola herramienta y úsala para resolver un problema real. Puedes comenzar, por ejemplo, con ChatGPT.

## El error más común
Muchas personas escriben algo como:

> “Hazme un correo para un cliente.”

La IA puede responder, pero tiene muy poca información para saber exactamente qué necesitas.

## Usa esta estructura
### 1. Qué necesitas
Explícale claramente qué quieres conseguir.

> “Necesito responderle a un cliente.”

### 2. Contexto
Dale la información que necesita para entender la situación.

> “El cliente está molesto porque su pedido lleva dos días de retraso.”

### 3. Resultado
Dile cómo quieres recibir la respuesta.

> “Quiero que la respuesta sea profesional, amable y corta.”

## Ahora júntalo todo
En lugar de “Hazme un correo para un cliente”, prueba:

> “Necesito responderle a un cliente que está molesto porque su pedido lleva dos días de retraso. Quiero una respuesta profesional, amable y corta.”

**Qué necesito → contexto → resultado.**

## Plantilla para copiar
\`\`\`text
Necesito [LO QUE QUIERO CONSEGUIR].
El contexto es [INFORMACIÓN IMPORTANTE].
Quiero que el resultado sea [CÓMO QUIERO LA RESPUESTA].
Si necesitas más información para responder correctamente, pregúntame antes de continuar.
\`\`\`

## Pruébalo tú
Piensa en una tarea que haces frecuentemente: escribir un correo, organizar información, aprender algo, resumir un documento o generar ideas.

Primero pídeselo a la IA como lo harías normalmente. Después vuelve a hacerlo utilizando QUÉ NECESITO + CONTEXTO + RESULTADO y compara las dos respuestas.

## Qué debes recordar
Aprender inteligencia artificial no empieza memorizando herramientas. Empieza preguntándote: “¿Qué problema quiero resolver?”

**Una herramienta + un problema = un resultado real.**

## Siguiente paso
Ahora que sabes cómo empezar, la siguiente pregunta es: ¿qué herramientas de IA debería aprender primero?`;

data['30-atajos-imagenes-ia'] = read('codigos.txt')
  .replace(/^30 ATAJOS[^\n]+\n=+\n+GUÍA RÁPIDA DE COMANDOS\n+/, '')
  .replace(/^(\d{2} \/[^\n]+)\n-+/gm, '## $1')
  .replace(/\nIdeal para: /g, '\n\n**Ideal para:** ');
data['30-atajos-imagenes-ia'] = 'Estos nombres son referencias de estilos y presets; no son comandos universales de todas las IA. Comprueba si tu herramienta los reconoce. Si no, utiliza la descripción de cada ficha como instrucción.\n\n' + data['30-atajos-imagenes-ia'];

data['plantilla-google-flow'] = cleanText(read('plantilla-prompt-google-flow.txt'))
  .replace(/^## Plantilla para crear imágenes en Google Flow\n\n/, '')
  .replace(/(## Plantilla completa\n\n)([^\n]+)/, '$1```text\n$2\n```');
data['google-flow-principiantes'] = cleanText(read('guia-google-flow-para-principiantes.txt'))
  .replace(/^## Guía rápida: Google Flow para principiantes\n\nRevisada:[^\n]+\n\n/, '')
  .replace(/(## Prompt \d[^\n]*\n\n)(“[\s\S]*?”)/g, '$1```text\n$2\n```');
data['google-flow-principiantes'] = data['google-flow-principiantes']
  .replace(/Google Flow funciona con límites[\s\S]*?Google AI Ultra incluyen acceso con distintos límites, y los créditos adicionales pueden tener costo\./, 'Google Flow funciona con límites de uso y créditos de IA. El acceso disponible depende del país, de la cuenta y del plan. Hay opciones de prueba y planes de pago con distintos límites; los créditos adicionales pueden tener costo.')
  .replace(/- Google Flow: https:\/\/flow.google.com\//, '- [Google Flow](https://flow.google.com/)')
  .replace(/- Presentación oficial de Flow: https:\/\/blog.google\/innovation-and-ai\/products\/google-flow-veo-ai-filmmaking-tool\//, '- [Crear y editar imágenes en Flow](https://support.google.com/flow/answer/16729550?hl=es)')
  .replace(/- Centro de ayuda de Google Flow: https:\/\/support.google.com\/labs\//, '- [Centro de ayuda de Google Flow](https://support.google.com/flow/)')
  .replace(/- Créditos de IA de Google One: https:\/\/support.google.com\/googleone\/answer\/16287445/, '- [Gestionar los créditos de Flow](https://support.google.com/flow/answer/16526234?hl=es)');

const reminders = read('recurso-10-ideas-recordatorios-ia.txt');
const messages = [...reminders.matchAll(/\[(\d{2})\]\s+([^\n]+)\n\s+“([\s\S]*?)”/g)];
if (messages.length !== 10) throw new Error('Expected all ten reminder prompts');
data['10-automatizaciones-chatgpt'] = `Una automatización sencilla puede ser un recordatorio que se repite. Tú eliges qué debes hacer y cuándo quieres que ChatGPT te avise.

**En estos ejemplos, ChatGPT te recuerda la acción; no la realiza por ti.**

## Cómo empezar
1. Abre ChatGPT y entra en Programadas / Scheduled, si esa opción está disponible en tu cuenta.
2. Crea una tarea recurrente con uno de los mensajes de abajo. Puedes copiarlo y adaptar la frecuencia.
3. Confirma que la tarea quedó programada y revisa el horario y la zona horaria.
4. Revisa las opciones de notificación disponibles en Configuración → Notificaciones.

## 10 mensajes listos para copiar
${messages.map(([, n, title, text]) => `### ${n}. ${sentenceCase(title)}\n\n\`\`\`text\n${text.replace(/\s*\n\s*/g, ' ')}\n\`\`\``).join('\n\n')}

## Haz cada mensaje más útil
Añade el objetivo concreto de la tarea. Por ejemplo:

\`\`\`text
Recuérdame revisar mis pendientes y elegir el primero que debo resolver.
\`\`\`

## Disponibilidad y horarios
La disponibilidad, los límites y las opciones de programación pueden variar según tu cuenta, plan y aplicación. Si necesitas una hora exacta, comprueba las opciones que aparecen en tu cuenta antes de confirmar la tarea.

Consulta la [guía oficial de tareas programadas de OpenAI](https://learn.chatgpt.com/docs/automations).`;

const objectivity = `Actúa como un colaborador profesional con criterio propio. Mi objetivo es tomar mejores decisiones, no recibir aprobación automática.

Evalúa mis afirmaciones, ideas y planes antes de respaldarlos. Si detectas un error, una contradicción, una suposición débil o un riesgo relevante, señálalo con claridad y explica por qué. Distingue entre hechos comprobados, inferencias y opiniones. Cuando no tengas información suficiente, dilo y pregunta solo lo necesario; no inventes datos ni presentes con seguridad algo que no has verificado.

Sé directo, respetuoso y constructivo. No me contradigas por sistema ni me des la razón por cortesía: ajusta tu respuesta a la evidencia. Cuando critiques una propuesta, ofrece una alternativa concreta o indica qué dato permitiría decidir mejor.

Si te pido crear, investigar o resolver algo, avanza hasta entregar un resultado útil. Usa el contexto que ya te di, pero comprueba si sigue vigente cuando pueda haber cambiado.`;
data['prompt-ia-objetiva'] = `Este prompt le pide a tu IA que evalúe las ideas con criterio, explique sus dudas y proponga alternativas concretas.

## El prompt completo
Puedes pegarlo al inicio de una conversación o guardarlo como una preferencia de respuesta.

\`\`\`text
${objectivity}
\`\`\`

## Cómo personalizar ChatGPT
1. Abre ChatGPT con tu cuenta y entra en **Configuración** desde el menú de tu perfil o de la aplicación.
2. Abre **Personalización**.
3. Busca **Instrucciones personalizadas** y pega el prompt completo en el campo destinado a tus preferencias de respuesta.
4. Si aparece un interruptor para habilitar las instrucciones, actívalo. Guarda los cambios si la interfaz muestra un botón para hacerlo.
5. Abre una conversación nueva y prueba el estilo con una idea o decisión real.

Los nombres y controles pueden variar entre la web, el móvil y el escritorio. La documentación oficial indica que las preferencias que quieras mantener entre conversaciones se añaden en Configuración → Personalización como instrucciones personalizadas. Consulta [Personalizar ChatGPT](https://learn.chatgpt.com/docs/personalize) y la [guía de prompting de OpenAI](https://learn.chatgpt.com/docs/prompting).

## Si prefieres usarlo solo en un chat
Pega el prompt como primer mensaje y después describe tu situación, tu objetivo y los datos disponibles. Así puedes probar el estilo antes de guardarlo en tu personalización.

## Prueba que el estilo te sirve
Usa una propuesta que quieras evaluar. Por ejemplo:

\`\`\`text
Quiero publicar cinco veces al día para crecer más rápido en Instagram. Tengo dos horas semanales para crear contenido y todavía no he medido qué formatos funcionan. Evalúa mi plan: identifica las suposiciones débiles, separa hechos de inferencias y propón una alternativa realista. No inventes cifras.
\`\`\`

Una respuesta útil debería señalar la relación entre el tiempo disponible y la cantidad de publicaciones, pedir los datos que cambien la decisión y sugerir un experimento que puedas medir.

## Ajusta el estilo a tu trabajo
Puedes añadir una preferencia específica al final del prompt:

\`\`\`text
Cuando comparemos opciones, organiza la respuesta en: evidencia disponible, supuestos, riesgos, alternativas y siguiente paso.
\`\`\`

El prompt orienta el estilo de colaboración. Para comprobar una afirmación, pide las fuentes y revisa que realmente la respalden.`;

writeFileSync(resolve(root, 'app/recursos/resource-content.json'), JSON.stringify(data, null, 2) + '\n');
writeFileSync(resolve(root, 'public/prompt-ia-objetiva.txt'), 'El prompt para que tu IA sea objetiva\nPor @andyontrade\n\n' + data['prompt-ia-objetiva'] + '\n');
console.log(Object.entries(data).map(([slug, text]) => ({ slug, characters: text.length, sections: [...text.matchAll(/^## (.+)$/gm)].map(x => x[1]) })));

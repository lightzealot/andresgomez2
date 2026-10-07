import content from './resource-content.json';

export const resources = [
  { slug: 'formula-buen-prompt', type: 'Guía práctica', category: 'Prompts', title: 'La fórmula de un buen prompt', description: 'Rol, contexto, tarea, formato y ejemplo: una fórmula sencilla y cinco prompts listos para copiar y adaptar.', image: 'formula-buen-prompt', download: 'formula-buen-prompt.txt' },
  { slug: 'prompt-ia-objetiva', type: 'Prompt', category: 'Criterio', title: 'Un prompt para evaluar tus ideas con evidencia', description: 'Pídele a la IA que revise tus supuestos, señale errores y explique qué información falta. Incluye cómo guardar la instrucción en ChatGPT.', image: 'prompt-ia-objetiva', download: 'prompt-ia-objetiva.txt', featured: true },
  { slug: 'videos-animados-claude', type: 'Guía completa', category: 'Video', title: 'Cómo hacer videos animados con Claude', description: 'De una idea a un MP4 con el skill video-pizarra: instalación, storyboard, animación, sonido y render. Sin suscripciones de edición; el uso del modelo puede tener costo.', image: 'videos-animados-claude', download: 'videos-animados-claude.txt', shared: true },
  { slug: 'sistema-60-minutos-contenido-ia', type: 'Guía práctica', category: 'Contenido', title: 'Sistema de 60 minutos para crear una semana de contenido con IA', description: 'De una idea a Reels, carrusel, historias y un calendario semanal listo para producir.', image: 'sistema-60-minutos-contenido-ia', download: 'sistema-60-minutos-contenido-ia.txt' },
  { slug: '10-automatizaciones-chatgpt', type: 'Guía práctica', category: 'Automatización', title: '10 recordatorios para programar en ChatGPT', description: 'Diez recordatorios listos para adaptar: contenido, estudio, pendientes y proyectos.', image: '10-automatizaciones-chatgpt', download: 'recurso-10-ideas-recordatorios-ia.txt' },
  { slug: 'ia-primer-paso', type: 'Lectura', category: 'Fundamentos', title: 'IA: primer paso', description: 'Empieza con un problema real y una estructura sencilla para obtener mejores respuestas.', image: 'ia-primer-paso', download: 'ia1.txt' },
  { slug: 'mejores-resultados-ia', type: 'Plantilla', category: 'Prompts', title: 'Plantilla para explicar mejor tu tarea a una IA', description: 'Explica tu situación, define el objetivo y pide el formato que necesitas.', image: 'mejores-resultados-ia', download: '3.txt' },
  { slug: '30-atajos-imagenes-ia', type: 'Guía', category: 'Creación visual', title: '30 atajos para crear imágenes con IA', description: 'Explora treinta direcciones visuales para productos, escenas y personajes.', image: '30-atajos-imagenes-ia', download: 'codigos.txt' },
  { slug: 'plantilla-google-flow', type: 'Plantilla', category: 'Creación visual', title: 'Plantilla para crear imágenes en Google Flow', description: 'Define el sujeto, la escena, el estilo, la iluminación y el encuadre de cada imagen.', image: 'plantilla-google-flow', download: 'plantilla-prompt-google-flow.txt' },
  { slug: 'google-flow-principiantes', type: 'Guía', category: 'Creación visual', title: 'Google Flow para principiantes', description: 'Crea tu primer proyecto, trabaja con referencias y mejora tus imágenes y videos.', image: 'google-flow-principiantes', download: 'guia-google-flow-para-principiantes.txt' },
];

export type Resource = typeof resources[number];
export function resourceContent(slug: string) {
  return content[slug as keyof typeof content];
}
export function readingMinutes(slug: string) {
  return Math.max(1, Math.ceil(resourceContent(slug).split(/\s+/).length / 200));
}
export const coverAlt: Record<string, string> = {
  'formula-buen-prompt': 'Bloques azules de instrucciones ensamblados en una escalera para estructurar un prompt.',
  'videos-animados-claude': 'Claqueta y escenas de animación sobre un escenario en tonos coral.',
  'prompt-ia-objetiva': 'Lupa, gráfica analítica y balanza en un estudio azul oscuro y plateado.',
  'sistema-60-minutos-contenido-ia': 'Temporizador rodeado por siete tarjetas de calendario sobre un fondo ámbar.',
  '10-automatizaciones-chatgpt': 'Circuito azul de automatización que conecta correo, calendario, documentos y reportes.',
  'ia-primer-paso': 'Profesional consultando IA en un portátil en una sala de reuniones luminosa.',
  'mejores-resultados-ia': 'Paneles transparentes alineados con un objetivo central en tonos lavanda.',
  '30-atajos-imagenes-ia': 'Un objeto de cerámica azul reinterpretado en cuatro composiciones visuales distintas.',
  'plantilla-google-flow': 'Collage de referencias, encuadres y muestras de color sobre un fondo rosa.',
  'google-flow-principiantes': 'Tres escenas costeras conectadas por una línea de tiempo sobre un fondo azul cielo.',
};

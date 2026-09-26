import content from './resource-content.json';

export const resources = [
  { slug: 'prompt-ia-objetiva', type: 'Prompt', category: 'Criterio', title: 'El prompt para que tu IA sea objetiva', description: 'Una IA que evalúa tus ideas, señala errores y te ayuda a decidir con evidencia. Incluye los pasos para personalizar ChatGPT.', image: 'criterio', download: 'prompt-ia-objetiva.txt', featured: true },
  { slug: 'sistema-60-minutos-contenido-ia', type: 'Guía práctica', category: 'Contenido', title: 'Sistema de 60 minutos para crear una semana de contenido con IA', description: 'De una idea a Reels, carrusel, historias y un calendario semanal listo para producir.', image: 'sistema', download: 'sistema-60-minutos-contenido-ia.txt' },
  { slug: '10-automatizaciones-chatgpt', type: 'Guía práctica', category: 'Automatización', title: '10 ideas fáciles para automatizar con ChatGPT', description: 'Diez recordatorios listos para adaptar: contenido, estudio, pendientes y proyectos.', image: 'sistema', download: 'recurso-10-ideas-recordatorios-ia.txt' },
  { slug: 'ia-primer-paso', type: 'Lectura', category: 'Fundamentos', title: 'IA: primer paso', description: 'Empieza con un problema real y una estructura sencilla para obtener mejores respuestas.', image: 'criterio', download: 'ia1.txt' },
  { slug: 'mejores-resultados-ia', type: 'Plantilla', category: 'Prompts', title: 'Plantilla para pedirle mejores resultados a cualquier IA', description: 'Explica tu situación, define el objetivo y pide el formato que necesitas.', image: 'criterio', download: '3.txt' },
  { slug: '30-atajos-imagenes-ia', type: 'Guía', category: 'Creación visual', title: '30 atajos para crear imágenes con IA', description: 'Explora treinta direcciones visuales para productos, escenas y personajes.', image: 'visual', download: 'codigos.txt' },
  { slug: 'plantilla-google-flow', type: 'Plantilla', category: 'Creación visual', title: 'Plantilla para crear imágenes en Google Flow', description: 'Define el sujeto, la escena, el estilo, la iluminación y el encuadre de cada imagen.', image: 'visual', download: 'plantilla-prompt-google-flow.txt' },
  { slug: 'google-flow-principiantes', type: 'Guía', category: 'Creación visual', title: 'Google Flow para principiantes', description: 'Crea tu primer proyecto, trabaja con referencias y mejora tus imágenes y videos.', image: 'visual', download: 'guia-google-flow-para-principiantes.txt' },
];

export type Resource = typeof resources[number];
export function resourceContent(slug: string) {
  return content[slug as keyof typeof content];
}
export function readingMinutes(slug: string) {
  return Math.max(1, Math.ceil(resourceContent(slug).split(/\s+/).length / 200));
}
export const coverAlt: Record<string, string> = {
  criterio: 'Lupa y prisma de cristal sobre papel blanco, iluminados por luz lateral.',
  sistema: 'Escritorio de trabajo con calendario semanal, temporizador y portátil.',
  visual: 'Objetivo fotográfico, formas de cristal y esfera azul en un estudio.',
};

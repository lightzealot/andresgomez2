import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { parseMarkdown } from '../app/recursos/markdown.ts';

const root = resolve(import.meta.dirname, '..');
const content = JSON.parse(readFileSync(resolve(root, 'app/recursos/resource-content.json'), 'utf8'));
assert.equal(Object.keys(content).length, 8, 'All eight resources must be present');
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

for (const [slug, markdown] of Object.entries(content)) {
  assert(!/[\u2500-\u257f]/.test(markdown), `${slug}: legacy drawing characters remain`);
  assert.equal((markdown.match(/^```/gm) ?? []).length % 2, 0, `${slug}: unclosed prompt block`);
  const blocks = parseMarkdown(markdown);
  const headings = blocks.filter(block => block.type === 'heading');
  assert(headings.length > 0, `${slug}: missing sections`);
  assert.equal(new Set(headings.map(block => block.id)).size, headings.length, `${slug}: duplicate anchors`);
  const html = readFileSync(resolve(root, `dist/client/recursos/${slug}.html`), 'utf8');
  assert(/<h1[ >]/.test(html), `${slug}: no rendered heading`);
  for (const heading of headings) assert(html.includes(`id="${heading.id}"`), `${slug}: section missing from page`);
  for (const code of blocks.filter(block => block.type === 'code')) {
    assert(decode(html).includes(code.text), `${slug}: prompt was changed or not rendered`);
  }
  assert(html.includes('download=""'), `${slug}: no download link`);
  assert(html.includes('width="1440"'), `${slug}: no cover image`);
}

const objective = parseMarkdown(content['prompt-ia-objetiva']).filter(block => block.type === 'code')[0].text;
assert(objective.startsWith('Actúa como un colaborador profesional con criterio propio.'));
assert(objective.endsWith('comprueba si sigue vigente cuando pueda haber cambiado.'));
assert(objective.includes('Distingue entre hechos comprobados, inferencias y opiniones.'));
assert(content['prompt-ia-objetiva'].includes('Configuración → Personalización'));
assert.equal(parseMarkdown(content['30-atajos-imagenes-ia']).filter(block => block.type === 'heading' && block.level === 2).length, 30);
assert.equal(parseMarkdown(content['10-automatizaciones-chatgpt']).filter(block => block.type === 'code').length, 11);
assert.equal(parseMarkdown(content['google-flow-principiantes']).filter(block => block.type === 'code').length, 3);
assert.equal(parseMarkdown(content['sistema-60-minutos-contenido-ia']).filter(block => block.type === 'table').length, 3);
for (const cover of ['criterio', 'sistema', 'visual']) assert(existsSync(resolve(root, `public/recursos/${cover}.jpg`)));

const library = readFileSync(resolve(root, 'dist/client/recursos.html'), 'utf8');
for (const slug of Object.keys(content)) assert(library.includes(`/recursos/${slug}/`), `${slug}: missing from library`);
console.log('Verified 8 built resource pages, full prompts, 30 styles, 10 reminders, 3 calendars, anchors, covers and library links.');

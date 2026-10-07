import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

// Article content is the source of truth for every downloadable copy.
const root = resolve(import.meta.dirname, '..');
const content = JSON.parse(readFileSync(resolve(root, 'app/recursos/resource-content.json'), 'utf8'));
const catalog = readFileSync(resolve(root, 'app/recursos/catalog.ts'), 'utf8');
const entries = [...catalog.matchAll(/slug: '([^']+)'[^\n]+title: '([^']+)'[^\n]+download: '([^']+)'/g)];
if (entries.length !== Object.keys(content).length) throw new Error('Catalog and article content differ');
for (const [, slug, title, download] of entries) {
  if (typeof content[slug] !== 'string' || !content[slug].trim()) throw new Error('Missing content: ' + slug);
  const credit = slug === 'videos-animados-claude' ? 'Recurso compartido' : 'Por';
  writeFileSync(resolve(root, 'public', download), title + '\n' + credit + ' @andresgomez.ia\n\n' + content[slug].trim() + '\n');
}
for (const slug of ['formula-buen-prompt', 'sistema-60-minutos-contenido-ia', 'videos-animados-claude']) {
  writeFileSync(resolve(root, 'public', slug + '.md'), content[slug]);
}
console.log('Synchronized ' + entries.length + ' resource downloads');

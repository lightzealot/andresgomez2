import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

// Run for every publication, including the daily content publishing pipeline.
const root = resolve(import.meta.dirname, '..');
const origin = new URL(process.env.SITE_URL || 'https://andresgomez.store').origin;
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
async function discover(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) result.push(...await discover(path));
    else if (entry.name === 'page.tsx') result.push(path);
  }
  return result;
}
const urls = [];
for (const file of await discover(resolve(root, 'app'))) {
  const segments = relative(resolve(root, 'app'), file).split(sep).slice(0, -1);
  // Dynamic pages need their actual published slugs from the content source.
  if (segments.some(s => s.startsWith('[') || s.startsWith('_') || s.startsWith('@'))) continue;
  const path = '/' + segments.filter(s => !s.startsWith('(')).join('/');
  const source = await readFile(file, 'utf8');
  if (path === '/terminos' || path.startsWith('/recursos') || path.endsWith('/gracias') || /index:\s*false/.test(source)) continue;
  urls.push(origin + path);
}
// Optional CMS export: only published, canonical URLs served by THIS project.
// Use real editorial dates, never the build time, for lastmod.
let entries = [];
try { entries = JSON.parse(await readFile(resolve(root, 'content/seo-publications.json'), 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const published = new Map(urls.map(url => [url, undefined]));
for (const entry of entries) {
  if (entry.status !== 'published') continue;
  const url = new URL(entry.path, origin);
  if (url.origin !== origin || !entry.path.startsWith('/') || url.search || url.hash) throw Error('Invalid canonical publication path');
  if (entry.updatedAt && !Number.isFinite(Date.parse(entry.updatedAt))) throw Error('Invalid editorial date');
  published.set(url.href, entry.updatedAt);
}
await writeFile(resolve(root, 'public/sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + [...published].sort().map(([url, date]) => `  <url><loc>${escape(url)}</loc>${date ? `<lastmod>${escape(date)}</lastmod>` : ''}</url>`).join('\n') + '\n</urlset>\n');
await writeFile(resolve(root, 'public/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(resolve(root, 'public/llms.txt'), `# Andrés Gómez\n\n> IA y automatización para empresas de servicios.\n\n## Sitio oficial\n${[...published.keys()].sort().map(url => `- ${url}`).join('\n')}\n\n## Recursos en la comunidad\n- https://comunidad.andresgomez.store/recursos\n\n## Información\nAutor: Andrés Gómez. Idioma principal: español.\nConsulta cada página para comprobar su contenido, fuentes y fechas.\nEste archivo facilita el descubrimiento; no sustituye el contenido de las páginas ni garantiza menciones en IA.\n`);
console.log(`SEO: ${published.size} canonical URLs generated for ${origin}`);

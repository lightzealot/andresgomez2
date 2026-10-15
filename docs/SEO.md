# Publicación e indexación

`npm run build` regenera `public/sitemap.xml`, `robots.txt` y `llms.txt`. El dominio canónico es https://andresgomez.store. `SITE_URL` permite generar archivos para otro dominio; actualizar también `lib/seo.tsx` y los canónicos si se migra el sitio.

El sitemap descubre páginas estáticas nuevas. Excluye rutas dinámicas, recursos redirigidos a la comunidad, páginas con `index: false` y agradecimientos. No inventa fechas de actualización.

## Noticias y recursos diarios

Actualmente este proyecto no sirve noticias ni artículos de recursos: `/recursos` redirige a la comunidad. Su sitemap y SEO deben implementarse en el proyecto de la comunidad para cubrir sus artículos reales.

Si se incorporan rutas dinámicas a ESTE sitio, el publicador debe exportar `content/seo-publications.json` antes de compilar: una lista de objetos con `path`, `status: "published"` y `updatedAt` ISO con la fecha real de edición. Incluir solo URLs canónicas que respondan 200 y contenido publicado. Ejecutar y desplegar la compilación después de cada publicación; no basta editar el JSON local. No se ha creado un programador diario ni una conexión CMS inexistente.

Cada artículo necesita título y descripción propios, canonical propio, autor, contenido HTML legible, enlaces internos y fechas visibles. Usar `pageMetadata` y `StructuredData` de `lib/seo.tsx`; para artículos elegir `Article` o `NewsArticle` con `headline`, `author`, `mainEntityOfPage`, `datePublished` y `dateModified` reales, coherentes con la página. No marcar páginas de venta como noticias.

## Activación en producción

1. Publicar el dominio con acceso público y comprobar que páginas y sitemap responden 200 sin autenticación. La copia de Sites consultada tiene acceso restringido.
2. Verificar la propiedad del dominio en Google Search Console y Bing Webmaster Tools; enviar https://andresgomez.store/sitemap.xml en ambos. La verificación requiere acceso del propietario a esas cuentas o DNS.
3. Comprobar que CDN/firewall permitan rastreo. robots.txt permite a todos los agentes; esto no concede acceso a un sitio privado. llms.txt es una ayuda de descubrimiento, no un mecanismo garantizado de indexación o citación.
4. Tras publicar noticias o recursos, revisar cobertura, canónicos y errores en ambas consolas. IndexNow se puede conectar al publicador una vez disponible; no se envían URLs antes de que existan en producción.

No se han registrado propiedades en consolas ni solicitado indexación desde este cambio.

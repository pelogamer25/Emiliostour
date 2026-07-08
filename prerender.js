import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Dynamically generate routes
const staticRoutes = [
  '/',
  '/medellin-tours',
  '/things-to-do-medellin',
  '/blog',
  '/faq',
  '/contact'
];

// Extract tour slugs from src/data/tours.ts using regex
const toursFileContent = fs.readFileSync(toAbsolute('src/data/tours.ts'), 'utf-8');
const slugRegex = /slug:\s*'([^']+)'/g;
const tourRoutes = [];
let match;
while ((match = slugRegex.exec(toursFileContent)) !== null) {
  tourRoutes.push(`/${match[1]}`);
}

const routesToPrerender = [...staticRoutes, ...tourRoutes];

(async () => {
  for (const url of routesToPrerender) {
    const { html: appHtml, helmet } = render(url);
    
    let metaTags = '';
    if (helmet) {
      metaTags = `
        ${helmet.title ? helmet.title.toString() : ''}
        ${helmet.meta ? helmet.meta.toString() : ''}
        ${helmet.link ? helmet.link.toString() : ''}
      `;
    }

    const html = template
      .replace(`<!--app-head-->`, metaTags)
      .replace(`<!--app-html-->`, appHtml);

    const filePath = url === '/' 
      ? 'dist/client/index.html' 
      : `dist/client${url}/index.html`;
    
    const dir = path.dirname(toAbsolute(filePath));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(toAbsolute(filePath), html);
    console.log('pre-rendered:', filePath);
  }
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routesToPrerender.map(url => `
  <url>
    <loc>https://emiliostours.com${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;
  
  fs.writeFileSync(toAbsolute('dist/client/sitemap.xml'), sitemap);
  
  const robots = `User-agent: *\nAllow: /\nSitemap: https://emiliostours.com/sitemap.xml`;
  fs.writeFileSync(toAbsolute('dist/client/robots.txt'), robots);
  
  console.log('SSG complete! Generated sitemap.xml and robots.txt');
})();

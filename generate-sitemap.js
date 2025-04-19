const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your static routes manually
const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemapPath = path.resolve(__dirname, 'public', 'sitemap.xml');

(async () => {
  const sitemapStream = new SitemapStream({ hostname: 'https://asr-dev.vercel.app' });

  const writeStream = createWriteStream(sitemapPath);
  sitemapStream.pipe(writeStream);

  links.forEach(link => sitemapStream.write(link));
  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log('✅ Sitemap generated at public/sitemap.xml');
})();

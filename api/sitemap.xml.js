export default function handler(req, res) {
  const host = req.headers.host || '';

  let domain = '';

  if (host.includes('kaplanlarsulama.com')) {
    domain = 'https://kaplanlarsulama.com';
  } else if (host.includes('sulamaariza.com')) {
    domain = 'https://sulamaariza.com';
  } else {
    domain = `https://${host}`;
  }

  const today = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${domain}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemapXml);
}

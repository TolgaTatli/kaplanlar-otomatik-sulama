export default function handler(req, res) {
  const host = req.headers.host || '';

  let sitemapUrl = '';

  if (host.includes('kaplanlarsulama.com')) {
    sitemapUrl = 'https://kaplanlarsulama.com/sitemap.xml';
  } else if (host.includes('sulamaariza.com')) {
    sitemapUrl = 'https://sulamaariza.com/sitemap.xml';
  } else {
    sitemapUrl = `https://${host}/sitemap.xml`;
  }

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robotsTxt);
}

export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://kowhai-clay.vercel.app';
  return [
    '',
    '/workshops/',
    '/open-studio/',
    '/cafe/',
    '/gallery/',
    '/about/',
    '/visit/',
    '/contact/',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}

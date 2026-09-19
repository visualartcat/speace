export default async function injectEnhancements(_request, context) {
  const response = await context.next();
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) return response;

  const marker = 'data-euphoria-enhancements="20260919"';
  let html = await response.text();
  if (html.includes(marker)) return new Response(html, response);

  html = html
    .replace('</head>', `<link rel="stylesheet" href="/assets/enhancements.css?v=20260919" ${marker}></head>`)
    .replace('</body>', `<script src="/assets/enhancements.js?v=20260919" defer ${marker}></script></body>`);

  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

export const config = { path: ['/', '/index.html'] };

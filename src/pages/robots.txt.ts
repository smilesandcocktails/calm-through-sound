import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site?.toString() ?? 'https://calmthroughsound.com';
  const content = `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${siteUrl}sitemap-index.xml
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};

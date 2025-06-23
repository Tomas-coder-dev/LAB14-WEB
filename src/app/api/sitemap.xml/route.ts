import { getPosts } from '../../lib/posts';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function GET() {
  const staticUrls = ["/", "/blog", "/contacto"];
  const slugs = await getPosts();
  const dynamicUrls = slugs.map((slug: string) => `/blog/${slug}`);

  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`).join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
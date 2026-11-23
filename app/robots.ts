export const dynamic = 'force-static';

export default function robots() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || 'marlowby.vercel.app';
  return { rules: { userAgent: "*", allow: "/", disallow: "/checkout" }, sitemap: `https://${domain}/sitemap.xml` };
}

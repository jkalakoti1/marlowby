export default function robots() {
  const domain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return { rules: { userAgent: "*", allow: "/", disallow: "/checkout" }, ...(domain ? { sitemap: `https://${domain}/sitemap.xml` } : {}) };
}

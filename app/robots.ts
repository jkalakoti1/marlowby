export const dynamic = 'force-static';

export default function robots() {
  return { rules: { userAgent: "*", allow: "/", disallow: "/checkout" }, sitemap: "https://jkalakoti1.github.io/marlowby/sitemap.xml" };
}

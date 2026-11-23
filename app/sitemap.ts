export const dynamic = 'force-static';

export default function sitemap() {
  const domain = process.env.NEXT_PUBLIC_SITE_URL || 'marlowby.vercel.app';
  return [
    "",
    "/how-it-works",
    "/this-month",
    "/cities",
    "/cities/austin",
    "/cities/new-orleans",
    "/cities/portland",
    "/plans",
    "/our-story",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `https://${domain}${path}`,
  }));
}

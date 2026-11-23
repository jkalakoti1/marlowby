export default function sitemap() {
  const domain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (!domain) return [];
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

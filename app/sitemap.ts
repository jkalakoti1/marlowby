export const dynamic = 'force-static';

export default function sitemap() {
  const domain = "jkalakoti1.github.io/marlowby";
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

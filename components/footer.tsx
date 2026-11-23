import Link from "next/link";
import { Logo } from "./ui-v2";
export function Footer() {
  const footerSections = [
    {
      title: "Discover",
      links: [
        ["This Month's Box", "/this-month"],
        ["Explore Cities", "/cities"],
        ["How It Works", "/how-it-works"],
        ["Our Story", "/our-story"],
      ]
    },
    {
      title: "Plans",
      links: [
        ["Monthly", "/plans?plan=monthly"],
        ["Three-Month Journey", "/plans?plan=three-month"],
        ["Gifting", "/plans#gifting"],
        ["FAQ", "/faq"],
      ]
    },
    {
      title: "Company",
      links: [
        ["About", "/our-story"],
        ["Contact", "/contact"],
        ["Privacy", "/privacy"],
        ["Terms", "/terms"],
      ]
    },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo inverse size="lg" />
            <p className="lead" style={{ marginTop: "var(--space-4)", maxWidth: "280px" }}>
              A new city, at your doorstep. Discover local makers, regional favorites, and the stories behind them.
            </p>
            <p className="eyebrow" style={{ marginTop: "var(--space-6)", color: "var(--color-warmth)" }}>
              GOOD PLACES TRAVEL FAR.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title} className="footer-nav">
              <h3>{section.title}</h3>
              <ul>
                {section.links.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href} className="footer-link">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-help">
            <h3>Help</h3>
            <ul>
              <li><Link href="/faq" className="footer-link">FAQ</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/privacy" className="footer-link">Privacy</Link></li>
              <li><Link href="/terms" className="footer-link">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Marlowby</span>
          <span>Marlowby is a demonstration experience. No real orders or payments are processed.</span>
        </div>
      </div>
    </footer>
  );
}
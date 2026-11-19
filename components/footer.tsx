import Link from "next/link";
import { Logo } from "./ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo inverse />
            <p>A new city, at your doorstep.</p>
            <p className="small">
              Thoughtfully curated goods and stories inspired by places worth
              discovering.
            </p>
            <span className="eyebrow">GOOD PLACES TRAVEL FAR.</span>
          </div>
          {[
            {
              title: "Explore",
              items: [
                ["This Month’s Box", "/this-month"],
                ["Explore Cities", "/cities"],
                ["Austin", "/cities/austin"],
                ["New Orleans", "/cities/new-orleans"],
                ["Portland", "/cities/portland"],
              ],
            },
            {
              title: "Marlowby",
              items: [
                ["How It Works", "/how-it-works"],
                ["Our Story", "/our-story"],
                ["Plans", "/plans"],
              ],
            },
            {
              title: "A little help",
              items: [
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
                ["Privacy", "/privacy"],
                ["Terms", "/terms"],
              ],
            },
          ].map((group) => (
            <div key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.items.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Marlowby</span>
          <span>
            Marlowby is a demonstration experience. No real orders or payments
            are processed.
          </span>
        </div>
      </div>
    </footer>
  );
}

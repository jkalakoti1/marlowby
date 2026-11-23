import { PageIntro, Action, Eyebrow } from "@/components/ui-v2";
import { FAQList } from "@/features/faq";
const groups = [
  ["box-contents", "Box contents"],
  ["plans-and-billing", "Plans and billing"],
  ["shipping", "Shipping"],
  ["cities", "Cities"],
  ["about-the-demo", "About the demo"],
];
export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Helpful answers about the box, plans, cities, and the payment-free Marlowby demonstration.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="LET'S CLEAR A FEW THINGS UP"
        title="A few things you might be wondering."
      >
        <p>From what's inside to how this demonstration works, here's a helpful
          place to start.</p>
      </PageIntro>
      <div className="container faq-page section canvas">
        <nav aria-label="Question categories" className="faq-nav">
          {groups.map(([id, title]) => (
            <a href={`#${id}`} key={id}>
              {title}
            </a>
          ))}
        </nav>
        <div className="faq-sections">
          {groups.map(([id, title]) => (
            <section id={id} key={id} className="card faq-section">
              <h2 className="faq-section-title">{title}</h2>
              <FAQList category={id} />
            </section>
          ))}
          <section className="help-block card">
            <h2>Still looking?</h2>
            <p>Let us point you in the right direction.</p>
            <Action href="/contact" variant="primary">
              Visit Contact
            </Action>
          </section>
        </div>
      </div>
    </>
  );
}
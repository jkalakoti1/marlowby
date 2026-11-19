import { PageIntro, Action } from "@/components/ui";
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
        eyebrow="LET’S CLEAR A FEW THINGS UP"
        title="A few things you might be wondering."
      >
        <p>
          From what’s inside to how this demonstration works, here’s a helpful
          place to start.
        </p>
      </PageIntro>
      <div className="container faq-page">
        <nav aria-label="Question categories">
          {groups.map(([id, title]) => (
            <a href={`#${id}`} key={id}>
              {title}
            </a>
          ))}
        </nav>
        <div>
          {groups.map(([id, title]) => (
            <section id={id} key={id}>
              <h2>{title}</h2>
              <FAQList category={id} />
            </section>
          ))}
          <section className="help-block">
            <h2>Still looking?</h2>
            <p>Let us point you in the right direction.</p>
            <Action href="/contact" secondary>
              Visit Contact
            </Action>
          </section>
        </div>
      </div>
    </>
  );
}

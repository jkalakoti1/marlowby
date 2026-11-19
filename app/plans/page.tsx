import { PageIntro, PlanCards } from "@/components/ui";
import { FAQList } from "@/features/faq";
import Link from "next/link";
export const metadata = {
  title: "Find Your Plan",
  description:
    "Compare the illustrative Monthly and Three-Month Journey plans. No payments or real subscriptions.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="ONE CITY AT A TIME"
        title="Find a plan that takes you places."
        center
      >
        <p>
          One city at a time, a little more to discover. Compare our example
          plans and try the signup experience.
        </p>
        <p className="demo-notice">
          Illustrative pricing. This demonstration does not create a paid
          subscription.
        </p>
      </PageIntro>
      <section className="container plan-section">
        <PlanCards />
        <p className="small center">
          Both plans include city-inspired goods, a postcard, and a story
          insert. Actual contents would vary in a real offering.
        </p>
      </section>
      <section className="container section" id="compare">
        <h2>A clear view of the journey.</h2>
        <div
          className="table-scroll"
          role="region"
          aria-label="Compare example plans"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">What’s included</th>
                <th scope="col">Monthly</th>
                <th scope="col">Three-Month Journey</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Boxes in term", "1", "3"],
                ["Base amount", "$49", "$135 prepaid"],
                ["Base cost per box", "$49", "$45"],
                ["Shipping total", "$7", "$21"],
                ["Estimated total before tax", "$56", "$156"],
                [
                  "Tax",
                  "Not calculated in this demo",
                  "Not calculated in this demo",
                ],
                [
                  "Payment behavior",
                  "No payment is taken",
                  "No payment is taken",
                ],
                [
                  "Renewal status",
                  "Proposed real renewal policy not finalized",
                  "Proposed real renewal policy not finalized",
                ],
                [
                  "Cancellation status",
                  "Proposed real cancellation policy not finalized",
                  "Proposed real cancellation policy not finalized",
                ],
              ].map(([label, a, b]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="sage-section section">
        <div className="container narrow">
          <h2>Before you begin.</h2>
          <p>
            Checkout asks only for a first name, email, and five-digit U.S. ZIP
            as practice fields. Use sample information. Your entries stay in
            application memory and are cleared on completion, cancellation, or
            refresh. No payment information is requested.
          </p>
          <p>
            A plan does not select a destination. Austin is the current example;
            the future sequence is uncommitted.
          </p>
          <p>
            Read our <Link href="/privacy">Privacy page</Link> or learn{" "}
            <Link href="/faq#about-the-demo">about the demo</Link>.
          </p>
          <FAQList
            ids={[
              "plans-and-billing-0",
              "plans-and-billing-1",
              "plans-and-billing-2",
              "box-contents-0",
            ]}
          />
        </div>
      </section>
    </>
  );
}

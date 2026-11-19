import { PageIntro, Action } from "@/components/ui";
export const metadata = {
  title: "Terms of This Demonstration",
  description:
    "The scope and limitations of the illustrative Marlowby experience.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="THE CONCEPT, EXPLAINED"
        title="Terms of this demonstration."
      >
        <p>Effective November 7, 2026</p>
      </PageIntro>
      <article className="container legal-copy">
        <h2>An invitation to explore</h2>
        <p>
          Marlowby demonstrates a city-inspired subscription-box idea. Browsing
          the site or completing checkout does not create a purchase, an order,
          a subscription, or a recurring-payment authorization. No payment
          details are requested and no physical box is dispatched.
        </p>
        <h2>Illustrative prices and contents</h2>
        <p>
          All prices, shipping estimates, product concepts, and maker stories
          are illustrative. The sample makers are fictional. Individual products
          are not for sale. No ingredient, allergen, sourcing, quality
          certification, or actual availability claim should be inferred from a
          sample image or description.
        </p>
        <h2>Destination previews</h2>
        <p>
          Austin is the current concept. New Orleans and Portland are editorial
          previews with no announced release dates. Exploring a city does not
          reserve it or select a delivery destination. The future sequence of
          any real boxes is uncommitted.
        </p>
        <h2>No operational promises</h2>
        <p>
          Real renewal, cancellation, refund, return, and fulfillment policies
          have not been established. The demonstration does not offer customer
          accounts, order tracking, gifting, or a customer support inbox.
        </p>
        <h2>Creative materials and sources</h2>
        <p>
          Product and craft scenes are AI-generated illustrations of fictional
          concepts. City photographs are by Mitchell Kmetz (Austin), Alain
          Pierre-Lys (New Orleans), and Sean Oulashin (Portland), obtained under
          the <a href="https://unsplash.com/license">Unsplash License</a>. DM
          Sans and DM Serif Display are used under their included SIL Open Font
          Licenses. Icons are from Lucide under the ISC License. Depictions do
          not establish a maker or photographer partnership with Marlowby.
        </p>
        <h2>Outside resources</h2>
        <p>
          External resources provide additional context. Their content and
          policies are controlled by their respective publishers. A real
          commercial launch would require its own verified business details,
          sourcing, policies, and legal review.
        </p>
        <Action href="/" secondary>
          Return to browsing
        </Action>
      </article>
    </>
  );
}

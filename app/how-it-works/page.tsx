import {
  PageIntro,
  Action,
  Eyebrow,
  FinalCTA,
  ProductGrid,
} from "@/components/ui";
import { Photo } from "@/components/photo";
import { FAQList } from "@/features/faq";
export const metadata = {
  title: "How It Works",
  description:
    "Choose a journey, meet a city, and explore a box of illustrative goods and stories.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE CURIOSITY GOES A LONG WAY"
        title="A little local discovery, delivered."
        center
      >
        <p>
          Choose a journey, meet a city, and open a box full of new favorites.
          Here’s how the Marlowby concept comes together.
        </p>
      </PageIntro>
      <section className="container how-rows">
        {[
          {
            title: "Choose your journey.",
            text: "One box at a time, or a three-box adventure. Both example plans bring together goods, a postcard, and stories inspired by a place. The checkout is a demonstration, so you can explore the experience without making a purchase.",
            image: "hero-box",
            alt: "Illustrative Marlowby discovery box",
            href: "/plans",
            cta: "Compare Plans",
          },
          {
            title: "Meet the next city.",
            text: "Leave a little room for surprise. Marlowby chooses the featured destination; Austin is our current example. New Orleans and Portland offer a look at possible future concepts, with no announced release dates.",
            image: "austin",
            alt: "The skyline and water in Austin, Texas",
            href: "/cities",
            cta: "Explore Cities",
          },
          {
            title: "Make room for a few new favorites.",
            text: "A coffee ritual. A pantry discovery. A small object worth keeping. The Austin concept includes four sample goods, a city postcard, and an editorial insert. Actual contents would vary in a real service.",
            image: "paper",
            alt: "Illustrative postcard and paper objects on a warm work surface",
            href: "/this-month#inside-the-box",
            cta: "Look Inside the Austin Box",
          },
        ].map((row, i) => (
          <article className="editorial-row" key={row.title}>
            <Photo
              src={`/images/${row.image}.webp`}
              alt={row.alt}
              width={900}
              height={650}
            />
            <div>
              <Eyebrow>0{i + 1} / THE JOURNEY</Eyebrow>
              <h2>{row.title}</h2>
              <p>{row.text}</p>
              <Action href={row.href} secondary>
                {row.cta}
              </Action>
            </div>
          </article>
        ))}
      </section>
      <section className="sage-section section">
        <div className="container">
          <Eyebrow>THE BOX, AT A GLANCE</Eyebrow>
          <h2>Inside a little local discovery.</h2>
          <p>
            Four sample goods, one postcard, and one story insert. All makers
            and contents are illustrative.
          </p>
          <ProductGrid />
        </div>
      </section>
      <section className="container section narrow">
        <h2>A few things to know.</h2>
        <p>
          Destinations are curated. Preview cities are ideas, not scheduled
          boxes. Prices are examples, and this demonstration creates no real
          orders.
        </p>
        <FAQList
          ids={["cities-0", "plans-and-billing-0", "about-the-demo-0"]}
        />
        <p className="small">
          Explore the concept, then find the plan that fits your curiosity.
        </p>
      </section>
      <FinalCTA />
    </>
  );
}

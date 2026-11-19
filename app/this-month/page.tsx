import {
  Action,
  Eyebrow,
  ProductGrid,
  CityGrid,
  FinalCTA,
  Badge,
} from "@/components/ui";
import { Photo } from "@/components/photo";
import { Gallery } from "@/features/gallery";
import { cities } from "@/content/cities";
export const metadata = {
  title: "Austin Discovery Box",
  description:
    "Take a closer look at the illustrative Austin box: coffee, honey, a snack, ceramics, and city stories.",
};
export default function Page() {
  return (
    <>
      <section className="container section box-hero">
        <Gallery />
        <div>
          <Eyebrow>THIS MONTH’S BOX</Eyebrow>
          <h1>
            Austin,
            <br />
            delivered.
          </h1>
          <div className="badge-row">
            <Badge status="current" />
            <span className="badge preview">Example contents</span>
          </div>
          <p>
            A little music-city energy, a few bold flavors, and something made
            for everyday rituals. Take a closer look at our Austin discovery box
            concept.
          </p>
          <ul className="box-facts">
            <li>Four sample goods</li>
            <li>One city postcard</li>
            <li>One story insert</li>
            <li>Austin, Texas</li>
          </ul>
          <Action href="/plans">Find Your Plan</Action>
        </div>
      </section>
      <section className="sage-section section" id="inside-the-box">
        <div className="container">
          <Eyebrow>SMALL THINGS. A SENSE OF PLACE.</Eyebrow>
          <h2>Let’s look inside.</h2>
          <p>
            Products shown are illustrative examples and are not available for
            individual purchase through this demo.
          </p>
          <ProductGrid full />
        </div>
      </section>
      <section className="container section" id="maker-stories">
        <Eyebrow>THE STORIES BEHIND THE CONCEPT</Eyebrow>
        <h2>Made for a moment of discovery.</h2>
        <article className="editorial-row">
          <Photo
            src="/images/coffee.webp"
            alt="Fictional coffee packaging arranged with coffee beans"
            width={700}
            height={525}
          />
          <div>
            <p className="mini-label">ILLUSTRATIVE MAKER STORY</p>
            <h3>The ritual of a first cup</h3>
            <p>
              There is a particular kind of curiosity in opening a new bag of
              coffee. Before the first sip, the ritual begins with a small
              pause: a cup on the counter, a familiar tool, a little time set
              aside. Hill Country Coffee is a fictional concept built around
              that moment. It gives the Austin box an everyday starting point,
              something to return to after the postcard has been read. The story
              does not describe a real roaster, bean origin, or partnership.
              Those details would need a maker’s own voice and verified sourcing
              in a real service. Here, the coffee invites us to imagine how
              discovering a place might begin with something as simple as a
              morning cup.
            </p>
          </div>
        </article>
        <article className="editorial-row">
          <Photo
            src="/images/maker-studio.webp"
            alt="Illustrative ceramics studio scene"
            width={1200}
            height={800}
          />
          <div>
            <p className="mini-label">ILLUSTRATIVE MAKER STORY</p>
            <h3>{cities[0].storyTitle}</h3>
            <p>{cities[0].story}</p>
          </div>
        </article>
        <div className="highlight-grid">
          {cities[0].highlights.map((h) => (
            <article key={h.title}>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
              <Action href="/cities/austin" secondary>
                Explore Austin
              </Action>
            </article>
          ))}
        </div>
        <p className="small">
          City context: <a href={cities[0].source}>{cities[0].sourceName}</a>{" "}
          and{" "}
          <a href="https://www.austintexas.gov/parks/locations/ann-and-roy-butler-hike-and-bike-trail-and-boardwalk-lady-bird-lake">
            Austin Parks
          </a>
          .
        </p>
      </section>
      <section className="container section">
        <Eyebrow>WHERE CURIOSITY COULD TAKE US</Eyebrow>
        <h2>A few places on the horizon.</h2>
        <CityGrid items={cities.slice(1)} />
      </section>
      <FinalCTA />
    </>
  );
}

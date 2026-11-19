import type { Metadata } from "next";
import {
  Action,
  Eyebrow,
  Stamp,
  Steps,
  ProductGrid,
  CityGrid,
  PlanCards,
  FinalCTA,
} from "@/components/ui";
import { Photo } from "@/components/photo";
import { FAQList } from "@/features/faq";
export const metadata: Metadata = { };
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>SMALL BUSINESSES. BIG DISCOVERIES.</Eyebrow>
          <h1>
            A new city,
            <br />
            at your doorstep.
          </h1>
          <p>
            Discover local makers, regional favorites, and the stories behind
            them—all in one monthly box.
          </p>
          <Action href="/this-month">Explore This Month’s Box</Action>
          <Action href="/how-it-works" secondary>
            See How It Works
          </Action>
        </div>
        <div className="hero-image">
          <picture>
            <source
              media="(max-width:639px)"
              srcSet="/images/hero-box-mobile.webp"
            />
            <Photo
              src="/images/hero-box.webp"
              alt="An open Marlowby kraft box with coffee, honey, a snack, ceramics, and an Austin postcard"
              width={1440}
              height={960}
              priority
            />
          </picture>
          <div className="postage">
            <span>Next stop:</span>
            <strong>Austin, Texas</strong>
            <span className="postage-lines" aria-hidden="true">
              ∿ ∿ ∿
            </span>
          </div>
          <span className="hero-caption">
            A LITTLE LOCAL DISCOVERY, DELIVERED.
          </span>
        </div>
      </section>
      <Steps />
      <section className="container section austin-feature">
        <div className="austin-story">
          <Eyebrow>THIS MONTH’S BOX</Eyebrow>
          <h2>
            This month, we’re
            <br />
            headed to Austin.
          </h2>
          <p>
            Live music, bold flavors, and a creative spirit. Our Austin box
            brings together an illustrative selection of regional goods and
            maker stories, from craft coffee to small-batch snacks.
          </p>
          <Action href="/this-month#inside-the-box">
            Look Inside the Austin Box
          </Action>
          <div className="austin-photo">
            <Photo
              src="/images/austin.webp"
              alt="Austin skyline reflecting in Lady Bird Lake"
              width={900}
              height={560}
            />
            <span>
              Live music.
              <br />
              Good people.
              <br />
              Local discoveries.
            </span>
          </div>
        </div>
        <div className="austin-products">
          <Stamp />
          <ProductGrid />
          <p className="small product-disclosure">
            Sample products shown. Makers and contents are illustrative.
          </p>
        </div>
      </section>
      <section className="container section destination-section">
        <div className="section-heading">
          <div>
            <Eyebrow>EXPLORE DESTINATIONS</Eyebrow>
            <h2>Find your next favorite city.</h2>
          </div>
          <Action href="/cities" secondary>
            Explore All Cities
          </Action>
        </div>
        <CityGrid />
        <p className="small destination-note">
          Austin is our current box concept. New Orleans and Portland are
          editorial previews.
        </p>
      </section>
      <section className="sage-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>YOUR CURIOSITY. YOUR PACE.</Eyebrow>
              <h2>Find a plan that takes you places.</h2>
              <p>One city at a time. A little more to discover.</p>
            </div>
            <Action href="/plans#compare" secondary>
              Compare Plans
            </Action>
          </div>
          <PlanCards compact />
          <p className="small center">
            Illustrative pricing. This demonstration does not create a paid
            subscription.
          </p>
        </div>
      </section>
      <section className="container section story-preview">
        <Photo
          src="/images/maker-studio.webp"
          alt="Illustrative studio scene with hands shaping a ceramic object"
          width={1200}
          height={800}
        />
        <div>
          <Eyebrow>THE PEOPLE. THE PLACES. THE LITTLE THINGS.</Eyebrow>
          <h2>
            Every good discovery
            <br />
            has a story.
          </h2>
          <p>
            A place is more than a point on a map. It’s the flavors, familiar
            corners, and creative people that make you want to stay a little
            longer. Marlowby starts with that feeling.
          </p>
          <Action href="/our-story" secondary>
            Our Story
          </Action>
          <p className="small">
            Concept imagery, not a depiction of a real partner.
          </p>
        </div>
      </section>
      <section className="container section faq-preview">
        <div>
          <Eyebrow>A LITTLE HELP ALONG THE WAY</Eyebrow>
          <h2>
            Curious?
            <br />
            You’re in good company.
          </h2>
          <Action href="/faq" secondary>
            View All Questions
          </Action>
        </div>
        <FAQList
          ids={[
            "box-contents-0",
            "cities-0",
            "plans-and-billing-0",
            "about-the-demo-0",
          ]}
        />
      </section>
      <FinalCTA />
    </>
  );
}

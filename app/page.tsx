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
} from "@/components/ui-v2";
import { Photo } from "@/components/photo";
import { FAQList } from "@/features/faq";
import { products } from "@/content/cities";
export const metadata: Metadata = { };
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>SMALL BUSINESSES. BIG DISCOVERIES.</Eyebrow>
            <h1>
              A new city,
              <br />
              at your doorstep.
            </h1>
            <p className="lead">Discover local makers, regional favorites, and the stories behind them—all in one monthly box.</p>
            <div className="hero-actions">
              <Action href="/this-month" variant="primary" size="lg">
                Explore This Month's Box
              </Action>
              <Action href="/how-it-works" variant="secondary" size="lg">
                See How It Works
              </Action>
            </div>
          </div>
          <div className="hero-image">
            <picture>
              <source media="(max-width:639px)" srcSet="/images/hero-box-mobile.webp" />
              <Photo
                src="/images/hero-box.webp"
                alt="An open Marlowby discovery box with curated goods"
                width={1440}
                height={960}
                priority
              />
            </picture>
            <div className="postage">
              <span className="postage-label">Next stop:</span>
              <strong className="postage-city">Austin, Texas</strong>
              <span className="postage-lines" aria-hidden="true">∿ ∿ ∿</span>
            </div>
            <span className="hero-caption">A LITTLE LOCAL DISCOVERY, DELIVERED.</span>
          </div>
        </div>
      </section>
      <Steps />
      <section className="section austin-feature">
        <div className="container">
          <div className="austin-story editorial-row">
            <div>
              <Eyebrow>THIS MONTH'S BOX</Eyebrow>
              <h2>This month, we're<br />headed to Austin.</h2>
              <p>Live music, bold flavors, and a creative spirit. Our Austin box brings together an illustrative selection of regional goods and maker stories, from craft coffee to small-batch snacks.</p>
              <Action href="/this-month#inside-the-box" variant="primary" size="lg">
                Look Inside the Austin Box
              </Action>
            </div>
            <div className="austin-photo">
              <Photo
                src="/images/austin.webp"
                alt="Austin skyline reflecting in Lady Bird Lake"
                width={900}
                height={560}
              />
              <div className="austin-overlay">
                Live music.<br />Good people.<br />Local discoveries.
              </div>
            </div>
          </div>
          <div className="austin-products">
            <Stamp />
            <ProductGrid products={products} />
            <p className="product-disclosure">Sample products shown. Makers and contents are illustrative.</p>
          </div>
        </div>
      </section>
      <section className="section surface-1 destination-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>EXPLORE DESTINATIONS</Eyebrow>
              <h2>Find your next favorite city.</h2>
            </div>
            <Action href="/cities" variant="secondary" size="lg">
              Explore All Cities
            </Action>
          </div>
          <CityGrid />
          <p className="destination-note">Austin is our current box concept. New Orleans and Portland are editorial previews.</p>
        </div>
      </section>
      <section className="section canvas plans-preview">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>YOUR CURIOSITY. YOUR PACE.</Eyebrow>
              <h2>Find a plan that takes you places.</h2>
              <p>One city at a time. A little more to discover.</p>
            </div>
            <Action href="/plans#compare" variant="secondary" size="lg">
              Compare Plans
            </Action>
          </div>
          <PlanCards compact />
          <p className="plans-disclosure">Illustrative pricing. This demonstration does not create a paid subscription.</p>
        </div>
      </section>
      <section className="section surface-1 story-preview">
        <div className="container">
          <div className="editorial-row">
            <Photo
              src="/images/maker-studio.webp"
              alt="Illustrative studio scene with hands shaping a ceramic object"
              width={1200}
              height={800}
              className="story-photo"
            />
            <div className="story-copy">
              <Eyebrow>THE PEOPLE. THE PLACES. THE LITTLE THINGS.</Eyebrow>
              <h2>Every good discovery<br />has a story.</h2>
              <p>A place is more than a point on a map. It's the flavors, familiar corners, and creative people that make you want to stay a little longer. Marlowby starts with that feeling.</p>
              <Action href="/our-story" variant="secondary" size="lg">
                Our Story
              </Action>
              <p className="story-disclosure">Concept imagery, not a depiction of a real partner.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section canvas faq-preview">
        <div className="container">
          <div className="section-heading faq-preview-heading">
            <div>
              <Eyebrow>A LITTLE HELP ALONG THE WAY</Eyebrow>
              <h2>Curious?<br />You're in good company.</h2>
            </div>
            <Action href="/faq" variant="secondary" size="lg">
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
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
import { notFound } from "next/navigation";
import { cities } from "@/content/cities";
import {
  Breadcrumbs,
  Badge,
  Eyebrow,
  Action,
  ProductGrid,
  CityGrid,
} from "@/components/ui";
import { Photo } from "@/components/photo";
export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = cities.find((c) => c.slug === slug);
  return {
    title: c ? `${c.name}, ${c.state}` : "Destination not found",
    description: c?.intro,
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Explore Cities", href: "/cities" },
          { label: city.name },
        ]}
      />
      <section className="container city-detail-hero">
        <div>
          <Badge status={city.status} />
          <Eyebrow>A MARLOWBY DESTINATION</Eyebrow>
          <h1>
            {city.name},<br />
            <em>{city.state}.</em>
          </h1>
          <p>{city.intro}</p>
          {city.status === "preview" && (
            <p className="small">
              An editorial preview. No release date is announced.
            </p>
          )}
          <Action href="/this-month">
            {city.status === "current"
              ? "Explore the Austin Box"
              : "See This Month’s Box"}
          </Action>
          {city.status === "current" && (
            <Action href="/plans" secondary>
              Compare Plans
            </Action>
          )}
        </div>
        <Photo
          src={city.image}
          alt={city.alt}
          width={1000}
          height={800}
          priority
        />
      </section>
      <section className="container section">
        <Eyebrow>A SENSE OF PLACE</Eyebrow>
        <h2>A few reasons to look a little closer.</h2>
        <div className="highlight-grid">
          {city.highlights.map((h, i) => (
            <article key={h.title}>
              <span className="highlight-number">0{i + 1}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </article>
          ))}
        </div>
        <p className="small">
          Explore the context: <a href={city.source}>{city.sourceName}</a>
          {city.id === "austin" && (
            <>
              {" "}
              ·{" "}
              <a href="https://www.austintexas.gov/parks/locations/ann-and-roy-butler-hike-and-bike-trail-and-boardwalk-lady-bird-lake">
                Austin Parks
              </a>
            </>
          )}
          {city.id === "portland" && (
            <>
              {" "}
              ·{" "}
              <a href="https://www.travelportland.com/attractions/parks-gardens/">
                Portland parks and gardens
              </a>
            </>
          )}
        </p>
      </section>
      <section className="sage-section section">
        <div className="container">
          <Eyebrow>AN ILLUSTRATIVE COLLECTION</Eyebrow>
          <h2>A little {city.name} inspiration.</h2>
          <p>
            Fictional sample makers and product concepts. Images illustrate
            materials and mood; no individual products are available to
            purchase.
          </p>
          <ProductGrid ids={city.products} />
        </div>
      </section>
      <section className="container section editorial-row">
        <Photo
          src={
            city.id === "austin"
              ? "/images/maker-studio.webp"
              : "/images/paper.webp"
          }
          alt="Illustrative craft and material study, not an actual maker partnership"
          width={1200}
          height={800}
        />
        <div>
          <Eyebrow>ILLUSTRATIVE MAKER STORY</Eyebrow>
          <h2>{city.storyTitle}.</h2>
          <p>{city.story}</p>
          <Action href="/this-month">
            {city.id === "austin"
              ? "Explore the Austin Box"
              : "See This Month’s Box"}
          </Action>
        </div>
      </section>
      <section className="container section">
        <Eyebrow>KEEP EXPLORING</Eyebrow>
        <h2>Another place. A new perspective.</h2>
        <CityGrid items={cities.filter((c) => c.id !== city.id)} />
      </section>
    </>
  );
}

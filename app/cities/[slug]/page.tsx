import { notFound } from "next/navigation";
import { allCities as cities, products, getProductsForCity } from "@/content/cities";
import {
  Breadcrumbs,
  Badge,
  Eyebrow,
  Action,
  ProductGrid,
  CityGrid,
} from "@/components/ui-v2";
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
      <section className="city-detail-hero">
        <div className="container">
          <div className="city-detail-copy">
            <Badge status={city.status} />
            <Eyebrow>A MARLOWBY DESTINATION</Eyebrow>
            <h1>
              {city.name},<br />
              <em>{city.state}.</em>
            </h1>
            <p>{city.intro}</p>
            {city.status === "preview" && (
              <p className="small">An editorial preview. No release date is announced.</p>
            )}
            <Action href="/this-month" variant="primary">
              {city.status === "current"
                ? "Explore the Austin Box"
                : "See This Month's Box"}
            </Action>
            {city.status === "current" && (
              <Action href="/plans" variant="secondary">Compare Plans</Action>
            )}
          </div>
          <Photo
            src={city.heroImage}
            alt={city.heroImageAlt}
            width={1000}
            height={800}
            priority
            className="photo-rounded"
          />
        </div>
      </section>
      <section className="section canvas">
        <div className="container">
          <Eyebrow>A SENSE OF PLACE</Eyebrow>
          <h2>A few reasons to look a little closer.</h2>
          <div className="highlight-grid">
            {city.highlights.map((h, i) => (
              <article key={h.title} className="card">
                <span className="highlight-number">0{i + 1}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>
          <p className="small">
            Explore the context: <a href={city.sources[0]?.url}>{city.sources[0]?.name}</a>
            {city.id === "austin" && (
              <>
                {" "}
                {"·"}
                <a href="https://www.austintexas.gov/parks/locations/ann-and-roy-butler-hike-and-bike-trail-and-boardwalk-lady-bird-lake">
                  Austin Parks
                </a>
              </>
            )}
            {city.id === "portland" && (
              <>
                {" "}
                {"·"}
                <a href="https://www.travelportland.com/attractions/parks-gardens/">
                  Portland parks and gardens
                </a>
              </>
            )}
          </p>
        </div>
      </section>
      <section className="section surface-1 bordered-top bordered-bottom">
        <div className="container container-wide">
          <Eyebrow>AN ILLUSTRATIVE COLLECTION</Eyebrow>
          <h2>A little {city.name} inspiration.</h2>
          <p>Fictional sample makers and product concepts. Images illustrate
            materials and mood; no individual products are available to
            purchase.</p>
          <ProductGrid products={getProductsForCity(city.id)} />
        </div>
      </section>
      <section className="section surface-1 bordered-top bordered-bottom editorial-row">
        <div className="container">
          <Photo
            src={
              city.id === "austin"
                ? "/images/maker-studio.webp"
                : "/images/paper.webp"
            }
            alt="Illustrative craft and material study, not an actual maker partnership"
            width={1200}
            height={800}
            className="photo-rounded"
          />
          <div>
            <Eyebrow>ILLUSTRATIVE MAKER STORY</Eyebrow>
            <h2>{city.story.title}.</h2>
            <p>{city.story.content}</p>
            <Action href="/this-month" variant="primary">
              {city.id === "austin"
                ? "Explore the Austin Box"
                : "See This Month's Box"}
            </Action>
          </div>
        </div>
      </section>
      <section className="section canvas">
        <div className="container">
          <Eyebrow>KEEP EXPLORING</Eyebrow>
          <h2>Another place. A new perspective.</h2>
          <CityGrid cities={cities.filter((c) => c.id !== city.id)} />
        </div>
      </section>
    </>
  );
}
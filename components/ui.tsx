import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  PackageOpen,
  CalendarDays,
  Gift,
  Compass,
} from "lucide-react";
import { cities, products, type City, type CityProduct } from "@/content/cities/index";
import { plans, planTotal, money } from "@/lib/domain.mts";
import { Photo } from "./photo";
export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={`logo ${inverse ? "inverse" : ""}`}
      aria-label="Marlowby home"
    >
      <svg
        width="39"
        height="43"
        viewBox="0 0 40 44"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m4 23 16-7 16 7v15l-16 6-16-6V23Zm0 0 16 6 16-6M20 29v15"
          stroke="var(--color-teal)"
          strokeWidth="1.6"
        />
        <path
          d="M27 9c0 5-7 12-7 12S13 14 13 9a7 7 0 1 1 14 0Z"
          fill="var(--color-cream)"
          stroke="var(--color-magenta)"
          strokeWidth="1.6"
        />
        <circle cx="20" cy="9" r="2" stroke="var(--color-magenta)" strokeWidth="1.6" />
      </svg>
      <span>marlowby</span>
    </Link>
  );
}
export function Action({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      className={`${secondary ? "text-link" : "button"} ${className}`}
      href={href}
    >
      {children}
      <ArrowRight size={19} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function Stamp({
  city = "Austin",
  state = "Texas",
  small = false,
}: {
  city?: string;
  state?: string;
  small?: boolean;
}) {
  return (
    <div className={`stamp ${small ? "small" : ""}`} aria-hidden="true">
      <span>{city}</span>
      <span className="stamp-star">✦</span>
      <span>{state}</span>
    </div>
  );
}
export function Badge({ status }: { status: City["status"] }) {
  const labels: Record<City["status"], string> = {
    current: "Current box",
    preview: "Preview",
    upcoming: "Coming soon",
    archived: "Past box"
  };
  return (
    <span className={`badge ${status}`}>
      {labels[status] || status}
    </span>
  );
}
export function CityCard({ city }: { city: City }) {
  return (
    <Link href={`/cities/${city.slug}`} className="city-card">
      <Photo src={city.heroImage} alt={city.heroImageAlt} width={640} height={400} />
      <div className="city-card-content">
        <Badge status={city.status} />
        <h3>{city.name}</h3>
        <span className="city-state">{city.state}</span>
        <span className="city-tagline">{city.tagline}</span>
        <span className="circle-arrow">
          <ArrowRight size={21} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
export function CityGrid({ items = cities }: { items?: City[] }) {
  return (
    <div className="city-grid">
      {items.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}
export function ProductCard({
  product,
  full = false,
}: {
  product: CityProduct;
  full?: boolean;
}) {
  return (
    <article className="product-card">
      <Photo
        src={product.image}
        alt={`${product.name}, illustrative ${product.category.toLowerCase()}`}
        width={600}
        height={450}
      />
      <div className="product-copy">
        <span className="mini-label">{product.category}</span>
        <h3>{product.name}</h3>
        <p>{full ? product.detail : product.description}</p>
        {full && (
          <Link className="text-link" href="/this-month#maker-stories">
            Read the concept story <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </article>
  );
}
export function ProductGrid({
  ids = ["coffee", "honey", "pecans", "ceramic"],
  full = false,
}: {
  ids?: string[];
  full?: boolean;
}) {
  return (
    <div className={`product-grid ${full ? "full-products" : ""}`}>
      {ids.map((id) => {
        const p = products.find((p) => p.id === id)!;
        return <ProductCard product={p} full={full} key={id} />;
      })}
    </div>
  );
}
export function Steps() {
  const items = [
    {
      Icon: CalendarDays,
      title: "Pick your plan",
      text: "Choose the subscription that fits your adventure.",
    },
    {
      Icon: MapPin,
      title: "Meet a new city",
      text: "Each month features a different U.S. city and its local small businesses.",
    },
    {
      Icon: Gift,
      title: "Unbox something local",
      text: "A curated box of goods, stories, and flavors, delivered to your door.",
    },
  ];
  return (
    <section className="steps-strip" aria-label="How Marlowby works">
      <div className="container steps">
        {items.map(({ Icon, title, text }, i) => (
          <div className="step" key={title}>
            <span className="step-icon">
              <Icon size={32} strokeWidth={1.35} aria-hidden="true" />
            </span>
            <div>
              <span className="step-number">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container cta-inner">
        <Compass size={46} strokeWidth={1} aria-hidden="true" />
        <h2>
          Your next favorite place
          <br />
          is closer than you think.
        </h2>
        <p>
          Start with a little curiosity. See what a Marlowby journey could look
          like.
        </p>
        <Action href="/plans">Find Your Plan</Action>
        <span className="cta-caption">GOOD PLACES TRAVEL FAR.</span>
      </div>
    </section>
  );
}
export function PlanCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`plan-grid ${compact ? "compact" : ""}`}>
      {plans.map((p, i) => {
        const total = planTotal(p.id)!;
        return (
          <article className="plan-card" key={p.id}>
            <div className="plan-topline">
              <span className="mini-label">
                {i === 0 ? "A LITTLE DISCOVERY" : "A LONGER ADVENTURE"}
              </span>
              <PackageOpen size={27} strokeWidth={1.25} />
            </div>
            <h3>{p.name}</h3>
            <p>{p.term}</p>
            <div className="plan-price">
              {money(p.base)}
              <span>{p.boxes === 1 ? " / box" : " / three boxes"}</span>
            </div>
            {p.boxes === 3 && (
              <p className="small">
                Prepaid concept · equivalent to $45 per box
              </p>
            )}
            <p className="small">
              + {money(total.shipping)} illustrative shipping
              {p.boxes === 3 ? " for the term" : ""}
            </p>
            <div className="plan-total">
              <span>Estimated total before tax</span>
              <strong>{money(total.total)}</strong>
            </div>
            {!compact && (
              <ul className="inclusions">
                <li>City-inspired goods to discover</li>
                <li>A keepsake postcard & story insert</li>
                <li>
                  {p.boxes === 1
                    ? "One box in the example term"
                    : "Three boxes in the example term"}
                </li>
                <li>No payment or real subscription</li>
              </ul>
            )}
            <Action href={compact ? "/plans" : `/checkout?plan=${p.id}`}>
              {compact ? "Explore this plan" : `Choose ${p.name}`}
            </Action>
          </article>
        );
      })}
    </div>
  );
}
export function PageIntro({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <header className={`page-intro container ${center ? "center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {children && <div className="intro-copy">{children}</div>}
    </header>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

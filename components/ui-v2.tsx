"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  PackageOpen,
  CalendarDays,
  Gift,
  Compass,
  Search,
  ChevronDown,
  X,
  Menu,
  Heart,
  Tag,
  Truck,
  ShieldCheck,
  ArrowLeft,
  Plus,
  Minus,
  Star,
  MapPin as MapPinIcon
} from "lucide-react";
import {
  cities,
  type City,
  type CityProduct,
  regions,
  themes,
  statusConfig,
  type RegionId,
  type CityTheme,
  type CityStatus,
  getCitiesByStatus,
  getCitiesByRegion,
  getCitiesByTheme,
  searchCities
} from "@/content/cities-v2";
import { Photo } from "./photo";
import { money, plans, planTotal, type PlanId, validateDetails, type Details } from "@/lib/domain.mts";

/* ==========================================================================
   LAYOUT COMPONENTS
   ========================================================================== */

export function Logo({ inverse = false, size = "default" }: { inverse?: boolean; size?: "default" | "sm" | "lg" }) {
  const sizes = {
    sm: { svg: 28, text: "24px", gap: 8 },
    default: { svg: 36, text: "32px", gap: 12 },
    lg: { svg: 44, text: "40px", gap: 16 }
  };
  const s = sizes[size];

  return (
    <Link href="/" className={`logo ${inverse ? "inverse" : ""}`} aria-label="Marlowby home">
      <svg width={s.svg} height={s.svg * 1.1} viewBox="0 0 40 44" fill="none" aria-hidden="true">
        <path d="m4 23 16-7 16 7v15l-16 6-16-6V23Zm0 0 16 6 16-6M20 29v15" stroke="currentColor" strokeWidth="1.6" />
        <path d="M27 9c0 5-7 12-7 12S13 14 13 9a7 7 0 1 1 14 0Z" fill="var(--color-cream)" stroke="var(--color-amber)" strokeWidth="1.6" />
        <circle cx="20" cy="9" r="2" stroke="var(--color-amber)" strokeWidth="1.6" />
      </svg>
      <span style={{ fontSize: s.text, letterSpacing: "-0.02em" }}>marlowby</span>
    </Link>
  );
}

export function Action({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "outline";
  size?: "sm" | "default" | "lg";
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const variants = {
    primary: "btn btn-primary",
    secondary: "btn btn-secondary",
    accent: "btn btn-accent",
    ghost: "btn btn-ghost",
    outline: "btn btn-outline"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  return (
    <Link
      className={`${variants[variant]} ${sizes[size]} ${className}`}
      href={href}
      {...props}
    >
      {children}
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Badge({
  status,
  children,
  variant = "status",
  className = ""
}: {
  status?: CityStatus;
  children?: React.ReactNode;
  variant?: "status" | "theme" | "default";
  className?: string;
}) {
  if (children) {
    return (
      <span className={`badge badge-primary ${className}`}>
        {children}
      </span>
    );
  }

  if (!status) return null;

  const config = statusConfig[status];
  return (
    <span className={`badge badge-${config.badgeVariant} ${className}`} style={{ backgroundColor: config.color }}>
      {config.label}
    </span>
  );
}

export function ThemeBadge({ theme }: { theme: CityTheme }) {
  const themeData = themes[theme];
  return (
    <span className="badge badge-secondary" style={{ gap: "6px" }}>
      <span aria-hidden="true">{themeData.icon}</span>
      {themeData.label}
    </span>
  );
}

/* ==========================================================================
   NAVIGATION & HEADER
   ========================================================================== */

const navLinks = [
  { label: "Discover", href: "/cities" },
  { label: "This Month", href: "/this-month" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Story", href: "/our-story" },
];

export function Header() {
  // This will be implemented as a client component with mobile menu
  // For now, returning a simpler version
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <Logo size="default" />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="nav-link">{label}</Link>
          ))}
        </nav>
        <Action href="/plans" variant="primary" size="sm">Choose a Plan</Action>
      </div>
    </header>
  );
}

export function Footer() {
  const footerSections = [
    {
      title: "Discover",
      links: [
        ["Cities", "/cities"],
        ["This Month's Box", "/this-month"],
        ["How It Works", "/how-it-works"],
        ["Our Story", "/our-story"],
      ]
    },
    {
      title: "Plans",
      links: [
        ["Monthly", "/plans?plan=monthly"],
        ["Three-Month Journey", "/plans?plan=three-month"],
        ["Gifting", "/plans#gifting"],
        ["FAQ", "/faq"],
      ]
    },
    {
      title: "Company",
      links: [
        ["About", "/our-story"],
        ["Contact", "/contact"],
        ["Privacy", "/privacy"],
        ["Terms", "/terms"],
      ]
    },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo inverse size="lg" />
            <p className="text-muted" style={{ marginTop: "16px", maxWidth: "280px" }}>
              A new city, at your doorstep. Discover local makers, regional favorites, and the stories behind them.
            </p>
            <p className="eyebrow" style={{ marginTop: "24px" }}>GOOD PLACES TRAVEL FAR.</p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm" style={{ fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-charcoal-medium)", marginBottom: "16px" }}>{section.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {section.links.map(([name, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-link" style={{ fontSize: "14px", padding: 0 }}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom" style={{ borderTop: "1px solid var(--color-border)", marginTop: "48px", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", fontSize: "13px", color: "var(--color-charcoal-muted)" }}>
          <span>© {new Date().getFullYear()} Marlowby</span>
          <span>Marlowby is a demonstration experience. No real orders or payments are processed.</span>
        </div>
      </div>
    </footer>
  );
}

/* ==========================================================================
   CITY COMPONENTS
   ========================================================================== */

export function CityCard({
  city,
  variant = "default",
  showAction = true
}: {
  city: City;
  variant?: "default" | "compact" | "featured";
  showAction?: boolean;
}) {
  const config = statusConfig[city.status];
  const theme = city.themes[0];
  const themeData = themes[theme];

  const variants = {
    default: "card card-interactive aspect-[4/3] relative overflow-hidden p-0",
    compact: "card card-interactive aspect-[16/10] relative overflow-hidden p-0",
    featured: "card card-interactive aspect-[1/1] relative overflow-hidden p-0 flex flex-col"
  };

  return (
    <Link href={`/cities/${city.slug}`} className={variants[variant]} aria-label={`Explore ${city.name}, ${city.state}`}>
      <div className="absolute inset-0 z-0">
        <Photo src={city.heroImage} alt={city.heroImageAlt} width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 p-6 flex flex-col justify-between h-full">
        <div>
          <Badge status={city.status} />
          {theme && <ThemeBadge theme={theme} style={{ marginTop: "8px", alignSelf: "flex-start" }} />}
        </div>

        <div>
          <h3 className="text-display text-cream" style={{ fontSize: variant === "featured" ? "var(--text-3xl)" : "var(--text-2xl)" }}>
            {city.name}
          </h3>
          <p className="text-cream/80 text-sm mt-1">{city.state}</p>
          <p className="text-cream/70 text-sm mt-2 line-clamp-2">{city.shortDescription}</p>
        </div>

        {showAction && (
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-cream/60 text-xs uppercase tracking-wide">{city.region.replace("-", " ")}</span>
            <span className="circle-arrow" aria-hidden="true">
              <ArrowRight size={20} className="text-cream" />
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export function CityGrid({
  cities: cityList = cities,
  variant = "default",
  title,
  showViewAll = false,
  viewAllHref = "/cities"
}: {
  cities?: City[];
  variant?: "default" | "compact" | "featured";
  title?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
}) {
  if (!cityList.length) {
    return (
      <div className="card p-12 text-center">
        <MapPinIcon size={48} className="mx-auto text-charcoal-muted mb-4" />
        <h3 className="text-display">No cities found</h3>
        <p className="text-muted mt-2">Try adjusting your filters or search.</p>
      </div>
    );
  }

  return (
    <section className="city-grid-section">
      {(title || showViewAll) && (
        <div className="section-heading flex justify-between items-end mb-8">
          <div>
            {title && (
              <>
                <Eyebrow>EXPLORE DESTINATIONS</Eyebrow>
                <h2 className="text-display">{title}</h2>
              </>
            )}
          </div>
          {showViewAll && (
            <Action href={viewAllHref} variant="ghost" size="sm">View all cities</Action>
          )}
        </div>
      )}
      <div className="grid grid-2 md:grid-3 lg:grid-4" style={{ gap: "var(--space-6)" }}>
        {cityList.map((city) => (
          <CityCard key={city.id} city={city} variant={variant} />
        ))}
      </div>
    </section>
  );
}

/* ==========================================================================
   PRODUCT COMPONENTS
   ========================================================================== */

export function ProductCard({
  product,
  variant = "default",
  cityName
}: {
  product: CityProduct;
  variant?: "default" | "detailed" | "checkout";
  cityName?: string;
}) {
  const variants = {
    default: "card overflow-hidden",
    detailed: "card overflow-hidden grid grid-cols-[1fr_2fr] gap-0",
    checkout: "card overflow-hidden grid grid-cols-[80px_1fr] gap-0"
  };

  if (variant === "detailed") {
    return (
      <article className={variants.detailed}>
        <div className="relative aspect-[4/3]">
          <Photo src={product.image} alt={product.name} width={400} height={300} className="w-full h-full object-cover" />
          <Badge className="absolute top-4 left-4" children={product.category} />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <p className="mini-label">{product.category}</p>
            <h3 className="text-display mt-1">{product.name}</h3>
            <p className="text-muted mt-2">{product.description}</p>
            {product.maker && !product.maker.isReal && (
              <p className="text-xs text-charcoal-muted mt-3 italic">
                Illustrative concept by {product.maker.name} — not a real partnership
              </p>
            )}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-charcoal-medium text-sm">From {cityName || product.maker.location}</span>
            <Action href="# " variant="ghost" size="sm">Learn more</Action>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "checkout") {
    return (
      <article className={variants.checkout}>
        <div className="relative aspect-square">
          <Photo src={product.image} alt={product.name} width={200} height={200} className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-center">
          <h4 className="text-display text-sm">{product.name}</h4>
          <p className="text-xs text-charcoal-medium mt-1">{product.category}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={variants.default}>
      <div className="relative aspect-[4/3]">
        <Photo src={product.image} alt={product.name} width={400} height={300} className="w-full h-full object-cover" />
        <Badge className="absolute top-3 left-3" children={product.category} />
        {product.maker && !product.maker.isReal && (
          <span className="absolute top-3 right-3 badge badge-secondary text-xs">Concept</span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-display">{product.name}</h3>
        <p className="text-sm text-charcoal-medium mt-1">{product.maker.location}</p>
        <p className="text-muted text-sm mt-2 line-clamp-2">{product.description}</p>
      </div>
    </article>
  );
}

export function ProductGrid({
  products,
  variant = "default",
  title,
  subtitle
}: {
  products: CityProduct[];
  variant?: "default" | "detailed" | "checkout";
  title?: string;
  subtitle?: string;
}) {
  if (!products.length) return null;

  return (
    <section className="product-grid-section">
      {(title || subtitle) && (
        <div className="section-heading flex justify-between items-end mb-8">
          <div>
            {title && (
              <>
                <Eyebrow>WHAT'S INSIDE</Eyebrow>
                <h2 className="text-display">{title}</h2>
              </>
            )}
            {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="grid grid-2 md:grid-3 lg:grid-4" style={{ gap: "var(--space-6)" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant={variant} />
        ))}
      </div>
    </section>
  );
}

/* ==========================================================================
   BOX PREVIEW COMPONENT
   ========================================================================== */

export function BoxPreview({
  city,
  products,
  compact = false
}: {
  city: City;
  products: CityProduct[];
  compact?: boolean;
}) {
  return (
    <section className={`box-preview ${compact ? "compact" : ""}`} aria-labelledby="box-preview-title">
      <div className="box-preview-inner">
        <div className="box-preview-visual">
          <div className="box-illustration" aria-hidden="true">
            <div className="box-lid" />
            <div className="box-base">
              <div className="box-items">
                {products.slice(0, 4).map((product, i) => (
                  <div key={product.id} className="box-item" style={{
                    '--i': i,
                    backgroundImage: `url(${product.image})`
                  }} />
                ))}
              </div>
            </div>
          </div>
          <div className="box-tagline">
            <span>{city.name} Box</span>
            <span className="text-xs text-charcoal-muted">{city.state}</span>
          </div>
        </div>

        <div className="box-preview-content">
          <Eyebrow>THIS MONTH'S DISCOVERY</Eyebrow>
          <h2 id="box-preview-title" className="text-display">
            {city.name},<br />
            <span style={{ color: "var(--color-amber)" }}>delivered.</span>
          </h2>
          <p className="text-muted mt-4 max-w-md">{city.shortDescription}</p>

          <div className="box-facts mt-6" style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <div className="fact-item flex items-center gap-2 text-sm text-charcoal-medium">
              <PackageOpen size={16} /> {products.length} curated goods
            </div>
            <div className="fact-item flex items-center gap-2 text-sm text-charcoal-medium">
              <MapPin size={16} /> {city.name}, {city.state}
            </div>
            <div className="fact-item flex items-center gap-2 text-sm text-charcoal-medium">
              <Gift size={16} /> Postcard + story insert
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Action href={`/cities/${city.slug}`} variant="primary" size="lg">Explore the Box</Action>
            <Action href="/plans" variant="secondary" size="lg">Choose a Plan</Action>
          </div>

          <p className="text-xs text-charcoal-muted mt-6" style={{ maxWidth: "300px" }}>
            Products shown are illustrative concepts. Makers and contents vary by box.
          </p>
        </div>
      </div>

      <style jsx>{`
        .box-preview {
          background: var(--color-cream-warm);
          border-radius: var(--radius-2xl);
          overflow: hidden;
          margin: var(--space-8) calc(var(--space-4) * -1);
        }
        .box-preview.compact { margin: var(--space-6) calc(var(--space-4) * -1); }
        @media (min-width: 768px) {
          .box-preview { margin: var(--space-12) calc(var(--space-6) * -1); border-radius: var(--radius-2xl); }
          .box-preview.compact { margin: var(--space-8) calc(var(--space-6) * -1); }
        }
        @media (min-width: 1024px) {
          .box-preview { margin: var(--space-16) calc(var(--space-8) * -1); }
        }
        .box-preview-inner {
          display: grid;
          gap: var(--space-8);
          padding: var(--space-8);
        }
        @media (min-width: 768px) {
          .box-preview-inner { grid-template-columns: 1fr 1fr; align-items: center; padding: var(--space-12); gap: var(--space-12); }
        }
        .box-illustration {
          width: 100%;
          max-width: 280px;
          margin: 0 auto;
          perspective: 1000px;
        }
        .box-lid {
          width: 100%;
          aspect-ratio: 1.3 / 0.3;
          background: linear-gradient(135deg, var(--color-cream) 0%, var(--color-cream-deep) 100%);
          border-radius: var(--radius-lg) var(--radius-lg) var(--radius-md) var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          transform: rotateX(-15deg) translateY(-20px);
          transform-origin: bottom center;
        }
        .box-base {
          width: 100%;
          aspect-ratio: 1.3 / 1;
          background: linear-gradient(135deg, var(--color-cream-warm) 0%, var(--color-cream-deep) 100%);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
        }
        .box-items {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px;
          padding: 12px;
          height: 100%;
        }
        .box-item {
          border-radius: var(--radius-sm);
          background-size: cover;
          background-position: center;
          box-shadow: var(--shadow-sm);
        }
        .box-tagline { text-align: center; margin-top: 12px; color: var(--color-charcoal-medium); font-size: var(--text-sm); }
        .box-facts { display: flex; flex-wrap: wrap; gap: 12px; }
        .fact-item { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--color-charcoal-medium); }
      `}</style>
    </section>
  );
}

/* ==========================================================================
   PLAN CARDS
   ========================================================================== */

export function PlanCard({
  plan,
  compact = false,
  selected = false,
  onSelect
}: {
  plan: { id: PlanId; name: string; term: string; boxes: number; base: number };
  compact?: boolean;
  selected?: boolean;
  onSelect?: (id: PlanId) => void;
}) {
  const total = planTotal(plan.id)!;
  const isMonthly = plan.id === "monthly";

  return (
    <article
      className={`plan-card card ${selected ? "selected" : ""} ${compact ? "compact" : ""}`}
      onClick={() => onSelect?.(plan.id)}
      style={{ cursor: onSelect ? "pointer" : "default" }}
    >
      <div className="plan-header">
        <span className="mini-label">{isMonthly ? "A LITTLE DISCOVERY" : "A LONGER JOURNEY"}</span>
        <PackageOpen size={28} strokeWidth={1.25} className="text-amber" />
      </div>

      <h3 className="text-display">{plan.name}</h3>
      <p className="text-muted mt-2">{plan.term}</p>

      <div className="plan-price">
        {money(plan.base)}
        <span className="text-ui font-normal text-charcoal-medium">{isMonthly ? " / box" : " / three boxes"}</span>
      </div>

      {!isMonthly && (
        <p className="text-sm text-amber mt-2">Prepaid — equivalent to $45 per box</p>
      )}

      <p className="text-sm text-charcoal-medium mt-2">
        + {money(total.shipping)} shipping {isMonthly ? "/ box" : " for the term"}
      </p>

      <div className="plan-total" style={{ borderTop: "1px solid var(--color-border)", paddingTop: "16px", marginTop: "16px", display: "flex", justifyContent: "space-between" }}>
        <span className="text-sm text-charcoal-medium">Estimated total before tax</span>
        <strong className="text-display text-lg">{money(total.total)}</strong>
      </div>

      {!compact && (
        <ul className="inclusions" style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "City-inspired goods to discover",
            "A keepsake postcard & story insert",
            isMonthly ? "One box in the example term" : "Three boxes in the example term",
            "No payment or real subscription"
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}>
              <ShieldCheck size={18} className="text-forest" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <Action
        href={compact ? "/plans" : `/checkout?plan=${plan.id}`}
        variant={selected ? "primary" : "outline"}
        className="w-full mt-6"
      >
        {compact ? "Explore this plan" : `Choose ${plan.name}`}
      </Action>
    </article>
  );
}

export function PlanCards({
  compact = false,
  selectedPlan,
  onSelectPlan
}: {
  compact?: boolean;
  selectedPlan?: PlanId;
  onSelectPlan?: (id: PlanId) => void;
}) {
  return (
    <div className="plan-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-6)", maxWidth: "980px", margin: "0 auto var(--space-6)" }}>
      {plans.map((p) => (
        <PlanCard
          key={p.id}
          plan={p}
          compact={compact}
          selected={selectedPlan === p.id}
          onSelect={onSelectPlan}
        />
      ))}
    </div>
  );
}

/* ==========================================================================
   STEPS / HOW IT WORKS
   ========================================================================== */

export function Steps() {
  const items = [
    {
      icon: CalendarDays,
      title: "Pick your journey",
      text: "Monthly or three-month — both bring a new city to your door.",
    },
    {
      icon: MapPin,
      title: "Meet the city",
      text: "We curate the destination. Austin is current; more coming soon.",
    },
    {
      icon: Gift,
      title: "Unbox local discoveries",
      text: "Goods, a postcard, and stories from makers in that place.",
    },
  ];

  return (
    <section className="steps-strip" style={{ background: "var(--color-cream-warm)", padding: "var(--space-12) 0" }} aria-label="How Marlowby works">
      <div className="container">
        <div className="grid grid-3" style={{ gap: "var(--space-8)", maxWidth: "900px", margin: "0 auto" }}>
          {items.map(({ icon: Icon, title, text }, i) => (
            <div key={title} className="step text-center" style={{ padding: "var(--space-6)" }}>
              <div className="step-icon" style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "var(--color-cream)", display: "grid", placeItems: "center",
                margin: "0 auto var(--space-4)", boxShadow: "var(--shadow-sm)"
              }}>
                <Icon size={28} strokeWidth={1.4} className="text-forest" />
              </div>
              <span className="step-number" style={{ display: "block", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--color-amber)", marginBottom: "var(--space-2)" }}>0{i + 1}</span>
              <h3 className="text-display text-lg">{title}</h3>
              <p className="text-muted text-sm mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   FINAL CTA
   ========================================================================== */

export function FinalCTA() {
  return (
    <section className="final-cta" style={{ background: "var(--color-forest)", color: "var(--color-cream)", padding: "var(--space-16) 0" }}>
      <div className="container">
        <div className="cta-inner" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <Compass size={48} strokeWidth={1} className="text-amber mb-6" aria-hidden="true" />
          <h2 className="text-display text-cream">
            Your next favorite place<br />is closer than you think.
          </h2>
          <p className="text-lg text-cream/70 mt-4 max-w-lg mx-auto">
            Start with a little curiosity. See what a Marlowby journey could look like.
          </p>
          <Action href="/plans" variant="accent" size="lg" className="mt-8">Find Your Plan</Action>
          <p className="eyebrow mt-6" style={{ color: "var(--color-amber)" }}>GOOD PLACES TRAVEL FAR.</p>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   PAGE INTRO / HEADER
   ========================================================================== */

export function PageIntro({
  eyebrow,
  title,
  children,
  center = false,
  className = ""
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <header className={`page-intro container ${center ? "center" : ""} ${className}`} style={{ padding: "var(--space-16) 0 var(--space-10)" }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-display">{title}</h1>
      {children && <div className="intro-copy mt-6" style={{ maxWidth: "650px" }}>{children}</div>}
    </header>
  );
}

/* ==========================================================================
   BREADCRUMBS
   ========================================================================== */

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs container" aria-label="Breadcrumb" style={{ fontSize: "var(--text-sm)", paddingTop: "var(--space-4)", color: "var(--color-charcoal-medium)" }}>
      <Link href="/" className="text-link" style={{ padding: 0 }}>Home</Link>
      {items.map((item, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
          <span aria-hidden="true">/</span>
          {item.href ? (
            <Link href={item.href} className="text-link" style={{ padding: 0 }}>{item.label}</Link>
          ) : (
            <span aria-current="page" style={{ color: "var(--color-charcoal)" }}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

/* ==========================================================================
   FILTER BAR FOR CITIES
   ========================================================================== */

export function FilterBar({
  filters,
  onChange,
  resultsCount
}: {
  filters: { q: string; theme: string; region: string; status: string; sort: string };
  onChange: (filters: Partial<typeof filters>) => void;
  resultsCount: number;
}) {
  const handleClear = () => {
    onChange({ q: "", theme: "all", region: "all", status: "all", sort: "featured" });
  };

  return (
    <div className="filter-bar" style={{
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
      gap: "var(--space-4)",
      background: "var(--color-cream-warm)",
      border: "1px solid var(--color-border)",
      padding: "var(--space-4)",
      borderRadius: "var(--radius-lg)",
      flexWrap: "wrap"
    }}>
      <div className="search-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <label htmlFor="city-search" className="text-xs font-medium text-charcoal-medium">Search destinations</label>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "0 var(--space-3)", minHeight: "48px" }}>
          <Search size={20} className="text-charcoal-muted" />
          <input
            id="city-search"
            placeholder="Try Austin, Texas, coffee, mountains..."
            value={filters.q}
            maxLength={100}
            onChange={(e) => onChange({ q: e.target.value })}
            style={{ flex: 1, border: 0, background: "transparent", outline: "none", fontSize: "var(--text-sm)", minWidth: 0 }}
          />
          {filters.q && (
            <button aria-label="Clear search" onClick={() => onChange({ q: "" })} style={{ background: "none", border: 0, padding: 0, display: "grid", placeItems: "center" }}>
              <X size={16} className="text-charcoal-muted hover:text-charcoal" />
            </button>
          )}
        </div>
      </div>

      <div className="filter-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <label htmlFor="theme" className="text-xs font-medium text-charcoal-medium">Theme</label>
        <select
          id="theme"
          value={filters.theme}
          onChange={(e) => onChange({ theme: e.target.value })}
          className="form-input"
        >
          <option value="all">All themes</option>
          {Object.entries(themes).map(([key, data]) => (
            <option key={key} value={key}>{data.icon} {data.label}</option>
          ))}
        </select>
      </div>

      <div className="filter-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <label htmlFor="region" className="text-xs font-medium text-charcoal-medium">Region</label>
        <select
          id="region"
          value={filters.region}
          onChange={(e) => onChange({ region: e.target.value })}
          className="form-input"
        >
          <option value="all">All regions</option>
          {regions.map((r) => (
            <option key={r.id} value={r.id}>{r.name}</option>
          ))}
        </select>
      </div>

      <div className="filter-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <label htmlFor="status" className="text-xs font-medium text-charcoal-medium">Status</label>
        <select
          id="status"
          value={filters.status}
          onChange={(e) => onChange({ status: e.target.value })}
          className="form-input"
        >
          <option value="all">All statuses</option>
          <option value="current">Current Box</option>
          <option value="upcoming">Coming Soon</option>
          <option value="preview">Preview</option>
          <option value="archived">Past Boxes</option>
        </select>
      </div>

      <div className="filter-field" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <label htmlFor="sort" className="text-xs font-medium text-charcoal-medium">Sort</label>
        <select
          id="sort"
          value={filters.sort}
          onChange={(e) => onChange({ sort: e.target.value })}
          className="form-input"
        >
          <option value="featured">Featured order</option>
          <option value="az">City A–Z</option>
          <option value="newest">Newest first</option>
        </select>
      </div>
    </div>
  );
}

/* ==========================================================================
   CHECKOUT PROGRESS
   ========================================================================== */

export function CheckoutProgress({ currentStep = 0 }: { currentStep: number }) {
  const steps = ["Plan", "Details", "Review", "Complete"];

  return (
    <ol className="checkout-progress" style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-8)",
      position: "relative"
    }}>
      {/* Connecting line */}
      <div style={{
        position: "absolute",
        top: "14px",
        left: "50%",
        right: "50%",
        height: "2px",
        background: "var(--color-border)",
        zIndex: 0,
        transform: "translateX(-50%)"
      }} />
      <div style={{
        position: "absolute",
        top: "14px",
        left: "0",
        width: `${(currentStep / (steps.length - 1)) * 100}%`,
        height: "2px",
        background: "var(--color-forest)",
        zIndex: 1,
        transition: "width var(--duration-normal) var(--ease-out)"
      }} />

      {steps.map((step, i) => (
        <li key={step} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-2)",
          flex: 1,
          position: "relative",
          zIndex: 2,
          fontSize: "var(--text-xs)",
          fontWeight: 500
        }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "50%",
            display: "grid", placeItems: "center",
            fontSize: "12px", fontWeight: 600,
            border: i <= currentStep ? "2px solid var(--color-forest)" : "2px solid var(--color-border)",
            background: i < currentStep ? "var(--color-forest)" : (i === currentStep ? "var(--color-cream)" : "var(--color-surface)"),
            color: i < currentStep ? "var(--color-cream)" : (i === currentStep ? "var(--color-forest)" : "var(--color-charcoal-medium)"),
            transition: "all var(--duration-normal) var(--ease-out)"
          }}>
            {i < currentStep ? <Check size={14} /> : i + 1}
          </div>
          <span style={{
            color: i <= currentStep ? "var(--color-charcoal)" : "var(--color-charcoal-muted)",
            fontWeight: i === currentStep ? 600 : 400
          }}>
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}

/* ==========================================================================
   ORDER SUMMARY
   ========================================================================== */

export function OrderSummary({
  plan,
  details,
  city = "Austin"
}: {
  plan: { id: PlanId; name: string; boxes: number; base: number } | null;
  details: Details | null;
  city?: string;
}) {
  const total = plan ? planTotal(plan.id) : null;

  return (
    <aside className="order-summary card p-6" style={{ position: "sticky", top: "100px" }}>
      <div className="summary-header flex items-center gap-3 mb-6">
        <PackageOpen size={24} className="text-forest" />
        <h3 className="text-display">Your Discovery</h3>
      </div>

      <div className="box-preview-small mb-6" style={{
        aspectRatio: "1.5/1", borderRadius: "var(--radius-lg)", overflow: "hidden",
        background: "linear-gradient(135deg, var(--color-cream) 0%, var(--color-cream-deep) 100%)",
        border: "1px solid var(--color-border)"
      }}>
        <div style={{ padding: "var(--space-4)", textAlign: "center" }}>
          <p className="mini-label text-forest">{city}, Texas</p>
          <p className="text-display mt-1">Current Box</p>
        </div>
      </div>

      {total && (
        <>
          <h4 className="text-display mb-2">{plan?.name}</h4>
          <p className="text-sm text-charcoal-medium mb-4">{total.boxes} {total.boxes === 1 ? "box" : "boxes"} in the example term</p>

          <dl className="costs" style={{ marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt className="text-charcoal-medium">Base amount</dt>
              <dd className="text-charcoal font-medium">{money(total.base)}</dd>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt className="text-charcoal-medium">Shipping</dt>
              <dd className="text-charcoal font-medium">{money(total.shipping)}</dd>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt className="text-charcoal-medium">Tax</dt>
              <dd className="text-charcoal-medium">Not calculated in demo</dd>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-3) 0", paddingTop: "var(--space-3)", borderTop: "1px solid var(--color-border)", fontWeight: 600 }}>
              <dt className="text-display">Estimated total</dt>
              <dd className="text-display">{money(total.total)}</dd>
            </div>
          </dl>

          <button className="text-link w-full justify-center" style={{ padding: "var(--space-2)" }}>Change plan</button>
        </>
      )}

      {!plan && (
        <p className="text-charcoal-medium text-center py-8">Choose a plan to see your example total</p>
      )}

      <div className="summary-note flex items-center justify-center gap-2 text-xs text-charcoal-medium mt-4 pt-4 border-t border-border">
        <ShieldCheck size={16} className="text-forest" />
        No payment information. No real order.
      </div>
    </aside>
  );
}

/* ==========================================================================
   ERROR SUMMARY
   ========================================================================== */

export function ErrorSummary({ errors, onFocusField }: { errors: Record<string, string>; onFocusField: (field: string) => void }) {
  if (!Object.keys(errors).length) return null;

  return (
    <div className="error-summary card p-5" style={{ border: "1px solid var(--color-error)", background: "rgba(184, 74, 58, 0.05)" }} role="alert">
      <h3 className="text-display text-error mb-3">Let's check a few details</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        {Object.entries(errors).map(([key, error]) => (
          <li key={key}>
            <button
              onClick={() => onFocusField(key)}
              className="text-link w-full justify-start text-error"
              style={{ padding: 0 }}
            >
              {error}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ==========================================================================
   FORM FIELD
   ========================================================================== */

export function FormField({
  label,
  id,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  autoComplete,
  inputMode,
  required = true
}: {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: string;
  required?: boolean;
}) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">{label} {required && <span className="text-error" aria-hidden="true">*</span>}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="form-input"
      />
      {error && (
        <p id={`${id}-error`} className="form-error" role="alert">{error}</p>
      )}
    </div>
  );
}
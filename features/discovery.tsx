"use client";
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { allCities as cities } from "@/content/cities";
import {
  filterCities,
  readFilters,
  defaultFilters,
  type Filters,
} from "@/lib/domain.mts";
import { CityGrid, Badge, Action, Stamp, Eyebrow } from "@/components/ui-v2";
import { Photo } from "@/components/photo";
export function Discovery() {
  const [f, setF] = useState<Filters>(defaultFilters);
  useEffect(() => {
    const read = () => setF(readFilters(new URLSearchParams(location.search)));
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);
  function update(next: Filters) {
    setF(next);
    const p = new URLSearchParams();
    Object.entries(next).forEach(([k, v]) => {
      if (v !== defaultFilters[k as keyof Filters]) p.set(k, v);
    });
    history.replaceState(
      null,
      "",
      `${location.pathname}${p.size ? "?" + p : ""}${location.hash}`,
    );
  }
  const results = filterCities(cities, f);
  return (
    <>
      <section className="discovery-section">
        <div className="container">
          <div className="filter-bar">
            <div className="search-field">
              <label htmlFor="city-search">Search destinations</label>
              <div className="search-input">
                <Search size={20} />
                <input
                  id="city-search"
                  placeholder="Try Austin, Oregon, or coffee"
                  value={f.q}
                  maxLength={100}
                  onChange={(e) => update({ ...f, q: e.target.value })}
                />
                {f.q && (
                  <button aria-label="Clear search" onClick={() => update({ ...f, q: "" })}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="filter-field">
              <label htmlFor="theme">Theme</label>
              <select
                id="theme"
                value={f.theme}
                onChange={(e) => update({ ...f, theme: e.target.value })}
              >
                <option value="all">All themes</option>
                <option value="food">Food and flavor</option>
                <option value="arts">Arts and culture</option>
                <option value="outdoors">Outdoors</option>
                <option value="tech">Tech & innovation</option>
                <option value="architecture">Architecture</option>
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="status">Destination</label>
              <select
                id="status"
                value={f.status}
                onChange={(e) => update({ ...f, status: e.target.value })}
              >
                <option value="all">All destinations</option>
                <option value="current">Current box</option>
                <option value="preview">Preview</option>
              </select>
            </div>

            <div className="filter-field">
              <label htmlFor="sort">Sort by</label>
              <select
                id="sort"
                value={f.sort}
                onChange={(e) => update({ ...f, sort: e.target.value })}
              >
                <option value="featured">Featured order</option>
                <option value="az">City A to Z</option>
              </select>
            </div>
          </div>
          <div className="results-line">
            <span role="status" aria-live="polite">
              {results.length}{" "}
              {results.length === 1 ? "destination" : "destinations"} found
            </span>
            <button className="text-link" onClick={() => update(defaultFilters)}>
              Clear all
            </button>
          </div>
          {results.length ? (
            <CityGrid cities={results} />
          ) : (
            <div className="empty-state">
              <Search size={34} />
              <h2>A little off the beaten path.</h2>
              <p>
                We couldn't find that destination. Try another city, state, or
                keyword.
              </p>
              <Action href="/cities" onClick={() => update(defaultFilters)}>
                Clear all filters
              </Action>
              <Action href="/cities/austin" variant="secondary">
                Explore Austin
              </Action>
            </div>
          )}
        </div>
      </section>
      <Passport />
    </>
  );
}
export function Passport() {
  const [index, setIndex] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const c = cities[index];
  return (
    <section className="passport-section">
      <div className="container">
        <Eyebrow>THE DESTINATION PASSPORT</Eyebrow>
        <h2>A little passport to somewhere new.</h2>
        <p className="section-deck">
          {cities.length} places. Different points of view. Take a closer look.
          <br />
          <span className="small">
            An editorial discovery tool, independent of the filters above.
          </span>
        </p>
        <div className="passport">
          <div
            className="passport-tabs"
            role="tablist"
            aria-label="Passport destinations"
          >
            {cities.map((city, i) => (
              <button
                key={city.id}
                id={`tab-${city.id}`}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                role="tab"
                aria-selected={i === index}
                aria-controls="passport-panel"
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowRight" || e.key === "ArrowDown")
                    next = (i + 1) % cities.length;
                  else if (e.key === "ArrowLeft" || e.key === "ArrowUp")
                    next = (i + cities.length - 1) % cities.length;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = cities.length - 1;
                  else return;
                  e.preventDefault();
                  setIndex(next);
                  refs.current[next]?.focus();
                }}
              >
                <Stamp city={city.name} state={city.state} small />
                <span>{city.name}</span>
              </button>
            ))}
          </div>
          <div
            className="passport-panel"
            id="passport-panel"
            role="tabpanel"
            aria-labelledby={`tab-${c.id}`}
          >
            <Photo src={c.heroImage} alt={c.heroImageAlt} width={800} height={530} className="photo-rounded" />
            <div>
              <Badge status={c.status} />
              <h3>
                {c.name},<br />
                {c.state}.
              </h3>
              <p>
                {c.intro}{" "}
                {c.status === "preview"
                  ? "An editorial preview, with no announced release date."
                  : "The current Marlowby discovery box concept."}
              </p>
              <Action href={`/cities/${c.slug}`} variant="primary">
                Explore {c.name}
              </Action>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
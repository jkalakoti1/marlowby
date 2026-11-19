export type PlanId = "monthly" | "three-month";
export const plans = [
  {
    id: "monthly" as PlanId,
    name: "Monthly",
    term: "One box at a time.",
    boxes: 1,
    base: 4900,
  },
  {
    id: "three-month" as PlanId,
    name: "Three-Month Journey",
    term: "Three boxes. More to discover.",
    boxes: 3,
    base: 13500,
  },
];
export const money = (cents: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
export function planTotal(id: string) {
  const p = plans.find((p) => p.id === id);
  return p
    ? {
        base: p.base,
        shipping: p.boxes * 700,
        total: p.base + p.boxes * 700,
        boxes: p.boxes,
      }
    : null;
}
export type Details = { name: string; email: string; zip: string };
export function validateDetails(
  d: Details,
): Partial<Record<keyof Details, string>> {
  const errors: Partial<Record<keyof Details, string>> = {};
  if (!d.name.trim() || /[\x00-\x1f\x7f]/.test(d.name))
    errors.name = "Enter your first name.";
  else if ([...d.name.trim()].length > 80)
    errors.name = "Keep your first name to 80 characters or fewer.";
  if (
    d.email.trim().length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())
  )
    errors.email = "Enter an email address in the format name@example.com.";
  if (!/^[0-9]{5}$/.test(d.zip.trim()))
    errors.zip = "Enter a five-digit U.S. ZIP code.";
  return errors;
}
export type Filters = {
  q: string;
  theme: string;
  status: string;
  sort: string;
};
export const defaultFilters: Filters = {
  q: "",
  theme: "all",
  status: "all",
  sort: "featured",
};
export function readFilters(params: URLSearchParams): Filters {
  return {
    q: (params.get("q") || "").slice(0, 100),
    theme: ["food", "arts", "outdoors"].includes(params.get("theme") || "")
      ? params.get("theme")!
      : "all",
    status: ["current", "preview"].includes(params.get("status") || "")
      ? params.get("status")!
      : "all",
    sort: params.get("sort") === "az" ? "az" : "featured",
  };
}
const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
export function filterCities<
  T extends {
    name: string;
    state: string;
    abbreviation: string;
    description: string;
    themes: string[];
    status: string;
    order: number;
  },
>(cities: T[], f: Filters): T[] {
  const labels: Record<string, string> = {
    food: "Food and flavor",
    arts: "Arts and culture",
    outdoors: "Outdoors",
  };
  return cities
    .filter(
      (c) =>
        normalize(
          [
            c.name,
            c.state,
            c.abbreviation,
            c.description,
            ...c.themes.map((t) => labels[t] || t),
          ].join(" "),
        ).includes(normalize(f.q).slice(0, 100)) &&
        (f.theme === "all" || c.themes.includes(f.theme)) &&
        (f.status === "all" || c.status === f.status),
    )
    .sort((a, b) =>
      f.sort === "az" ? a.name.localeCompare(b.name) : a.order - b.order,
    );
}

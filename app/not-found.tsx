import { Action, Stamp } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container confirmation">
      <Stamp city="LOST?" state="LET’S EXPLORE" />
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>This stop isn’t on our route.</h1>
      <p>
        The page you’re looking for may have moved. There’s still plenty to
        discover.
      </p>
      <div className="inline-actions">
        <Action href="/cities">Explore Cities</Action>
        <Action href="/" secondary>
          Return Home
        </Action>
      </div>
    </section>
  );
}

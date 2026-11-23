import { PageIntro } from "@/components/ui-v2";
import { Discovery } from "@/features/discovery";
export const metadata = {
  title: "Explore Cities",
  description:
    "Explore Austin, New Orleans, Portland, Chicago, Seattle through the Marlowby destination directory.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="GOOD PLACES TRAVEL FAR"
        title="Find your next favorite city."
      >
        <p style={{ margin: "var(--space-4) 0 var(--space-4)" }}>
          Follow a familiar curiosity or discover somewhere new. Explore our
          current box concept and a few places on the horizon.
        </p>
        <p className="small" style={{ margin: "var(--space-4) 0", color: "var(--color-text-muted)" }}>
          Preview destinations are editorial concepts. No release dates are
          announced.
        </p>
      </PageIntro>
      <Discovery />
    </>
  );
}
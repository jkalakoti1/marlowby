import { PageIntro } from "@/components/ui";
import { Discovery } from "@/features/discovery";
export const metadata = {
  title: "Explore Cities",
  description:
    "Explore Austin, New Orleans, and Portland through the Marlowby destination directory.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="GOOD PLACES TRAVEL FAR"
        title="Find your next favorite city."
      >
        <p>
          Follow a familiar curiosity or discover somewhere new. Explore our
          current box concept and a few places on the horizon.
        </p>
        <p className="small">
          Preview destinations are editorial concepts. No release dates are
          announced.
        </p>
      </PageIntro>
      <Discovery />
    </>
  );
}

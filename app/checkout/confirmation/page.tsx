import { Confirmation } from "@/features/checkout";
export const metadata = {
  title: "Demo Journey",
  robots: { index: false, follow: true },
  description: "The outcome of your Marlowby practice journey.",
};
export default function Page() {
  return <Confirmation />;
}

import { Checkout } from "@/features/checkout";
export const metadata = {
  title: "Demo Checkout",
  robots: { index: false, follow: true },
  description: "Try the Marlowby checkout without payments or real orders.",
};
export default function Page() {
  return <Checkout />;
}

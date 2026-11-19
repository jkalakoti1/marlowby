import { PageIntro, Action, Eyebrow } from "@/components/ui";
import { PackageOpen, Compass, Truck } from "lucide-react";
export const metadata = {
  title: "Contact & Help",
  description:
    "Find guidance about the Marlowby box, plans, shipping concepts, and demo.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="A LITTLE HELP ALONG THE WAY"
        title="Let us point you in the right direction."
        center
      >
        <p>
          Looking for a detail about the box, the plans, or how this demo works?
          Start with the answers below.
        </p>
      </PageIntro>
      <section className="container help-cards">
        {[
          {
            Icon: PackageOpen,
            title: "Box contents",
            text: "What’s inside, who the sample makers are, and what the concept includes.",
            href: "/faq#box-contents",
          },
          {
            Icon: Truck,
            title: "Plans and shipping",
            text: "Understand the example prices, plan terms, and shipping estimates.",
            href: "/faq#plans-and-billing",
          },
          {
            Icon: Compass,
            title: "About this demo",
            text: "How the practice checkout works and what happens to your entries.",
            href: "/faq#about-the-demo",
          },
        ].map(({ Icon, title, text, href }) => (
          <article key={title}>
            <Icon size={35} strokeWidth={1.2} />
            <h2>{title}</h2>
            <p>{text}</p>
            <Action href={href} secondary>
              Find answers
            </Action>
            {title === "Plans and shipping" && (
              <Action href="/faq#shipping" secondary>
                Shipping questions
              </Action>
            )}
          </article>
        ))}
      </section>
      <section className="container section narrow center">
        <Eyebrow>AN HONEST NOTE</Eyebrow>
        <h2>Here to help you explore.</h2>
        <p>
          This concept demonstration does not currently offer a customer support
          inbox or process orders.
        </p>
        <div className="inline-actions">
          <Action href="/faq">Browse the FAQ</Action>
          <Action href="/this-month" secondary>
            Explore This Month’s Box
          </Action>
        </div>
      </section>
    </>
  );
}

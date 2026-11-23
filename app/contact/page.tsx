import { PageIntro, Action, Eyebrow } from "@/components/ui-v2";
import { PackageOpen, Compass, Truck, Mail } from "lucide-react";
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
        <p>Looking for a detail about the box, the plans, or how this demo works?
          Start with the answers below.</p>
      </PageIntro>
      <section className="section canvas">
        <div className="container">
          <div className="grid grid-3">
            {[
              {
                Icon: PackageOpen,
                title: "Box contents",
                text: "What's inside, who the sample makers are, and what the concept includes.",
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
              <article key={title} className="card card-center">
                <div className="icon-circle accent">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
                <Action href={href} variant="secondary">
                  Find answers
                </Action>
                {title === "Plans and shipping" && (
                  <Action href="/faq#shipping" variant="secondary">
                    Shipping questions
                  </Action>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section surface-1 narrow center">
        <div className="container">
          <Eyebrow className="accent-eyebrow">AN HONEST NOTE</Eyebrow>
          <h2>Here to help you explore.</h2>
          <p>This concept demonstration does not currently offer a customer support
            inbox or process orders.</p>
          <div className="inline-actions">
            <Action href="/faq" variant="primary">Browse the FAQ</Action>
            <Action href="/this-month" variant="secondary">
              Explore This Month's Box
            </Action>
          </div>
        </div>
      </section>
      <section className="section canvas narrow center">
        <div className="container">
          <Eyebrow className="accent-alt-eyebrow">STAY CURIOUS</Eyebrow>
          <h2>Have a question we didn't cover?</h2>
          <p>This is a demonstration concept, so we don't have a live support inbox.
            But if you're building something similar or have thoughts on the idea,
            we'd love to hear them.</p>
          <Action href="/" variant="secondary">
            Return Home
          </Action>
        </div>
      </section>
    </>
  );
}
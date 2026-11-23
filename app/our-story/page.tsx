import { PageIntro, Eyebrow, Action, FinalCTA } from "@/components/ui-v2";
import { Photo } from "@/components/photo";
export const metadata = {
  title: "Our Story",
  description:
    "The idea behind Marlowby: curiosity, thoughtful objects, and stories about places worth discovering.",
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="THE MARLOWBY IDEA"
        title="Good places travel far."
        center
      >
        <p>Some places stay with you through a flavor, a small object, or a story
          you keep telling. Marlowby is a concept built around those
          discoveries.</p>
      </PageIntro>
      <div className="container story-wide container-wide">
        <Photo
          src="/images/paper.webp"
          alt="Illustrative postcards, notebook, and tactile objects on a work surface"
          width={1200}
          height={800}
          priority
          className="photo-rounded center-image"
        />
        <p className="story-caption">A little curiosity. Something worth keeping.</p>
      </div>
      <section className="section canvas narrow">
        <div className="container">
          <Eyebrow>01 / THE BEGINNING OF A GOOD IDEA</Eyebrow>
          <h2>Start with curiosity.</h2>
          <p>
            You do not always have to travel far to find something that feels new.
            Sometimes it starts with a flavor you have not tried, a small object
            you keep reaching for, or a story that sends you looking for a place
            on the map. Marlowby imagines bringing those moments together in a
            box. Each destination becomes a starting point for discovery, with
            goods and editorial stories that invite a closer look. This website is
            a demonstration of that idea, not an operating subscription business.
            Austin is the first example, with New Orleans and Portland offering a
            glimpse of other directions the concept could take. The journey begins
            with a simple question: what might we notice if we gave a place a
            little more attention?
          </p>
        </div>
      </section>
      <section className="section surface-1 bordered-top bordered-bottom">
        <div className="container container-wide editorial-row">
          <Photo
            src="/images/maker-studio.webp"
            alt="Illustrative hands-at-work ceramics scene"
            width={1200}
            height={800}
            className="photo-rounded"
          />
          <div>
            <Eyebrow>02 / A CLOSER LOOK</Eyebrow>
            <h2>
              Notice the people
              <br />
              behind the details.
            </h2>
            <p>
              A finished object is only part of a story. There are choices
              behind its shape, habits behind its use, and people whose
              perspective gives it meaning. Marlowby's interest in independent
              creativity begins there. In a real service, those people would
              speak for themselves through verified partnerships and carefully
              sourced stories. The makers shown here are fictional concepts,
              used to explore how that experience might feel. They are not
              stand-ins for actual interviews or claims of collaboration. Our
              intention is to make room for the details that turn a purchase
              into understanding: why someone chooses a material, what they hope
              an object brings to an ordinary day, and how a place informs the
              work.
            </p>
          </div>
        </div>
      </section>
      <section className="section canvas narrow">
        <div className="container">
          <Eyebrow>03 / KEEP THE FEELING</Eyebrow>
          <h2>Make discovery part of the everyday.</h2>
          <p>
            The best discoveries do not always stay in a suitcase. They find a
            place on the kitchen shelf, inside a notebook, or in a conversation
            you return to later. That is the feeling this concept explores. A cup
            can become a daily companion; a postcard can remind you to look beyond
            your usual route. The box is the beginning, not the whole experience.
            Its stories should remain useful after the packaging is put away.
            Nothing here promises a particular product or delivery, but the
            intention is clear: make curiosity something approachable, tactile,
            and easy to bring into an ordinary day. A little discovery can leave
            you with another question, another perspective, or simply a good
            reason to pause.
          </p>
          <Action href="/this-month" variant="secondary">Take a closer look at Austin</Action>
        </div>
      </section>
      <section className="section surface-1 bordered-top bordered-bottom intentions">
        <div className="container">
          <Eyebrow>WHAT WE HOPE TO BRING</Eyebrow>
          <h2>A few intentions, held with care.</h2>
          <div className="highlight-grid">
            {[
              [
                "Thoughtful curation",
                "A small collection where each object has a reason to be there.",
              ],
              [
                "Meaningful storytelling",
                "A place understood through detail, context, and curiosity.",
              ],
              [
                "Honest information",
                "Clear examples, transparent limitations, and no invented promises.",
              ],
            ].map(([a, b]) => (
              <article key={a} className="card">
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
          <p className="small">These are operating intentions for the concept, not verified impact or
            sourcing claims.</p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
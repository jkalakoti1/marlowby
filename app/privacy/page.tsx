import { PageIntro, Action } from "@/components/ui";
export const metadata = {
  title: "Privacy",
  description:
    "How the Marlowby demonstration handles practice details and technical requests.",
};
export default function Page() {
  return (
    <>
      <PageIntro eyebrow="CLEAR INFORMATION, ALWAYS" title="Privacy.">
        <p>Effective November 7, 2026</p>
      </PageIntro>
      <article className="container legal-copy">
        <h2>A demonstration with practice details</h2>
        <p>
          Marlowby is a concept demonstration. It does not process payments,
          create accounts, or operate a subscription service. The checkout asks
          for a first name, email, and five-digit U.S. ZIP only to demonstrate a
          customer journey. Please use sample information.
        </p>
        <h2>Your entries stay in application memory</h2>
        <p>
          Practice checkout entries are not sent to an application server,
          included in a URL, written to browser storage or cookies by this
          application, or logged by the application. They are cleared when you
          complete or cancel the demo, leave checkout, refresh, or close the
          page. No confirmation or marketing email is sent. Your browser may
          independently offer autofill; that behavior is controlled by your
          browser, not Marlowby.
        </p>
        <h2>Browsing state</h2>
        <p>
          City search and filter settings appear in nonpersonal URL parameters
          so that a destination view can be shared or revisited. Do not put
          personal information into destination search. Ordinary page URLs may
          be present in browser history and hosting request logs.
        </p>
        <h2>Hosting and technical processing</h2>
        <p>
          This demonstration is intended to be hosted on Vercel. The hosting
          provider may process technical requests, including IP addresses,
          requested URLs, and user-agent information. See the{" "}
          <a href="https://vercel.com/legal/privacy-policy">Vercel Privacy Policy</a>{" "}
          for their practices.
        </p>
        <h2>No application marketing trackers</h2>
        <p>
          This release includes no application analytics, advertising pixels,
          session replay, marketing cookies, support widgets, social embeds, or
          third-party forms. Images and fonts are served with the site rather
          than loaded from remote media services during browsing.
        </p>
        <h2>Links and future changes</h2>
        <p>
          Links to outside resources follow the destination’s own policies.
          Adding real commerce or support would require a separate review of
          data handling and updated information here. A verified customer
          support or privacy inbox has not been provided for this concept.
        </p>
        <Action href="/" secondary>
          Return to browsing
        </Action>
      </article>
    </>
  );
}

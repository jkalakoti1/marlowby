"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="container confirmation">
      <p className="eyebrow">A SMALL DETOUR</p>
      <h1>Let’s try that again.</h1>
      <p>
        Something interrupted this part of the journey. You can try again or
        head back home.
      </p>
      <button className="button" onClick={reset}>
        Try Again
      </button>
      <Link className="text-link" href="/">
        Return Home
      </Link>
    </section>
  );
}

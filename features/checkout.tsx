"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Photo } from "@/components/photo";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  PackageOpen,
} from "lucide-react";
import {
  plans,
  planTotal,
  money,
  validateDetails,
  type Details,
  type PlanId,
} from "@/lib/domain.mts";
import { useDemo } from "./session";
import { Action, Stamp, Breadcrumbs } from "@/components/ui";
const blank: Details = { name: "", email: "", zip: "" };
export function Checkout() {
  const router = useRouter();
  const { setCompletion } = useDemo();
  const [plan, setPlan] = useState<PlanId | null>(null);
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState<Details>(blank);
  const [errors, setErrors] = useState<
    Partial<Record<keyof Details | "plan", string>>
  >({});
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState("/plans");
  const dialog = useRef<HTMLDialogElement>(null);
  const summary = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const finishing = useRef(false);
  const visibleErrors =
    step === 0
      ? errors.plan
        ? { plan: errors.plan }
        : {}
      : step === 1
        ? Object.fromEntries(
            Object.entries(errors).filter(([key]) => key !== "plan"),
          )
        : {};
  const dirty = Boolean(details.name || details.email || details.zip);
  const total = plan ? planTotal(plan) : null;
  const selected = plans.find((p) => p.id === plan);
  // Hydrate URL selection only after mounting; no practice form exists before client handling is ready.
  useEffect(() => {
    const slug = new URLSearchParams(location.search).get("plan");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (slug === "monthly" || slug === "three-month") setPlan(slug);
    setCompletion(null);
    setReady(true);
  }, [setCompletion]);
  useEffect(() => {
    if (ready) heading.current?.focus({ preventScroll: true });
  }, [step, ready]);
  useEffect(() => {
    if (!dirty) return;
    const intercept = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      )
        return;
      const a = (e.target as Element).closest("a");
      if (!a || a.getAttribute("href")?.startsWith("#") || finishing.current)
        return;
      const url = new URL(a.href);
      if (url.origin === location.origin && url.pathname === "/checkout")
        return;
      e.preventDefault();
      e.stopPropagation();
      setPending(a.href);
      lastFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
    };
    document.addEventListener("click", intercept, true);
    return () => document.removeEventListener("click", intercept, true);
  }, [dirty]);
  function cancel() {
    if (dirty) {
      setPending("/plans");
      lastFocus.current = document.activeElement as HTMLElement;
      dialog.current?.showModal();
    } else {
      setDetails(blank);
      setCompletion(null);
      router.push("/plans");
    }
  }
  function closeDialog() {
    dialog.current?.close();
    lastFocus.current?.focus();
  }
  function leave() {
    setDetails(blank);
    setErrors({});
    setCompletion(null);
    dialog.current?.close();
    router.push(pending);
  }
  function next() {
    if (step === 0 && !plan) {
      setErrors({ plan: "Choose a plan to continue." });
      setTimeout(() => summary.current?.focus(), 0);
      return;
    }
    if (step === 1) {
      const nextErrors = validateDetails(details);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length) {
        setTimeout(() => summary.current?.focus(), 0);
        return;
      }
      setDetails({
        name: details.name.trim(),
        email: details.email.trim(),
        zip: details.zip.trim(),
      });
    }
    setErrors({});
    setStep(step + 1);
  }
  function finish() {
    if (finishing.current || !plan) return;
    const e = validateDetails(details);
    if (Object.keys(e).length) {
      setErrors(e);
      setStep(1);
      return;
    }
    finishing.current = true;
    setBusy(true);
    setDetails(blank);
    setErrors({});
    setCompletion(plan);
    router.push("/checkout/confirmation");
  }
  const order = (
    <>
      <div className="summary-title">
        <PackageOpen size={24} />
        <h2>Your discovery</h2>
      </div>
      <Photo
        src="/images/hero-box-mobile.webp"
        width={800}
        height={600}
        alt="Illustrative Austin discovery box"
      />
      <p className="mini-label">AUSTIN, TEXAS · CURRENT CONCEPT</p>
      {total ? (
        <>
          <h3>{selected?.name}</h3>
          <p className="small">
            {total.boxes} {total.boxes === 1 ? "box" : "boxes"} in the example
            term
          </p>
          <dl className="costs">
            <div>
              <dt>Base amount</dt>
              <dd>{money(total.base)}</dd>
            </div>
            <div>
              <dt>Illustrative shipping</dt>
              <dd>{money(total.shipping)}</dd>
            </div>
            <div>
              <dt>Tax</dt>
              <dd>Not calculated in this demo</dd>
            </div>
            <div className="cost-total">
              <dt>Estimated total before tax</dt>
              <dd>{money(total.total)}</dd>
            </div>
          </dl>
          <button className="text-link" onClick={() => setStep(0)}>
            Change plan
          </button>
        </>
      ) : (
        <p>Choose a plan to see your example total.</p>
      )}
      <p className="summary-note">
        <ShieldCheck size={18} />
        No payment information. No real order.
      </p>
    </>
  );
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Plans", href: "/plans" }, { label: "Checkout" }]}
      />
      <header className="container checkout-intro">
        <p className="eyebrow">A LITTLE CURIOSITY STARTS HERE</p>
        <h1>Start your discovery journey.</h1>
        <p className="demo-notice">
          Demo checkout: This experience does not process payments or create a
          real subscription. Please do not enter payment information.
        </p>
      </header>
      <div className="container checkout-layout">
        <div>
          <ol className="checkout-progress">
            {["Plan", "Your details", "Review", "Done"].map((s, i) => (
              <li
                key={s}
                className={step === i ? "current" : step > i ? "complete" : ""}
                aria-current={step === i ? "step" : undefined}
              >
                <span>{step > i ? <Check size={16} /> : i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <details className="mobile-order">
            <summary>
              View your example summary {total ? money(total.total) : ""}
            </summary>
            <div className="order-summary">{order}</div>
          </details>
          <noscript>
            <p>
              Demo checkout requires JavaScript. You can still{" "}
              <a href="/plans">compare plans</a> and browse the site.
            </p>
          </noscript>
          {ready && (
            <form
              className="checkout-form"
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (step === 2) finish();
                else next();
              }}
            >
              <h2 ref={heading} tabIndex={-1}>
                {
                  [
                    "Choose your journey.",
                    "A few practice details.",
                    "Take one last look.",
                  ][step]
                }
              </h2>
              <p>
                {
                  [
                    "Two ways to explore. Both start with a little curiosity.",
                    "Use sample information to try the experience.",
                    "Everything look right? Complete the demo below.",
                  ][step]
                }
              </p>
              {Object.keys(visibleErrors).length > 0 && (
                <div
                  className="error-summary"
                  ref={summary}
                  tabIndex={-1}
                  role="alert"
                >
                  <h3>Let’s check a few details.</h3>
                  <ul>
                    {Object.entries(visibleErrors).map(([key, error]) => (
                      <li key={key}>
                        <a
                          href={`#${key}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(key)?.focus();
                          }}
                        >
                          {error}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {step === 0 && (
                <fieldset id="plan" tabIndex={-1}>
                  <legend className="sr-only">Choose an example plan</legend>
                  {plans.map((p) => {
                    const t = planTotal(p.id)!;
                    return (
                      <label
                        className={`radio-plan ${plan === p.id ? "selected" : ""}`}
                        key={p.id}
                      >
                        <input
                          type="radio"
                          name="plan"
                          checked={plan === p.id}
                          value={p.id}
                          onChange={() => {
                            setPlan(p.id);
                            setErrors({});
                          }}
                        />
                        <span>
                          <strong>{p.name}</strong>
                          <span>
                            {p.term} {p.boxes} {p.boxes === 1 ? "box" : "boxes"}
                            .
                          </span>
                          <span className="small">
                            {money(t.base)} + {money(t.shipping)} shipping ·
                            before tax
                          </span>
                        </span>
                        <b>{money(t.total)}</b>
                      </label>
                    );
                  })}
                  {errors.plan && <p className="field-error">{errors.plan}</p>}
                  <p className="small">
                    Illustrative pricing. Destinations are curated, not selected
                    at checkout.
                  </p>
                </fieldset>
              )}
              {step === 1 && (
                <>
                  <p className="info-note">
                    You can use sample details. Nothing entered here is sent to
                    place an order. All fields are required.
                  </p>
                  {(
                    [
                      {
                        key: "name",
                        label: "First name",
                        auto: "given-name",
                        placeholder: "Alex",
                      },
                      {
                        key: "email",
                        label: "Email",
                        auto: "email",
                        placeholder: "alex@example.com",
                      },
                      {
                        key: "zip",
                        label: "U.S. ZIP code",
                        auto: "postal-code",
                        placeholder: "01234",
                      },
                    ] as const
                  ).map((f) => (
                    <div className="form-field" key={f.key}>
                      <label htmlFor={f.key}>{f.label}</label>
                      <input
                        id={f.key}
                        type="text"
                        inputMode={
                          f.key === "email"
                            ? "email"
                            : f.key === "zip"
                              ? "numeric"
                              : "text"
                        }
                        autoComplete={f.auto}
                        required
                        value={details[f.key]}
                        placeholder={f.placeholder}
                        aria-invalid={Boolean(errors[f.key])}
                        aria-describedby={
                          errors[f.key] ? `${f.key}-error` : undefined
                        }
                        onChange={(e) =>
                          setDetails({ ...details, [f.key]: e.target.value })
                        }
                        onBlur={(e) => {
                          if (
                            e.relatedTarget instanceof HTMLButtonElement &&
                            e.relatedTarget.type === "submit"
                          )
                            return;
                          if (errors[f.key])
                            setErrors(validateDetails(details));
                        }}
                      />
                      {errors[f.key] && (
                        <p className="field-error" id={`${f.key}-error`}>
                          {errors[f.key]}
                        </p>
                      )}
                    </div>
                  ))}
                  <p className="small">
                    Your progress stays only while this page is open. Refreshing
                    may reset it.
                  </p>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="review-block">
                    <div>
                      <h3>Your plan</h3>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setStep(0)}
                      >
                        Edit plan
                      </button>
                    </div>
                    <p>
                      {selected?.name} · {total?.boxes}{" "}
                      {total?.boxes === 1 ? "box" : "boxes"}
                    </p>
                    <p>
                      {total && money(total.total)} estimated total before tax
                    </p>
                    <p className="small">Tax: Not calculated in this demo</p>
                  </div>
                  <div className="review-block">
                    <div>
                      <h3>Practice details</h3>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setStep(1)}
                      >
                        Edit details
                      </button>
                    </div>
                    <p>{details.name}</p>
                    <p>{details.email}</p>
                    <p>U.S. ZIP: {details.zip}</p>
                  </div>
                  <p className="info-note">
                    Completing this demo does not place an order, charge you, or
                    create a subscription.
                  </p>
                </>
              )}
              <div className="form-actions">
                {step > 0 ? (
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setStep(step - 1)}
                  >
                    <ArrowLeft size={17} />
                    Back
                  </button>
                ) : (
                  <button type="button" className="text-link" onClick={cancel}>
                    Return to Plans
                  </button>
                )}
                <button className="button" type="submit" disabled={busy}>
                  {busy
                    ? "Completing demo…"
                    : step === 2
                      ? "Complete Demo"
                      : "Continue"}
                  <ArrowRight size={19} />
                </button>
              </div>
              <div className="checkout-fineprint">
                <button type="button" className="text-link" onClick={cancel}>
                  Cancel demo
                </button>
                <span>
                  <Link href="/privacy">Privacy</Link> ·{" "}
                  <Link href="/terms">Terms</Link>
                </span>
              </div>
            </form>
          )}
        </div>
        <aside className="desktop-order order-summary">{order}</aside>
      </div>
      <dialog
        ref={dialog}
        className="leave-dialog"
        aria-labelledby="leave-title"
        onCancel={closeDialog}
      >
        <h2 id="leave-title">Leave this demo?</h2>
        <p>
          Your practice entries will be cleared. You can start again anytime.
        </p>
        <button autoFocus className="button" onClick={closeDialog}>
          Keep exploring this step
        </button>
        <button className="text-link" onClick={leave}>
          Leave demo
        </button>
      </dialog>
    </>
  );
}
export function Confirmation() {
  const { completion } = useDemo();
  const p = plans.find((p) => p.id === completion);
  const t = completion ? planTotal(completion) : null;
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Plans", href: "/plans" }, { label: "Confirmation" }]}
      />
      <section className="container confirmation">
        <Stamp />
        <p className="eyebrow">
          {completion
            ? "A LITTLE DISCOVERY, COMPLETE"
            : "YOUR JOURNEY STARTS HERE"}
        </p>
        <h1>
          {completion
            ? "Your demo journey is ready."
            : "Start a discovery journey first."}
        </h1>
        <p>
          {completion
            ? "Thanks for exploring Marlowby. No payment was taken, no order was placed, and no subscription was created."
            : "This confirmation appears after you finish the demo. No order or payment has been created."}
        </p>
        {t && (
          <div className="confirmation-summary">
            <h2>{p?.name}</h2>
            <p>
              {t.boxes} {t.boxes === 1 ? "box" : "boxes"} · Current concept:
              Austin, Texas
            </p>
            <strong>{money(t.total)}</strong>
            <p>Estimated total before tax</p>
            <p className="small">Tax: Not calculated in this demo</p>
          </div>
        )}
        <div className="confirmation-actions">
          <Action href={completion ? "/cities" : "/plans"}>
            {completion ? "Explore Cities" : "Choose a Plan"}
          </Action>
          <Action secondary href="/">
            Return Home
          </Action>
          {completion && (
            <Action secondary href="/plans">
              Try Another Plan
            </Action>
          )}
        </div>
      </section>
    </>
  );
}

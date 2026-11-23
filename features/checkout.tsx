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
import { Action, Stamp, Breadcrumbs } from "@/components/ui-v2";
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
      <div className="summary-title" style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        marginBottom: "var(--space-4)"
      }}>
        <PackageOpen size={24} style={{ color: "var(--color-accent)" }} />
        <h2 style={{ margin: 0 }}>Your discovery</h2>
      </div>
      <Photo
        src="/images/hero-box-mobile.webp"
        width={800}
        height={600}
        alt="Illustrative Austin discovery box"
        style={{ borderRadius: "var(--radius-lg)", marginBottom: "var(--space-4)" }}
      />
      <p className="mini-label">AUSTIN, TEXAS · CURRENT CONCEPT</p>
      {total ? (
        <>
          <h3 style={{ margin: "var(--space-4) 0 var(--space-2)" }}>{selected?.name}</h3>
          <p className="small" style={{ margin: "0 0 var(--space-4)" }}>
            {total.boxes} {total.boxes === 1 ? "box" : "boxes"} in the example
            term
          </p>
          <dl className="costs" style={{ marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt style={{ color: "var(--color-text-muted)" }}>Base amount</dt>
              <dd style={{ fontWeight: 600 }}>{money(total.base)}</dd>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt style={{ color: "var(--color-text-muted)" }}>Illustrative shipping</dt>
              <dd style={{ fontWeight: 600 }}>{money(total.shipping)}</dd>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "var(--space-2) 0" }}>
              <dt style={{ color: "var(--color-text-muted)" }}>Tax</dt>
              <dd style={{ color: "var(--color-text-muted)" }}>Not calculated in this demo</dd>
            </div>
            <div className="cost-total" style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "var(--space-3) 0",
              paddingTop: "var(--space-3)",
              borderTop: "1px solid var(--color-hairline)",
              fontWeight: 600,
              fontSize: "var(--text-lg)"
            }}>
              <dt style={{ color: "var(--color-text-strong)" }}>Estimated total before tax</dt>
              <dd style={{ color: "var(--color-text-strong)" }}>{money(total.total)}</dd>
            </div>
          </dl>
          <button className="text-link" onClick={() => setStep(0)} style={{ color: "var(--color-accent)" }}>
            Change plan
          </button>
        </>
      ) : (
        <p style={{ color: "var(--color-text-muted)" }}>Choose a plan to see your example total.</p>
      )}
      <p className="summary-note" style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        marginTop: "var(--space-6)",
        paddingTop: "var(--space-4)",
        borderTop: "1px solid var(--color-hairline)",
        color: "var(--color-text-muted)",
        fontSize: "var(--text-sm)"
      }}>
        <ShieldCheck size={18} style={{ color: "var(--color-success)" }} />
        No payment information. No real order.
      </p>
    </>
  );
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Plans", href: "/plans" }, { label: "Checkout" }]}
      />
      <header className="container checkout-intro" style={{
        padding: "var(--space-section-sm) 0 var(--space-4)",
        background: "var(--color-surface-1)",
        borderBottom: "1px solid var(--color-hairline)",
        margin: "0 calc(var(--space-4) * -1)",
        paddingLeft: "var(--space-4)",
        paddingRight: "var(--space-4)"
      }}>
        <p className="eyebrow" style={{ color: "var(--color-accent)" }}>A LITTLE CURIOSITY STARTS HERE</p>
        <h1 style={{ margin: "var(--space-4) 0 var(--space-4)" }}>Start your discovery journey.</h1>
        <p className="demo-notice" style={{ margin: 0, color: "var(--color-text-muted)" }}>
          Demo checkout: This experience does not process payments or create a
          real subscription. Please do not enter payment information.
        </p>
      </header>
      <div className="container checkout-layout" style={{
        display: "grid",
        gap: "var(--space-8)",
        gridTemplateColumns: "1fr",
        padding: "var(--space-section-md) 0",
        maxWidth: "var(--container-2xl)"
      }}>
        <div>
          <ol className="checkout-progress" style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            marginBottom: "var(--space-8)",
            position: "relative"
          }}>
            {/* Connecting line */}
            <div style={{
              position: "absolute",
              top: "14px",
              left: "0",
              right: "0",
              height: "2px",
              background: "var(--color-hairline)",
              zIndex: 0
            }} />
            <div style={{
              position: "absolute",
              top: "14px",
              left: "0",
              width: `${(step / 3) * 100}%`,
              height: "2px",
              background: "var(--color-accent)",
              zIndex: 1,
              transition: "width var(--duration-normal) var(--ease-out)"
            }} />

            {["Plan", "Your details", "Review", "Done"].map((s, i) => (
              <li
                key={s}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  flex: 1,
                  position: "relative",
                  zIndex: 2,
                  fontSize: "var(--text-xs)",
                  fontWeight: 500
                }}
                className={step === i ? "current" : step > i ? "complete" : ""}
                aria-current={step === i ? "step" : undefined}
              >
                <div style={{
                  width: "28px", height: "28px", borderRadius: "var(--radius-full)",
                  display: "grid", placeItems: "center",
                  fontSize: "12px", fontWeight: 600,
                  border: i <= step ? "2px solid var(--color-accent)" : "2px solid var(--color-border)",
                  background: i < step ? "var(--color-accent)" : (i === step ? "var(--color-surface-0)" : "var(--color-surface-0)"),
                  color: i < step ? "var(--color-text-inverse)" : (i === step ? "var(--color-accent)" : "var(--color-text-muted)"),
                  transition: "all var(--duration-normal) var(--ease-out)"
                }}>
                  {i < step ? <Check size={14} /> : i + 1}
                </div>
                <span style={{
                  color: i <= step ? "var(--color-text-strong)" : "var(--color-text-muted)",
                  fontWeight: i === step ? 600 : 400
                }}>
                  {s}
                </span>
              </li>
            ))}
          </ol>
          <details className="mobile-order">
            <summary style={{ cursor: "pointer", color: "var(--color-accent)", fontWeight: 500, padding: "var(--space-3)", background: "var(--color-accent-tint)", borderRadius: "var(--radius-md)", marginBottom: "var(--space-4)", display: "inline-block" }}>
              View your example summary {total ? money(total.total) : ""}
            </summary>
            <div className="order-summary card" style={{ marginTop: "var(--space-4)", padding: "var(--space-6)", position: "sticky", top: "100px" }}>{order}</div>
          </details>
          <noscript>
            <p style={{ color: "var(--color-text-muted)" }}>
              Demo checkout requires JavaScript. You can still{" "}
              <a href="/plans" style={{ color: "var(--color-accent)" }}>compare plans</a> and browse the site.
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
              <h2 ref={heading} tabIndex={-1} style={{ margin: "0 0 var(--space-2)" }}>
                {
                  [
                    "Choose your journey.",
                    "A few practice details.",
                    "Take one last look.",
                  ][step]
                }
              </h2>
              <p style={{ margin: "0 0 var(--space-6)", color: "var(--color-text-muted)" }}>
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
                  className="error-summary card"
                  ref={summary}
                  tabIndex={-1}
                  role="alert"
                  style={{ padding: "var(--space-5)", border: "1px solid var(--color-error)", background: "var(--color-error-light)", marginBottom: "var(--space-6)" }}
                >
                  <h3 className="text-display" style={{ margin: "0 0 var(--space-3)", color: "var(--color-error)" }}>Let's check a few details.</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                    {Object.entries(visibleErrors).map(([key, error]) => (
                      <li key={key}>
                        <button
                          onClick={() => document.getElementById(key)?.focus()}
                          className="text-link w-full" style={{ justifyContent: "flex-start", padding: 0, color: "var(--color-error)" }}
                        >
                          {error}
                        </button>
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
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "var(--space-4)",
                          padding: "var(--space-5)",
                          border: `2px solid ${plan === p.id ? "var(--color-accent)" : "var(--color-border)"}`,
                          borderRadius: "var(--radius-lg)",
                          background: plan === p.id ? "var(--color-accent-tint)" : "var(--color-surface-0)",
                          cursor: "pointer",
                          marginBottom: "var(--space-4)",
                          transition: "all var(--duration-fast) var(--ease-out)"
                        }}
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
                          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
                        />
                        <span style={{ flex: 1 }}>
                          <strong style={{ display: "block", marginBottom: "var(--space-2)" }}>{p.name}</strong>
                          <span style={{ display: "block", color: "var(--color-text-muted)", marginBottom: "var(--space-2)" }}>
                            {p.term} {p.boxes} {p.boxes === 1 ? "box" : "boxes"}.
                          </span>
                          <span className="small" style={{ color: "var(--color-text-subtle)" }}>
                            {money(t.base)} + {money(t.shipping)} shipping ·
                            before tax
                          </span>
                        </span>
                        <b style={{ fontSize: "var(--text-xl)", color: "var(--color-accent)" }}>{money(t.total)}</b>
                      </label>
                    );
                  })}
                  {errors.plan && <p className="field-error" style={{ color: "var(--color-error)", marginBottom: "var(--space-4)" }}>{errors.plan}</p>}
                  <p className="small" style={{ color: "var(--color-text-muted)" }}>
                    Illustrative pricing. Destinations are curated, not selected
                    at checkout.
                  </p>
                </fieldset>
              )}
              {step === 1 && (
                <>
                  <p className="info-note card" style={{ padding: "var(--space-4)", marginBottom: "var(--space-6)", color: "var(--color-text-muted)" }}>
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
                      <label htmlFor={f.key} className="form-label">{f.label}</label>
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
                        className="form-input"
                      />
                      {errors[f.key] && (
                        <p className="form-error" id={`${f.key}-error`} role="alert">{errors[f.key]}</p>
                      )}
                    </div>
                  ))}
                  <p className="small" style={{ marginTop: "var(--space-4)", color: "var(--color-text-muted)" }}>
                    Your progress stays only while this page is open. Refreshing
                    may reset it.
                  </p>
                </>
              )}
              {step === 2 && (
                <>
                  <div className="review-block card" style={{ marginBottom: "var(--space-6)", padding: "var(--space-6)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flexStart", marginBottom: "var(--space-4)" }}>
                      <h3 style={{ margin: 0 }}>Your plan</h3>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setStep(0)}
                        style={{ color: "var(--color-accent)" }}
                      >
                        Edit plan
                      </button>
                    </div>
                    <p style={{ margin: "var(--space-2) 0" }}>
                      {selected?.name} · {total?.boxes}{" "}
                      {total?.boxes === 1 ? "box" : "boxes"}
                    </p>
                    <p style={{ margin: "var(--space-2) 0" }}>
                      {total && money(total.total)} estimated total before tax
                    </p>
                    <p className="small" style={{ margin: "var(--space-2) 0", color: "var(--color-text-muted)" }}>Tax: Not calculated in this demo</p>
                  </div>
                  <div className="review-block card" style={{ marginBottom: "var(--space-6)", padding: "var(--space-6)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flexStart", marginBottom: "var(--space-4)" }}>
                      <h3 style={{ margin: 0 }}>Practice details</h3>
                      <button
                        type="button"
                        className="text-link"
                        onClick={() => setStep(1)}
                        style={{ color: "var(--color-accent)" }}
                      >
                        Edit details
                      </button>
                    </div>
                    <p style={{ margin: "var(--space-2) 0" }}>{details.name}</p>
                    <p style={{ margin: "var(--space-2) 0" }}>{details.email}</p>
                    <p style={{ margin: "var(--space-2) 0" }}>U.S. ZIP: {details.zip}</p>
                  </div>
                  <p className="info-note card" style={{ padding: "var(--space-4)", color: "var(--color-text-muted)" }}>
                    Completing this demo does not place an order, charge you, or
                    create a subscription.
                  </p>
                </>
              )}
              <div className="form-actions" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "var(--space-8)",
                paddingTop: "var(--space-6)",
                borderTop: "1px solid var(--color-hairline)",
                flexWrap: "wrap",
                gap: "var(--space-4)"
              }}>
                {step > 0 ? (
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setStep(step - 1)}
                    style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-accent)" }}
                  >
                    <ArrowLeft size={17} />
                    Back
                  </button>
                ) : (
                  <button type="button" className="text-link" onClick={cancel} style={{ color: "var(--color-accent)" }}>
                    Return to Plans
                  </button>
                )}
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={busy}
                >
                  {busy
                    ? "Completing demo..."
                    : step === 2
                      ? "Complete Demo"
                      : "Continue"}
                  <ArrowRight size={19} />
                </button>
              </div>
              <div className="checkout-fineprint" style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "var(--space-6)",
                fontSize: "var(--text-sm)",
                color: "var(--color-text-muted)",
                flexWrap: "wrap",
                gap: "var(--space-2)"
              }}>
                <button type="button" className="text-link" onClick={cancel} style={{ color: "var(--color-accent)" }}>
                  Cancel demo
                </button>
                <span>
                  <Link href="/privacy" style={{ color: "var(--color-accent)" }}>Privacy</Link> ·{" "}
                  <Link href="/terms" style={{ color: "var(--color-accent)" }}>Terms</Link>
                </span>
              </div>
            </form>
          )}
        </div>
        <aside className="desktop-order order-summary card" style={{ padding: "var(--space-6)", position: "sticky", top: "100px" }}>{order}</aside>
      </div>
      <dialog
        ref={dialog}
        className="leave-dialog card"
        aria-labelledby="leave-title"
        onCancel={closeDialog}
        style={{
          padding: "var(--space-8)",
          maxWidth: "400px",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-2xl)",
          boxShadow: "var(--shadow-2xl)"
        }}
      >
        <h2 id="leave-title" style={{ margin: "0 0 var(--space-4)" }}>Leave this demo?</h2>
        <p style={{ margin: "0 0 var(--space-6)", color: "var(--color-text-muted)" }}>
          Your practice entries will be cleared. You can start again anytime.
        </p>
        <div style={{ display: "flex", gap: "var(--space-4)", flexDirection: "column-reverse" }}>
          <button autoFocus className="btn btn-primary" onClick={closeDialog} style={{ width: "100%" }}>
            Keep exploring this step
          </button>
          <button className="text-link" onClick={leave} style={{ textAlign: "center", color: "var(--color-accent)" }}>
            Leave demo
          </button>
        </div>
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
      <section className="container confirmation" style={{
        padding: "var(--space-section-lg) 0",
        textAlign: "center",
        maxWidth: "40rem",
        margin: "0 auto"
      }}>
        <div className="stamp" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)", padding: "var(--space-6) var(--space-8)", background: "var(--color-accent-tint)", border: "2px solid var(--color-accent)", borderRadius: "var(--radius-2xl)", marginBottom: "var(--space-8)", color: "var(--color-accent)" }}>
          <Stamp />
          <span className="stamp-star" style={{ fontSize: "1.5em" }}>✦</span>
        </div>
        <p className="eyebrow" style={{ color: "var(--color-accent)", marginBottom: "var(--space-4)" }}>
          {completion
            ? "A LITTLE DISCOVERY, COMPLETE"
            : "YOUR JOURNEY STARTS HERE"}
        </p>
        <h1 style={{ margin: "var(--space-4) 0 var(--space-4)" }}>
          {completion
            ? "Your demo journey is ready."
            : "Start a discovery journey first."}
        </h1>
        <p style={{ margin: "var(--space-4) 0 var(--space-8)", lineHeight: "var(--leading-relaxed)" }}>
          {completion
            ? "Thanks for exploring Marlowby. No payment was taken, no order was placed, and no subscription was created."
            : "This confirmation appears after you finish the demo. No order or payment has been created."}
        </p>
        {t && (
          <div className="confirmation-summary card" style={{ padding: "var(--space-8)", marginBottom: "var(--space-8)", background: "var(--color-surface-1)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)" }}>
            <h2 style={{ margin: "0 0 var(--space-2)" }}>{p?.name}</h2>
            <p style={{ margin: "0 0 var(--space-2)", color: "var(--color-text-muted)" }}>
              {t.boxes} {t.boxes === 1 ? "box" : "boxes"} · Current concept:
              Austin, Texas
            </p>
            <strong style={{ fontSize: "var(--text-4xl)", color: "var(--color-text-strong)" }}>{money(t.total)}</strong>
            <p style={{ margin: "var(--space-2) 0 0", color: "var(--color-text-muted)" }}>Estimated total before tax</p>
            <p className="small" style={{ margin: "var(--space-2) 0 0", color: "var(--color-text-subtle)" }}>Tax: Not calculated in this demo</p>
          </div>
        )}
        <div className="confirmation-actions" style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", flexWrap: "wrap" }}>
          <Action href={completion ? "/cities" : "/plans"} variant="primary">
            {completion ? "Explore Cities" : "Choose a Plan"}
          </Action>
          <Action href="/" variant="secondary">Return Home</Action>
          {completion && (
            <Action href="/plans" variant="secondary">Try Another Plan</Action>
          )}
        </div>
      </section>
    </>
  );
}
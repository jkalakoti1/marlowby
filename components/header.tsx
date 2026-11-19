"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo, Badge } from "./ui";
import { cities } from "@/content/cities";
const links = [
  ["How It Works", "/how-it-works"],
  ["This Month’s Box", "/this-month"],
  ["Explore Cities", "/cities"],
  ["Our Story", "/our-story"],
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const mobile = useRef<HTMLButtonElement>(null);
  const group = useRef<HTMLDivElement>(null);
  // Route changes must close transient navigation and release the native dialog scroll lock.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    dialog.current?.close();
    document.body.style.overflow = "";
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!group.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);
  function closeMobile() {
    dialog.current?.close();
    document.body.style.overflow = "";
    mobile.current?.focus();
  }
  const active = (href: string) =>
    path === href || (href === "/cities" && path.startsWith("/cities/"));
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) =>
              href === "/cities" ? (
                <div
                  ref={group}
                  className="nav-disclosure"
                  key={href}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget))
                      setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setOpen(false);
                      toggle.current?.focus();
                    }
                  }}
                >
                  <Link
                    href={href}
                    className={active(href) ? "active" : ""}
                    aria-current={path === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                  <button
                    className="chevron-toggle"
                    ref={toggle}
                    aria-label="Open city menu"
                    aria-expanded={open}
                    aria-controls="city-menu"
                    onClick={() => setOpen(!open)}
                  >
                    <ChevronDown size={15} />
                  </button>
                  {open && (
                    <div className="city-menu" id="city-menu">
                      <Link href="/cities" onClick={() => setOpen(false)}>
                        Explore all cities <ArrowRight size={17} />
                      </Link>
                      {cities.map((c) => (
                        <Link
                          key={c.id}
                          href={`/cities/${c.slug}`}
                          onClick={() => setOpen(false)}
                        >
                          <span>
                            {c.name}, {c.abbreviation}
                          </span>
                          <Badge status={c.status} />
                        </Link>
                      ))}
                      <p>One city at a time. Plenty to discover.</p>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={active(href) ? "active" : ""}
                  aria-current={path === href ? "page" : undefined}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
          <Link
            className={`button header-plan ${path === "/plans" || path.startsWith("/checkout") ? "active" : ""}`}
            aria-current={path === "/plans" ? "page" : undefined}
            href="/plans"
          >
            Find Your Plan
          </Link>
          <button
            className="mobile-toggle"
            ref={mobile}
            onClick={() => {
              setOpen(false);
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
            }}
          >
            <Menu size={22} />
            Menu
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        aria-label="Main navigation"
        onCancel={closeMobile}
        onClick={(e) => {
          if (e.target === dialog.current) closeMobile();
        }}
      >
        <div className="mobile-menu-top">
          <Logo />
          <button
            autoFocus
            className="icon-button"
            aria-label="Close menu"
            onClick={closeMobile}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <div key={href}>
              <Link
                href={href}
                className={active(href) ? "active" : ""}
                aria-current={path === href ? "page" : undefined}
                onClick={closeMobile}
              >
                {label}
                <ArrowRight size={22} />
              </Link>
              {href === "/cities" && (
                <details>
                  <summary>Browse destinations</summary>
                  {cities.map((c) => (
                    <Link
                      key={c.id}
                      href={`/cities/${c.slug}`}
                      onClick={closeMobile}
                    >
                      {c.name}
                      <Badge status={c.status} />
                    </Link>
                  ))}
                </details>
              )}
            </div>
          ))}
          <Link href="/faq" onClick={closeMobile}>
            FAQ
            <ArrowRight size={22} />
          </Link>
          <Link
            className={`button ${path === "/plans" || path.startsWith("/checkout") ? "active" : ""}`}
            aria-current={path === "/plans" ? "page" : undefined}
            href="/plans"
            onClick={closeMobile}
          >
            Find Your Plan <ArrowRight size={20} />
          </Link>
        </nav>
        <p className="small">
          A little local discovery. A world of possibility.
        </p>
      </dialog>
    </>
  );
}

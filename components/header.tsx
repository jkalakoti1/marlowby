"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "./ui-v2";
import { cities } from "@/content/cities";

const links = [
  ["How It Works", "/how-it-works"],
  ["This Month's Box", "/this-month"],
  ["Explore Cities", "/cities"],
  ["Our Story", "/our-story"],
];

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const mobileBtn = useRef<HTMLButtonElement>(null);
  const group = useRef<HTMLDivElement>(null);

  // Route changes close transient navigation and release scroll lock
  useEffect(() => {
    setOpen(false);
    setMobileOpen(false);
    dialog.current?.close();
    document.body.style.overflow = "";
  }, [path]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!group.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  function closeMobile() {
    setMobileOpen(false);
    dialog.current?.close();
    document.body.style.overflow = "";
    mobileBtn.current?.focus();
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
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
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
                    className={active(href) ? "nav-link active" : "nav-link"}
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
                      <Link href="/cities" onClick={() => setOpen(false)} className="city-menu-link city-menu-all">
                        Explore all cities <ArrowRight size={17} />
                      </Link>
                      {cities.map((c) => (
                        <Link
                          key={c.id}
                          href={`/cities/${c.slug}`}
                          onClick={() => setOpen(false)}
                          className="city-menu-link"
                        >
                          <span>{c.name}, {c.abbreviation}</span>
                        </Link>
                      ))}
                      <p className="city-menu-note">One city at a time. Plenty to discover.</p>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={active(href) ? "nav-link active" : "nav-link"}
                  aria-current={path === href ? "page" : undefined}
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
          <Link
            className={`btn btn-accent ${path === "/plans" || path.startsWith("/checkout") ? "active" : ""}`}
            aria-current={path === "/plans" ? "page" : undefined}
            href="/plans"
          >
            Find Your Plan
          </Link>
          <button
            className="mobile-toggle"
            ref={mobileBtn}
            onClick={() => {
              setMobileOpen(true);
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
            }}
            aria-label="Open menu"
          >
            <Menu size={22} />
            <span className="mobile-menu-text">Menu</span>
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
            <X size={24} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <div key={href}>
              <Link
                href={href}
                className={active(href) ? "mobile-nav-link active" : "mobile-nav-link"}
                aria-current={path === href ? "page" : undefined}
                onClick={closeMobile}
              >
                {label}
                <ArrowRight size={22} />
              </Link>
              {href === "/cities" && (
                <details className="mobile-cities-details">
                  <summary className="mobile-cities-summary">Browse destinations</summary>
                  <div className="mobile-cities-list">
                    {cities.map((c) => (
                      <Link
                        key={c.id}
                        href={`/cities/${c.slug}`}
                        onClick={closeMobile}
                        className="mobile-city-link"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
          <Link href="/faq" onClick={closeMobile} className="mobile-nav-link">
            FAQ <ArrowRight size={22} />
          </Link>
          <Link
            className={`btn btn-accent ${path === "/plans" || path.startsWith("/checkout") ? "active" : ""}`}
            aria-current={path === "/plans" ? "page" : undefined}
            href="/plans"
            onClick={closeMobile}
          >
            Find Your Plan <ArrowRight size={20} />
          </Link>
        </nav>
        <p className="mobile-menu-tagline">
          A little local discovery. A world of possibility.
        </p>
      </dialog>
    </>
  );
}
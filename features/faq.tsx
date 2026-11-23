"use client";
import { useEffect } from "react";
import { Plus } from "lucide-react";
import faq from "@/content/faq.json";
export function FAQList({
  ids,
  category,
}: {
  ids?: string[];
  category?: string;
}) {
  const items = faq.filter((f) =>
    ids ? ids.includes(f.id) : category ? f.category === category : true,
  );
  useEffect(() => {
    const openHash = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      const el = document.getElementById(id);
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        el.querySelector("summary")?.focus();
      }
    };
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, []);
  return (
    <div className="faq-list">
      {items.map((f) => (
        <details key={f.id} id={f.id} className="faq-accordion">
          <summary>
            <span>{f.question}</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="faq-answer">
            <p>{f.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
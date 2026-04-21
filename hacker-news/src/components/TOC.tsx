"use client";

import { useState, useEffect } from "react";
import type { Section } from "@/data/issues";

export default function TOC({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [sections]);

  const items = [
    { id: "overview", label: "总览" },
    ...sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "summary", label: "总结" },
  ];

  return (
    <nav className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40 w-36">
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-xs py-1 transition-colors ${
                active === item.id
                  ? "text-accent font-medium"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
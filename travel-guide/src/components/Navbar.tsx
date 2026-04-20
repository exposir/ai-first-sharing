"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "overview", label: "总览" },
  { id: "route", label: "路线规划" },
  { id: "traffic", label: "路况避堵" },
  { id: "weihai", label: "威海攻略" },
  { id: "qingdao", label: "青岛攻略" },
  { id: "cost", label: "费用预算" },
  { id: "tips", label: "避坑指南" },
  { id: "packing", label: "行李清单" },
];

export default function Navbar() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el && el.getBoundingClientRect().top <= 80) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm overflow-x-auto whitespace-nowrap" style={{ WebkitOverflowScrolling: "touch" }}>
      <div className="max-w-5xl mx-auto px-4 flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`inline-block py-3.5 px-4 text-sm border-b-[3px] transition-all shrink-0 ${
              active === item.id
                ? "text-blue-600 border-blue-600"
                : "text-gray-600 border-transparent hover:text-blue-600"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
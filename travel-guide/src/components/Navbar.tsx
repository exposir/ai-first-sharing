"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/route", label: "路线" },
  { href: "/weihai", label: "威海" },
  { href: "/qingdao", label: "青岛" },
  { href: "/guide", label: "攻略" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Home page + not scrolled: transparent navbar overlaying hero
  // Light mode hero is warm-white → dark text; Dark mode hero is near-black → white text
  // Scrolled or non-home: solid navbar with backdrop blur
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/80 dark:bg-[#1a1a19]/80 backdrop-blur-xl border-b border-claude-light-gray/30 dark:border-white/[0.06]"
      }`}
    >
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide" style={{ WebkitOverflowScrolling: "touch" }}>
          {/* Logo */}
          <Link
            href="/"
            className={`mr-4 shrink-0 font-semibold text-sm tracking-tight py-3 hover:text-claude-orange transition-colors ${
              isTransparent
                ? "text-claude-dark dark:text-white"
                : "text-claude-dark dark:text-white"
            }`}
          >
            🗺️ 自驾攻略
          </Link>
          <div className={`h-5 w-px mr-3 shrink-0 ${isTransparent ? "bg-claude-mid/40 dark:bg-white/20" : "bg-claude-light-gray/60 dark:bg-white/10"}`} />
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            let textColor: string;
            if (isTransparent) {
              // On hero: light mode = dark text, dark mode = white text
              textColor = isActive
                ? "text-claude-dark dark:text-white font-medium"
                : "text-claude-mid dark:text-white/70 hover:text-claude-dark dark:hover:text-white";
            } else {
              // Solid navbar: always readable on respective background
              textColor = isActive
                ? "text-claude-dark dark:text-white font-medium"
                : "text-claude-mid hover:text-claude-dark dark:hover:text-white";
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center py-3.5 px-3 text-[0.82rem] transition-all shrink-0 ${textColor}`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-claude-orange rounded-full"
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
          {/* Theme toggle */}
          <div className="ml-auto shrink-0 pl-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
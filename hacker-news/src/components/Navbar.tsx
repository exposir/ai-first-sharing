"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllDates } from "@/data/issues";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dates = getAllDates();
  const latestDate = dates[0]; // sorted desc, first is latest

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-card-border">
      <div className="max-w-4xl mx-auto px-4 h-12 flex items-center justify-between">
        <Link href="/" className="text-accent font-bold text-sm font-mono">
          HN Insight
        </Link>

        {!isHome && (
          <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
            目录
          </Link>
        )}

        {isHome && latestDate && (
          <Link
            href={`/${latestDate}`}
            className="text-sm text-accent hover:underline"
          >
            今日更新
          </Link>
        )}
      </div>
    </nav>
  );
}
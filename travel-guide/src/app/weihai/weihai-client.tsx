"use client";

import { WeihaiSection } from "@/components/SpotCard";
import { FadeIn } from "@/components/motion";
import { weihaiTrafficRules } from "@/data/travel";

export default function WeihaiPageClient() {
  return (
    <main className="page-enter max-w-4xl mx-auto px-5 md:px-8 pt-[68px]">
      <WeihaiSection />

      {/* 威海交通规则 */}
      <FadeIn delay={0.1}>
        <div className="card mb-5">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">威海市内五一交通管制</h3>
          <ul className="space-y-3">
            {weihaiTrafficRules.map((rule, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${rule.color === "red" ? "bg-red-400" : rule.color === "orange" ? "bg-claude-orange" : "bg-claude-blue"}`} />
                <div className="text-claude-dark/80"><strong className="text-claude-dark">{rule.title}：</strong>{rule.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </main>
  );
}
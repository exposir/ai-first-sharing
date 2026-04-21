"use client";

import { costs } from "@/data/travel";
import { FadeIn } from "./motion";

const levelStyles: Record<string, string> = {
  green: "text-claude-green",
  orange: "text-claude-orange",
  red: "text-red-500",
};

export default function CostSection() {
  return (
    <section id="cost" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">费用预算</h2>
          <p className="section-sub">两人出行预估，供参考</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="card mb-5">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">费用构成概览（2人合计）</h3>
          <div className="flex h-7 rounded-lg overflow-hidden mb-3">
            <div className="bg-[#141413] dark:bg-white/90 flex items-center justify-center text-white dark:text-[#1a1a19] text-xs font-medium" style={{ width: "30%" }}>油费 ~800</div>
            <div className="bg-[#141413]/70 dark:bg-white/60 flex items-center justify-center text-white dark:text-[#1a1a19] text-xs font-medium" style={{ width: "22%" }}>住宿 ~1800</div>
            <div className="bg-claude-orange flex items-center justify-center text-white text-xs font-medium" style={{ width: "18%" }}>餐饮 ~1200</div>
            <div className="bg-claude-green flex items-center justify-center text-white text-xs font-medium" style={{ width: "12%" }}>门票 ~600</div>
            <div className="bg-claude-blue flex items-center justify-center text-white text-xs font-medium" style={{ width: "10%" }}>租车 ~500</div>
            <div className="bg-claude-mid flex items-center justify-center text-white text-xs font-medium" style={{ width: "8%" }}>停车 ~300</div>
          </div>
          <p className="text-center text-xs text-claude-mid dark:text-white/50">五一高速免费，省约710元高速费</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card">
            <h3 className="text-base font-semibold mb-3 text-claude-dark">交通费用</h3>
            <table className="w-full text-sm">
              <tbody>
                {costs.transport.map((c) => (
                  <tr key={c.item} className="border-b border-claude-light-gray/40 last:border-0">
                    <td className="py-2.5 text-claude-dark/80">{c.item}</td>
                    <td className="py-2.5 text-right font-medium text-claude-dark">
                      {c.cost === "免费" ? (
                        <span className="tag bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400">免费</span>
                      ) : c.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card">
            <h3 className="text-base font-semibold mb-3 text-claude-dark">住宿费用（五一价格）</h3>
            <table className="w-full text-sm">
              <tbody>
                {costs.accommodation.map((c) => (
                  <tr key={c.item} className="border-b border-claude-light-gray/40 last:border-0">
                    <td className="py-2.5 text-claude-dark/80">{c.item}</td>
                    <td className="py-2.5 text-right font-medium text-claude-dark">{c.cost}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={2} className="py-2.5 text-claude-orange font-semibold text-center text-sm">五一套房翻2-3倍，尽早预订！</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="card mt-4">
          <h3 className="text-base font-semibold mb-3 text-claude-dark">门票费用（2人）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-claude-light-gray">
                  <th className="py-2.5 px-3 text-left text-claude-mid dark:text-white/60 font-medium">景点</th>
                  <th className="py-2.5 px-3 text-left text-claude-mid dark:text-white/60 font-medium">门票</th>
                  <th className="py-2.5 px-3 text-left text-claude-mid dark:text-white/60 font-medium">2人合计</th>
                </tr>
              </thead>
              <tbody>
                {costs.tickets.map((t) => (
                  <tr key={t.item} className="border-b border-claude-light-gray/40 dark:border-white/[0.06] last:border-0 hover:bg-claude-warm/50 dark:hover:bg-white/[0.04] transition-colors">
                    <td className="py-2.5 px-3 text-claude-dark">{t.item}</td>
                    <td className="py-2.5 px-3 text-claude-mid dark:text-white/60">{t.cost}</td>
                    <td className="py-2.5 px-3 font-medium text-claude-dark">{t.total2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="bg-claude-dark/[0.03] dark:bg-white/[0.03] border border-claude-light-gray dark:border-white/[0.06] rounded-2xl p-6 mt-4">
          <h3 className="text-base font-semibold mb-5 text-center text-claude-dark">总预算估算</h3>
          <div className="grid grid-cols-3 text-center gap-4">
            {costs.summary.map((s) => (
              <div key={s.level}>
                <div className={`text-2xl font-bold ${levelStyles[s.color]}`}>{s.perPerson}</div>
                <div className="text-xs text-claude-mid dark:text-white/50 mt-1">人均/{s.level}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
"use client";

import { QingdaoSection } from "@/components/SpotCard";
import { BeerSection } from "@/components/BeerSection";
import { FadeIn } from "@/components/motion";
import { qingdaoParking, qingdaoAlternatives } from "@/data/travel";

export default function QingdaoPageClient() {
  return (
    <main className="page-enter max-w-4xl mx-auto px-5 md:px-8 pt-[68px]">
      <QingdaoSection />

      {/* 青岛啤酒攻略 */}
      <BeerSection />

      {/* 青岛停车+地铁方案 */}
      <FadeIn delay={0.1}>
        <div className="card mb-5">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">青岛停车+地铁方案</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-claude-light-gray">
                  <th className="py-3 px-3 text-left text-claude-mid font-medium">停车点</th>
                  <th className="py-3 px-3 text-left text-claude-mid font-medium">地铁线路</th>
                  <th className="py-3 px-3 text-left text-claude-mid font-medium">进城时间</th>
                  <th className="py-3 px-3 text-left text-claude-mid font-medium">说明</th>
                </tr>
              </thead>
              <tbody>
                {qingdaoParking.map((p) => (
                  <tr key={p.name} className="border-b border-claude-light-gray/40 last:border-0 hover:bg-claude-warm/50 transition-colors">
                    <td className="py-3 px-3 font-medium text-claude-dark">{p.name}</td>
                    <td className="py-3 px-3 text-claude-mid">{p.lines}</td>
                    <td className="py-3 px-3 text-claude-mid">{p.time}</td>
                    <td className="py-3 px-3">
                      {p.recommended && <span className="tag bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 mr-2">最推荐</span>}
                      <span className="text-claude-mid">{p.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      {/* 替代景点方案 */}
      <FadeIn delay={0.15}>
        <div className="card">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">五一替代景点方案</h3>
          <p className="text-sm text-claude-mid mb-4">热门景点人太多？试试这些替代方案：</p>
          <div className="space-y-3">
            {qingdaoAlternatives.map((alt, i) => (
              <div key={i} className="flex items-start gap-3 text-sm p-3 bg-claude-warm/60 dark:bg-white/[0.04] rounded-lg">
                <span className="shrink-0 w-6 h-6 rounded-full bg-claude-orange/10 text-claude-orange flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <div>
                  <span className="font-medium text-claude-dark">{alt.original}</span>
                  <span className="text-claude-mid mx-2">→</span>
                  <span className="text-claude-orange font-medium">{alt.alternative}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
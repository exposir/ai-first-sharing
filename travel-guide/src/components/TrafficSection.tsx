"use client";

import { trafficHotspots, weihaiTrafficRules, qingdaoParking } from "@/data/travel";
import { FadeIn } from "./motion";

const severityMap: Record<string, string> = {
  "极堵": "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
  "很堵": "bg-claude-orange/10 text-orange-500 dark:text-orange-400",
  "较堵": "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
};

const defaultSeverity = "bg-gray-100 dark:bg-gray-800/40 text-gray-500 dark:text-gray-400";

export default function TrafficSection() {
  return (
    <section id="traffic" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">路况避堵</h2>
          <p className="section-sub">五一高速堵点排名 + 绕行方案</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="card mb-5">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">五一高速堵点排名</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-claude-light-gray">
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">排名</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">路段</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">堵因</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">严重程度</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">绕行</th>
                </tr>
              </thead>
              <tbody>
                {trafficHotspots.map((h) => (
                  <tr key={h.rank} className="border-b border-claude-light-gray/40 last:border-0 hover:bg-claude-warm/50 dark:hover:bg-white/[0.04] transition-colors">
                    <td className="py-3 px-3 font-semibold">{h.rank}</td>
                    <td className="py-3 px-3 font-medium text-claude-dark">{h.road}</td>
                    <td className="py-3 px-3 text-claude-mid dark:text-white/60">{h.cause}</td>
                    <td className="py-3 px-3"><span className={`tag ${severityMap[h.severity] || defaultSeverity}`}>{h.severity}</span></td>
                    <td className="py-3 px-3 text-claude-mid dark:text-white/60">{h.bypass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="alert-blue mb-5">
          <h4 className="text-[0.95rem] mb-2 font-semibold text-claude-dark">关键记住这一句话</h4>
          <p className="text-sm text-claude-dark/70 font-serif">
            出了杭州之后，<strong className="text-claude-dark">江苏段基本通畅，一进山东就开始堵，越接近青岛越堵。</strong>所以我们先北上威海绕过青岛，返程从青岛南下（只有这一段躲不开）。
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
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

      <FadeIn delay={0.25}>
        <div className="card">
          <h3 className="text-base font-semibold mb-4 text-claude-dark">青岛停车+地铁方案</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-claude-light-gray">
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">停车点</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">地铁线路</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">进城时间</th>
                  <th className="py-3 px-3 text-left text-claude-mid dark:text-white/60 font-medium">说明</th>
                </tr>
              </thead>
              <tbody>
                {qingdaoParking.map((p) => (
                  <tr key={p.name} className="border-b border-claude-light-gray/40 last:border-0 hover:bg-claude-warm/50 dark:hover:bg-white/[0.04] transition-colors">
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
    </section>
  );
}
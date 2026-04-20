import { costs } from "@/data/travel";

const levelColors: Record<string, string> = {
  green: "text-green-700",
  orange: "text-orange-600",
  red: "text-red-600",
};

export default function CostSection() {
  return (
    <section id="cost" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-lg shrink-0">💰</span>
          费用预算
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">两人出行预估，供参考</p>
      </div>

      {/* Cost bar */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3">费用构成概览（2人合计）</h3>
        <div className="flex h-8 rounded-lg overflow-hidden mb-2">
          <div className="bg-blue-600 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "30%" }}>油费 ~800</div>
          <div className="bg-blue-900 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "22%" }}>住宿 ~1800</div>
          <div className="bg-orange-500 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "18%" }}>餐饮 ~1200</div>
          <div className="bg-green-700 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "12%" }}>门票 ~600</div>
          <div className="bg-red-600 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "10%" }}>租车 ~500</div>
          <div className="bg-gray-500 flex items-center justify-center text-white text-xs font-semibold" style={{ width: "8%" }}>停车 ~300</div>
        </div>
        <p className="text-center text-xs text-gray-500">五一高速免费，省约710元高速费</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">交通费用</h3>
          <table className="w-full text-sm">
            <tbody>
              {costs.transport.map((c) => (
                <tr key={c.item} className="border-b border-gray-100 last:border-0">
                  <td className="py-2.5 text-gray-700">{c.item}</td>
                  <td className="py-2.5 text-right font-semibold">
                    {c.cost === "免费" ? (
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">免费</span>
                    ) : c.cost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">住宿费用（五一价格）</h3>
          <table className="w-full text-sm">
            <tbody>
              {costs.accommodation.map((c) => (
                <tr key={c.item} className="border-b border-gray-100 last:border-0">
                  <td className="py-2.5 text-gray-700">{c.item}</td>
                  <td className="py-2.5 text-right font-semibold">{c.cost}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2} className="py-2.5 text-red-600 font-semibold text-center">五一套房翻2-3倍，尽早预订！</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm mt-4">
        <h3 className="text-lg font-semibold mb-3">门票费用（2人）</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-3 text-left text-gray-600 font-semibold bg-gray-50">景点</th>
                <th className="py-2.5 px-3 text-left text-gray-600 font-semibold bg-gray-50">门票</th>
                <th className="py-2.5 px-3 text-left text-gray-600 font-semibold bg-gray-50">2人合计</th>
              </tr>
            </thead>
            <tbody>
              {costs.tickets.map((t) => (
                <tr key={t.item} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-2.5 px-3">{t.item}</td>
                  <td className="py-2.5 px-3 text-gray-600">{t.cost}</td>
                  <td className="py-2.5 px-3 font-semibold">{t.total2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-50 border-2 border-blue-200 rounded-xl p-6 mt-4">
        <h3 className="text-lg font-semibold mb-4 text-center">总预算估算</h3>
        <div className="grid grid-cols-3 text-center gap-4">
          {costs.summary.map((s) => (
            <div key={s.level}>
              <div className={`text-2xl font-extrabold ${levelColors[s.color]}`}>{s.perPerson}</div>
              <div className="text-xs text-gray-500 mt-1">人均/{s.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
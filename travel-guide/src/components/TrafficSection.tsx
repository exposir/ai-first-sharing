import { trafficHotspots, weihaiTrafficRules, qingdaoParking } from "@/data/travel";

const severityMap = {
  "极堵": "bg-red-100 text-red-700",
  "很堵": "bg-orange-100 text-orange-600",
  "较堵": "bg-orange-100 text-orange-600",
};

export default function TrafficSection() {
  return (
    <section id="traffic" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-lg shrink-0">🚦</span>
          路况避堵
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">五一高速堵点排名 + 绕行方案</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3">五一高速堵点排名</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">排名</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">路段</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">堵因</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">严重程度</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">绕行</th>
              </tr>
            </thead>
            <tbody>
              {trafficHotspots.map((h) => (
                <tr key={h.rank} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-3 font-bold">{h.rank}</td>
                  <td className="py-3 px-3 font-medium">{h.road}</td>
                  <td className="py-3 px-3 text-gray-600">{h.cause}</td>
                  <td className="py-3 px-3"><span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${severityMap[h.severity]}`}>{h.severity}</span></td>
                  <td className="py-3 px-3 text-gray-600">{h.bypass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert-box alert-blue mb-4">
        <h4 className="text-[0.95rem] mb-2 font-semibold">关键记住这一句话</h4>
        <p className="text-sm text-gray-700">
          出了杭州之后，<strong>江苏段基本通畅，一进山东就开始堵，越接近青岛越堵。</strong>所以我们先北上威海绕过青岛，返程从青岛南下（只有这一段躲不开）。
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3">威海市内五一交通管制</h3>
        <ul className="space-y-3">
          {weihaiTrafficRules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${rule.color === "red" ? "bg-red-600" : rule.color === "orange" ? "bg-orange-500" : "bg-blue-500"}`} />
              <div><strong>{rule.title}：</strong>{rule.desc}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-3">青岛停车+地铁方案</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">停车点</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">地铁线路</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">进城时间</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">说明</th>
              </tr>
            </thead>
            <tbody>
              {qingdaoParking.map((p) => (
                <tr key={p.name} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-3 font-semibold">{p.name}</td>
                  <td className="py-3 px-3 text-gray-600">{p.lines}</td>
                  <td className="py-3 px-3 text-gray-600">{p.time}</td>
                  <td className="py-3 px-3">
                    {p.recommended && <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold mr-2">最推荐</span>}
                    {p.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
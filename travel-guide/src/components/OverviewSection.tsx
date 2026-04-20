import { itinerary } from "@/data/travel";

export default function OverviewSection() {
  return (
    <section id="overview" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">📋</span>
          行程总览
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">先去威海、再去青岛，从北往南走，绕开最堵的路段</p>
      </div>

      <div className="alert-box alert-green mb-4">
        <h4 className="text-[0.95rem] mb-2 font-semibold">为什么先威海后青岛？</h4>
        <p className="text-sm text-gray-700">
          杭州去威海走G15沈海一路北上，绕过了G20青银和G15沈海青岛段（五一山东最堵的200公里）。返程从青岛直接南下回杭州，最近路线。把堵路留在3.5小时的城际转移上，而不是10小时长途驾驶上。
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
        <h3 className="text-lg font-semibold mb-3">行程概要</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">日期</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">行程</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">驾驶</th>
                <th className="py-3 px-3 text-left text-gray-600 font-semibold bg-gray-50">住宿</th>
              </tr>
            </thead>
            <tbody>
              {itinerary.map((day) => (
                <tr key={day.day} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-3 px-3 font-medium">{day.date} ({day.weekday})</td>
                  <td className="py-3 px-3">{day.title}</td>
                  <td className="py-3 px-3 text-gray-600">{day.duration}</td>
                  <td className="py-3 px-3 text-gray-600">{day.accommodation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* VS comparison */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-0 items-stretch">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h4 className="text-lg font-semibold mb-3 text-center pb-2.5 border-b-2 border-gray-200">🌊 威海</h4>
          {[
            ["气质", "安静小城+大海"],
            ["标志性画面", "白色风车+蓝色大海"],
            ["拍照风格", "日系清新、公路片"],
            ["美食", "韩餐+海鲜"],
            ["体验核心", "纯粹看海发呆"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-2 border-b border-gray-100 text-sm last:border-0">
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-500">五一拥挤度</span>
            <span className="bg-orange-100 text-orange-600 px-2.5 py-0.5 rounded-full text-xs font-semibold">中等</span>
          </div>
        </div>
        <div className="flex items-center justify-center text-2xl font-extrabold text-orange-500 py-4">VS</div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h4 className="text-lg font-semibold mb-3 text-center pb-2.5 border-b-2 border-gray-200">🏙️ 青岛</h4>
          {[
            ["气质", "繁华都市+大海"],
            ["标志性画面", "红瓦绿树老洋房"],
            ["拍照风格", "欧式复古、街拍"],
            ["美食", "啤酒+海鲜"],
            ["体验核心", "城市人文+海滨"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between py-2 border-b border-gray-100 text-sm last:border-0">
              <span className="text-gray-500">{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
          <div className="flex justify-between py-2 text-sm">
            <span className="text-gray-500">五一拥挤度</span>
            <span className="bg-red-100 text-red-600 px-2.5 py-0.5 rounded-full text-xs font-semibold">非常高</span>
          </div>
        </div>
      </div>
    </section>
  );
}
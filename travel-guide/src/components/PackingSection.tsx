import { packingEssential, packingOptional } from "@/data/travel";

export default function PackingSection() {
  return (
    <section id="packing" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center text-lg shrink-0">🧳</span>
          行李清单
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">五一山东沿海，白天20-25°C，夜间12-18°C</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">必带</h3>
          <ul className="space-y-2">
            {packingEssential.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm border-b border-gray-100 pb-2 last:border-0">
                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i < 5 ? "bg-red-600" : "bg-blue-600"}`} />
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold mb-3">建议带</h3>
          <ul className="space-y-2">
            {packingOptional.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm border-b border-gray-100 pb-2 last:border-0">
                <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i < 4 ? "bg-orange-500" : "bg-green-600"}`} />
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="alert-box alert-blue mt-4">
        <h4 className="text-[0.95rem] mb-2 font-semibold">五一穿衣建议</h4>
        <p className="text-sm text-gray-700">
          山东沿海五一期间<strong>白天20-25°C，夜间12-18°C</strong>。白天短袖/薄T即可，但早晚海风大，<strong>一定要带薄外套</strong>。海边紫外线强，防晒必备。海水还偏凉（约15-18°C），不建议下水游泳，但踩踩水没问题。
        </p>
      </div>
    </section>
  );
}
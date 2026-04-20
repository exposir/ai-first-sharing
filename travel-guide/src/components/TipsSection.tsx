import { tips } from "@/data/travel";

const tipCards = [
  { title: "交通大坑", color: "border-red-500", items: tips.traffic },
  { title: "住宿大坑", color: "border-orange-500", items: tips.accommodation },
  { title: "游玩大坑", color: "border-blue-500", items: tips.playing },
  { title: "海鲜大坑", color: "border-green-600", items: tips.seafood },
  { title: "安全提醒", color: "border-purple-600", items: tips.safety },
  { title: "心态管理", color: "border-gray-700", items: tips.mindset },
];

export default function TipsSection() {
  return (
    <section id="tips" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-lg shrink-0">⚡</span>
          避坑指南
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">前人踩过的坑，你别再踩</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tipCards.map((card) => (
          <div key={card.title} className={`bg-white rounded-xl p-5 shadow-sm border-t-4 ${card.color}`}>
            <h4 className="text-base font-semibold mb-2.5">{card.title}</h4>
            <ul className="space-y-1.5">
              {card.items.map((item, i) => (
                <li key={i} className="text-sm text-gray-600 ml-3 list-disc">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
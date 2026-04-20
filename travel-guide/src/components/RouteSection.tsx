import { itinerary } from "@/data/travel";

export default function RouteSection() {
  return (
    <section id="route" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-green-50 text-green-700 flex items-center justify-center text-lg shrink-0">🗺️</span>
          路线规划
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">全程路线图 + 每日详细安排</p>
      </div>

      {/* Route Map */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 overflow-x-auto">
        <h3 className="text-base font-semibold mb-4">全程路线示意图</h3>
        <div className="flex items-center gap-0 min-w-[700px] py-3">
          {[
            { name: "杭州", sub: "出发地", color: "bg-blue-600", size: "w-5 h-5", lineColor: "bg-green-600", lineLabel: "5h / G15较通畅" },
            { name: "连云港", sub: "中途住一晚", color: "bg-orange-500", size: "w-4 h-4", lineColor: "bg-orange-400", lineLabel: "5h / 临近威海略堵" },
            { name: "威海", sub: "玩2天", color: "bg-green-600", size: "w-5 h-5", lineColor: "bg-orange-400", lineLabel: "3.5h / 龙青高速" },
            { name: "青岛", sub: "玩2天", color: "bg-green-600", size: "w-5 h-5", lineColor: "bg-red-500", lineLabel: "10-12h / 返程必堵" },
            { name: "杭州", sub: "到家", color: "bg-blue-600", size: "w-5 h-5", lineColor: "", lineLabel: "" },
          ].map((node, i) => (
            <div key={i} className="flex items-center flex-1 min-w-0">
              <div className="text-center shrink-0">
                <div className={`${node.color} ${node.size} rounded-full mx-auto mb-1.5`} />
                <div className="text-sm font-bold">{node.name}</div>
                <div className="text-xs text-gray-500">{node.sub}</div>
              </div>
              {i < 4 && (
                <div className="flex-1 relative mx-1">
                  <div className={`${node.lineColor} h-1 rounded min-w-[40px] mb-5`} />
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">{node.lineLabel}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">← 左右滑动查看完整路线 →</p>
      </div>

      {/* Daily Timeline */}
      {itinerary.map((day) => (
        <div key={day.day} className="mb-8">
          <div className={`rounded-xl px-5 py-4 mb-5 flex justify-between items-center ${day.isReturn ? "bg-gradient-to-r from-red-700 to-orange-500" : "bg-gradient-to-r from-blue-600 to-blue-800"} text-white`}>
            <h3 className="text-lg font-semibold">Day {day.day} · {day.date} {day.weekday}</h3>
            <div className="text-right text-xs opacity-85">
              <div>{day.title}</div>
              <div>{day.distance} / {day.duration}</div>
            </div>
          </div>
          <div className="relative pl-9">
            <div className="absolute left-[13px] top-2 bottom-2 w-[3px] bg-gradient-to-b from-blue-500 to-orange-400 rounded" />
            {day.events.map((event, ei) => (
              <div key={ei} className="relative mb-5 last:mb-0">
                <div className={`absolute -left-[28px] top-2 w-[13px] h-[13px] rounded-full border-[3px] z-10 ${event.highlight ? "border-orange-500 bg-orange-500" : "border-blue-500 bg-white"}`} />
                <div className="text-xs font-bold text-blue-600 mb-1">{event.time}</div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="text-sm font-semibold mb-1">{event.title}</h4>
                  <p className="text-xs text-gray-600 whitespace-pre-line">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
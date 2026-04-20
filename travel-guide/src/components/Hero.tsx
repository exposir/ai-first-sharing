export default function Hero() {
  return (
    <>
      <div className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white py-16 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]" style={{ background: "radial-gradient(ellipse at 30% 50%, white 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, white 0%, transparent 50%)" }} />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide relative z-10">五一自驾 · 杭州出发</h1>
        <p className="text-lg opacity-90 mt-3 relative z-10">威海 + 青岛 | 先威海后青岛 | 避堵最优路线</p>
        <div className="flex justify-center gap-8 mt-8 flex-wrap relative z-10">
          <div className="text-center"><div className="text-3xl font-bold">6</div><div className="text-sm opacity-80">天数</div></div>
          <div className="text-center"><div className="text-3xl font-bold">~1600km</div><div className="text-sm opacity-80">总里程</div></div>
          <div className="text-center"><div className="text-3xl font-bold">2座</div><div className="text-sm opacity-80">海滨城市</div></div>
          <div className="text-center"><div className="text-3xl font-bold">~2500元</div><div className="text-sm opacity-80">人均预估</div></div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-700 to-orange-500 text-white text-center py-2.5 px-5 text-sm font-semibold">
        五一高速免费：5月1日0:00 — 5月5日24:00 | 7座以下小客车免费通行
      </div>
    </>
  );
}
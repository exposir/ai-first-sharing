import { weihaiSpots, qingdaoSpots } from "@/data/travel";

type SpotType = {
  rank: number;
  name: string;
  tag: string;
  tagType: "red" | "orange" | "green" | "blue";
  desc: string;
  location: string;
  time: string;
  transport: string;
};

const tagStyles: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
};

const rankGradients: Record<number, string> = {
  1: "from-orange-600 to-orange-400",
  2: "from-blue-600 to-blue-400",
  3: "from-green-700 to-green-400",
  4: "from-purple-700 to-purple-400",
  5: "from-teal-700 to-teal-400",
};

function SpotCard({ spot }: { spot: SpotType }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm mb-4 flex gap-4 max-md:flex-col">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-extrabold text-white shrink-0 bg-gradient-to-br ${rankGradients[spot.rank] || "from-gray-600 to-gray-400"}`}>
        {spot.rank}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold mb-1.5 flex items-center gap-2">
          {spot.name}
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${tagStyles[spot.tagType]}`}>
            {spot.tag}
          </span>
        </h4>
        <p className="text-sm text-gray-600 mb-2">{spot.desc}</p>
        <div className="flex gap-3 flex-wrap">
          <span className="text-xs text-gray-500">📍 {spot.location}</span>
          <span className="text-xs text-gray-500">⏰ {spot.time}</span>
          <span className="text-xs text-gray-500">🛣️ {spot.transport}</span>
        </div>
      </div>
    </div>
  );
}

export function WeihaiSection() {
  return (
    <section id="weihai" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">🌊</span>
          威海攻略
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">车负责长途，小电驴负责环海路</p>
      </div>

      <div className="alert-box alert-green mb-4">
        <h4 className="text-[0.95rem] mb-2 font-semibold">威海核心玩法</h4>
        <p className="text-sm text-gray-700">
          环海路北线20公里（猫头山、火炬八街、海水浴场）→ <strong>租电动车</strong>，60-100元/天<br />
          远距离景点（那香海、布鲁威斯号、成山头）→ <strong>开自己的车</strong>，40-70公里远
        </p>
      </div>

      {weihaiSpots.map((spot) => (
        <SpotCard key={spot.rank} spot={spot} />
      ))}

      <div className="bg-white rounded-xl p-5 shadow-sm mt-2">
        <h3 className="text-lg font-semibold mb-3">威海美食</h3>
        <ul className="space-y-2">
          {[
            { color: "bg-orange-500", text: "韩乐坊：全国最正宗韩餐聚集地，烤肉、炸鸡、冷面、部队锅。五一必去。" },
            { color: "bg-blue-600", text: "海鲜市场：海参、鲍鱼、生蚝、扇贝，买完找店加工，人均100吃很丰盛。" },
            { color: "bg-green-600", text: "无花果：威海特产，秋天最甜。五一可能还不到季。" },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${item.color}`} />
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function QingdaoSection() {
  return (
    <section id="qingdao" className="py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center text-lg shrink-0">🏙️</span>
          青岛攻略
        </h2>
        <p className="text-gray-600 mt-2 text-[0.95rem]">地铁出行，避开人海，寻找安静的好去处</p>
      </div>

      <div className="alert-box alert-orange mb-4">
        <h4 className="text-[0.95rem] mb-2 font-semibold">五一青岛黄金法则</h4>
        <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
          <li><strong>不开车进市区</strong>——把车停在青岛北站或李村，坐地铁</li>
          <li><strong>早出晚归</strong>——热门景点7-9点去，9点后人贴人</li>
          <li><strong>找替代景点</strong>——栈桥改成小麦岛，八大关换成大学路</li>
          <li><strong>心态放平</strong>——五一去哪都人多，拍到一张满意的照片就赚了</li>
        </ul>
      </div>

      {qingdaoSpots.map((spot) => (
        <SpotCard key={spot.rank} spot={spot} />
      ))}

      <div className="bg-white rounded-xl p-5 shadow-sm mt-2">
        <h3 className="text-lg font-semibold mb-3">青岛美食</h3>
        <ul className="space-y-2">
          {[
            { color: "bg-orange-500", text: "啤酒屋原浆：青岛啤酒原产地，找街边啤酒屋，塑料袋装原浆，鲜爽到爆。" },
            { color: "bg-red-600", text: "海鲜大排档：辣炒蛤蜊、鲅鱼水饺、烤鱿鱼。营口路海鲜市场可以买完找店加工。" },
            { color: "bg-blue-600", text: "台东夜市：青岛最大的夜市之一，小吃种类极多，人均50-80元。" },
          ].map((item, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${item.color}`} />
              <div>{item.text}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
"use client";

import { weihaiSpots, qingdaoSpots } from "@/data/travel";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

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
  red: "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400",
  orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400",
  green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400",
};

const rankColors: Record<number, string> = {
  1: "bg-claude-orange",
  2: "bg-claude-blue",
  3: "bg-claude-green",
  4: "bg-claude-mid",
  5: "bg-claude-light-gray dark:bg-white/10",
};

function SpotCard({ spot }: { spot: SpotType }) {
  return (
    <motion.div
      className="group card-hover mb-3 flex gap-4 max-md:flex-col"
      whileHover={{ x: 4, transition: { duration: 0.15 } }}
    >
      <motion.div
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 ${rankColors[spot.rank] || "bg-claude-mid"}`}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.15 }}
      >
        {spot.rank}
      </motion.div>
      <div className="flex-1">
        <h4 className="text-base font-medium mb-1.5 text-claude-dark flex items-center gap-2">
          {spot.name}
          <span className={`tag ${tagStyles[spot.tagType]}`}>{spot.tag}</span>
        </h4>
        <p className="text-sm text-claude-mid dark:text-white/60 mb-3 font-serif leading-relaxed">{spot.desc}</p>
        <div className="flex gap-4 flex-wrap">
          {[
            { icon: "📍", text: spot.location },
            { icon: "⏰", text: spot.time },
            { icon: "🛣️", text: spot.transport },
          ].map((meta, i) => (
            <span key={i} className="inline-flex items-center gap-1 text-xs text-claude-mid/70 dark:text-white/50 bg-claude-warm/60 dark:bg-white/[0.06] px-2 py-1 rounded-md">
              <span>{meta.icon}</span> {meta.text}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FoodCard({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex gap-3 text-sm py-2 group">
      <motion.span
        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${color}`}
        whileHover={{ scale: 2 }}
      />
      <div className="text-claude-dark/80 font-serif">{text}</div>
    </div>
  );
}

export function WeihaiSection() {
  return (
    <section id="weihai" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">威海攻略</h2>
          <p className="section-sub">车负责长途，小电驴负责环海路</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="alert-green mb-5">
          <h4 className="text-[0.95rem] mb-2 font-semibold text-claude-dark">威海核心玩法</h4>
          <p className="text-sm text-claude-dark/70 font-serif">
            环海路北线20公里（猫头山、火炬八街、海水浴场）→ <strong className="text-claude-dark">租电动车</strong>，60-100元/天<br />
            远距离景点（那香海、布鲁威斯号、成山头）→ <strong className="text-claude-dark">开自己的车</strong>，40-70公里远
          </p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.08}>
        {weihaiSpots.map((spot) => (
          <StaggerItem key={spot.rank}>
            <SpotCard spot={spot} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="card mt-3">
          <h3 className="text-base font-semibold mb-1 text-claude-dark">威海美食</h3>
          <div className="divide-y divide-claude-light-gray/30 dark:divide-white/[0.06]">
            <FoodCard color="bg-claude-orange" text="韩乐坊：全国最正宗韩餐聚集地，烤肉、炸鸡、冷面、部队锅。五一必去。" />
            <FoodCard color="bg-claude-blue" text="海鲜市场：海参、鲍鱼、生蚝、扇贝，买完找店加工，人均100吃很丰盛。" />
            <FoodCard color="bg-claude-green" text="无花果：威海特产，秋天最甜。五一可能还不到季。" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function QingdaoSection() {
  return (
    <section id="qingdao" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">青岛攻略</h2>
          <p className="section-sub">地铁出行，避开人海，寻找安静的好去处</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="alert-orange mb-5">
          <h4 className="text-[0.95rem] mb-2 font-semibold text-claude-dark">五一青岛黄金法则</h4>
          <ul className="text-sm text-claude-dark/70 space-y-1.5 ml-4 list-disc font-serif">
            <li><strong className="text-claude-dark">不开车进市区</strong>——把车停在青岛北站或李村，坐地铁</li>
            <li><strong className="text-claude-dark">早出晚归</strong>——热门景点7-9点去，9点后人贴人</li>
            <li><strong className="text-claude-dark">找替代景点</strong>——栈桥改成小麦岛，八大关换成大学路</li>
            <li><strong className="text-claude-dark">心态放平</strong>——五一去哪都人多，拍到一张满意的照片就赚了</li>
          </ul>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.08}>
        {qingdaoSpots.map((spot) => (
          <StaggerItem key={spot.rank}>
            <SpotCard spot={spot} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3}>
        <div className="card mt-3">
          <h3 className="text-base font-semibold mb-1 text-claude-dark">青岛美食</h3>
          <div className="divide-y divide-claude-light-gray/30 dark:divide-white/[0.06]">
            <FoodCard color="bg-claude-orange" text="啤酒屋原浆：青岛啤酒原产地，找街边啤酒屋，塑料袋装原浆，鲜爽到爆。" />
            <FoodCard color="bg-red-400" text="海鲜大排档：辣炒蛤蜊、鲅鱼水饺、烤鱿鱼。营口路海鲜市场可以买完找店加工。" />
            <FoodCard color="bg-claude-blue" text="台东夜市：青岛最大的夜市之一，小吃种类极多，人均50-80元。" />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
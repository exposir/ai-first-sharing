"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

export function TipSection() {
  return (
    <section id="tips" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">实用贴士</h2>
          <p className="section-sub">出发前再看一遍</p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.1} className="space-y-3">
        <StaggerItem>
          <TipCard
            category="衣物"
            icon="🧥"
            color="bg-claude-blue/10 text-claude-blue"
            items={[
              "五一海风很大，带防风外套",
              "海边拍照穿浅色，显干净",
              "青岛老城坡多，穿舒服的鞋",
              "防晒霜+帽子，海边紫外线强",
            ]}
          />
        </StaggerItem>
        <StaggerItem>
          <TipCard
            category="交通"
            icon="🚗"
            color="bg-claude-orange/10 text-claude-orange"
            items={[
              "五一高速免费，但车会很多——早出发",
              "威海环海路更适合骑电动车，自驾容易堵",
              "青岛市区绝对不要开车，地铁+步行最佳",
              "导航用高德，避开拥堵路线",
            ]}
          />
        </StaggerItem>
        <StaggerItem>
          <TipCard
            category="拍照"
            icon="📷"
            color="bg-claude-green/10 text-claude-green"
            items={[
              "火炬八街7点前到，晚了人太多",
              "猫头山最佳位在观景台，广角拍",
              "布鲁威斯号日落最美，提前1小时到占位",
              "小麦岛草坪坐拍，背景是海+城市天际线",
            ]}
          />
        </StaggerItem>
        <StaggerItem>
          <TipCard
            category="饮食"
            icon="🍜"
            color="bg-red-50 dark:bg-red-900/20 text-red-400"
            items={[
              "韩乐坊晚上8点后最热闹",
              "海鲜去市场买比排档便宜一半",
              "青岛啤酒要喝原浆，瓶装的不一样",
              "别在景区吃饭——贵且一般",
            ]}
          />
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

function TipCard({
  category,
  icon,
  color,
  items,
}: {
  category: string;
  icon: string;
  color: string;
  items: string[];
}) {
  return (
    <motion.div
      className="card card-hover"
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">{icon}</span>
        <span className={`tag ${color}`}>{category}</span>
      </div>
      <div className="space-y-2.5">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="flex gap-2.5 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="w-5 h-5 rounded-md bg-claude-warm dark:bg-white/[0.06] flex items-center justify-center text-[0.7rem] text-claude-mid dark:text-white/60 shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="text-claude-dark/80 font-serif">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
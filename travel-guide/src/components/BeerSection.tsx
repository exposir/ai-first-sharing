"use client";

import { beerGuide } from "@/data/travel";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

const tagStyles: Record<string, string> = {
  red: "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400",
  orange: "bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400",
  green: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400",
  blue: "bg-blue-50 dark:bg-blue-900/20 text-blue-500 dark:text-blue-400",
};

export function BeerSection() {
  return (
    <section id="beer" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">青岛啤酒攻略</h2>
          <p className="section-sub">来青岛不喝原浆，等于白来</p>
        </div>
      </FadeIn>

      {/* 博物馆卡片 */}
      <FadeIn delay={0.05}>
        <div className="alert-orange mb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏭</span>
            <h4 className="text-[0.95rem] font-semibold text-claude-dark">
              {beerGuide.museum.name}
              <span className="text-sm font-normal text-claude-mid dark:text-white/60 ml-2">
                （{beerGuide.museum.aka}）
              </span>
            </h4>
          </div>
          <div className="space-y-2 text-sm text-claude-dark/70 font-serif">
            <p>
              <span className="inline-block w-16 text-claude-mid dark:text-white/50 shrink-0">地址</span>
              {beerGuide.museum.address}
            </p>
            <p>
              <span className="inline-block w-16 text-claude-mid dark:text-white/50 shrink-0">时间</span>
              {beerGuide.museum.hours}
            </p>
            <p>
              <span className="inline-block w-16 text-claude-mid dark:text-white/50 shrink-0">门票</span>
              {beerGuide.museum.price}
            </p>
            <p>
              <span className="inline-block w-16 text-claude-mid dark:text-white/50 shrink-0">交通</span>
              {beerGuide.museum.transport}
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-claude-orange/20 dark:border-claude-orange/10">
            <p className="text-xs text-claude-mid dark:text-white/50 mb-2 font-medium uppercase tracking-wider">游览贴士</p>
            <ul className="space-y-1.5">
              {beerGuide.museum.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-claude-dark/80 font-serif">
                  <span className="w-5 h-5 rounded-md bg-claude-orange/10 flex items-center justify-center text-[0.65rem] text-claude-orange shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* 啤酒种类 */}
      <FadeIn delay={0.1}>
        <div className="mb-6">
          <h3 className="text-base font-semibold text-claude-dark mb-4">🍺 啤酒种类速览</h3>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.06} className="space-y-3 mb-8">
        {beerGuide.beerTypes.map((beer) => (
          <StaggerItem key={beer.name}>
            <motion.div
              className="card card-hover flex items-start gap-4"
              whileHover={{ x: 4, transition: { duration: 0.15 } }}
            >
              <span className="text-2xl mt-0.5 shrink-0">{beer.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-claude-dark">{beer.name}</h4>
                  <span className={`tag ${tagStyles[beer.tagType]}`}>{beer.tag}</span>
                </div>
                <p className="text-sm text-claude-mid dark:text-white/60 font-serif leading-relaxed">{beer.desc}</p>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 本地人喝啤酒指南 */}
      <FadeIn delay={0.15}>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-claude-dark mb-4">🎯 本地人喝啤酒指南</h3>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.08} className="space-y-3 mb-8">
        {beerGuide.localTips.map((tip, i) => (
          <StaggerItem key={i}>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-8 h-8 rounded-xl bg-claude-orange/10 flex items-center justify-center text-lg">
                  {["💡", "🏭", "🍺", "🥤", "🦪"][i]}
                </span>
                <div>
                  <h4 className="font-medium text-claude-dark mb-1 text-[0.95rem]">{tip.title}</h4>
                  <p className="text-sm text-claude-mid dark:text-white/60 font-serif leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* 啤酒打卡地图 */}
      <FadeIn delay={0.2}>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-claude-dark mb-1">🗺️ 啤酒打卡推荐</h3>
          <p className="text-sm text-claude-mid dark:text-white/60 font-serif">从博物馆到路边摊，一条龙喝过来</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="card overflow-hidden p-0">
          {/* 表头 */}
          <div className="grid grid-cols-[1.2fr_0.8fr_1fr_1.5fr] gap-2 px-5 py-3 bg-claude-warm/80 dark:bg-white/[0.03] border-b border-claude-light-gray/40 dark:border-white/[0.06] text-xs font-medium text-claude-mid dark:text-white/50">
            <span>地点</span>
            <span>类型</span>
            <span>价格</span>
            <span>亮点</span>
          </div>
          {beerGuide.beerStops.map((stop, i) => (
            <motion.div
              key={stop.name}
              className="grid grid-cols-[1.2fr_0.8fr_1fr_1.5fr] gap-2 px-5 py-3.5 text-sm border-b border-claude-light-gray/30 dark:border-white/[0.04] last:border-0 hover:bg-claude-warm/40 dark:hover:bg-white/[0.02] transition-colors"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="font-medium text-claude-dark">
                {i === 0 && <span className="mr-1">🏆</span>}
                {stop.name}
              </span>
              <span className="text-claude-mid dark:text-white/60">{stop.type}</span>
              <span className="text-claude-orange font-medium">{stop.price}</span>
              <span className="text-claude-mid dark:text-white/60 font-serif text-xs leading-relaxed">{stop.highlight}</span>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* 底部建议 */}
      <FadeIn delay={0.3}>
        <div className="alert-green mt-6">
          <h4 className="text-[0.95rem] mb-2 font-semibold text-claude-dark">🍻 啤酒总结</h4>
          <ul className="text-sm text-claude-dark/70 space-y-1.5 ml-4 list-disc font-serif">
            <li>博物馆必去——只有那里能喝到当天下线的原浆</li>
            <li>散啤（袋装）是最正宗的青岛喝法，4-5元/斤</li>
            <li>别去啤酒街——景点溢价3-5倍，居民区啤酒屋才是正道</li>
            <li>原浆保质期只有7天，当天买当天喝，别囤</li>
            <li>辣炒蛤蜊+原浆=青岛灵魂搭配，必试</li>
          </ul>
        </div>
      </FadeIn>
    </section>
  );
}
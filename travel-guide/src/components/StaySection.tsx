"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";
import { costs } from "@/data/travel";

function StayCard({
  city,
  title,
  recommended,
  icon,
  color,
}: {
  city: string;
  title: string;
  recommended: string;
  icon: string;
  color: string;
}) {
  return (
    <motion.div
      className="card card-hover group"
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="flex items-start gap-3 mb-2">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color} shrink-0 transition-transform group-hover:scale-110`}>
          <span className="text-base">{icon}</span>
        </div>
        <div>
          <h4 className="text-[0.95rem] font-medium text-claude-dark">{title}</h4>
          <span className="text-xs text-claude-mid dark:text-white/50">{city}</span>
        </div>
      </div>
      <div className="text-sm text-claude-dark/75 font-serif leading-relaxed mt-2 pl-12">
        {recommended}
      </div>
    </motion.div>
  );
}

function BudgetRow({
  icon,
  item,
  detail,
  amount,
}: {
  icon: string;
  item: string;
  detail: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-claude-light-gray/25 dark:border-white/[0.06] group hover:bg-claude-warm/30 dark:hover:bg-white/[0.04] transition-colors px-1 rounded">
      <div className="flex items-center gap-3">
        <span className="text-sm">{icon}</span>
        <div>
          <span className="text-sm text-claude-dark">{item}</span>
          <span className="text-xs text-claude-mid dark:text-white/50 ml-2">{detail}</span>
        </div>
      </div>
      <span className="text-sm font-medium text-claude-orange tabular-nums">{amount}</span>
    </div>
  );
}

export function StaySection() {
  return (
    <section id="stay" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">住宿与预算</h2>
          <p className="section-sub">五一价格翻倍，提前订</p>
        </div>
      </FadeIn>

      <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <StaggerItem>
          <StayCard
            city="威海"
            title="韩乐坊旁客栈"
            recommended="距韩乐坊步行5分钟，去环海路方便，韩餐随时吃"
            icon="🏨"
            color="bg-claude-orange/10"
          />
        </StaggerItem>
        <StaggerItem>
          <StayCard
            city="青岛"
            title="台东/李村附近"
            recommended="地铁2号线沿线，去景点都方便，价高但省交通时间"
            icon="🏠"
            color="bg-claude-blue/10"
          />
        </StaggerItem>
      </StaggerContainer>

      <FadeIn delay={0.2}>
        <div className="card">
          <h3 className="text-base font-semibold mb-3 text-claude-dark">预估花费（2人·6天5晚）</h3>
          {/* Transport */}
          <div className="mb-2">
            <p className="text-xs text-claude-mid dark:text-white/50 font-medium uppercase tracking-wider mb-1">交通</p>
            {costs.transport.map((t) => (
              <BudgetRow key={t.item} icon="🚗" item={t.item} detail="" amount={t.cost} />
            ))}
          </div>
          {/* Accommodation */}
          <div className="mb-2">
            <p className="text-xs text-claude-mid dark:text-white/50 font-medium uppercase tracking-wider mb-1">住宿</p>
            {costs.accommodation.map((a) => (
              <BudgetRow key={a.item} icon="🏨" item={a.item} detail="" amount={a.cost} />
            ))}
          </div>
          {/* Tickets */}
          <div className="mb-2">
            <p className="text-xs text-claude-mid dark:text-white/50 font-medium uppercase tracking-wider mb-1">门票</p>
            {costs.tickets.map((t) => (
              <BudgetRow key={t.item} icon="🎫" item={t.item} detail="" amount={t.cost} />
            ))}
          </div>
          {/* Summary */}
          <div className="mt-4 pt-3 border-t border-claude-light-gray/40">
            <div className="flex items-center justify-between py-1">
              <span className="text-sm font-medium text-claude-dark">预估参考</span>
            </div>
            {costs.summary.map((s) => (
              <div key={s.level} className="flex items-center justify-between py-1.5">
                <span className={`inline-flex items-center tag ${
                  s.color === "green" ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400" :
                  s.color === "orange" ? "bg-claude-orange/10 text-orange-500 dark:text-orange-400" :
                  "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400"
                }`}>{s.level}</span>
                <span className="text-sm font-medium text-claude-dark">{s.perPerson} / 人</span>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
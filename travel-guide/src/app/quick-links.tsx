"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const quickLinks = [
  {
    href: "/route",
    title: "路线规划",
    desc: "6天行程路线地图，避堵方案",
    icon: "🗺️",
    color: "bg-claude-orange/10 border-claude-orange/20",
  },
  {
    href: "/weihai",
    title: "威海攻略",
    desc: "环海路·猫头山·韩乐坊",
    icon: "🏖️",
    color: "bg-claude-blue/10 border-claude-blue/20",
  },
  {
    href: "/qingdao",
    title: "青岛攻略",
    desc: "老城·啤酒·海鲜替代景点",
    icon: "🍺",
    color: "bg-claude-green/10 border-claude-green/20",
  },
  {
    href: "/guide",
    title: "出行攻略",
    desc: "住宿·费用·贴士·行李清单",
    icon: "📋",
    color: "bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/20",
  },
];

export default function QuickLinks() {
  return (
    <section id="quick-links" className="py-10">
      <FadeIn>
        <div className="mb-6">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">快速入口</h2>
          <p className="section-sub">点击卡片查看详细内容</p>
        </div>
      </FadeIn>
      <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickLinks.map((link) => (
          <StaggerItem key={link.href}>
            <Link href={link.href}>
              <motion.div
                className={`card card-hover border ${link.color} text-center cursor-pointer`}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <h3 className="text-sm font-semibold text-claude-dark mb-1">{link.title}</h3>
                <p className="text-xs text-claude-mid">{link.desc}</p>
              </motion.div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
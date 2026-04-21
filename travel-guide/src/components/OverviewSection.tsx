"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

type City = "weihai" | "qingdao";

export function OverviewSection() {
  const [activeTab, setActiveTab] = useState<City>("weihai");

  return (
    <section id="overview" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">行程总览</h2>
          <p className="section-sub">先威海后青岛，五一黄金路线</p>
        </div>
      </FadeIn>

      {/* City Tab Switcher with animation */}
      <FadeIn delay={0.1}>
        <div className="inline-flex bg-claude-warm rounded-xl p-1 mb-8">
          {[
            { id: "weihai" as City, label: "威海", sub: "2天2晚" },
             { id: "qingdao" as City, label: "青岛", sub: "2天2晚" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeTab === tab.id ? "text-claude-dark dark:text-white font-medium" : "text-claude-mid dark:text-white/60 hover:text-claude-dark dark:hover:text-white/80"
              }`}
            >
              {activeTab === tab.id && (
                <motion.span
                  className="absolute inset-0 bg-white dark:bg-[#333231] shadow-sm rounded-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">
                {tab.label}
                <span className={`ml-1.5 text-xs ${activeTab === tab.id ? "text-claude-orange" : "text-claude-mid/60 dark:text-white/40"}`}>
                  {tab.sub}
                </span>
              </span>
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Tab Content */}
      <StaggerContainer staggerDelay={0.15}>
        {activeTab === "weihai" ? (
          <>
            <StaggerItem>
              <TimelineItem day="D1" title="杭州 → 连云港" desc="下班出发，走长深高速，约5小时。住连云港，休息蓄力。" />
            </StaggerItem>
            <StaggerItem>
              <TimelineItem day="D2" title="连云港 → 威海" desc="走G15沈海+G18荣乌，约5小时。下午到威海，小石岛看日落，夜逛韩乐坊。" />
            </StaggerItem>
            <StaggerItem>
              <TimelineItem day="D3" title="威海深度游" desc="租电动车环海路北线：半月湾 → 猫头山 → 火炬八街。下午自驾去布鲁威斯号+那香海。" />
            </StaggerItem>
          </>
        ) : (
          <>
            <StaggerItem>
              <TimelineItem day="D4" title="青岛老城" desc="地铁出行。大学路 → 鱼山路 → 小麦岛。晚上台东夜市。" />
            </StaggerItem>
            <StaggerItem>
              <TimelineItem day="D5" title="海滨 + 返程" desc="上午石老人海水浴场或八大关。下午5点后返程，避开高峰。" />
            </StaggerItem>
          </>
        )}
      </StaggerContainer>
    </section>
  );
}

function TimelineItem({
  day,
  title,
  desc,
  highlight = false,
}: {
  day: string;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex gap-4 items-start group">
      <motion.div
        className="w-11 shrink-0 text-center pt-0.5"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.15 }}
      >
        <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-xs font-bold ${
          highlight
            ? "bg-claude-orange text-white"
            : "bg-claude-warm dark:bg-white/[0.06] text-claude-mid dark:text-white/60"
        } transition-colors`}>
          {day}
        </span>
      </motion.div>
      <div className="flex-1 pb-4 border-b border-claude-light-gray/25">
        <h4 className="text-sm font-medium text-claude-dark mb-1">{title}</h4>
        <p className="text-sm text-claude-mid dark:text-white/60 font-serif leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedCounter } from "./motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <div ref={ref} className="relative bg-claude-warm dark:bg-[#0e0e0d] text-claude-dark dark:text-white overflow-hidden min-h-[92vh] flex flex-col justify-center">
        {/* Animated background */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div className="absolute inset-0 bg-gradient-to-b from-claude-warm via-white dark:from-[#0e0e0d] dark:via-[#0e0e0d] to-white dark:to-[#050505]" />
          {/* Orange glow */}
          <div
            className="absolute -top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.18] dark:opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #d97757 0%, transparent 60%)", filter: "blur(120px)" }}
          />
          {/* Blue glow */}
          <div
            className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.12] dark:opacity-[0.08]"
            style={{ background: "radial-gradient(circle, #6a9bcc 0%, transparent 50%)", filter: "blur(100px)" }}
          />
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-claude-orange/30 dark:bg-white/20 rounded-full"
                style={{
                  left: `${10 + (i * 37) % 80}%`,
                  top: `${5 + (i * 23) % 90}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.15, 0.5, 0.15],
                }}
                transition={{
                  duration: 3 + (i % 4),
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(20,20,19,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,20,19,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 w-full" style={{ y: contentY, opacity }}>
          {/* Badges */}
          <motion.div
            className="mb-8 flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-white dark:bg-white/[0.08] backdrop-blur-sm border border-claude-light-gray/60 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-sm text-claude-dark/80 dark:text-white/90 shadow-sm dark:shadow-none">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-claude-orange"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              2025 五一假期
            </span>
            <span className="inline-flex items-center bg-white dark:bg-white/[0.08] backdrop-blur-sm border border-claude-light-gray/60 dark:border-white/[0.1] rounded-full px-4 py-1.5 text-sm text-claude-dark/80 dark:text-white/90 shadow-sm dark:shadow-none">
              杭州 → 威海 → 青岛
            </span>
          </motion.div>

          {/* Title with stagger */}
          <motion.h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              自驾威海
            </motion.span>
            <motion.span
              className="block mt-1"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={mounted ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="text-claude-orange">+</span> 青岛
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-claude-mid dark:text-white/60 mt-6 text-lg md:text-xl font-light max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            杭州出发 · 先威海后青岛 · 避堵最优路线
          </motion.p>

          {/* Stats with stagger */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14"
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
            }}
          >
            {[
              { value: 6, suffix: "", label: "天数", icon: "📅", isNum: true },
              { value: 1600, suffix: "km", prefix: "~", label: "总里程", icon: "🛣️", isNum: true },
              { value: 2, suffix: "座", label: "海滨城市", icon: "🏖️", isNum: true },
              { value: 2500, suffix: "元", prefix: "~", label: "人均预估", icon: "💰", isNum: true },
            ].map((item) => (
              <motion.div
                key={item.label}
                className="bg-white/70 dark:bg-white/[0.06] backdrop-blur-sm border border-claude-light-gray/40 dark:border-white/[0.08] rounded-xl p-4 hover:bg-white dark:hover:bg-white/[0.1] transition-colors duration-200 shadow-sm dark:shadow-none"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                  },
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="text-lg mb-1">{item.icon}</div>
                <div className="text-xl md:text-2xl font-semibold">
                  {item.isNum ? (
                    <AnimatedCounter target={item.value as number} suffix={item.suffix || ""} prefix={item.prefix || ""} />
                  ) : (
                    item.value
                  )}
                </div>
                <div className="text-xs text-claude-mid dark:text-white/50 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA - explore */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a
            href="#quick-links"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-claude-light-gray/60 dark:border-white/20 text-claude-dark/80 dark:text-white/80 hover:text-claude-dark dark:hover:text-white text-sm transition-all duration-200 backdrop-blur-sm shadow-sm dark:shadow-none"
          >
            查看详细攻略
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Free toll banner */}
      <motion.div
        className="bg-claude-orange text-white text-center py-3 px-6 text-sm font-medium relative overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #d97757 0%, #c86747 50%, #d97757 100%)" }} />
        <span className="relative inline-flex items-center gap-2">
          <span>🚗</span>
          五一高速免费：5月1日0:00 — 5月5日24:00 · 7座以下小客车免费通行
        </span>
      </motion.div>
    </>
  );
}
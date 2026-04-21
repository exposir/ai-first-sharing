"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
      <motion.footer
        className="bg-claude-dark dark:bg-[#0e0e0d] text-claude-mid dark:text-white/50 mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-medium text-white/70 dark:text-white/50 text-sm">五一自驾攻略 · 杭州出发 · 威海 + 青岛</p>
              <p className="text-xs text-white/40 dark:text-white/30 mt-1">路况信息可能随实际变化，出行前请查看导航实时路况</p>
            </div>
            <div className="text-xs text-white/30 dark:text-white/25">
              Made with ❤️
            </div>
          </div>
        </div>
      </motion.footer>
    </ThemeProvider>
  );
}
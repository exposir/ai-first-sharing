import { Inter, Noto_Sans_SC } from "next/font/google";

// Inter: 专为屏幕设计的可变字体，性能最优，英文标题和正文通用
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Noto Sans SC: Google 提供的简体中文字体，与 Inter 搭配最佳
// 只加载常用权重，减少 CJK 字体体积
export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-sc",
});
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "五一自驾 · 杭州出发 · 威海+青岛攻略",
  description: "五一假期杭州自驾威海青岛详细旅游攻略，包含路线规划、避堵方案、景点推荐、费用预算",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased text-gray-900 bg-gray-100 leading-relaxed">
        {children}
      </body>
    </html>
  );
}
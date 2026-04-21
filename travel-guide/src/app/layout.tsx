import type { Metadata } from "next";
import { inter, notoSansSC } from "./fonts";
import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "五一自驾 · 杭州出发 · 威海+青岛攻略",
  description: "五一假期杭州自驾威海青岛详细旅游攻略，包含路线规划、避堵方案、景点推荐、费用预算",
};

// Prevent flash of wrong theme — runs before React hydrates
const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased text-claude-dark bg-claude-light leading-relaxed font-sans transition-colors duration-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
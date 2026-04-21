import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { OverviewSection } from "@/components/OverviewSection";
import QuickLinks from "./quick-links";

export const metadata: Metadata = {
  title: "五一自驾 · 杭州出发 · 威海+青岛攻略",
  description: "五一假期杭州自驾威海青岛详细旅游攻略，包含路线规划、避堵方案、景点推荐、费用预算",
};

export default function Home() {
  return (
    <>
      <Hero />
      <main className="page-enter max-w-4xl mx-auto px-5 md:px-8 pt-4">
        <OverviewSection />
        <QuickLinks />
      </main>
    </>
  );
}
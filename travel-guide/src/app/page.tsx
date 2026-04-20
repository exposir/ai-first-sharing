import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OverviewSection from "@/components/OverviewSection";
import RouteSection from "@/components/RouteSection";
import TrafficSection from "@/components/TrafficSection";
import { WeihaiSection, QingdaoSection } from "@/components/SpotCard";
import CostSection from "@/components/CostSection";
import TipsSection from "@/components/TipsSection";
import PackingSection from "@/components/PackingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <main className="max-w-5xl mx-auto px-5">
        <OverviewSection />
        <RouteSection />
        <TrafficSection />
        <WeihaiSection />
        <QingdaoSection />
        <CostSection />
        <TipsSection />
        <PackingSection />
      </main>
      <footer className="bg-gray-900 text-gray-500 text-center py-8 text-sm">
        <p>五一自驾攻略 · 杭州出发 · 威海+青岛</p>
        <p className="text-xs mt-2">路况信息可能随实际变化，出行前请查看导航实时路况</p>
      </footer>
    </>
  );
}
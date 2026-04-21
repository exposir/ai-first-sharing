"use client";

import dynamic from "next/dynamic";
import { RouteSection } from "@/components/RouteSection";
import TrafficSection from "@/components/TrafficSection";

// 动态导入地图组件，禁用 SSR（Leaflet 依赖 window 对象）
const RouteMap = dynamic(() => import("@/components/RouteMap"), {
  ssr: false,
});

export default function RoutePageClient() {
  return (
    <main className="page-enter max-w-4xl mx-auto px-5 md:px-8 pt-[68px]">
      <RouteMap />
      <RouteSection />
      <TrafficSection />
    </main>
  );
}
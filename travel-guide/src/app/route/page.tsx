import type { Metadata } from "next";
import RoutePageClient from "./route-client";

export const metadata: Metadata = {
  title: "路线规划 · 五一自驾攻略",
  description: "杭州出发威海青岛6天自驾路线地图，含每日行程、避堵方案、高速堵点排名",
};

export default function RoutePage() {
  return <RoutePageClient />;
}
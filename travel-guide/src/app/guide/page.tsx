import type { Metadata } from "next";
import GuidePageClient from "./guide-client";

export const metadata: Metadata = {
  title: "出行攻略 · 五一自驾攻略",
  description: "五一威海青岛自驾住宿推荐、费用预算、实用贴士、行李清单",
};

export default function GuidePage() {
  return <GuidePageClient />;
}
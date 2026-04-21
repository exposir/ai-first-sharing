import type { Metadata } from "next";
import WeihaiPageClient from "./weihai-client";

export const metadata: Metadata = {
  title: "威海攻略 · 五一自驾攻略",
  description: "五一威海自驾游攻略，环海路、猫头山、火炬八街、韩乐坊景点推荐，市内交通管制说明",
};

export default function WeihaiPage() {
  return <WeihaiPageClient />;
}
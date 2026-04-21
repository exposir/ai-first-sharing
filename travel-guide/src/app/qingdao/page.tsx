import type { Metadata } from "next";
import QingdaoPageClient from "./qingdao-client";

export const metadata: Metadata = {
  title: "青岛攻略 · 五一自驾攻略",
  description: "五一青岛自驾游攻略，老城景点、啤酒海鲜推荐、停车地铁方案、替代景点避人海",
};

export default function QingdaoPage() {
  return <QingdaoPageClient />;
}
"use client";

import { StaySection } from "@/components/StaySection";
import CostSection from "@/components/CostSection";
import { TipSection } from "@/components/TipSection";
import PackingSection from "@/components/PackingSection";

export default function GuidePageClient() {
  return (
    <main className="page-enter max-w-4xl mx-auto px-5 md:px-8 pt-[68px]">
      <StaySection />
      <CostSection />
      <TipSection />
      <PackingSection />
    </main>
  );
}
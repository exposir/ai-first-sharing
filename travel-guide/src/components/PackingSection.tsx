"use client";

import { packingEssential, packingOptional } from "@/data/travel";
import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

export default function PackingSection() {
  return (
    <section id="packing" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">行李清单</h2>
          <p className="section-sub">五一山东沿海，白天20-25°C，夜间12-18°C</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FadeIn delay={0.1}>
          <div className="card">
            <h3 className="text-base font-semibold mb-4 text-claude-dark">必带</h3>
            <ul className="space-y-2.5">
              {packingEssential.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm border-b border-claude-light-gray/40 pb-2.5 last:border-0">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i < 5 ? "bg-claude-orange" : "bg-claude-blue"}`} />
                  <div className="text-claude-dark/80 font-serif">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="card">
            <h3 className="text-base font-semibold mb-4 text-claude-dark">建议带</h3>
            <ul className="space-y-2.5">
              {packingOptional.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm border-b border-claude-light-gray/40 pb-2.5 last:border-0">
                  <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${i < 4 ? "bg-claude-orange" : "bg-claude-green"}`} />
                  <div className="text-claude-dark/80 font-serif">{item}</div>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="alert-blue mt-5">
          <h4 className="text-[0.95rem] mb-2 font-semibold text-claude-dark">五一穿衣建议</h4>
          <p className="text-sm text-claude-dark/70 font-serif leading-relaxed">
            山东沿海五一期间<strong className="text-claude-dark">白天20-25°C，夜间12-18°C</strong>。白天短袖/薄T即可，但早晚海风大，<strong className="text-claude-dark">一定要带薄外套</strong>。海边紫外线强，防晒必备。海水还偏凉（约15-18°C），不建议下水游泳，但踩踩水没问题。
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
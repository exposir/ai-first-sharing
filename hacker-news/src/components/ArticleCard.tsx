"use client";

import { useState } from "react";

interface ArticleCardProps {
  emoji: string;
  title: string;
  titleEn: string;
  points: number;
  comments: number;
  accentColor: string;
  source?: string;
  summary: React.ReactNode;
  communityFocus: React.ReactNode;
  deepInsight: React.ReactNode;
}

export default function ArticleCard({
  emoji,
  title,
  titleEn,
  points,
  comments,
  summary,
  communityFocus,
  deepInsight,
  accentColor,
  source,
}: ArticleCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="article-card bg-card-bg border border-card-border rounded-lg overflow-hidden">
      <div className={`${accentColor} h-0.5`} />

      {/* Header — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-5 sm:p-6 flex items-start gap-2.5 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
      >
        <span className="text-xl flex-shrink-0 mt-0.5">{emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold leading-snug mb-0.5">{title}</h3>
          <p className="text-xs text-muted mb-2">{titleEn}</p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-accent font-mono">▲ {points}</span>
            <span className="text-muted">{comments} comments</span>
          </div>
        </div>
        <span className="text-muted text-sm flex-shrink-0 mt-1 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}>
          ▾
        </span>
      </button>

      {/* Body — collapsible */}
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-card-border pt-5">
          {/* Summary */}
          <div className="mb-5">
            <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5">原文核心</h4>
            <div className="text-foreground/75 leading-relaxed text-[15px]">{summary}</div>
          </div>

          {/* Community Focus */}
          <div className="mb-5">
            <h4 className="text-xs font-medium text-muted uppercase tracking-wider mb-1.5">社区焦点</h4>
            <div className="text-foreground/75 leading-relaxed text-[15px]">{communityFocus}</div>
          </div>

          {/* Deep Insight */}
          <div className="mb-1">
            <h4 className="text-xs font-medium text-accent uppercase tracking-wider mb-1.5">深度洞察</h4>
            <div className="text-foreground leading-relaxed text-[15px]">{deepInsight}</div>
          </div>

          {source && (
            <p className="mt-3 text-xs text-muted/60">📌 {source}</p>
          )}
        </div>
      )}
    </article>
  );
}
export default function Footer({ displayDate }: { displayDate?: string }) {
  return (
    <footer className="border-t border-card-border py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-muted text-sm">
          Hacker News 深度洞察{displayDate ? ` · ${displayDate}` : ""}
        </p>
        <p className="text-muted/50 text-xs mt-1">
          数据来源：Hacker News 社区 · 内容由 AI 辅助整理
        </p>
      </div>
    </footer>
  );
}
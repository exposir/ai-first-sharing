import type { DaySummary } from "@/data/issues";

export default function SummarySection({ summary }: { summary: DaySummary }) {
  return (
    <section id="summary" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-1">🔭 {summary.title}</h2>
        </div>

        <div className="space-y-5">
          {summary.insights.map((insight, i) => (
            <div key={i} className="bg-card-bg border border-card-border rounded-lg p-5">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                <span>{insight.icon}</span>
                {insight.title}
              </h3>
              <p className="text-foreground/75 leading-relaxed text-[15px]">{insight.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-card-border pt-6">
          <p className="text-foreground/80 leading-relaxed">
            <strong>{summary.closing}</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
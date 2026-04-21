import type { Section } from "@/data/issues";

interface OverviewSectionProps {
  sections: Section[];
}

export default function OverviewSection({ sections }: OverviewSectionProps) {
  return (
    <section id="overview" className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">今日总览</h2>

        <div className="bg-card-bg border border-card-border rounded-lg p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block border border-card-border rounded-md px-4 py-2.5 text-sm text-muted hover:text-foreground hover:border-muted transition-colors"
              >
                {s.emoji} {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
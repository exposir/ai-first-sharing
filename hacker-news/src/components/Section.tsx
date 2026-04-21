import ArticleCard from "./ArticleCard";
import type { Section } from "@/data/issues";

export default function Section({ section }: { section: Section }) {
  return (
    <section id={section.id} className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-1">{section.emoji} {section.title}</h2>
          {section.subtitle && <p className="text-muted text-sm">{section.subtitle}</p>}
        </div>
        <div className="space-y-6">
          {section.articles.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}
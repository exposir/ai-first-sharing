import Link from "next/link";
import { getAllDates, getDayData } from "@/data/issues";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const dates = getAllDates();

  return (
    <>
      <Navbar />
      <main className="pt-14 min-h-screen flex flex-col">
        <div className="max-w-2xl mx-auto px-4 py-20 flex-1">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Hacker News
            <br />
            <span className="text-muted">深度洞察</span>
          </h1>
          <p className="text-muted text-base mb-12">
            每日 HN 热帖深度解读，不止于摘要。
          </p>

          {/* Date list */}
          <div className="space-y-3">
            {dates.map((date) => {
              const day = getDayData(date)!;
              return (
                <Link
                  key={date}
                  href={`/${date}`}
                  className="block bg-card-bg border border-card-border rounded-lg p-5 hover:border-muted transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-accent font-mono">{day.displayDate}</span>
                    <span className="text-xs text-muted">
                      ▲ {day.stats.points} · 💬 {day.stats.comments}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                    {day.headline}
                  </h2>
                  <p className="text-sm text-muted line-clamp-2">{day.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {day.sections.map((s) => (
                      <span key={s.id} className="text-xs text-muted bg-background/60 px-2 py-0.5 rounded">
                        {s.emoji} {s.title}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
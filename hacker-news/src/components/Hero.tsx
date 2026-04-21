interface HeroProps {
  displayDate: string;
  headline: string;
  stats: { articles: number; comments: number; points: number; topics: number };
  overview: string;
}

export default function Hero({ displayDate, headline, stats, overview }: HeroProps) {
  return (
    <section className="relative pt-14">
      <div className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Hacker News
          <br />
          <span className="text-muted">深度洞察</span>
          <span className="text-accent text-2xl sm:text-3xl font-mono ml-3 align-middle">{displayDate}</span>
        </h1>

        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          {overview}
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-center">
          <Stat value={String(stats.articles)} label="热门文章" />
          <Stat value={stats.comments.toLocaleString()} label="社区评论" />
          <Stat value={stats.points.toLocaleString()} label="总积分" />
          <Stat value={String(stats.topics)} label="深度主题" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-2">
      <div className="text-2xl font-bold font-mono">{value}</div>
      <div className="text-xs text-muted mt-0.5">{label}</div>
    </div>
  );
}
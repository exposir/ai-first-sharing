import { notFound } from "next/navigation";
import { getDayData, getAllDates } from "@/data/issues";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OverviewSection from "@/components/OverviewSection";
import Section from "@/components/Section";
import SummarySection from "@/components/SummarySection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import TOC from "@/components/TOC";
import Link from "next/link";

function Divider() {
  return <div className="section-divider max-w-4xl mx-auto" />;
}

export function generateStaticParams() {
  return getAllDates().map((date) => ({ date }));
}

export default async function DayPage({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params;
  const day = getDayData(date);
  if (!day) notFound();

  const allDates = getAllDates();
  const currentIndex = allDates.indexOf(date);
  const prevDate = currentIndex < allDates.length - 1 ? allDates[currentIndex + 1] : null;
  const nextDate = currentIndex > 0 ? allDates[currentIndex - 1] : null;
  const prevDay = prevDate ? getDayData(prevDate) : null;
  const nextDay = nextDate ? getDayData(nextDate) : null;

  return (
    <>
      <Navbar />
      <TOC sections={day.sections} />
      <main className="xl:mr-40">
        <Hero
          displayDate={day.displayDate}
          headline={day.headline}
          stats={day.stats}
          overview={day.overview}
        />
        <OverviewSection sections={day.sections} />
        {day.sections.map((s) => (
          <div key={s.id}>
            <Divider />
            <Section section={s} />
          </div>
        ))}
        <Divider />
        <SummarySection summary={day.summary} />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between border-t border-card-border pt-6">
            {prevDay ? (
              <Link href={`/${prevDate}`} className="group text-left">
                <span className="text-xs text-muted block mb-1">← 上一天</span>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">{prevDay.displayDate} {prevDay.headline}</span>
              </Link>
            ) : (
              <div />
            )}
            <Link href="/" className="text-muted hover:text-foreground text-xs transition-colors">
              目录
            </Link>
            {nextDay ? (
              <Link href={`/${nextDate}`} className="group text-right">
                <span className="text-xs text-muted block mb-1">下一天 →</span>
                <span className="text-sm font-medium group-hover:text-accent transition-colors">{nextDay.displayDate} {nextDay.headline}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
      <Footer displayDate={day.displayDate} />
      <BackToTop />
    </>
  );
}
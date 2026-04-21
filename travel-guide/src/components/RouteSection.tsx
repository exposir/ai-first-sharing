"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { itinerary } from "@/data/travel";
import { FadeIn } from "./motion";

type Event = {
  time: string;
  title: string;
  desc: string;
  highlight: boolean;
};

type DayRoute = {
  day: number;
  date: string;
  weekday: string;
  title: string;
  distance: string;
  duration: string;
  accommodation: string;
  isReturn: boolean;
  events: Event[];
};

function AccordionItem({ day, defaultOpen = false }: { day: DayRoute; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <FadeIn className="card overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 text-left py-4 px-5 group"
      >
        <motion.span
          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 ${
            day.isReturn
              ? "bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400"
               : day.day <= 2
               ? "bg-claude-orange/10 text-claude-orange"
               : "bg-claude-warm dark:bg-white/[0.06] text-claude-mid dark:text-white/60"
          }`}
          whileHover={{ scale: 1.08, rotate: open ? 0 : 3 }}
          transition={{ duration: 0.15 }}
        >
          D{day.day}
        </motion.span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-[0.95rem] font-medium text-claude-dark truncate">{day.title}</h3>
            {day.isReturn && (
              <span className="shrink-0 tag bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400 text-[0.65rem]">返程</span>
            )}
            {day.events.some((e) => e.highlight) && !day.isReturn && (
              <span className="shrink-0 tag bg-claude-orange/10 text-claude-orange text-[0.65rem]">重点</span>
            )}
          </div>
          <p className="text-xs text-claude-mid dark:text-white/50 mt-0.5">
            {day.date} {day.weekday} · {day.distance} · {day.duration}
          </p>
        </div>
        <motion.span
          className="shrink-0 text-claude-mid"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>

      {/* Content with AnimatePresence */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-5 pb-5 border-t border-claude-light-gray/25 pt-4 space-y-4">
              {day.events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex gap-3"
                >
                  <div className="flex flex-col items-center">
                    <span className={`text-xs font-medium ${event.highlight ? "text-claude-orange" : "text-claude-mid/60 dark:text-white/35"}`}>
                      {event.time}
                    </span>
                  </div>
                  <div className="flex-1 pb-3 border-b border-claude-light-gray/15 last:border-0">
                    <h4 className={`text-sm mb-1 ${event.highlight ? "font-medium text-claude-dark" : "text-claude-dark/90"}`}>
                      {event.title}
                    </h4>
                    <p className="text-sm text-claude-mid dark:text-white/60 font-serif leading-relaxed whitespace-pre-line">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
              {day.accommodation !== "—" && (
                <div className="flex items-center gap-2 text-sm text-claude-dark/70 bg-claude-warm/60 dark:bg-white/[0.04] px-3 py-2 rounded-lg">
                  <span>🏨</span>
                  <span>住：{day.accommodation}</span>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

export function RouteSection() {
  return (
    <section id="route" className="py-14">
      <FadeIn>
        <div className="mb-8">
          <div className="accent-bar mb-4" />
          <h2 className="section-heading">详细路线</h2>
          <p className="section-sub">6天行程，每天怎么走、注意什么</p>
        </div>
      </FadeIn>

      <div className="space-y-3">
        {(itinerary as DayRoute[]).map((day, idx) => (
          <AccordionItem key={day.day} day={day} defaultOpen={idx < 2} />
        ))}
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const sermons = [
  { id: 33, title: "Dealing With Confusion And Fear Of The Future (Sermon Only)", speaker: "Rev. Tunde Amosun", date: "12th June 2022" },
  { id: 34, title: "3 Factors That Affect Clarity & Direction (Sermon Only)", speaker: "New Tutde And...", date: "19th June 2022" },
  { id: 35, title: "Ancient Secrets Of Supernatural Power (Sermon Only)", speaker: "Prof. Ade Erakuno", date: "26th June 2022" },
  { id: 32, title: "Can God Have His Way (Sermon Only)", speaker: "Rev Tunde Amosun", date: "5th June 2022" },
  { id: 31, title: "Dealing With Confusion And Fear Of The Future (Sermon Only)", speaker: "Rev. Tund...", date: "29th May 2022" },
  { id: 30, title: "Dealing With Delays, Heartbreak & Situation Stops (Sermon Only)", speaker: "Rev. M...", date: "22nd May 2022" },
  { id: 29, title: "Dealing With Seasons Through Thanksgiving (Sermon Only)", speaker: "Prof. Kelen...", date: "15th May 2022" },
  { id: 28, title: "Dealing With Spiritual Emptiness (sermon only)", speaker: "Rev. Tunde, Amosun", date: "8th May 2022" },
  { id: 27, title: "Developing Intimacy With The Holy Spirit (Sermon Only)", speaker: "Pst Gbade Oguns...", date: "1st May 2022" },
  { id: 26, title: "Don't Cry Over Tilapia (Retreat Only)", speaker: "Rev. Mrs. Kemi Amosun", date: "29th June...", },
];

export default function AudioPodcast() {
  const { ref, visible } = useScrollReveal(0.05);
  const [activeId, setActiveId] = useState(33);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const activeSermon = sermons.find((s) => s.id === activeId) ?? sermons[0];

  // Fake progress ticker when playing
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress((p) => Math.min(p + 0.2, 100)), 200);
    return () => clearInterval(t);
  }, [playing]);

  const handleSelect = (id: number) => {
    setActiveId(id);
    setPlaying(false);
    setProgress(0);
  };

  return (
    <div
      ref={ref}
      className="w-full bg-[#222357] text-white transition-all duration-1000 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
        {/* LEFT — singer image */}
        <div
          className="relative w-full md:w-[300px] shrink-0 h-[280px] md:h-auto overflow-hidden transition-all duration-1000 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transitionDelay: "200ms",
          }}
        >
          <Image
            src="/images/livestream.png"
            alt="Worship"
            fill
            className="object-cover"
          />
          {/* subtle gradient toward right */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#222357]/60" />
        </div>

        {/* RIGHT — player + list */}
        <div
          className="flex-1 p-6 md:p-8 flex flex-col gap-5 transition-all duration-1000 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(40px)",
            transitionDelay: "300ms",
          }}
        >
          {/* Title */}
          <h2 className="text-[22px] md:text-[28px] font-bold text-white">
            Audio Podcast
          </h2>

          {/* Player card */}
          <div className="bg-[#1a1b45] rounded-xl p-4 flex flex-col gap-3 shadow-xl">
            <div className="flex items-center gap-3">
              {/* Play/pause button */}
              <button
                onClick={() => setPlaying((p) => !p)}
                className="w-10 h-10 rounded-full bg-[#F5A623] flex items-center justify-center shrink-0 hover:bg-[#e8961a] transition-colors duration-200 shadow-lg shadow-orange-500/30"
              >
                {playing ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <rect x="2" y="1" width="4" height="12" rx="1" />
                    <rect x="8" y="1" width="4" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                    <path d="M3 1.5l10 5.5-10 5.5V1.5z" />
                  </svg>
                )}
              </button>

              {/* Music note icon */}
              <div className="w-8 h-8 rounded bg-[#2d2f6b] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>

              {/* Sermon title */}
              <p className="text-[13px] font-medium text-white truncate flex-1">
                {activeSermon.title}
              </p>

              {/* Time */}
              <span className="text-[11px] text-white/50 shrink-0">
                {Math.floor(progress / 100 * 45)}:{String(Math.floor((progress / 100 * 45 * 60) % 60)).padStart(2, "0")}
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#F5A623] rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
              {/* Waveform-ish decoration */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.3) 3px, rgba(255,255,255,0.3) 4px)"
              }} />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {[
                <svg key="prev" width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M19 5L9 12l10 7V5z"/><rect x="5" y="5" width="2" height="14" rx="1" fill="white"/></svg>,
                <svg key="next" width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M5 5l10 7-10 7V5z"/><rect x="17" y="5" width="2" height="14" rx="1" fill="white"/></svg>,
                <svg key="repeat" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
                <svg key="shuffle" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
              ].map((icon, i) => (
                <button key={i} className="w-7 h-7 rounded bg-[#2d2f6b] flex items-center justify-center hover:bg-[#F5A623]/20 transition-colors duration-200">
                  {icon}
                </button>
              ))}
              {/* Download */}
              <button className="ml-auto w-7 h-7 rounded bg-[#F5A623]/20 flex items-center justify-center hover:bg-[#F5A623]/40 transition-colors duration-200">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Sermon list */}
          <div className="flex flex-col gap-0.5 max-h-[280px] overflow-y-auto pr-1 custom-scroll">
            {sermons.map((s, i) => (
              <button
                key={s.id}
                onClick={() => handleSelect(s.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group ${
                  activeId === s.id
                    ? "bg-[#F5A623]/20 border border-[#F5A623]/30"
                    : "hover:bg-white/5"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.5s ease-out ${300 + i * 50}ms, transform 0.5s ease-out ${300 + i * 50}ms, background 0.2s`,
                }}
              >
                {/* Number / playing indicator */}
                <span className={`text-[11px] font-mono w-5 shrink-0 text-center ${activeId === s.id ? "text-[#F5A623]" : "text-white/30"}`}>
                  {activeId === s.id && playing ? (
                    <span className="inline-flex gap-[2px] items-end h-3">
                      {[1,2,3].map((b) => (
                        <span key={b} className="w-[3px] bg-[#F5A623] rounded-sm" style={{ height: `${6 + b * 3}px`, animation: `eq${b} 0.6s ease-in-out infinite alternate`, animationDelay: `${b * 0.15}s` }} />
                      ))}
                    </span>
                  ) : s.id}
                </span>

                {/* Music icon */}
                <div className={`w-6 h-6 rounded shrink-0 flex items-center justify-center ${activeId === s.id ? "bg-[#F5A623]/20" : "bg-white/5"}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={activeId === s.id ? "#F5A623" : "rgba(255,255,255,0.4)"} strokeWidth="2">
                    <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
                  </svg>
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`text-[12px] font-medium truncate ${activeId === s.id ? "text-white" : "text-white/70"}`}>
                    {s.title}
                  </p>
                  <p className="text-[10px] text-white/40 truncate">
                    {s.speaker} — {s.date}
                  </p>
                </div>

                {/* Download icon */}
                <div className={`shrink-0 w-5 h-5 rounded flex items-center justify-center ${activeId === s.id ? "text-[#F5A623]" : "text-white/20 group-hover:text-white/50"} transition-colors`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scroll::-webkit-scrollbar { width: 3px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 10px; }
        @keyframes eq1 { from { height: 4px; } to { height: 10px; } }
        @keyframes eq2 { from { height: 8px; } to { height: 4px; } }
        @keyframes eq3 { from { height: 6px; } to { height: 12px; } }
      `}</style>
    </div>
  );
}
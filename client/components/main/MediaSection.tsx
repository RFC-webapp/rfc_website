"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

function useScrollReveal(threshold = 0.2) {
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

export default function MediaSection() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className="text-center py-16 px-4 transition-all duration-1000 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
      }}
    >
      <span className="text-[11px] tracking-[0.3em] uppercase text-[#222357] font-semibold">
        Explore
      </span>
      <h1 className="font-bold text-[32px] md:text-[48px] text-[#161722] mt-2 mb-6 relative inline-block">
        MEDIA
        <span
          className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#F5A623]"
          style={{
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 0.8s ease-out 0.4s",
          }}
        />
      </h1>
      <br />
      <Button
        variant="default"
        size="lg"
        className="bg-[#F5A623] hover:bg-[#e8961a] text-white font-semibold border-0 mt-2 px-8 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-200"
      >
        VIEW ALL MEDIA
      </Button>
    </div>
  );
}
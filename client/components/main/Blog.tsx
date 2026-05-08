"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ElibraryCard } from "../media/ElibraryCard";
import { Button } from "../ui/button";

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

export default function Blog() {
  const { ref: headRef, visible: headVisible } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <div className="py-24 px-4 bg-white overflow-hidden">
      {/* Heading */}
      <div
        ref={headRef}
        className="text-center mb-14 transition-all duration-1000 ease-out"
        style={{
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#222357] font-semibold">
          Read Our Blog
        </span>
        <h1 className="font-bold text-[28px] md:text-[48px] text-[#161722] mt-3 leading-tight">
          SHARE, INSPIRE,{" "}
          <span className="relative inline-block text-[#222357]">
            INNOVATE
            <span
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#F5C842]"
              style={{
                transform: headVisible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transition: "transform 0.8s ease-out 0.5s",
              }}
            />
          </span>
        </h1>
      </div>

      {/* Grid */}
      <div
        ref={gridRef}
        className="mx-auto container gap-5 px-2 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Blog card 1 */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(50px)",
            transitionDelay: "0ms",
          }}
        >
          <ElibraryCard
            image="/images/blog-1.jpg"
            title="Understanding Faith in Today's World"
            excerpt="Explore how biblical principles shape our daily walk and spiritual growth."
            date="Nov 18, 2025"
          />
        </div>

        {/* Blog card 2 */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(50px)",
            transitionDelay: "150ms",
          }}
        >
          <ElibraryCard
            image="/images/blog-2.jpg"
            title="How to Strengthen Your Prayer Life"
            excerpt="Prayer is a lifestyle. Here are practical steps you can take starting today."
            date="Nov 15, 2025"
          />
        </div>

        {/* CTA card */}
        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? "translateY(0)" : "translateY(50px)",
            transitionDelay: "300ms",
          }}
        >
          <div className="bg-white rounded-2xl aspect-[420/451] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
            <Image
              src="/images/rfc-1.png"
              alt="Visit our blog"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
              <Button
                variant="default"
                size="lg"
                className="hover:bg-[#e8b930] text-black font-semibold border-0 shadow-lg transition-all duration-300 hover:scale-105"
              >
                VISIT OUR BLOG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
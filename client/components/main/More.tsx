"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

function useScrollReveal(threshold = 0.15) {
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

const rfcSlides = [
  {
    src: "/images/rfc-1.png",
    title: "WELCOME TO RFC",
    subtitle: "ABOUT US",
    button: "LEARN MORE",
    accent: "#F5C842",
  },
  {
    src: "/images/rfc-2.png",
    title: "WE'RE GRATEFUL",
    subtitle: "PARTNER WITH US",
    button: "ROYAL PARTNERS",
    accent: "#5DCAA5",
  },
  {
    src: "/images/rfc-3.png",
    title: "DISCOVER PURPOSE",
    subtitle: "MISSION WORK",
    button: "START HERE",
    accent: "#F09581",
  },
];

export default function More() {
  const { ref: headRef, visible: headVisible } = useScrollReveal(0.1);
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.05);

  return (
    <div className="w-full bg-[#161722] flex flex-col items-center py-24 px-4 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #F5C842 0%, transparent 50%), radial-gradient(circle at 80% 50%, #222357 0%, transparent 50%)",
        }}
      />

      {/* Heading */}
      <div
        ref={headRef}
        className="text-center mb-16 transition-all duration-1000 ease-out"
        style={{
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <h3 className="font-bold text-[32px] md:text-[56px] mt-2 leading-tight">
          YOU CAN DO{" "}
          <span className="text-[#F5C842]">MORE</span>
        </h3>
        <div className="w-12 h-[2px] bg-[#F5C842]/40 mx-auto mt-4" />
      </div>

      {/* Cards grid */}
      <div ref={gridRef} className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {rfcSlides.map((item, index) => (
          <div
            key={index}
            className="group relative flex-1"
            style={{
              opacity: gridVisible ? 1 : 0,
              transform: gridVisible ? "translateY(0)" : "translateY(60px)",
              transition: `opacity 0.9s ease-out ${index * 180}ms, transform 0.9s ease-out ${index * 180}ms`,
            }}
          >
            {/* Image container with clip reveal */}
            <div className="relative w-full h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Accent line at top on hover */}
              <div
                className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: item.accent }}
              />

              {/* Text block */}
              <div className="absolute bottom-16 left-0 right-0 text-center px-4">
                <p
                  className="text-[11px] tracking-[0.25em] uppercase font-semibold mb-1 transition-all duration-300"
                  style={{ color: item.accent }}
                >
                  {item.title}
                </p>
                <h3 className="text-[22px] font-bold text-white leading-tight">
                  {item.subtitle}
                </h3>
              </div>
            </div>

            {/* Button floating below */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-10">
              <Button
                variant="default"
                size="lg"
                className="font-semibold text-sm shadow-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: item.accent,
                  color: "#161722",
                  border: "none",
                }}
              >
                {item.button}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
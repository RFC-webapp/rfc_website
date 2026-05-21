"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { WatchIcon } from "@/public/icons";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
      >
        <Image
          priority
          className="w-full h-full object-cover"
          src="/images/home-bg.jpg"
          alt="home background"
          width={1439}
          height={883}
        />
      </div>

      {/* Gradient overlay — dark at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* Animated grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cross / light beam accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 40%, rgba(255,220,120,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Sermon badge */}
        <div
          className="mb-6 transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0ms",
          }}
        >
          <Button
            variant="outline"
            size="sm"
            className="font-normal text-[14px] border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 tracking-widest uppercase"
          >
            Latest Sermon
          </Button>
        </div>

        <h1
          className="text-[36px] md:text-[72px] lg:text-[88px] font-bold mb-3 leading-[1.05] tracking-tight transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "150ms",
            textShadow: "0 2px 40px rgba(0,0,0,0.3)",
          }}
        >
          Rock Foundation
          <br />
          <span className="text-[#F5C842]">Church</span>
        </h1>

        {/* Divider line */}
        <div
          className="transition-all duration-1000 ease-out mb-5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "scaleX(1)" : "scaleX(0)",
            transitionDelay: "300ms",
            width: "60px",
            height: "2px",
            background: "rgba(245,200,66,0.8)",
          }}
        />

        {/* Tagline */}
        <h5
          className="text-[14px] md:text-[20px] mb-8 tracking-[0.2em] uppercase font-light transition-all duration-1000 ease-out text-white/90"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "400ms",
          }}
        >
          Making Mature Followers Of Christ
        </h5>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 transition-all duration-1000 ease-out"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "550ms",
          }}
        >
          <Button
            variant="default"
            size="lg"
            icon={<WatchIcon />}
            className="bg-[#F5C842] hover:bg-[#e8b930] text-black font-semibold border-0 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-105 hover:shadow-amber-500/40"
          >
            Watch Sermon
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 font-medium transition-all duration-300 hover:scale-105"
          >
            Plan Your Visit
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000"
        style={{ opacity: loaded ? 0.7 : 0, transitionDelay: "1000ms" }}
      >
        <span className="text-white text-[11px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden">
          <div
            className="absolute top-0 w-full bg-white"
            style={{
              height: "40%",
              animation: "scrollLine 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(350%);
          }
        }
      `}</style>
    </div>
  );
}
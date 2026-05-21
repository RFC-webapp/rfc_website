"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

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

const slides = [
  { src: "/images/adult-service.png", label: "Adult Service" },
  { src: "/images/teen-service.png", label: "Teen Service" },
  { src: "/images/youth-service.png", label: "Youth Service" },
  { src: "/images/adult-service.png", label: "Adult Service" },
  { src: "/images/teen-service.png", label: "Teen Service" },
  { src: "/images/youth-service.png", label: "Youth Service" },
];

export default function CardCarousel() {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <div
      id="our-services"
      ref={ref}
      className="flex flex-col items-center gap-6 py-16 px-4 bg-gray-50 overflow-hidden"
    >
      <div
        className="text-center transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#222357] font-semibold">
          Life at RFC
        </span>
        <h2 className="font-bold text-[28px] md:text-[42px] text-[#161722] mt-2">
          OUR SERVICES
        </h2>
      </div>

      <div
        className="w-full transition-all duration-1000 ease-out"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transitionDelay: "200ms",
        }}
      >
        <Carousel
          plugins={[Autoplay({ delay: 2500, stopOnInteraction: true })]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="p-1.5">
                  <Card className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-500">
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                      <span className="text-white font-semibold text-[15px] tracking-wide">
                        {slide.label}
                      </span>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex border-[#222357] text-[#222357] hover:bg-[#222357] hover:text-white transition-colors duration-300" />
          <CarouselNext className="hidden md:flex border-[#222357] text-[#222357] hover:bg-[#222357] hover:text-white transition-colors duration-300" />
        </Carousel>
      </div>
    </div>
  );
}
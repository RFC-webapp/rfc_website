"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function CardCarousel() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {/* {Array.from({ length: 5 }).map((_, index) => ( */}
          {[
            "/images/adult-service.png",
            "/images/teen-service.png",
            "/images/youth-service.png",
            "/images/adult-service.png",
            "/images/teen-service.png",
            "/images/youth-service.png",
          ].map((src, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/3 sm:basis-1/2 basis-full"
            >
              <div className="p-1">
                {/* <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card> */}

                <Card className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Slide image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Hide arrows on mobile */}
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}

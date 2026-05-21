"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonies = [
  {
    title: "Favor In Relocation Process",
    author: "Busayo",
    body: `
I want to testify of God's unfailing faithfulness and the fulfillment of His promises in my life. Late last year, God gave me a word: He said He was opening the doors of nations unto me. I held on to that promise and trusted Him completely.

Today, by His grace, I am standing in the UK as a living testimony to His covenant-keeping nature. It didn't even take six months for God to fulfill what He had spoken over my life.

Throughout that season, every word spoken from the altar was God speaking directly to me. He gave me clear instructions and constant reassurance, reminding me that “na Him dey run this”—that no man could take the glory for what He was about to do.

I remember one particular Sunday when Rev asked us to worship God undignified, and she said that God was handing out packages to individuals. In that moment, I knew in my spirit that mine had been released. I could sense it.

The very next day, I had my CAS interview. It was as though the officer was already welcoming me to the UK before the process was even completed. Just four hours after that interview, I received my CAS letter.

But God wasn't done yet. I applied for my visa and received a response exactly 26 hours later — without any premium service or expedited processing. It was purely the hand of God at work.

This entire journey has shown me that when God carries you, He carries you all the way. He is indeed a covenant-keeping God, and I can testify that His word never returns void.
    `,
  },

  {
    title: "God Came Through For Me",
    author: "Sarah",
    body: `
I had been trusting God for direction concerning my career and future. Everything around me looked uncertain, and honestly, I was overwhelmed.

During one of the services at RFC, a word came specifically about delay and restoration. I held onto that word tightly and continued praying.

Weeks later, opportunities started opening one after another. What looked impossible became easy. I got calls, emails, and confirmations I had been waiting months for.

The peace I experienced through the process was what amazed me the most. Even before the final breakthrough came, God gave me confidence that everything was already settled.

I also experienced supernatural favor through people I had never met before. Doors opened in places where I had no connections.

Looking back now, I can boldly say God truly orders the steps of His children. He sees beyond what we can see and works everything together for our good.

RFC became more than a church family to me during that season. The teachings, prayers, and atmosphere of worship strengthened my faith daily.

I am grateful to God for His mercy, consistency, and undeniable faithfulness in my life.
    `,
  },

  {
    title: "Healing And Restoration",
    author: "Michael",
    body: `
God restored peace to my family after years of misunderstanding and pain. What counseling, conversations, and human wisdom could not completely fix, God handled in ways only Him could.

There were moments I almost gave up believing things could ever become normal again. But every service reminded me that nothing is impossible with God.

One Sunday during worship, I felt an overwhelming peace in my heart. That was the beginning of restoration for my home.

Conversations that usually ended in arguments became peaceful. Hearts softened. Communication returned.

Today, my family is stronger, happier, and united again. I cannot thank God enough for His healing power and mercy.

I have learned that God truly restores what seems broken beyond repair. He specializes in impossible situations and turns mourning into joy.

To anyone trusting God for restoration, keep believing. God is still in the business of doing miracles.
    `,
  },
];

export default function TestimonyCarousel() {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className="w-full overflow-hidden transition-all duration-1000"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? "translateY(0)"
          : "translateY(60px)",
      }}
    >
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonies.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2"
            >
              <div className="h-full text-left px-2 md:px-6">
                <h3 className="font-bold text-[20px] text-[#111827] mb-5 uppercase">
                  {item.title}
                </h3>

                <p className="text-[15px] leading-7 text-black/70 whitespace-pre-line">
                  {item.body}
                </p>

                <p className="font-semibold text-[16px] pt-6 text-[#6B7280] uppercase">
                  — {item.author}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonies.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-500 rounded-full ${
                current === index
                  ? "w-8 h-2 bg-[#222357]"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
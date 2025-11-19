"use client";
import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { BlogCard } from "@/components/blog/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExploreTabs from "@/components/explore/Tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { WatchIcon } from "@/public/icons";

export default function Home() {
  const rfcSlides = [
    {
      src: "/images/rfc-1.png",
      title: "WELCOME TO RFC",
      subtitle: "ABOUT US",
      button: "LEARN MORE",
    },
    {
      src: "/images/rfc-2.png",
      title: "WE'RE GRATEFUL",
      subtitle: "PARTNER WITH US",
      button: "ROYAL PARTNERS",
    },
    {
      src: "/images/rfc-3.png",
      title: "DISCOVER PURPOSE",
      subtitle: "MISSION WORK",
      button: "START HERE",
    },
  ];

  return (
    <div className="">
      <div className="relative w-full h-[80vh]">
        <Image
          priority
          className="w-full h-full object-cover"
          src="/images/home-bg.jpg"
          alt="home background"
          width={1439}
          height={883}
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <Button
            variant="outline"
            size="sm"
            className="font-normal text-[16px] mb-4"
          >
            Latest Sermon
          </Button>

          <h1 className="text-[64px] font-bold mb-2">Rock Foundation Church</h1>
          <h5 className="text-[18px] mb-6">
            Making Mature Followers Of Christ
          </h5>

          <Button variant="default" size="lg" icon={<WatchIcon />} className="">
            Watch Sermon
          </Button>
        </div>
      </div>

      <div className="text-center text-[#161722] my-24">
        <h5 className="text-[16px] font-normal ">WELCOME TO RFC</h5>
        <h1 className="font-bold text-[48px]">OUR SERVICE</h1>
        <p className="text-[16px] font-normal w-5/8 mx-auto my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Button variant="default" size="lg">
          READ MORE
        </Button>
      </div>

      {/* carousel section */}
      <div className="flex flex-col items-center space-y-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* You can do More */}
      <div className="w-full bg-[#222357] flex flex-col items-center my-10 text-white py-12">
        <h5>RFC</h5>
        <h3 className="font-bold text-[48px]">YOU CAN DO MORE</h3>

        <div className="flex mt-6">
          {rfcSlides.map((item, index) => (
            <div key={index} className="relative w-[368px] h-[515px]">
              {/* Image */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Text Overlay (70% down the image) */}
              <div className="absolute font-bold left-1/2 -translate-x-1/2 top-[60%] text-center">
                <h3 className="text-[12px] ">{item.title}</h3>
                <p className="text-[20px] pt-2">{item.subtitle}</p>
              </div>

              {/* Button */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                <Button variant="default" size="lg" className="font-medium">
                  {item.button}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* blog */}
      <div className="text-center">
        <h4 className="font-medium text-[14px]">READ OUR BLOG</h4>
        <h1 className="font-bold text-[38px] pt-3 pb-12">
          SHARE, INSPIRE, INNOVATE
        </h1>

        <div className="mx-auto container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            image="/images/blog-1.jpg"
            title="Understanding Faith in Today's World"
            excerpt="Explore how biblical principles shape our daily walk and spiritual growth."
            date="Nov 18, 2025"
          />

          <BlogCard
            image="/images/blog-2.jpg"
            title="How to Strengthen Your Prayer Life"
            excerpt="Prayer is a lifestyle. Here are practical steps you can take starting today."
            date="Nov 15, 2025"
          />

          <div className="bg-white w-[420px] h-[451px] rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden relative">
            <Image
              src="/images/rfc-1.png"
              alt="one"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-4 left-1/4 -translate-x-1/2">
              <Button variant="default" size="lg" className="w-fit">
                VISIT OUR BLOG
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* explore */}
      <div className="container mx-auto my-6">
        <h1 className="font-normal text-[72px] underline">Explore</h1>

        {/* <Tabs defaultValue="library" className="w-full mt-6">
          <TabsList>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
            <TabsTrigger value="livestreams">Livestreams</TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="library">Change your password here.</TabsContent>
          <TabsContent value="livestreams">
            Change your password here.
          </TabsContent>
        </Tabs> */}

        <ExploreTabs />
      </div>
    </div>
  );
}

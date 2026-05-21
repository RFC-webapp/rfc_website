"use client";

import { useEffect, useState } from "react";
import CardCarousel from "@/components/main/CardCarousel";
import TestimonyCarousel from "@/components/main/TestimonyCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaBible,
} from "react-icons/fa";

function useScrollReveal() {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute("data-id"));

          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return visibleSections;
}

export default function Page() {
  const visibleSections = useScrollReveal();

  return (
    <div className="mt-14 mb-12 overflow-hidden">
      <section>
        <div className="relative w-full h-[70vh] overflow-hidden">
          <div className="absolute inset-0 scale-110">
            <Image
              priority
              className="w-full h-full object-cover"
              src="/images/home-bg.jpg"
              alt="home background"
              width={1439}
              height={883}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h3 className="font-medium text-[16px] tracking-[0.3em] uppercase">
              ABOUT US
            </h3>

            <h1 className="text-[40px] md:text-[72px] font-bold mb-4 leading-tight">
              Rock Foundation
              <br />
              <span className="text-[#F5C842]">Church</span>
            </h1>

            <div className="w-16 h-[2px] bg-[#F5C842] mb-5" />

            <h5 className="text-[14px] md:text-[20px] tracking-[0.2em] uppercase text-white/90">
              Making Mature Followers Of Christ
            </h5>
          </div>
        </div>
      </section>

      <section
        data-reveal
        data-id="1"
        className="w-full hidden md:flex justify-center items-center my-20 overflow-hidden"
      >
        <div
          className="flex flex-col md:flex-row gap-6 items-center transition-all duration-1000"
          style={{
            opacity: visibleSections.includes(1) ? 1 : 0,
            transform: visibleSections.includes(1)
              ? "translateY(0)"
              : "translateY(60px)",
          }}
        >
          <div className="w-full md:w-[280px] h-[380px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-1.png"
              alt="About Us"
              width={280}
              height={380}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="w-full md:w-[340px] h-[460px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-2.png"
              alt="About Us"
              width={340}
              height={460}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="w-full md:w-[280px] h-[380px] rounded-3xl overflow-hidden">
            <Image
              src="/images/about-3.png"
              alt="About Us"
              width={280}
              height={380}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      <section
        data-reveal
        data-id="2"
        className="flex flex-col md:flex-row justify-center items-center gap-10 my-20 px-5"
      >
        <div
          className="w-full md:w-[372px] text-center md:text-left transition-all duration-1000"
          style={{
            opacity: visibleSections.includes(2) ? 1 : 0,
            transform: visibleSections.includes(2)
              ? "translateX(0)"
              : "translateX(-50px)",
          }}
        >
          <h5 className="font-normal text-[16px] text-[#222357] uppercase tracking-[0.2em]">
            OUR MISSION & VISION
          </h5>

          <h2 className="font-semibold text-[32px] md:text-[42px] leading-tight mt-2 mb-5">
            From Freedom To Fruitfulness
          </h2>

          <p className="font-normal text-[16px] text-black/70 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div
          className="w-full md:w-[372px] text-center md:text-left transition-all duration-1000"
          style={{
            opacity: visibleSections.includes(2) ? 1 : 0,
            transform: visibleSections.includes(2)
              ? "translateX(0)"
              : "translateX(50px)",
          }}
        >
          <h5 className="font-normal text-[16px] text-[#222357] uppercase tracking-[0.2em]">
            WHAT WE DO
          </h5>

          <h2 className="font-semibold text-[32px] md:text-[42px] leading-tight mt-2 mb-5">
            Making Mature Followers Of Christ
          </h2>

          <p className="font-normal text-[16px] text-black/70 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className="mx-auto container text-center my-24 px-4">
        <h1 className="font-bold text-[30px] md:text-[48px]">
          OUR SERVICE
        </h1>

        <p className="text-[16px] font-normal px-2 md:px-0 md:w-5/8 mx-auto my-6 text-black/70 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <CardCarousel />
      </section>

      <section className="w-full relative mb-20">
        <Image
          src="/images/about-4.png"
          alt="About Us"
          width={1440}
          height={700}
          className="w-full h-auto object-cover"
        />
      </section>

      <section className="bg-[#222357] text-white mb-20">
        <div className="flex flex-col md:flex-row justify-center gap-x-[50px] mx-auto container py-[60px] items-center px-4">
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/images/about-4.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 font-poppins mt-8 md:mt-0">
            <h4 className="font-bold text-[24px] mb-4 uppercase tracking-[0.2em] text-[#F5C842]">
              Our Lead Pastor
            </h4>

            <p className="font-normal text-[16px] mb-4 leading-8 text-white/80">
              Rev Tunde Amosun is the visionary founder and Lead Pastor of Rock
              Foundation Church (RFC).
            </p>

            <p className="font-normal text-[16px] mb-4 leading-8 text-white/80">
              His mission is to help people discover and confidently live out
              their God-given purpose through the transformative power of the
              Gospel.
            </p>

            <Button className="bg-[#F5C842] hover:bg-[#e8b930] text-black font-semibold">
              Read More
            </Button>
          </div>
        </div>
      </section>

      <section className="text-center py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-1">
              <FaBible className="text-black/60" />

              <span className="font-bold text-[10px] text-black/60">
                MEMBER STORIES
              </span>
            </div>
          </div>

          <h1 className="text-[28px] md:text-[48px] font-black mt-4">
            MY RFC EXPERIENCE
          </h1>

          <p className="text-[#00000080] text-[16px] md:text-[20px] font-normal pb-10">
            Read Testimonies From Our Members
          </p>

          <TestimonyCarousel />
        </div>
      </section>

      <section className="mx-auto container px-4 py-24 overflow-hidden">
        <div
          className="text-center mb-20 transition-all duration-1000"
          style={{
            opacity: visibleSections.includes(7) ? 1 : 0,
            transform: visibleSections.includes(7)
              ? "translateY(0)"
              : "translateY(50px)",
          }}
          data-reveal
          data-id="7"
        >
          <h3 className="text-center text-black/60 text-[16px] rounded-lg bg-black/4 px-4 py-1 w-fit mx-auto">
          Need GODLY Counseling?
        </h3>

          <h1 className="font-bold font-poppins text-[34px] md:text-[56px] mt-5 leading-tight">
            See Our Counselling Teams
          </h1>
        </div>

        {[
          {
            title: "Relationship Team",
            image: "/images/counseling-1.jpg",
          },
          {
            title: "Marriage Counseling",
            image: "/images/counseling-2.png",
          },
          {
            title: "Youth Mentorship",
            image: "/images/counseling-4.jpg",
          },
          {
            title: "Prayer Support Team",
            image: "/images/counseling-3.jpg",
          },
        ].map((item, index) => {
          const id = index + 20;

          return (
            <div
              key={index}
              data-reveal
              data-id={id}
              className={`flex flex-col ${index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                } items-center justify-between gap-10 md:gap-16 mb-28`}
            >
              {/* TEXT */}
              <div
                className="w-full md:w-1/2 transition-all duration-1000"
                style={{
                  opacity: visibleSections.includes(id) ? 1 : 0,
                  transform: visibleSections.includes(id)
                    ? "translateX(0)"
                    : index % 2 === 0
                      ? "translateX(-80px)"
                      : "translateX(80px)",
                }}
              >
                <span className="uppercase tracking-[0.3em] text-[#222357] text-[12px] font-semibold">
                  Counseling Unit
                </span>

                <h1 className="font-bold text-[30px] md:text-[42px] font-poppins mt-3 mb-5 leading-tight">
                  {item.title}
                </h1>

                <p className="leading-8 text-black/70 text-[16px]">
                  Our counseling teams are committed to helping individuals and
                  families grow spiritually, emotionally, and mentally through
                  biblical guidance, prayer, mentorship, and practical support.
                  Whether you are navigating relationships, personal struggles,
                  purpose, or spiritual growth, our team is here to walk with you
                  every step of the way.
                </p>

                <Button className="mt-7 bg-[#222357] hover:bg-[#1b1c49] text-white px-8">
                  Learn More
                </Button>
              </div>

              {/* IMAGE */}
              <div
                className="w-full md:w-1/2 transition-all duration-1000"
                style={{
                  opacity: visibleSections.includes(id) ? 1 : 0,
                  transform: visibleSections.includes(id)
                    ? "translateX(0)"
                    : index % 2 === 0
                      ? "translateX(80px)"
                      : "translateX(-80px)",
                  transitionDelay: "200ms",
                }}
              >
                <div className="relative overflow-hidden group shadow-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={450}
                    quality={100}
                    className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="mx-auto container my-25 text-center px-4">
        <h3 className="font-normal text-[16px] font-poppins uppercase tracking-[0.2em] text-[#222357]">
          PREACHING TEAM
        </h3>

        <h1 className="font-bold font-poppins text-[32px] md:text-[48px] pb-12">
          Meet Our Inspirational Team
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center font-roboto">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full max-w-[302px] h-[366px] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-center items-center text-center rounded-2xl"
            >
              <Image
                src="/images/home.jfif"
                alt=""
                width={152}
                height={152}
                className="rounded-full mb-10 object-cover"
              />

              <h1 className="font-bold text-[16px]">
                Rev. Tunde Amosun
              </h1>

              <p className="text-black/70 pt-2">
                Head Pastor, Church
              </p>

              <div className="flex justify-center pt-4 gap-x-5">
                <FaFacebook />
                <FaTwitter />
                <FaLinkedin />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
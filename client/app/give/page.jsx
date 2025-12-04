"use client";
import React, { useState } from "react";
import { HiOutlineClipboard, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";

export default function GivePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    "How are donations used?",
    "Can I give to support a specific project or initiative?",
    "Are there other ways to give besides online?",
    "Is my payment information and privacy secured?",
    "How do I set up recurring giving?",
    "What is pastor’s offering?",
  ];

  const content =
    "Your gifts support our ministries, outreach, missions, and the upkeep of our church. We use all donations responsibly, and financial details are available if you'd like to see them. Thank you for helping us make a meaningful impact in our community and beyond.";

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-12">
          <h2 className="text-3xl font-bold text-blue-950">Give</h2>

          <div className="mt-10 bg-gray-100 rounded-full px-3 py-2 flex items-center w-full max-w-xs">
            <Image
              src="/images/world.png"
              alt="globe"
              width={90}
              height={90}
              className="mr-1"
            />
            <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide whitespace-nowrap">
              GIVE TO ROCK FOUNDATION CHURCH
            </p>
            <Image
              src="/images/give-badge.png"
              alt="give hand"
              width={80}
              height={80}
              className="rounded-full object-cover ml-auto"
            />
          </div>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-4xl md:text-6xl font-500 tracking-tight text-black">
              WAYS TO GIVE
            </h1>

            <p className="text-l text-gray-500">
              Convenient ways to give using wired transfers.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <div className="inline-flex rounded-full bg-gray-200 p-2 gap-1">
              <div className="px-6 py-2 rounded-full bg-red-800 text-white font-medium cursor-pointer">
                NAIRA ACCOUNT
              </div>

              <div className="px-6 py-2 rounded-full bg-gray-200 text-gray-600 cursor-pointer">
                DOMICILIARY ACCOUNT
              </div>
            </div>
          </div>
          <div className="mt-10 min-h-screen flex justify-center items-start">
            <div className="w-full max-w-6xl">
              <div className="bg-white rounded-sm p-6">
                <div className="bg-[#D3D3D3] rounded-md p-4 w-full">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    TITHE AND OFFERING
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-md shadow-sm flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600 flex items-center gap-2">
                          <img src="/logos/access-img.png" className="w-5 h-5" />
                          <span>Access Bank</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 w-full">
                        <div className="text-xl font-semibold">0006822216</div>

                        <img
                          src="/logos/Button.png"
                          className="w-5 h-5 cursor-pointer hover:opacity-70"
                        />
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-sm flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600 flex items-center gap-2">
                          <img src="/logos/access-img.png" className="w-5 h-5" />
                          <div>DOLLAR ACCOUNT</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 w-full">
                        <div className="text-xl font-semibold">1448467336</div>

                        <img
                          src="/logos/Button.png"
                          className="w-5 h-5 cursor-pointer hover:opacity-70"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm flex flex-col mt-4 w-1/2">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600 flex items-center gap-2">
                        <img src="/logos/gtbank.png" className="w-5 h-5" />
                        <span>Guaranty Trust Bank</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 w-full">
                      <div className="text-xl font-semibold">0050990288</div>

                      <img
                        src="/logos/Button.png"
                        className="w-5 h-5 cursor-pointer hover:opacity-70"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-6">
                    <div className="bg-gray-200 rounded-md p-2 mt-10">
                      <div className="rounded-md p-3">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <img src="/logos/cage-img.png" className="w-6 h-6" />
                            <span className="text-sm font-semibold">
                              Pastors Offering
                            </span>
                          </div>

                          <img
                            src="/logos/nigeria-flag.png"
                            className="w-6 h-4 object-cover border-round"
                          />
                        </div>

                        <div className="bg-white rounded-md shadow-sm p-4">
                          <div className="text-sm text-gray-600 flex items-center gap-2">
                            <img src="/logos/stanbic.png" className="w-4 h-4" /> Stanbic
                          </div>

                          <div className="flex items-center justify-between mt-4 w-full">
                            <div className="text-xl font-semibold">0011223344</div>

                            <img
                              src="/logos/Button.png"
                              className="w-5 h-5 cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-md p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <img src="/logos/cage-img.png" className="w-6 h-6" />
                            <span className="text-sm font-semibold">Mission Account</span>
                          </div>

                          <img
                            src="/logos/nigeria-flag.png"
                            className="w-6 h-4 object-cover border-rounded"
                          />
                        </div>

                        <div className="bg-white rounded-md shadow-sm p-4">
                          <div className="text-sm text-gray-600 flex items-center gap-2">
                            <img src="/logos/gtbank.png" className="w-4 h-4" /> Guaranty Trust Bank
                          </div>
                          <div className="flex items-center justify-between mt-4 w-full">
                            <div className="text-xl font-semibold">0032709990</div>

                            <img
                              src="/logos/Button.png"
                              className="w-5 h-5 cursor-pointer hover:opacity-70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F8EAEA] border border-[#2A1870] rounded-md overflow-hidden flex flex-col mt-10">
                    <div className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-white rounded p-1 shadow-sm">
                          <img
                            src="/logos/pay-pal.png"
                            className="w-6 h-auto object-contain"
                          />
                        </div>

                        <div className="flex flex-col text-left mt-1">
                          <div className="font-semibold">Give via PayPal</div>
                        </div>
                      </div>
                      <div className="mt-4 text-sm text-gray-600 leading-relaxed text-left">
                        Give securely from anywhere in the world using PayPal balance,
                        credit/debit cards & bank accounts.
                      </div>
                    </div>

                    <div className="mt-20 bg-[#2A1870] text-white py-3 text-center font-small hover:bg-blue-900 cursor-pointer tracking-wide">
                      GIVE NOW →
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full text-white py-24 px-4 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/give-image.avif')",
          }}
        />

        <div className="absolute inset-0 bg-[#161750] opacity-40" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-orange-500">GIVE </span>
            <span className="text-white">TOWARDS</span>
            <span
              className="inline-block mx-2 align-middle 
              w-2 h-2 bg-white rounded-full"
            />
          </h2>
          <h2 className="text-2xl md:text-6xl font-bold leading-tight">
            <span className="text-white">GOD'S </span>
            <span className="text-orange-500">WORK.</span>
          </h2>

          <div className="mt-10 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              <span
                className="inline-block w-1 h-1 bg-white rounded-full align-middle mr-3"
                aria-hidden="true"
              />
              2 Corinthians 9:7: “Each of you should give what <br />
              you have decided in your heart to give.”
            </p>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              className="bg-white text-black px-8 py-3 rounded-full font-medium 
              border border-white 
              hover:bg-transparent hover:text-white hover:border-white transition-all duration-500 ease-in-out cursor-pointer"
            >
              GIVE NOW
            </button>

            <button
              className="border border-white px-8 py-3 rounded-full font-medium 
              hover:bg-white hover:text-black transition-all duration-500 ease-in-out cursor-pointer"
            >
              OTHER WAYS TO GIVE
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-20 px-4 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#161750] mb-10">
            Giving FAQs
          </h2>
          <div className="space-y-8">
            {faqs.map((question, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-extrabold text-gray-300">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="text-lg text-gray-700">{question}</span>
                  </div>
                  <span className="text-3xl text-[#2A1870] font-light">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed pl-16">
                    {content}
                  </p>
                )}

                <div className="mt-4 border-b border-[#2A1870]"></div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="#" className="text-xl font-semibold text-[#161750] hover:underline">
              Go To General FAQs →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

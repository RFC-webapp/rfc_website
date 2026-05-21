"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  linkHref?: URL | string;
  linkLabel?: string;
  sentence?: string;
  showSentence?: boolean;
}

export default function FAQSection({
  title,
  faqs,
  linkHref,
  sentence,
  linkLabel,
  showSentence,
}: FAQSectionProps) {
  return (
    <section className="w-full max-w-4xl px-2 lg:px-0 mx-auto py-12">
      {title && (
        <h2 className="text-3xl font-extrabold text-[#161750] mb-8">{title}</h2>
      )}

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border-b border-[#161750] py-4"
          >
            <AccordionTrigger
              className="flex w-full justify-between text-left text-lg md:text-xl font-semibold text-[#1A2254] 
              no-underline hover:no-underline focus:no-underline 
              decoration-transparent hover:decoration-transparent focus:decoration-transparent"
            >
              <span className="flex items-center gap-4">
                <span className="text-[#C3C3D1] font-bold text-3xl">
                  {String(index + 1).padStart(2, "0")}.
                </span>

                <div className="text-[#394452] font-poppins font-regular">
                  {faq.question}
                </div>
              </span>
            </AccordionTrigger>

            <AccordionContent className="pl-16 pr-2 font-poppins font-extralight text-[#000000] text-base md:text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 text-base md:text-lg text-center font-semibold text-[#000000]">
        {showSentence && sentence && <>{sentence} </>}
        {linkHref && linkLabel && (
          <Link href={linkHref}>
            <span className="hover-underline hover:text-xl"></span>
            {linkLabel} →
          </Link>
        )}
      </div>
    </section>
  );
}

"use client";

import { FC, useState } from "react";

export type FAQ = {
  id?: string;
  question: string;
  answer: string;
};

interface FAQSectionProps {
  title: string;
  faqs: FAQ[];
  sentence?: string;
  linkHref: string;
  linkLabel: string;
  showSentence: boolean;
}

const FAQSection: FC<FAQSectionProps> = ({
  title,
  faqs,
  sentence,
  linkHref,
  linkLabel,
  showSentence,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center py-12 px-4">
      <div className="w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8" style={{ color: "#161750" }}>
          {title}
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={faq.id || idx} className="border-b border-gray-200 pb-5">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-start gap-4 text-left font-medium text-[#394452] text-lg hover:text-gray-900"
              >
                <span className="flex items-center gap-3">
                  <span className="font-bold text-3xl text-[#394452]">
                    {String(idx + 1).padStart(2, "0")}.
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span className="text-2xl font-bold">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-700 pl-10">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[#161750] text-lg md:text-xl">
          {sentence && <span>{sentence}</span>}
          <a href={linkHref} className="text-[#161750] font-semibold hover:text-[#161750]">
            {linkLabel} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

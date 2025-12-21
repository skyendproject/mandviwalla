"use client";

import Image from "next/image";
import { colors } from "@/lib/colors";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How to claim my insurance?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "When can I get my claim?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "When I can get my claim?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    question: "When I can get my claim?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export default function InvestorFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white px-4 md:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-8">
          <div className="text-sm text-gray-600 mb-1 border-l-2 border-blue-700 inline-block pl-2">Investor Information</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Reliable. Transparent. Investor-Focused.</h2>
          <p className="mx-auto text-base md:text-base" style={{ color: colors.gray.text }}>
            Mandviwalla Mauser Plastic Industries Limited (MMPL) is committed to maintaining the highest standards of transparency, disclosure, and corporate governance. This Investor Information hub offers shareholders and stakeholders quick access to all essential financial, regulatory, and governance-related documents.
          </p>
          <p className="mx-auto text-base md:text-base mt-4" style={{ color: colors.gray.text }}>
            MMPL ensures timely and accurate dissemination of information as per the requirements of the Companies Act, 2017 and PSX Rule Book. This page consolidates all investor-relevant reports, notices, financial data, and regulatory filings in a structured and accessible manner.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <div className="mb-4 text-md text-gray-600 border-l-2 border-blue-700 pl-2 font-semibold uppercase">General Question</div>
            <h3 className="text-4xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <div className="mb-4">
              <div className="px-4 py-3 text-[#12AAEB] font-medium cursor-pointer bg-[#F6F6F6] rounded-md mb-6">
                <a href="#" className="hover:underline text-md">Which platforms should I have a presence on?</a>
              </div>
              <div className="px-4 pb-3 text-gray-700 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </div>
            </div>
            <div className="rounded-md divide-y divide-gray-200 border border-gray-200 bg-[#F6F6F6]">
              {faqs.map((faq, idx) => (
                <div key={idx}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-left font-semibold text-gray-900 focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === idx + 1 ? -1 : idx + 1)}
                  >
                    <span>{faq.question}</span>
                    {openIndex === idx + 1 ? (
                      <ChevronUp className="text-blue-700" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </button>
                  {openIndex === idx + 1 && (
                    <div className="px-4 pb-3 text-gray-700 text-sm">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 min-w-0 flex items-center justify-center">
            <div className="relative w-[470px] h-[551px] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/investor-info-FAQ.jpg"
                alt="Investor FAQ"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

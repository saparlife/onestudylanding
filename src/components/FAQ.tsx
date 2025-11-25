"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq.1.q"),
      answer: t("faq.1.a"),
    },
    {
      question: t("faq.2.q"),
      answer: t("faq.2.a"),
    },
    {
      question: t("faq.3.q"),
      answer: t("faq.3.a"),
    },
    {
      question: t("faq.4.q"),
      answer: t("faq.4.a"),
    },
    {
      question: t("faq.5.q"),
      answer: t("faq.5.a"),
    },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full filter blur-[120px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-400 font-medium mb-4">{t("faq.label")}</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            {t("faq.title")}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
                <div className="px-6 pb-5">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

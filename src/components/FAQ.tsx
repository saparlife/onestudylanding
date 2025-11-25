"use client";

import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Как работает защита от пиратства?",
      answer: "При попытке сделать скриншот или запись экрана — ученик увидит чёрный экран. Это работает как в банковских приложениях. Технология встроена в мобильное приложение на уровне Flutter, обойти её нельзя.",
    },
    {
      question: "Как ученики получают доступ?",
      answer: "Вы добавляете ученика в систему → он получает сообщение в WhatsApp с вашего номера → в сообщении ссылки на приложение в App Store, Google Play и веб-версию. Ученик скачивает, входит и начинает учиться.",
    },
    {
      question: "Можно ли перенести курсы с другой платформы?",
      answer: "Да, мы поможем с переносом. Видео загружаете как обычно, тексты копируете, PDF добавляете. Если у вас много контента — напишите нам, поможем с миграцией.",
    },
    {
      question: "Что значит 'новых учеников в месяц'?",
      answer: "Это количество учеников, которых вы можете добавить за месяц. Уже добавленные ученики не считаются. Например, на тарифе Эконом вы можете каждый месяц добавлять до 20 новых учеников.",
    },
    {
      question: "Есть ли веб-версия?",
      answer: "Да, ученики могут учиться и через браузер на компьютере. Но защита от записи экрана работает только в мобильном приложении — это ограничение технологии.",
    },
    {
      question: "Как подключить WhatsApp?",
      answer: "В админке нажимаете 'Подключить WhatsApp' → сканируете QR-код с телефона → готово. Все приглашения будут уходить с вашего номера. Ученики смогут отвечать прямо вам.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

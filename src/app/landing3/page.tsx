"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Landing3() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Заполните все поля");
      return;
    }

    setIsSubmitting(true);

    try {
      const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (telegramBotToken && telegramChatId) {
        const message = `🎓 Новая заявка с Landing 3 (Студенты до конца)!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n\n🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`;

        await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: message,
            parse_mode: "HTML",
          }),
        });
      }

      router.push("/thank-you3");
    } catch {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const capabilities = [
    {
      icon: "📚",
      title: "LMS-система",
      items: ["Видео-уроки", "Домашние задания", "Тесты", "Модули и уровни"],
      highlight: "Чёткая структура и понятная логика прохождения.",
    },
    {
      icon: "⚙️",
      title: "Автоматизация процессов",
      items: ["Выдача уроков", "Напоминания", "Дедлайны", "Отчёты по активности"],
      highlight: "Обучение работает автоматически — без ручного контроля.",
    },
    {
      icon: "📊",
      title: "Подробная аналитика",
      items: ["Процент прохождения", "Выполненные уроки", "Точка остановки", "Дни без активности"],
      highlight: "Даёт полную картину и помогает вовремя удерживать студентов.",
    },
    {
      icon: "📱",
      title: "Мобильное приложение",
      items: ["Быстрый доступ", "Стабильная работа", "Просмотр прогресса", "Уведомления"],
      highlight: "Ученики учатся регулярно — в любое время и в любом месте.",
    },
  ];

  const targetAudience = [
    "Онлайн-курсы",
    "Онлайн-школы",
    "ЕНТ, IELTS, SAT, NUET",
    "Марафоны и программы",
  ];

  const results = [
    { icon: "✅", text: "Больше завершённых уроков" },
    { icon: "🎯", text: "Выше доходимость" },
    { icon: "⚡", text: "Меньше операционных задач" },
    { icon: "📊", text: "Прозрачная аналитика" },
    { icon: "📈", text: "Рост удержания и LTV" },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="text-xl sm:text-2xl font-bold gradient-text">
              1Study
            </Link>
            <a
              href="#form"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/25"
            >
              Подключиться
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-600/20 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-teal-600/20 rounded-full filter blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full filter blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            <span className="text-xl">🚀</span>
            Результат, который виден
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Платформа, на которой
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              студенты действительно
            </span>
            <br />
            проходят курс до конца
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            1study автоматизирует обучение, показывает реальный прогресс каждого ученика и помогает удерживать студентов на всех этапах программы.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400">
              <span className="text-emerald-400 font-medium">Структурное обучение</span>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400">
              <span className="text-teal-400 font-medium">Полный контроль</span>
            </div>
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400">
              <span className="text-cyan-400 font-medium">Минимум ручной работы</span>
            </div>
          </div>

          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition shadow-2xl shadow-emerald-500/25"
          >
            Подключиться к 1study
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Tagline */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl text-gray-300">
            LMS, автоматизация, аналитика и удобное приложение — <span className="text-emerald-400 font-medium">всё в одном месте</span>.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-medium mb-4">Основные возможности</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Всё для результата
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur border border-emerald-500/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center text-2xl">
                    {cap.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{cap.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {cap.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <p className="text-emerald-300/80 font-medium border-t border-emerald-500/10 pt-4">
                  {cap.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-medium mb-4">Для кого подходит</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Идеально для образовательных проектов
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl"
              >
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-medium mb-4">Результаты для владельца курса</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Что вы получаете
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-emerald-500/30 transition group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{result.icon}</div>
                <p className="text-gray-300 text-sm font-medium">{result.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl filter blur-xl" />
            <div className="relative bg-gray-900 border border-emerald-500/20 rounded-3xl p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Запуск за 1 час
              </h2>
              <p className="text-xl text-gray-400 mb-2">
                Платформа готова к работе сразу.
              </p>
              <p className="text-gray-500">
                Настройка занимает минимальное время.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="form" className="py-24 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Подключиться к 1study
            </h2>
            <p className="text-xl text-gray-400">
              Начните с платформы, которая приносит результат
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur border border-emerald-500/20 rounded-3xl p-8">
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Например, Айгерим"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 777 123 45 67"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Отправка..." : "Подключиться к 1study"}
            </button>

            <p className="text-center text-gray-500 text-xs mt-4">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy" className="text-emerald-400 hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="text-xl font-bold gradient-text">
            1Study
          </Link>
          <p className="text-gray-500 text-sm mt-2">
            Платформа, на которой студенты проходят курс до конца
          </p>
        </div>
      </footer>
    </div>
  );
}

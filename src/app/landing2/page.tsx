"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Landing2() {
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
        const message = `🎓 Новая заявка с Landing 2 (Курс до конца)!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n\n🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`;

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

      router.push("/thank-you2");
    } catch {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const mainFeatures = [
    {
      title: "LMS-система",
      items: ["Видео-уроки", "Домашние задания", "Тесты", "Модули и уровни"],
      desc: "Удобная навигация и чёткая структура курса.",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Автоматизация",
      items: ["Выдача уроков", "Напоминания", "Дедлайны", "Отчёты о выполнении"],
      desc: "Учебный процесс работает автоматически.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Аналитика",
      items: ["Прогресс в процентах", "Пройденные уроки", "Точка остановки", "Дни без активности"],
      desc: "Вы всегда видите, кто движется, а кто выпадает.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Мобильное приложение",
      items: ["Полный курс в телефоне", "Быстрый доступ", "Стабильная работа", "Просмотр прогресса"],
      desc: "Ученики учатся регулярно, где им удобно.",
      gradient: "from-rose-500 to-orange-500",
    },
  ];

  const targetAudience = [
    "ЕНТ",
    "IELTS",
    "SAT",
    "NUET",
    "Марафоны",
    "Мини-курсы",
  ];

  const benefits = [
    { icon: "📋", text: "Понятная структура" },
    { icon: "🎯", text: "Высокая доходимость" },
    { icon: "📊", text: "Прозрачная аналитика" },
    { icon: "⚡", text: "Меньше ручной работы" },
    { icon: "🏆", text: "Больше завершённых программ" },
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
              className="gradient-bg text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition shadow-lg shadow-indigo-500/25"
            >
              Подключиться
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-purple-600/30 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-pink-600/20 rounded-full filter blur-[120px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            <span className="text-xl">🎓</span>
            Образовательная платформа
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            1study — платформа, которая
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              помогает вашим ученикам
            </span>
            <br />
            проходить курс до конца
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Структурное обучение, автоматизация, аналитика по каждому студенту и удобное мобильное приложение.
          </p>

          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition shadow-2xl shadow-purple-500/25"
          >
            Подключиться к 1study
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-medium mb-4">Основные функции</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Всё для эффективного обучения
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-all hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-400 font-medium mb-4">Для кого</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Онлайн-школы, авторские курсы, программы подготовки
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {targetAudience.map((item, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl"
              >
                <span className="text-xl font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-medium mb-4">Преимущества</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Что вы получаете
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 rounded-2xl hover:border-purple-500/30 transition"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <p className="text-white font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12 text-center">
            <div className="text-5xl mb-6">⚡</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Старт работы
            </h2>
            <p className="text-xl text-gray-400 mb-2">
              Готово к использованию за 1 час.
            </p>
            <p className="text-gray-500">
              Все функции доступны сразу.
            </p>
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
              Оставьте заявку и мы поможем начать
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 backdrop-blur border border-purple-500/20 rounded-3xl p-8">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Отправка..." : "Подключиться к 1study"}
            </button>

            <p className="text-center text-gray-500 text-xs mt-4">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy" className="text-purple-400 hover:underline">
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
            Платформа, которая помогает проходить курс до конца
          </p>
        </div>
      </footer>
    </div>
  );
}

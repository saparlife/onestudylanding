"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Landing1() {
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
        const message = `🎓 Новая заявка с Landing 1 (Системное обучение)!\n\n👤 Имя: ${name}\n📱 Телефон: ${phone}\n\n🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`;

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

      router.push("/thank-you");
    } catch {
      setError("Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: "📹",
      title: "Видео-уроки",
      desc: "Качественный видеоконтент с защитой от записи",
    },
    {
      icon: "📝",
      title: "Домашние задания",
      desc: "Проверка знаний и закрепление материала",
    },
    {
      icon: "✅",
      title: "Тесты",
      desc: "Автоматическая проверка результатов",
    },
    {
      icon: "📊",
      title: "Модули и уровни",
      desc: "Структурированная программа обучения",
    },
  ];

  const automation = [
    { icon: "⏰", text: "Выдача уроков по расписанию" },
    { icon: "🔔", text: "Напоминания о дедлайнах" },
    { icon: "📈", text: "Автоматические отчёты" },
    { icon: "✓", text: "Контроль выполнения" },
  ];

  const analytics = [
    "Процент прохождения курса",
    "Какие уроки выполнены",
    "На каком этапе студент остановился",
    "Количество дней без активности",
  ];

  const targetAudience = [
    "Онлайн-школы",
    "Авторы курсов",
    "ЕНТ подготовка",
    "IELTS курсы",
    "SAT программы",
    "NUET обучение",
    "Марафоны",
    "Мини-курсы",
  ];

  const benefits = [
    { icon: "📈", text: "Стабильный прогресс учеников" },
    { icon: "⚡", text: "Меньше операционной нагрузки" },
    { icon: "📊", text: "Прозрачная аналитика" },
    { icon: "🎯", text: "Выше доходимость" },
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
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full filter blur-[120px]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Платформа для образования
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            1study — платформа для
            <br />
            <span className="gradient-text">системного обучения</span>
            <br />
            и контроля прогресса
          </h1>

          <p className="text-xl sm:text-2xl text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
            Платформа помогает ученикам проходить курс последовательно, а вам — видеть результаты каждого студента в режиме реального времени.
          </p>

          <a
            href="#form"
            className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition shadow-2xl shadow-indigo-500/25"
          >
            Подключиться к 1study
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* LMS Features */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-indigo-400 font-medium mb-4">Функциональные возможности</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
              Удобная LMS-система
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Материалы структурированы. Студент понимает, что и когда проходить.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-400 font-medium mb-4">Автоматизация</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Автоматизация обучения
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Учебный процесс работает без ручного контроля.
              </p>
              <div className="space-y-4">
                {automation.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl filter blur-xl" />
              <div className="relative bg-gray-900 border border-white/10 rounded-3xl p-8">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-white/10 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-white/5 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8">
                <h4 className="text-white font-semibold mb-6">Вы видите:</h4>
                <div className="space-y-4">
                  {analytics.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-indigo-400 font-medium mb-4">Аналитика</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Аналитика по каждому ученику
              </h2>
              <p className="text-xl text-gray-400">
                Позволяет вовремя реагировать и повышать доходимость.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retention */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-12">
            <div className="text-5xl mb-6">🎯</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Удержание студентов
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Пошаговая структура + прозрачный прогресс → ученики меньше пропадают и чаще завершают программу.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-indigo-400 font-medium mb-4">Мобильное приложение</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Удобное мобильное приложение
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Ученики проходят уроки в приложении. Повышает мобильную активность и регулярность прохождения уроков.
              </p>
              <div className="space-y-4">
                {[
                  "Быстрый доступ ко всем материалам",
                  "Стабильная работа",
                  "Удобный просмотр прогресса",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full filter blur-[100px]" />
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[40px] border-4 border-gray-700 shadow-2xl">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-800 rounded-full" />
                <div className="absolute inset-4 top-12 bg-gray-800 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">1S</span>
                    </div>
                    <p className="text-gray-400 text-sm">1Study App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-indigo-400 font-medium mb-4">Для кого подходит</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Онлайн-школы и авторы курсов
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {targetAudience.map((item, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:border-indigo-500/50 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Что получает владелец курса
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-indigo-500/50 transition"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <p className="text-gray-300 text-sm">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="form" className="py-24 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-medium mb-4">Подключение</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Платформа готова к работе сразу
            </h2>
            <p className="text-xl text-gray-400">
              Настройка занимает до 1 часа
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8">
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
                />
              </div>
            </div>

            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl gradient-bg text-white font-semibold text-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Отправка..." : "Подключиться к 1study"}
            </button>

            <p className="text-center text-gray-500 text-xs mt-4">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy" className="text-indigo-400 hover:underline">
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
            Платформа для системного обучения и контроля прогресса
          </p>
        </div>
      </footer>
    </div>
  );
}

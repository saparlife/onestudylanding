export function Problems() {
  const problems = [
    {
      icon: "🏴‍☠️",
      problem: "Курсы сливают в Telegram",
      description: "Ученики записывают экран и продают ваш контент за копейки",
      color: "from-red-500 to-orange-500",
      bg: "bg-red-50",
    },
    {
      icon: "📧",
      problem: "Email попадает в спам",
      description: "Ученики не видят приглашение и не могут начать обучение",
      color: "from-amber-500 to-yellow-500",
      bg: "bg-amber-50",
    },
    {
      icon: "📱",
      problem: "Нет мобильного приложения",
      description: "Ученикам неудобно учиться с телефона через браузер",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: "🌐",
      problem: "Нет казахского языка",
      description: "Платформы только на русском, а вам нужен қазақша",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-100 rounded-full filter blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-100 rounded-full filter blur-3xl opacity-50" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-red-600 font-semibold mb-4">Проблемы</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Знакомые{" "}
            <span className="text-red-600">проблемы?</span>
          </h2>
          <p className="text-xl text-gray-600">
            Другие платформы не решают главные боли онлайн-школ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className={`group ${item.bg} p-6 rounded-3xl border border-transparent hover:border-red-200 transition-all hover-lift cursor-default`}
            >
              <div className="flex gap-5">
                <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="text-2xl">✨</span>
            <p className="text-xl font-bold gradient-text">
              1Study решает все эти проблемы
            </p>
            <svg className="w-6 h-6 text-indigo-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Problems() {
  const problems = [
    {
      icon: "🏴‍☠️",
      problem: "Курсы сливают в Telegram",
      description: "Ученики записывают экран и продают ваш контент за копейки",
    },
    {
      icon: "📧",
      problem: "Email попадает в спам",
      description: "Ученики не видят приглашение и не могут начать обучение",
    },
    {
      icon: "📱",
      problem: "Нет мобильного приложения",
      description: "Ученикам неудобно учиться с телефона через браузер",
    },
    {
      icon: "🌐",
      problem: "Нет казахского языка",
      description: "Платформы только на русском, а вам нужен қазақша",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-400 font-medium mb-4">Проблемы</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Знакомые проблемы?
          </h2>
          <p className="text-xl text-gray-400">
            Другие платформы не решают главные боли онлайн-школ
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((item, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex gap-5">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.problem}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-full">
            <span className="text-2xl">✨</span>
            <p className="text-lg font-semibold text-white">
              1Study решает все эти проблемы
            </p>
            <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
